import { NextRequest } from "next/server";
import { DELETE } from "../session/route";
export async function POST(request: NextRequest) { return DELETE(request); }
