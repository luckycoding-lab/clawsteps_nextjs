import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, calculateReadingTime } from '@/lib/blog';

export const revalidate = 60;

export const metadata = {
  title: 'Pet Care & Dog Walking Blog | ClawSteps',
  description: 'Expert tips on dog health, training, and walking routines in Delhi NCR.',
};

export default async function BlogListingPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-neutral-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-14">
          <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">
            ClawSteps Insights
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-2 tracking-tight">
            Dog Care & Walking Tips
          </h1>
          <p className="text-neutral-400 mt-3 max-w-xl mx-auto">
            Practical advice by professional walkers for pet parents in Delhi NCR.
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="text-center py-20 border border-neutral-800 rounded-2xl bg-neutral-900/40">
            <p className="text-neutral-400 text-lg">No blog posts found yet.</p>
            <span className="text-xs text-neutral-500 mt-1 block">
              Appwrite dashboard se first post publish karein!
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const readingTime = calculateReadingTime(post.content);
              return (
                <article
                  key={post.$id}
                  className="bg-neutral-900/70 border border-neutral-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition duration-300 flex flex-col group"
                >
                  <div className="relative h-48 w-full bg-neutral-800 overflow-hidden">
                    {post.coverImage ? (
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 768px, 800px"
                        className="object-cover group-hover:scale-105 transition duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-neutral-600 text-sm">
                        No Image
                      </div>
                    )}
                    <span className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md text-amber-400 text-xs px-2.5 py-1 rounded-full font-medium border border-neutral-700">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center text-xs text-neutral-400 space-x-2 mb-2">
                        <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        <span>•</span>
                        <span>{readingTime}</span>
                      </div>
                      <h2 className="text-xl font-bold line-clamp-2 text-neutral-100 group-hover:text-amber-400 transition">
                        {post.title}
                      </h2>
                      <p className="text-neutral-400 text-sm mt-2 line-clamp-3">
                        {post.excerpt || post.content.substring(0, 110) + '...'}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
                      <span className="text-xs text-neutral-500 font-medium">By {post.author}</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-amber-400 text-sm font-semibold hover:text-amber-300"
                      >
                        Read Article →
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}