import { Helmet } from 'react-helmet-async';
import { SITE, canonicalUrl } from '../config/site';

interface SeoMetaProps {
  title: string;
  description: string;
  path?: string;
}

export default function SeoMeta({ title, description, path = '/' }: SeoMetaProps) {
  const url = canonicalUrl(path);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
