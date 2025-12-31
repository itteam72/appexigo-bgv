import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("appexigo_bgv");

    const collections = await db.listCollections().toArray();

    res.status(200).json({
      success: true,
      collections: collections.map(c => c.name)
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
