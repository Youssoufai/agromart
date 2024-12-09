/* import { MongoClient } from "mongodb";

let client: MongoClient | null = null;

try {
    if (!process.env.MONGODB_URI) {
        throw new Error("MongoDB URI is required")
    }
    client = new MongoClient(process.env.MONGODB_URI);
    client.connect();
} catch (error) {
    console.log(error);
}
export default client; */