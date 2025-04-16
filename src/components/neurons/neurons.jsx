import { useEffect, useRef } from 'react';

const NeuronBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let neurons = [];
    let mouseX = 0;
    let mouseY = 0;

    // Brand colors based on the logo
    const brandColors = {
      orange: "#FF8C00", // Vibrant orange from logo
      blue: "#0047AB",   // Deep blue from logo
      lightOrange: "rgba(255, 140, 0, 0.5)",
      lightBlue: "rgba(0, 71, 171, 0.5)"
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNeurons();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function initNeurons() {
      neurons = [];
      const count = Math.min(Math.floor(canvas.width * canvas.height / 15000), 120);

      for (let i = 0; i < count; i++) {
        neurons.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.8 + 0.7,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          connections: [],
          pulses: [],
          lastPulseTime: Date.now(),
          // Alternate between orange and blue for brand consistency
          color: Math.random() > 0.5 ? brandColors.orange : brandColors.blue,
          active: Math.random() > 0.6
        });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = Date.now();

      neurons.forEach(neuron => {
        neuron.x += neuron.vx;
        neuron.y += neuron.vy;

        if (neuron.x < 0 || neuron.x > canvas.width) neuron.vx *= -1;
        if (neuron.y < 0 || neuron.y > canvas.height) neuron.vy *= -1;

        neuron.connections = [];

        const dx = mouseX - neuron.x;
        const dy = mouseY - neuron.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < 150) {
          neuron.active = true;
          neuron.vx += dx * 0.0001;
          neuron.vy += dy * 0.0001;

          const maxVel = 0.6;
          const vel = Math.sqrt(neuron.vx ** 2 + neuron.vy ** 2);
          if (vel > maxVel) {
            neuron.vx = (neuron.vx / vel) * maxVel;
            neuron.vy = (neuron.vy / vel) * maxVel;
          }
        } else if (Math.random() < 0.001) {
          neuron.active = !neuron.active;
        }
      });

      // Draw connections with brand colors
      ctx.lineWidth = 0.4;
      neurons.forEach((neuron, i) => {
        for (let j = i + 1; j < neurons.length; j++) {
          const other = neurons[j];
          const dx = neuron.x - other.x;
          const dy = neuron.y - other.y;
          const distance = Math.sqrt(dx ** 2 + dy ** 2);
          const maxDistance = 180; // Longer connections

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            
            // Gradient connection color based on the two neurons it connects
            let connectionColor;
            if (neuron.color === brandColors.orange && other.color === brandColors.blue) {
              connectionColor = `rgba(127, 104, 171, ${opacity * 0.25})`; // Purple blend
            } else if (neuron.color === brandColors.blue && other.color === brandColors.orange) {
              connectionColor = `rgba(127, 104, 171, ${opacity * 0.25})`; // Purple blend
            } else if (neuron.color === brandColors.orange) {
              connectionColor = `rgba(255, 140, 0, ${opacity * 0.25})`; // Orange
            } else {
              connectionColor = `rgba(0, 71, 171, ${opacity * 0.25})`; // Blue
            }
            
            ctx.strokeStyle = connectionColor;
            ctx.beginPath();
            ctx.moveTo(neuron.x, neuron.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();

            // More frequent pulses for better visibility
            if (
              (neuron.active || other.active) &&
              now - neuron.lastPulseTime > 2500 &&
              Math.random() < 0.01
            ) {
              neuron.pulses.push({
                x: neuron.x,
                y: neuron.y,
                targetX: other.x,
                targetY: other.y,
                progress: 0,
                speed: 0.01 + Math.random() * 0.015,
                color: neuron.color // Use the neuron's color for its pulse
              });
              neuron.lastPulseTime = now;
            }
          }
        }
      });

      // Draw pulses with enhanced visibility
      neurons.forEach(neuron => {
        neuron.pulses = neuron.pulses.filter(pulse => {
          pulse.progress += pulse.speed;
          if (pulse.progress >= 1) return false;

          const x = pulse.x + (pulse.targetX - pulse.x) * pulse.progress;
          const y = pulse.y + (pulse.targetY - pulse.y) * pulse.progress;

          ctx.fillStyle = pulse.color;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();

          return true;
        });
      });

      // Draw neurons with brand colors
      neurons.forEach(neuron => {
        const size = neuron.active ? neuron.size * 1.8 : neuron.size;
        const glow = neuron.active ? 8 : 0;

        if (neuron.active) {
          ctx.shadowBlur = glow;
          ctx.shadowColor = neuron.color;
        }

        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, size, 0, Math.PI * 2);
        ctx.fillStyle = neuron.active ? neuron.color : (
          neuron.color === brandColors.orange ? 
            `rgba(255, 140, 0, 0.4)` : `rgba(0, 71, 171, 0.4)`
        );
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw node branches for active neurons
        if (neuron.active) {
          const branches = 2 + Math.floor(Math.random() * 3);
          ctx.strokeStyle = neuron.color === brandColors.orange ? 
            `rgba(255, 140, 0, 0.3)` : `rgba(0, 71, 171, 0.3)`;
          ctx.lineWidth = 0.3;

          for (let i = 0; i < branches; i++) {
            const angle = Math.random() * Math.PI * 2;
            const length = 4 + Math.random() * 8;
            ctx.beginPath();
            ctx.moveTo(neuron.x, neuron.y);
            ctx.lineTo(
              neuron.x + Math.cos(angle) * length,
              neuron.y + Math.sin(angle) * length
            );
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        filter: 'drop-shadow(0 0 5px rgba(255,140,0,0.2)) drop-shadow(0 0 5px rgba(0,71,171,0.2))'
      }}
    />
  );
};

export default NeuronBackground;