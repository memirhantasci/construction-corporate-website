import { useState } from 'react';
import { reviews } from '../data/seoData';

// Sabit Renkler
const NAVY = '#1C1F33';
const CORAL = '#E06B5A';

export default function Reviews() {
  const [reviewIdx, setReviewIdx] = useState(0);
  const VISIBLE = 3;
  const maxIdx = Math.max(0, reviews.length - VISIBLE);
  const visibleReviews = reviews.slice(reviewIdx, reviewIdx + VISIBLE);

  return (
    <section className="py-16 px-6 bg-[#F7F7F5]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <p className="uppercase tracking-widest mb-1" style={{ fontSize: 11, color: '#9ca3af', fontWeight: 600 }}>
              MÜŞTERİ YORUMLARI
            </p>
            <h2 style={{ fontSize: 'clamp(20px,2.2vw,30px)', fontWeight: 400, color: NAVY }}>
              Google'da 5 Yıldız ⭐⭐⭐⭐⭐
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setReviewIdx(Math.max(0, reviewIdx - 1))}
              disabled={reviewIdx === 0}
              className="rounded-full flex items-center justify-center transition-all"
              style={{
                width: 40, height: 40,
                backgroundColor: reviewIdx === 0 ? 'rgba(28,31,51,0.08)' : CORAL,
                color: '#ffffff', fontSize: 18,
              }}
            >
              ‹
            </button>
            <button
              onClick={() => setReviewIdx(Math.min(maxIdx, reviewIdx + 1))}
              disabled={reviewIdx >= maxIdx}
              className="rounded-full flex items-center justify-center transition-all"
              style={{
                width: 40, height: 40,
                backgroundColor: reviewIdx >= maxIdx ? 'rgba(28,31,51,0.08)' : CORAL,
                color: '#ffffff', fontSize: 18,
              }}
            >
              ›
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {visibleReviews.map((r, i) => (
            <div
              key={i}
              className="rounded-xl p-6 h-full flex flex-col"
              style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 24px rgba(28,31,51,0.06)' }}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-semibold" style={{ fontSize: 14, color: NAVY }}>{r.name}</p>
                  <p style={{ fontSize: 12, color: '#9ca3af' }}>{r.location} · {r.date}</p>
                </div>
                <div className="text-yellow-400 text-sm">★★★★★</div>
              </div>
              <p className="flex-grow" style={{ fontSize: 13, lineHeight: 1.7, color: '#6b6f8a' }}>"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
