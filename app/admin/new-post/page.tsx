"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { createBlogPost } from "@/app/actions/blogActions";
import { signOut } from "next-auth/react";
export default function NewPostPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    title: "",
    slug: "",
    category: "Dog Care",
    coverImage: "",
    excerpt: "",
    content: "",
  });

  // Auto-generate slug from Title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    const autoSlug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    setForm((prev) => ({ ...prev, title, slug: autoSlug }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const res = await createBlogPost({
      title: form.title,
      slug: form.slug,
      category: form.category,
      coverImage: form.coverImage,
      excerpt: form.excerpt,
      content: form.content,
      author: session?.user?.name || "ClawSteps Admin",
    });

    setLoading(false);

    if (res.success) {
      alert("Blog Post Published Successfully!");
      router.push(`/blog/${res.slug}`);
    } else {
      setErrorMsg(res.message || "Post upload failed");
    }
  };

  if (status === "loading") {
    return (
      <main className="min-h-screen bg-neutral-950 flex items-center justify-center text-amber-400">
        Checking admin authentication...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-2xl">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-5 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-amber-400">
              Publish New Blog
            </h1>
            <p className="text-xs text-neutral-400 mt-1">
              Logged in as:{" "}
              <span className="text-neutral-200 font-semibold">
                {session?.user?.email}
              </span>
            </p>
          </div>
          <div>
            <button
            aria-label="Toogle Signout"
            onClick={() => signOut({ callbackUrl: "/blog" })}
            className="mx-2 text-xs text-red-400 border border-red-500/30 hover:bg-red-500/10 px-3 py-1.5 rounded-lg transition"
          >
            Logout Admin
          </button>
          <Link
            href="/blog"
            className="text-xs text-neutral-400 hover:text-white border border-neutral-700 px-3 py-1.5 rounded-lg transition"
          >
            ← Back to Blog
          </Link>
          </div>
        </div>

        {errorMsg && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded-xl mb-6 text-sm">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 text-sm">
          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
              Article Title
            </label>
            <input
              type="text"
              required
              placeholder="e.g., 5 Safety Rules for Walking Dogs in Hot Weather"
              value={form.title}
              onChange={handleTitleChange}
              className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3.5 py-2.5 text-white focus:border-amber-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
              URL Slug (Auto-generated)
            </label>
            <input
              type="text"
              required
              placeholder="e.g., 5-safety-rules-walking-dogs-hot-weather"
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
              className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3.5 py-2.5 text-neutral-400 focus:border-amber-500 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                Category
              </label>
              <input
                type="text"
                required
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3.5 py-2.5 text-white focus:border-amber-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                Cover Image URL
              </label>
              <input
                type="url"
                placeholder="https://images.unsplash.com/photo-..."
                value={form.coverImage}
                onChange={(e) =>
                  setForm({ ...form, coverImage: e.target.value })
                }
                className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3.5 py-2.5 text-white focus:border-amber-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
              Excerpt (SEO Description)
            </label>
            <textarea
              rows={2}
              placeholder="Short 1-2 sentence preview for search engines and social cards..."
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3.5 py-2.5 text-white focus:border-amber-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
              Article Content
            </label>
            <textarea
              rows={10}
              required
              placeholder="Write the full body of the article here..."
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3.5 py-2.5 text-white focus:border-amber-500 outline-none font-mono text-xs leading-relaxed"
            />
          </div>

          <button
          aria-label="Toogle Submit for New Blog"
            type="submit"
            disabled={loading}
            className="w-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold py-3 rounded-lg transition disabled:opacity-50"
          >
            {loading ? "Publishing to Appwrite..." : "Publish Article"}
          </button>
        </form>
      </div>
    </main>
  );
}
