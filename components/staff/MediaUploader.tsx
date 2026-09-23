"use client";
import { FormEvent, useState } from "react";
export default function MediaUploader() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  async function upload(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true); setMessage("");
    try {
      const response = await fetch("/api/staff/media", { method: "POST", body: new FormData(event.currentTarget) });
      if (!response.ok) throw new Error(await response.text());
      const { fileId } = await response.json();
      const cover = document.querySelector<HTMLInputElement>('input[name="coverFileId"]');
      if (cover) cover.value = fileId;
      setMessage(`Image uploaded and selected. File ID: ${fileId}`);
    } catch (error) { setMessage(error instanceof Error ? error.message : "Upload failed"); }
    finally { setLoading(false); }
  }
  return <form onSubmit={upload} className="mt-4 space-y-3"><input type="file" name="image" accept="image/jpeg,image/png,image/webp" required className="w-full text-sm" /><button disabled={loading} className="rounded-lg bg-slate-800 px-4 py-2 text-white disabled:opacity-50">{loading ? "Uploading…" : "Upload image"}</button><p role="status" className="break-all text-sm text-slate-600">{message}</p></form>;
}
