import React, { useEffect, useRef } from 'react';

interface StarFieldProps {
  isDark: boolean;
}

const StarField: React.FC<StarFieldProps> = ({ isDark }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const stars: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      twinkle: number;
      trail: Array<{ x: number; y: number; opacity: number }>;
    }> = [];

    // Create falling stars
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 1 + 0.2,
        opacity: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
        trail: []
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        // Update position
        star.y += star.speed;
        star.x += Math.sin(star.y * 0.01) * 0.5; // Slight horizontal drift
        
        // Reset star when it goes off screen
        if (star.y > canvas.height + 10) {
          star.y = -10;
          star.x = Math.random() * canvas.width;
        }

        // Update twinkle
        star.twinkle += 0.02;
        const twinkleOpacity = star.opacity * (0.5 + 0.5 * Math.sin(star.twinkle));

        // Add to trail
        star.trail.push({ x: star.x, y: star.y, opacity: twinkleOpacity });
        if (star.trail.length > 5) {
          star.trail.shift();
        }

        // Draw trail
        star.trail.forEach((point, index) => {
          const trailOpacity = point.opacity * (index / star.trail.length) * 0.3;
          ctx.beginPath();
          ctx.arc(point.x, point.y, star.size * (index / star.trail.length), 0, Math.PI * 2);
          ctx.fillStyle = isDark 
            ? `rgba(255, 255, 255, ${trailOpacity})` 
            : `rgba(100, 100, 100, ${trailOpacity * 0.4})`;
          ctx.fill();
        });

        // Draw main star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        
        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 3
        );
        
        if (isDark) {
          gradient.addColorStop(0, `rgba(255, 255, 255, ${twinkleOpacity})`);
          gradient.addColorStop(0.5, `rgba(200, 220, 255, ${twinkleOpacity * 0.5})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        } else {
          gradient.addColorStop(0, `rgba(100, 100, 100, ${twinkleOpacity * 0.6})`);
          gradient.addColorStop(0.5, `rgba(150, 150, 150, ${twinkleOpacity * 0.3})`);
          gradient.addColorStop(1, 'rgba(100, 100, 100, 0)');
        }
        
        ctx.fillStyle = gradient;
        ctx.fill();

        // Add sparkle effect for larger stars
        if (star.size > 1.5) {
          const sparkleSize = star.size * 0.3;
          ctx.beginPath();
          ctx.moveTo(star.x - sparkleSize * 2, star.y);
          ctx.lineTo(star.x + sparkleSize * 2, star.y);
          ctx.moveTo(star.x, star.y - sparkleSize * 2);
          ctx.lineTo(star.x, star.y + sparkleSize * 2);
          ctx.strokeStyle = isDark 
            ? `rgba(255, 255, 255, ${twinkleOpacity * 0.8})` 
            : `rgba(100, 100, 100, ${twinkleOpacity * 0.4})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: isDark ? 0.7 : 0.4 }}
    />
  );
};

export default StarField;