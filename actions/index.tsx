'use server';
import client from "@/db";
import { revalidatePath } from "next/cache";
interface ListData {
    // Define the properties of the data object
    name: string;
    email: string;
    phone: string;
    category: string;
}
if (!client) {
    throw new Error("MongoDB client is not initialized.");
}

const db = client.db('waitlist');

export async function createList(data: ListData) { // Specify the type for data
    try {
        const list = await db.collection('list').insertOne(data); // Ensure to await the insertOne operation
        console.log(list)
        revalidatePath('/');
    } catch (error) {
        console.error(error);
    }
}