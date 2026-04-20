import { Helmet } from 'react-helmet-async'
import { DEFAULT_OG_IMAGE, SITE_URL, absUrl } from '../lib/seo/site'

interface SeoHeadProps {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article' | 'profile'
  noIndex?: boolean
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>
}

export default function SeoHead({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noIndex = false,
  jsonLd,
}: SeoHeadProps) {
  const url = absUrl(path)
  const ogImage = image.startsWith('http') ? image : absUrl(image)
  const schemas = !jsonLd ? [] : Array.isArray(jsonLd) ? jsonLd : [jsonLd]

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:site_name" content="Morpeace" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}

      <meta name="author" content="Morpeace Consulting LLP" />
      <meta name="theme-color" content="#012E43" />
      <link rel="alternate" hrefLang="en-IN" href={url} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${path === '/' ? '' : path}`} />
    </Helmet>
  )
}
