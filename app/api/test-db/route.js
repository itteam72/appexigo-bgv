import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("appexigo_bgv");

  const cols = await db.listCollections().toArray();

  return Response.json({
    connected: true,
    collections: cols.map(c => c.name)
  });
}
