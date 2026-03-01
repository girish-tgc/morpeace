import { useState } from 'react'

interface Props {
  dark?: boolean
}

export default function LetterForm({ dark }: Props) {
  const [letter, setLetter] = useState('')
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    if (letter.trim()) {
      const mailtoLink = `mailto:rstalwalkar@yahoo.com?subject=A letter to Morpeace&body=${encodeURIComponent(letter)}`
      window.open(mailtoLink, '_blank')
      setSent(true)
    }
  }

  if (dark) {
    return (
      <div className="pt-12 border-t border-sky-cream/10">
        <h3 className="font-display text-center text-sm tracking-[0.3em] uppercase mb-10 text-sky-cream/40">
          Write a Letter to Morpeace
        </h3>

        {!sent ? (
          <div
            className="rounded-2xl p-8 md:p-10 backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(12,26,14,0.7)',
              border: '1px solid rgba(107,143,60,0.15)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
          >
            <p className="font-handwritten text-2xl mb-5 text-sky-cream/50">Dear Morpeace,</p>
            <textarea
              value={letter}
              onChange={e => setLetter(e.target.value)}
              placeholder="Share your thoughts, memories, or wishes..."
              className="w-full h-44 bg-transparent font-body text-lg leading-relaxed resize-none focus:outline-none text-sky-cream/80 placeholder:text-sky-cream/20"
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={handleSend}
                disabled={!letter.trim()}
                className="group flex items-center gap-3 px-8 py-3 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 bg-leaf-new/15 border border-leaf-new/30"
              >
                <span className="font-display text-sm tracking-wider text-canopy-light/80">Send</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-canopy-light/60 group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14m0 0l-6-6m6 6l-6 6" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center p-10">
            <p className="font-body text-2xl italic text-canopy-light/80">
              Your letter has been carried on the wind.
            </p>
            <p className="font-body text-base mt-3 text-sky-cream/40">
              Thank you for writing to Morpeace.
            </p>
          </div>
        )}
      </div>
    )
  }

  // Light version
  return (
    <div className="pt-12 border-t border-text-deep/10">
      <h3 className="font-display text-center text-sm tracking-[0.3em] uppercase mb-10 text-text-deep/40">
        Write a Letter to Morpeace
      </h3>

      {!sent ? (
        <div className="rounded-2xl p-8 md:p-10 border border-text-deep/10 bg-canvas">
          <p className="font-handwritten text-2xl mb-5 text-text-deep/40">Dear Morpeace,</p>
          <textarea
            value={letter}
            onChange={e => setLetter(e.target.value)}
            placeholder="Share your thoughts, memories, or wishes..."
            className="w-full h-44 bg-transparent font-body text-lg leading-relaxed resize-none focus:outline-none text-text-deep/80 placeholder:text-text-deep/20"
          />
          <div className="flex justify-end mt-4">
            <button
              onClick={handleSend}
              disabled={!letter.trim()}
              className="group flex items-center gap-3 px-8 py-3 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 border border-teal-deep/30 hover:bg-teal-deep/5"
            >
              <span className="font-display text-sm tracking-wider text-teal-deep">Send</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-teal-deep/60 group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14m0 0l-6-6m6 6l-6 6" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center p-10">
          <p className="font-body text-2xl italic text-teal-deep">
            Your letter has been carried on the wind.
          </p>
          <p className="font-body text-base mt-3 text-text-deep/40">
            Thank you for writing to Morpeace.
          </p>
        </div>
      )}
    </div>
  )
}
