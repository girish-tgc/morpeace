import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center max-w-md">
        <p className="font-display text-6xl text-teal-deep/30 mb-6">404</p>
        <p className="font-display text-2xl text-text-deep mb-4">
          The trail ends here
        </p>
        <p className="font-body text-lg text-text-deep/60 italic mb-8">
          This path through the forest doesn't exist yet.
        </p>
        <Link
          to="/"
          className="inline-block font-display text-sm tracking-wider uppercase px-8 py-3 rounded-full border border-teal-deep/30 text-teal-deep hover:bg-teal-deep/10 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
