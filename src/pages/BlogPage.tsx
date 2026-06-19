import { Link } from "react-router-dom";
import { allBlogPosts } from "../lib/blog";

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
}

function PostImage({ src, alt, category }: { src?: string; alt: string; category: string }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
    );
  }
  return (
    <div className="w-full h-full bg-gradient-to-br from-navy via-navy/90 to-coral/40 flex items-center justify-center">
      <svg className="w-14 h-14 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
        />
      </svg>
      <span className="sr-only">{category}</span>
    </div>
  );
}

export default function BlogPage() {
  const posts = allBlogPosts;
  const [featured, ...rest] = posts;

  return (
    <div className="pt-24 min-h-screen bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-14 max-w-2xl">
          <span className="text-coral font-semibold text-sm uppercase tracking-widest">
            Uzman Rehberi
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-navy tracking-tight">
            Blog
          </h1>
          <p className="mt-4 text-lg text-navy-muted leading-relaxed">
            Cam balkon, sineklik, doğrama ve daha fazlası hakkında uzman tavsiyeleri ve bilgiler.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center text-navy-muted py-24 border-2 border-dashed border-navy/10 rounded-2xl">
            Henüz yayınlanmış bir blog yazısı yok.
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featured && (
              <Link
                to={`/blog/${featured.slug}`}
                className="group relative grid md:grid-cols-2 gap-0 mb-12 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[420px] overflow-hidden">
                  <PostImage src={featured.image} alt={featured.title} category={featured.category} />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/0 to-navy/0 md:bg-gradient-to-r" />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-coral/10 text-coral text-xs font-bold uppercase tracking-wide">
                      {featured.category}
                    </span>
                    <span className="text-xs text-navy-muted font-medium">
                      {formatDate(featured.date)}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight mb-4 group-hover:text-coral transition-colors duration-300">
                    {featured.title}
                  </h2>
                  <p className="text-navy-muted text-base leading-relaxed mb-6 line-clamp-3">
                    {featured.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-coral font-semibold">
                    Yazıyı Oku
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            )}

            {/* Grid of remaining posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group relative flex flex-col rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1.5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <PostImage src={post.image} alt={post.title} category={post.category} />
                    <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-navy text-xs font-bold uppercase tracking-wide shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <time className="text-xs text-coral font-semibold tracking-wide mb-2">
                      {formatDate(post.date)}
                    </time>

                    <h2 className="text-lg font-bold text-navy leading-snug mb-2 line-clamp-2 group-hover:text-coral transition-colors duration-300">
                      {post.title}
                    </h2>

                    <p className="text-sm text-navy-muted leading-relaxed mb-4 line-clamp-2 flex-1">
                      {post.description}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-coral transition-colors duration-300">
                      Devamını Oku
                      <svg
                        className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}