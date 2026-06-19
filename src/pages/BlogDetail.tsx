import { useParams, Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { allBlogPosts, getPostBySlug } from "../lib/blog";

function formatDate(dateString: string) {
  if (!dateString) return "";
  const d = new Date(dateString);
  if (Number.isNaN(d.getTime())) return dateString;
  return d.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="pt-24 min-h-screen bg-[#F7F7F5] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy mb-4">Blog Yazısı Bulunamadı</h1>
          <Link
            to="/blog"
            className="inline-block text-coral font-medium hover:text-navy transition-colors duration-200"
          >
            Blog Sayfasına Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F7F5]">
      {/* Hero */}
      <div className="relative w-full h-[42vh] min-h-[320px] max-h-[520px] overflow-hidden">
        {post.image ? (
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-navy via-navy/90 to-coral/40 flex items-center justify-center">
            <svg className="w-24 h-24 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-white/80 hover:text-white text-sm font-medium mb-6 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Geri Dön
            </button>

            <span className="inline-flex items-center px-3 py-1 rounded-full bg-coral text-white text-xs font-bold uppercase tracking-wide mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 max-w-3xl">
              {post.title}
            </h1>

            <div className="flex items-center gap-2 text-white/70 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {formatDate(post.date)}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative">
        <article className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="prose prose-lg max-w-none text-navy-muted leading-relaxed prose-headings:text-navy prose-headings:font-bold prose-a:text-coral prose-strong:text-navy">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-navy/10">
            <h3 className="text-lg font-semibold text-navy mb-4">Bu Yazıyı Paylaş</h3>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-navy text-white text-sm font-medium rounded-lg hover:bg-navy/90 transition-colors duration-200">
                Facebook
              </button>
              <button className="px-4 py-2 bg-coral text-white text-sm font-medium rounded-lg hover:bg-coral/90 transition-colors duration-200">
                Twitter
              </button>
              <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors duration-200">
                WhatsApp
              </button>
            </div>
          </div>

          <div className="mt-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-coral font-medium hover:text-navy transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Tüm Blog Yazılarını Gör
            </Link>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-12 mb-16">
          <h2 className="text-2xl font-bold text-navy mb-6">Diğer Blog Yazıları</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allBlogPosts
              .filter((p) => p.slug !== slug)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-navy/5">
                    {relatedPost.image ? (
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-navy/10 to-coral/10" />
                    )}
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-coral font-bold uppercase tracking-wide mb-2">
                      {relatedPost.category}
                    </div>
                    <h3 className="text-base font-semibold text-navy mb-1.5 line-clamp-2 group-hover:text-coral transition-colors duration-300">
                      {relatedPost.title}
                    </h3>
                    <p className="text-navy-muted text-sm line-clamp-2">{relatedPost.description}</p>
                  </div>
                </Link>
              ))}
            <Link
              to="/blog"
              className="bg-navy rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center"
            >
              <div className="text-sm text-coral font-medium mb-2">Tüm Yazılar</div>
              <h3 className="text-lg font-semibold text-white mb-2">Blog Sayfasına Git</h3>
              <p className="text-white/60 text-sm">
                Daha fazla bilgi ve uzman tavsiyeleri için blog sayfamızı ziyaret edin.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}