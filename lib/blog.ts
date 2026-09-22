import { Query } from 'node-appwrite';
import { createAdminClient, DATABASE_ID, COLLECTION_ID, BlogPost } from './appwrite';

// 1. Reading Time Calculation
export function calculateReadingTime(content: string = ''): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / wordsPerMinute) || 1;
  return `${minutes} min read`;
}

// 2. Get All Posts (Listing Page ke liye)
export async function getAllPosts(): Promise<BlogPost[]> {
  const { databases } = createAdminClient();
  try {
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.orderDesc('publishedAt'),
    ]);
    return response.documents as unknown as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// 3. Get Single Post (Dynamic [slug] Page ke liye)
export async function getPostBySlug(slug: string) {
  try {
    const { databases } = createAdminClient();
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      [Query.equal('slug', slug)]
    );

    if (response.documents.length === 0) return null;

    const doc = response.documents[0];

    return {
      $id: doc.$id,
      title: doc.title,
      slug: doc.slug,
      content: doc.content || doc.Content || doc.body || '',
      coverImage: doc.coverImage || '',
      category: doc.category || 'General',
      author: doc.author || 'ClawSteps Admin',
      publishedAt: doc.publishedAt || doc.$createdAt,
      excerpt: doc.excerpt || '',
    };
  } catch (error) {
    console.error("Appwrite fetch error:", error);
    return null;
  }
}