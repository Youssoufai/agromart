// pages/api/joinWaitlist.ts
import { NextApiRequest, NextApiResponse } from 'next';
import client from '@/db'; // Adjust the import path if necessary
import { revalidatePath } from 'next/cache';

interface ListData {
    name: string;
    email: string;
    phone: string;
    category: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, phone, category }: ListData = req.body;

        // Validate input
        if (!name || !email || !phone || !category) {
            return res.status(400).json({ message: "All fields are required." });
        }

        try {
            if (!client) {
                throw new Error('MongoDB client is not initialized'); // Ensure the client is connected
            }

            const db = client.db('waitlist');
            const list = await db.collection('list').insertOne({ name, email, phone, category });
            console.log("Inserted document:", list);

            revalidatePath('/'); // Revalidate the path if necessary
            return res.status(201).json({ message: "Successfully joined the waitlist!" });
        } catch (error) {
            console.error("Error inserting data into MongoDB:", error);
            return res.status(500).json({ message: "Failed to join the waitlist. Please try again." });
        }
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}