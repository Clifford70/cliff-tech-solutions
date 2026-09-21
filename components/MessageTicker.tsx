
"use client";

const messages = [
  "🚀 Welcome to Cliff-Tech Solutions Ltd",
  "💻 Web Development",
  "📱 Mobile App Development",
  "💳 FinTech & SaaS Solutions",
  "🎨 UI/UX Design",
  "🌐 E-Commerce Solutions",
  "🔐 Cybersecurity & Data Security",
  "📩 Let's build your next digital product",
];

export default function MessageTicker() {
  return (
    <div className="relative z-50 w-full overflow-hidden border-y border-white/20 bg-black py-3 text-white">
      <div className="ticker-track">

        {/* First set */}
        <div className="ticker-content">
          {messages.map((message, index) => (
            <span
              key={`first-${index}`}
              className="mx-8 inline-block text-sm font-medium"
            >
              {message}
            </span>
          ))}
        </div>

        {/* Duplicate set */}
        <div className="ticker-content">
          {messages.map((message, index) => (
            <span
              key={`second-${index}`}
              className="mx-8 inline-block text-sm font-medium"
            >
              {message}
            </span>
          ))}
        </div>

      </div>

      <style jsx>{`
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker 30s linear infinite;
        }

        .ticker-content {
          display: flex;
          align-items: center;
          white-space: nowrap;
        }

        @keyframes ticker {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
