export function sameOrigin(request: Request) {
  const origin = request.headers.get('origin');
  const host = new URL(request.url).host;
  if (!origin || !host) return false;
  try { return new URL(origin).host === host; } catch { return false; }
}
export function errorMessage(message: string, status: number) {
  return Response.json({ message }, { status, headers: { 'Cache-Control': 'no-store' } });
}
