import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";

export default async function FeaturedBlogs() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 3);

  if (recentPosts.length === 0) return null;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-900">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-100">
            Read Our Latest Articles
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Tips on dog health, training, and routine walks.
          </p>
        </div>
        <Link
          href="/blog"
          className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentPosts.map((post) => (
          <Link
            key={post.$id}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden hover:border-neutral-700 transition flex flex-col"
          >
            {post.coverImage && (
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            )}
            <div className="p-5 flex flex-col flex-1">
              <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider mb-2">
                {post.category}
              </span>
              <h3 className="font-bold text-neutral-100 group-hover:text-amber-400 transition line-clamp-2 mb-2">
                {post.title}
              </h3>
              <p className="text-xs text-neutral-400 line-clamp-3 mb-4 flex-1">
                {post.excerpt || post.content}
              </p>
              <span className="text-xs font-semibold text-amber-500">Read Article →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}