import { NextRequest, NextResponse } from "next/server";
import { ID, Permission, Role } from "node-appwrite";
import { InputFile } from "node-appwrite/file";
import { currentUser } from "@/lib/portal";
import { adminStorage, allowed, audit } from "@/lib/staff";

export async function POST(request: NextRequest) {
  const identity = await currentUser();
  if (!identity) return new NextResponse("Unauthorized", { status: 401 });
  if (!allowed(identity.user.labels || [], "content")) return new NextResponse("Forbidden", { status: 403 });
  const form = await request.formData();
  const file = form.get("image");
  if (!(file instanceof File) || file.size < 1 || file.size > 5_000_000 || !["image/jpeg","image/png","image/webp"].includes(file.type)) return new NextResponse("Use a JPG, PNG or WebP under 5 MB", { status: 400 });
  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const jpeg = buffer.subarray(0,3).equals(Buffer.from([0xff,0xd8,0xff]));
    const png = buffer.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]));
    const webp = buffer.toString("ascii",0,4) === "RIFF" && buffer.toString("ascii",8,12) === "WEBP";
    if (!(file.type === "image/jpeg" && jpeg || file.type === "image/png" && png || file.type === "image/webp" && webp)) return new NextResponse("Image content does not match its type", { status: 400 });
    const id = ID.unique();
    const extension = file.type === "image/jpeg" ? "jpg" : file.type === "image/png" ? "png" : "webp";
    await adminStorage().createFile({ bucketId: "site_media", fileId: id, file: InputFile.fromBuffer(buffer, `${id}.${extension}`), permissions: [Permission.read(Role.any())] });
    await audit(identity.user, "media.uploaded", id, file.name.slice(0,100));
    return NextResponse.json({ fileId: id });
  } catch { return new NextResponse("Upload failed. Check Appwrite Storage configuration.", { status: 500 }); }
}
