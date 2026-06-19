export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
  content: string;
}

/**
 * KÖK SEBEP: '@/content/blog/*.md' alias'lı glob path'i Vite'da ÇALIŞMAZ.
 * import.meta.glob path'i derleme zamanında statik olarak parse eder;
 * '@' alias'ı bu aşamada henüz çözümlenmemiştir ve Vite glob path'inin
 * '/' veya './' ile başlamasını şart koşar. Sonuç: sessizce boş obje.
 *
 * ÇÖZÜM: relative path kullan. Bu dosya src/lib/blog.ts içinde olduğu
 * için '../content/blog/*.md' => src/content/blog/*.md demektir.
 * Relative path, base/root ayarından etkilenmez ve alias çözümlemesine
 * bağımlı değildir.
 */
const modules = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(rawContent: string): { data: Record<string, string>; content: string } {
  const matches = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  const frontmatterRaw = matches ? matches[1] : "";
  const content = matches ? matches[2] : rawContent;

  const data: Record<string, string> = {};
  frontmatterRaw.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":");
    if (key && valueParts.length) {
      data[key.trim()] = valueParts.join(":").trim().replace(/^"|"$/g, "");
    }
  });

  return { data, content };
}

function buildPosts(): BlogPost[] {
  return Object.entries(modules).map(([path, rawContent]) => {
    const { data, content } = parseFrontmatter(rawContent);
    const slug = path.split("/").pop()?.replace(/\.md$/, "") ?? "";

    return {
      slug,
      title: data.title || "Başlıksız Yazı",
      description: data.description || "",
      date: data.date || "",
      image: data.image || "",
      category: data.category || "Genel",
      content,
    };
  });
}

// eager:true sayesinde modüller derleme anında hazır; tek seferlik hesaplama.
export const allBlogPosts: BlogPost[] = buildPosts().sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getPostBySlug(slug: string | undefined): BlogPost | undefined {
  if (!slug) return undefined;
  return allBlogPosts.find((p) => p.slug === slug);
}