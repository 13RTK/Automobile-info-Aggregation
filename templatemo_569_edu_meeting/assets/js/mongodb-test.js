const { MongoClient } = require("mongodb");
let uri = "mongodb+srv://alex:EF6m4Et.TBw35Hm@cluster01.jhinfus.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
    try {
        await client.connect();
        const database = client.db("blog");
        const ratings = database.collection("posts");
        const cursor = ratings.find({ "category": 'News' });

        await cursor.forEach(doc => console.log(doc));
    } finally {
        await client.close();
    }
}
run().catch(console.dir);