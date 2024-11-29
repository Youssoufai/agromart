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

export const createList = async (data: ListData) => {
    const response = await fetch('/api/joinWaitlist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to join the waitlist');
    }

    return await response.json();
};
