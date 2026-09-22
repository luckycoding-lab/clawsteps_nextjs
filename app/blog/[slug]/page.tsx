import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, calculateReadingTime } from "@/lib/blog";
import BlogReader from "@/components/BlogReader";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const readingTime = calculateReadingTime(post.content);

  return (
    <main className="min-h-screen bg-neutral-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-xs font-semibold text-neutral-400 hover:text-amber-400 mb-8 transition"
        >
          ← Back to all posts
        </Link>

        <div className="flex items-center space-x-2 text-xs text-amber-400 font-medium uppercase tracking-wider mb-3">
          <span>{post.category}</span>
          <span>•</span>
          <span className="text-neutral-400">{readingTime}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-100 leading-tight">
          {post.title}
        </h1>

        {post.coverImage && (
          <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden my-8 border border-neutral-800">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 768px, 800px"
              className="object-cover"
            />
          </div>
        )}

        {/* Client reader gets the fetched content directly */}
        <BlogReader content={post.content} />
      </article>
    </main>
  );
}