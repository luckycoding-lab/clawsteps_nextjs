'use server';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { ID } from 'node-appwrite';
import { createAdminClient, DATABASE_ID, COLLECTION_ID } from '@/lib/appwrite';
import { revalidatePath } from 'next/cache';

export interface NewBlogPayload {
  title: string;
  slug: string;
  category: string;
  author?: string;
  coverImage?: string;
  excerpt?: string;
  content: string;
}

export async function createBlogPost(payload: NewBlogPayload) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || session.user.email !== process.env.ADMIN_EMAIL) {
    return { success: false, message: 'Unauthorized: Sirf ClawSteps Admin hi blog upload kar sakta hai.' };
  }

  if (!payload.title || !payload.slug || !payload.content) {
    return { success: false, message: 'Title, Slug aur Content compulsory hain.' };
  }

  const { databases } = createAdminClient();

  try {
    const slugClean = payload.slug.toLowerCase().trim().replace(/[^a-z0-9-]/g, '-');

    await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      {
        title: payload.title.trim(),
        slug: slugClean,
        category: payload.category.trim() || 'General',
        author: payload.author?.trim() || session.user.name || 'ClawSteps Admin',
        coverImage: payload.coverImage?.trim() || '',
        excerpt: payload.excerpt?.trim() || payload.content.substring(0, 150),
        content: payload.content.trim(),
        publishedAt: new Date().toISOString(),
      }
    );

    revalidatePath('/blog');
    revalidatePath(`/blog/${slugClean}`);

    return { success: true, slug: slugClean };
  } catch (error: unknown) {
    console.error('Appwrite create post error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Database error',
    };
  }
}