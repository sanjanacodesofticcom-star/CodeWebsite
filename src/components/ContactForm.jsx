'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Sparkles, Loader2 } from 'lucide-react';

export default function ContactForm({ initialService = 'Website Design' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: initialService,
    budget: '$10k - $25k',
    message: '',
  });

  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', message: 'Encrypting and sending your inquiry...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send inquiry.');
      }

      setStatus({
        state: 'success',
        message: 'Thank you! Your project briefing has been received. Our senior architect will contact you within 4 hours.',
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        service: initialService,
        budget: '$10k - $25k',
        message: '',
      });
    } catch (err) {
      setStatus({
        state: 'error',
        message: err.message || 'An unexpected error occurred. Please reach us at contact@codesoftic.com',
      });
    }
  };

  if (status.state === 'success') {
    return (
      <div 
        style={{ 
          textAlign: 'center', 
          padding: '3.5rem 2rem', 
          background: '#ffffff',
          border: '1.5px solid #16a34a',
          borderRadius: '16px',
          boxShadow: '0 10px 30px -5px rgba(0,0,0,0.05)'
        }}
      >
        <div 
          style={{ 
            width: '64px', 
            height: '64px', 
            borderRadius: '50%', 
            background: 'rgba(22, 163, 74, 0.12)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '0 auto 1.5rem auto',
            color: '#16a34a'
          }}
        >
          <CheckCircle2 size={36} />
        </div>
        <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', color: '#111827' }}>
          Briefing Received Successfully
        </h3>
        <p style={{ color: '#4b5563', maxWidth: '480px', margin: '0 auto 2rem auto' }}>
          {status.message}
        </p>
        <button 
          onClick={() => setStatus({ state: 'idle', message: '' })}
          className="btn btn-secondary"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{ 
        background: '#ffffff', 
        padding: '2.5rem', 
        borderRadius: '16px', 
        border: '1.5px solid #e2e8f0', 
        boxShadow: '0 10px 30px -5px rgba(0,0,0,0.05)',
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1.25rem' 
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '1.4rem', color: '#111827' }}>Project Discovery & Briefing</h3>
        <span className="badge" style={{ fontSize: '0.75rem' }}>
          <Sparkles size={13} /> SLA: 4h Reply
        </span>
      </div>

      {status.state === 'error' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: '#fef2f2', border: '1px solid #fecaca', padding: '0.9rem', borderRadius: 'var(--radius-sm)', color: '#b91c1c', fontSize: '0.9rem' }}>
          <AlertCircle size={18} style={{ flexShrink: 0 }} />
          <span>{status.message}</span>
        </div>
      )}

      <div className="grid-2" style={{ gap: '1.25rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '0.4rem' }}>
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            className="input-glass"
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '0.4rem' }}>
            Business Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className="input-glass"
          />
        </div>
      </div>

      <div className="grid-2" style={{ gap: '1.25rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '0.4rem' }}>
            Company / Organization
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="input-glass"
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '0.4rem' }}>
            Primary Area of Interest
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="input-glass"
            style={{ cursor: 'pointer' }}
          >
            <option value="Website Design">Website Design & Web Apps</option>
            <option value="AI Audits">AI Systems & Readiness Audit</option>
            <option value="AI Automation">AI Automation & Agent Workflows</option>
            <option value="SEO">Technical SEO & Search Dominance</option>
            <option value="Performance Marketing">Performance Marketing & ROAS</option>
            <option value="Incubation">Incubation & Venture Acceleration</option>
          </select>
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '0.4rem' }}>
          Estimated Budget Allocation
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.5rem' }}>
          {['<$10k', '$10k - $25k', '$25k - $50k', '$50k+'].map((tier) => (
            <button
              type="button"
              key={tier}
              onClick={() => setFormData((prev) => ({ ...prev, budget: tier }))}
              style={{
                padding: '0.65rem 0.5rem',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 600,
                border: formData.budget === tier ? '2px solid var(--brand-blue)' : '1px solid #d1d5db',
                background: formData.budget === tier ? 'rgba(24, 140, 255, 0.08)' : '#ffffff',
                color: formData.budget === tier ? 'var(--brand-blue)' : '#4b5563',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {tier}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '0.4rem' }}>
          Project Scope & Objectives *
        </label>
        <textarea
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your timeline, current architecture, and key performance objectives..."
          className="input-glass"
          style={{ resize: 'vertical' }}
        />
      </div>

      <button
        type="submit"
        disabled={status.state === 'loading'}
        className="btn btn-blue btn-lg"
        style={{ width: '100%', marginTop: '0.5rem' }}
      >
        {status.state === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            <span>Transmitting Request...</span>
          </>
        ) : (
          <>
            <Send size={18} />
            <span>Submit Executive Briefing</span>
          </>
        )}
      </button>
    </form>
  );
}
