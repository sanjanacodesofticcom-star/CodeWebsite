'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '850px', margin: '0 auto' }}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            style={{
              background: '#ffffff',
              border: isOpen ? '1.5px solid var(--brand-blue)' : '1px solid #e2e8f0',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: isOpen ? '0 8px 24px -4px rgba(0, 0, 0, 0.06)' : '0 2px 8px rgba(0, 0, 0, 0.02)',
              transition: 'all 0.25s ease',
            }}
          >
            <button
              onClick={() => toggleItem(idx)}
              style={{
                width: '100%',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'transparent',
                border: 'none',
                color: '#111827',
                fontSize: '1.05rem',
                fontWeight: 700,
                cursor: 'pointer',
                textAlign: 'left',
                gap: '1rem',
                fontFamily: "'Adobe Clean', 'Trebuchet MS', sans-serif",
              }}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <ChevronDown
                size={20}
                style={{
                  color: isOpen ? 'var(--brand-blue)' : '#64748b',
                  transform: isOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.25s ease',
                  flexShrink: 0,
                }}
              />
            </button>

            {isOpen && (
              <div
                style={{
                  padding: '0 1.5rem 1.5rem 1.5rem',
                  color: '#4b5563',
                  fontSize: '0.975rem',
                  lineHeight: '1.65',
                  borderTop: '1px solid #f1f5f9',
                  paddingTop: '1rem',
                  fontFamily: "'Adobe Clean', 'Trebuchet MS', sans-serif",
                }}
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
