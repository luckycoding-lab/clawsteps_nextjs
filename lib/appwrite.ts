import { Client, Databases, Storage } from 'node-appwrite';

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!;
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!;
const apiKey = process.env.APPWRITE_API_KEY!;

export const DATABASE_ID = process.env.APPWRITE_DATABASE_ID!;
export const COLLECTION_ID = process.env.APPWRITE_COLLECTION_ID!;
export const BUCKET_ID = process.env.APPWRITE_STORAGE_BUCKET_ID!;

export function createAdminClient() {
  const client = new Client()
    .setEndpoint(endpoint)
    .setProject(projectId)
    .setKey(apiKey);

  return {
    get databases() {
      return new Databases(client);
    },
    get storage() {
      return new Storage(client);
    },
  };
}

export interface BlogPost {
  $id: string;
  title: string;
  slug: string;
  content: string;
  coverImage: string;
  category: string;
  author: string;
  publishedAt: string;
  excerpt?: string;
}