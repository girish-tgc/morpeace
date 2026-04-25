import { Link } from 'react-router-dom'
import SeoHead from '../components/SeoHead'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-8">
      <SeoHead
        title="Not Found — Morpeace"
        description="This path through the forest doesn't exist yet."
        path="/404"
        noIndex
      />
      <div className="text-center max-w-md">
        <p className="font-display text-4xl md:text-6xl text-teal-deep/30 mb-6">404</p>
        <h1 className="font-display text-2xl text-text-deep mb-4">
          The trail ends here
        </h1>
        <p className="font-body text-lg text-text-deep/60 italic mb-8">
          This path through the forest doesn't exist yet.
        </p>
        <Link
          to="/"
          className="inline-block font-display text-sm tracking-wider uppercase px-6 md:px-8 py-3.5 min-h-[44px] rounded-full border border-teal-deep/30 text-teal-deep hover:bg-teal-deep/10 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
