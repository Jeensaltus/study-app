/** Minimal health check — confirms Vercel serverless functions are deployed. */
export default function handler(_req, res) {
  if (typeof res.status === "function") {
    res.status(200).json({ ok: true, service: "freshman-study-app", ts: Date.now() });
    return;
  }
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ ok: true, service: "freshman-study-app", ts: Date.now() }));
}
