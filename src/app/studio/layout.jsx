export const metadata = {
  title: 'Codesoftic Content Studio',
  description: 'Sanity Content Management System',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function StudioLayout({ children }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 999999, height: '100vh', width: '100vw', background: '#101112', overflow: 'hidden' }}>
      {children}
    </div>
  );
}
