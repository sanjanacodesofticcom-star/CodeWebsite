import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServiceCard({
  title,
  description,
  href,
  icon: Icon,
  badge,
  features = [],
}) {
  return (
    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <div 
          style={{
            width: '52px',
            height: '52px',
            borderRadius: 'var(--radius-md)',
            background: 'linear-gradient(135deg, rgba(24, 140, 255, 0.2) 0%, rgba(0, 229, 255, 0.1) 100%)',
            border: '1px solid rgba(24, 140, 255, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--brand-cyan)'
          }}
        >
          {Icon && <Icon size={26} />}
        </div>
        {badge && (
          <span className="badge" style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem' }}>
            {badge}
          </span>
        )}
      </div>

      <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: '#ffffff' }}>
        {title}
      </h3>

      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1, lineHeight: '1.6' }}>
        {description}
      </p>

      {features.length > 0 && (
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
          {features.map((feat, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <CheckCircle2 size={15} style={{ color: 'var(--brand-blue-light)', flexShrink: 0 }} />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      )}

      <Link 
        href={href} 
        className="btn btn-outline-blue" 
        style={{ width: '100%', justifyContent: 'space-between', marginTop: 'auto' }}
      >
        <span>Explore Capability</span>
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
