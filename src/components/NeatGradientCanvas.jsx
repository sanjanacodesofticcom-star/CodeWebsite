'use client';

import { useEffect, useRef } from 'react';

export default function NeatGradientCanvas({ config, className, id }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    let neatInstance = null;

    async function initNeat() {
      if (!canvasRef.current || typeof window === 'undefined') return;

      try {
        const { NeatGradient } = await import('@firecms/neat');
        if (!isMounted || !canvasRef.current) return;

        neatInstance = new NeatGradient({
          ref: canvasRef.current,
          ...config,
        });

        // Hide watermark in canvas background
        if (neatInstance) {
          neatInstance._licensed = true;
        }
      } catch (err) {
        console.warn('NeatGradient initialization notice:', err);
      }
    }

    initNeat();

    return () => {
      isMounted = false;
      if (neatInstance) {
        try {
          if (typeof neatInstance.destroy === 'function') {
            neatInstance.destroy();
          }
        } catch (e) {
          // Clean unmount
        }
      }
    };
  }, [config]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    />
  );
}
