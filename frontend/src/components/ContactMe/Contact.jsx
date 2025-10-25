import { useRef, useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Twitter, Send, Copy, Check } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen py-32 px-4 bg-white text-black overflow-hidden"
    >
      <ParticleBackground />

      {showToast && (
        <div className="fixed top-8 right-8 bg-black text-white px-6 py-3 rounded shadow-lg z-50 animate-fade-in">
          Message sent! I'll get back to you soon.
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`mb-24 transition-all duration-800 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="font-bold tracking-tighter mb-6 text-6xl md:text-8xl lg:text-9xl">
            LET'S TALK
          </h2>
          <div
            className={`h-1 bg-black transition-all duration-1000 delay-300 ${
              isInView ? 'w-48' : 'w-0'
            }`}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div
            className={`space-y-12 transition-all duration-800 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div>
              <p className="text-xl text-black/80 leading-relaxed mb-8">
                Have a project in mind or just want to chat? 
                I'd love to hear from you. Let's create something amazing together.
              </p>

              <CopyableEmail email="zuri00014@gmail.com" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold tracking-tight mb-8">Connect With Me</h3>
              <div className="space-y-4">
                {[
                  { icon: Github, label: 'GitHub', handle: '@Yavar10' },
                  { icon: Linkedin, label: 'LinkedIn', handle: '/in/mohdyavar' },
                  { icon: Twitter, label: 'Twitter', handle: '@yavar10_' },
                  { icon: Mail, label: 'Email', handle: 'zuri00014@gmail.com' },
                ].map((social, i) => (
                  <SocialLink key={social.label} social={social} delay={i * 100} inView={isInView} />
                ))}
              </div>
            </div>

            <div
              className={`p-6 border-2 border-black relative overflow-hidden group cursor-pointer transition-all duration-600 delay-600 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <div className="relative z-10 flex items-center gap-4 group-hover:text-white transition-colors duration-300">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <div>
                  <p className="font-medium tracking-wide">Available for new projects</p>
                  <p className="text-sm text-black/60 group-hover:text-white/60 transition-colors duration-300">
                   
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-800 delay-400 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatedInput
                label="Name"
                value={formData.name}
                onChange={(value) => setFormData({ ...formData, name: value })}
                placeholder="Your name"
              />

              <AnimatedInput
                label="Email"
                type="email"
                value={formData.email}
                onChange={(value) => setFormData({ ...formData, email: value })}
                placeholder="your@email.com"
              />

              <AnimatedTextarea
                label="Message"
                value={formData.message}
                onChange={(value) => setFormData({ ...formData, message: value })}
                placeholder="Tell me about your project..."
              />

              <button
                type="submit"
                className="w-full py-4 border-2 border-black relative overflow-hidden group hover:scale-105 active:scale-95 transition-transform"
              >
                <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-2 tracking-widest uppercase font-semibold group-hover:text-white transition-colors duration-300">
                  Send Message
                  <Send size={18} />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    let animationFrame;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

function CopyableEmail({ email }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyEmail}
      className="group flex items-center gap-4 text-2xl hover:text-black/60 transition-all hover:translate-x-2"
    >
      <Mail size={32} />
      <span className="font-medium tracking-tight">{email}</span>
      <div className={`transition-transform ${copied ? 'scale-110' : 'scale-100'}`}>
        {copied ? <Check size={24} className="text-green-600" /> : <Copy size={24} />}
      </div>
    </button>
  );
}

function SocialLink({ social, delay, inView }) {
  const Icon = social.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="#"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center gap-4 p-4 border border-black/20 group hover:border-black transition-all relative overflow-hidden ${
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`absolute inset-0 bg-black transform transition-transform duration-300 ${
          isHovered ? 'translate-x-0' : '-translate-x-full'
        }`}
      />
      <div
        className={`relative z-10 transition-all duration-600 group-hover:text-white ${
          isHovered ? 'rotate-360' : 'rotate-0'
        }`}
      >
        <Icon size={24} />
      </div>
      <div className="relative z-10 group-hover:text-white transition-colors duration-300">
        <p className="font-medium tracking-wide">{social.label}</p>
        <p className="text-sm text-black/60 group-hover:text-white/60 transition-colors duration-300">
          {social.handle}
        </p>
      </div>
    </a>
  );
}

function AnimatedInput({ label, type = 'text', value, onChange, placeholder }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <label
        className={`block mb-2 tracking-wider uppercase text-sm font-semibold transition-transform ${
          isFocused ? 'translate-x-1' : 'translate-x-0'
        }`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full px-4 py-3 bg-transparent border-2 border-black/20 focus:border-black outline-none transition-colors"
          required
        />
        <div
          className={`absolute bottom-0 left-0 right-0 h-0.5 bg-black transform origin-left transition-transform duration-300 ${
            isFocused ? 'scale-x-100' : 'scale-x-0'
          }`}
        />
      </div>
    </div>
  );
}

function AnimatedTextarea({ label, value, onChange, placeholder }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <label
        className={`block mb-2 tracking-wider uppercase text-sm font-semibold transition-transform ${
          isFocused ? 'translate-x-1' : 'translate-x-0'
        }`}
      >
        {label}
      </label>
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          rows={6}
          className="w-full px-4 py-3 bg-transparent border-2 border-black/20 focus:border-black outline-none transition-colors resize-none"
          required
        />
        <div
          className={`absolute bottom-0 left-0 right-0 h-0.5 bg-black transform origin-left transition-transform duration-300 ${
            isFocused ? 'scale-x-100' : 'scale-x-0'
          }`}
        />
      </div>
    </div>
  );
}

