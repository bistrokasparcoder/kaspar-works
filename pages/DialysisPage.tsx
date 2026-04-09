import React, { useRef } from 'react';
import { Activity, Brain, Droplet, Shield, Globe, Smartphone, MonitorSmartphone } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import EditorialButton, { EyebrowLabel } from '../components/ui/EditorialButton';

const ease = [0.16, 1, 0.3, 1] as const;

const features = [
  {
    num: '01',
    icon: <Activity size={24} />,
    title: 'Treatment Tracking',
    desc: 'Log every dialysis session with vitals, weight, and fluid data. Trends surface over time.',
  },
  {
    num: '02',
    icon: <Brain size={24} />,
    title: 'AI Health Insights',
    desc: 'Treatment-pattern analysis with personalized recommendations for patients and care teams.',
  },
  {
    num: '03',
    icon: <Droplet size={24} />,
    title: 'Nutrition & Fluids',
    desc: 'Track daily fluid intake, phosphorus, potassium, and sodium with smart, gentle alerts.',
  },
  {
    num: '04',
    icon: <Shield size={24} />,
    title: '256-bit Encryption',
    desc: 'Enterprise-grade security. Health data is encrypted at rest and in transit.',
  },
];

const platforms = [
  { icon: <Globe size={14} />, label: 'Web' },
  { icon: <Smartphone size={14} />, label: 'iOS' },
  { icon: <MonitorSmartphone size={14} />, label: 'Android' },
];

const DialysisPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroIn = useInView(heroRef, { once: true, margin: '-20%' });

  return (
    <div className="relative" style={{ background: 'var(--bg-base)' }}>
      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative pt-[18vh] sm:pt-[22vh] pb-24 sm:pb-32 overflow-hidden">
        <div className="absolute inset-x-0 top-[6vh] flex justify-center pointer-events-none select-none">
          <h2
            className="font-editorial font-extrabold leading-[0.78] whitespace-nowrap opacity-[0.05] text-[var(--text-primary)]"
            style={{ fontSize: 'clamp(7rem, 22vw, 22rem)', letterSpacing: '-0.06em' }}
          >
            dialysis
          </h2>
        </div>

        <div
          ref={heroRef}
          className="relative max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end"
        >
          {/* Text */}
          <div className="lg:col-span-7">
            <EyebrowLabel className="mb-10">Healthcare · Web + Mobile · In production</EyebrowLabel>

            <h1 className="font-editorial font-extrabold leading-[0.88] tracking-[-0.045em] text-[var(--text-primary)] text-[clamp(3rem,9vw,9rem)]">
              <span className="block">
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.span
                    className="inline-block"
                    initial={{ y: '110%' }}
                    animate={heroIn ? { y: 0 } : { y: '110%' }}
                    transition={{ duration: 1.0, delay: 0.2, ease }}
                  >
                    dialysis
                  </motion.span>
                </span>
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.span
                    className="inline-block font-fraunces italic font-normal text-[var(--accent)]"
                    initial={{ y: '110%' }}
                    animate={heroIn ? { y: 0 } : { y: '110%' }}
                    transition={{ duration: 1.0, delay: 0.32, ease }}
                  >
                    .live
                  </motion.span>
                </span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroIn ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease }}
              className="mt-10 text-base sm:text-lg leading-relaxed text-[var(--text-primary)] max-w-xl"
            >
              A patient-focused health tracking platform for tracking treatments,
              vitals, nutrition, and medications. Built across web, iOS, and Android
              for the 3.7 million people on dialysis worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroIn ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.65, ease }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {platforms.map((p) => (
                <div
                  key={p.label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--glass-border-strong)] bg-[var(--glass-bg)] backdrop-blur-xl"
                >
                  <span className="text-[var(--accent)]">{p.icon}</span>
                  <span className="text-xs font-medium text-[var(--text-secondary)]">
                    {p.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroIn ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8, ease }}
              className="mt-10"
            >
              <EditorialButton href="https://dialysis.live/" target="_blank">
                Visit dialysis.live
              </EditorialButton>
            </motion.div>
          </div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={heroIn ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <div className="relative rounded-[1.5rem] sm:rounded-[2rem] border border-[var(--glass-border-strong)] bg-[var(--bg-100)] overflow-hidden shadow-2xl shadow-black/50">
                <div className="bg-[var(--bg-200)] px-3 py-2 flex items-center gap-2 border-b border-[var(--glass-border)]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  <div className="flex-1 ml-3 bg-white/[0.03] rounded-md px-2 py-0.5 text-[10px] text-[var(--text-muted)] flex items-center gap-1.5">
                    <Globe size={10} className="text-[var(--accent)]" />
                    <span>dialysis.live</span>
                  </div>
                </div>
                <img
                  src="/dialysis-web-screenshot.png"
                  alt="dialysis.live web dashboard"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -right-6 w-[120px] sm:w-[150px] z-20">
                <div
                  className="bg-[var(--bg-100)] border-[5px] border-[var(--bg-200)] rounded-[1.5rem] overflow-hidden shadow-2xl shadow-black/60"
                  style={{ aspectRatio: '9/19' }}
                >
                  <img
                    src="/dialysis-mobile-screenshot.png"
                    alt="dialysis.live mobile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* soft neutral halo (theme-aware) */}
              <div
                className="absolute -inset-12 -z-10 blur-3xl rounded-full"
                style={{ background: 'var(--accent-soft)' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────── */}
      <section className="relative py-32 sm:py-48 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--glass-border-strong)] to-transparent" />

        <div className="relative max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
          <FeatureHeader />
          <div className="mt-20 sm:mt-32 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {features.map((f, i) => (
              <FeatureCard key={f.num} feature={f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote ────────────────────────────────── */}
      <section className="relative py-32 sm:py-48 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--glass-border-strong)] to-transparent" />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full pointer-events-none opacity-[0.04] blur-3xl"
          style={{ background: 'var(--accent)' }}
        />
        <div className="relative max-w-5xl mx-auto px-6 sm:px-10 text-center">
          <Blockquote />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="relative py-32 sm:py-48 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--glass-border-strong)] to-transparent" />
        <div className="relative max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center gap-10">
          <CTAHeadline />
        </div>
      </section>
    </div>
  );
};

const FeatureHeader: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });
  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-3 pt-4">
        <EyebrowLabel>Features / 04</EyebrowLabel>
      </div>
      <h2 className="lg:col-span-9 font-editorial font-extrabold leading-[0.92] tracking-[-0.04em] text-[var(--text-primary)] text-[clamp(2.5rem,6.5vw,6rem)]">
        <span className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            animate={inView ? { y: 0 } : { y: '110%' }}
            transition={{ duration: 0.95, delay: 0.15, ease }}
          >
            Clinical-grade.
          </motion.span>
        </span>
        <br />
        <span className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block font-fraunces italic font-normal text-[var(--accent)]"
            initial={{ y: '110%' }}
            animate={inView ? { y: 0 } : { y: '110%' }}
            transition={{ duration: 0.95, delay: 0.3, ease }}
          >
            Patient-first.
          </motion.span>
        </span>
      </h2>
    </div>
  );
};

const FeatureCard: React.FC<{
  feature: { num: string; icon: React.ReactNode; title: string; desc: string };
  index: number;
}> = ({ feature, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.08, ease }}
      className="group relative rounded-[1.5rem] border border-[var(--glass-border-strong)] bg-[var(--bg-100)]/50 backdrop-blur-xl p-8 sm:p-10 hover:border-[var(--accent)]/40 transition-all duration-500"
    >
      <div className="flex items-start justify-between mb-8">
        <div className="text-[var(--accent)]">{feature.icon}</div>
        <span className="font-mono text-xs tracking-wider text-[var(--text-muted)]">
          / {feature.num}
        </span>
      </div>
      <h3 className="font-editorial font-bold text-[var(--text-primary)] text-2xl sm:text-3xl mb-4 tracking-tight">
        {feature.title}
      </h3>
      <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
        {feature.desc}
      </p>
    </motion.div>
  );
};

const Blockquote: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });
  return (
    <div ref={ref}>
      <EyebrowLabel className="justify-center mb-8 inline-flex">A note</EyebrowLabel>
      <blockquote className="font-editorial font-extrabold text-[clamp(1.8rem,4.5vw,4rem)] leading-[1.1] tracking-[-0.025em] text-[var(--text-primary)] max-w-4xl mx-auto">
        <span className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            animate={inView ? { y: 0 } : { y: '110%' }}
            transition={{ duration: 0.95, delay: 0.1, ease }}
          >
            "Every patient deserves tools that&nbsp;
          </motion.span>
        </span>
        <span className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block font-fraunces italic font-normal text-[var(--accent)]"
            initial={{ y: '110%' }}
            animate={inView ? { y: 0 } : { y: '110%' }}
            transition={{ duration: 0.95, delay: 0.3, ease }}
          >
            make health feel manageable."
          </motion.span>
        </span>
      </blockquote>
      <p className="mt-10 text-sm tracking-[0.2em] uppercase text-[var(--text-muted)]">
        For the 3.7 million on dialysis worldwide
      </p>
    </div>
  );
};

const CTAHeadline: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });
  return (
    <div ref={ref} className="flex flex-col items-center gap-10">
      <EyebrowLabel>Get started</EyebrowLabel>
      <h2 className="font-editorial font-extrabold leading-[0.9] tracking-[-0.045em] text-[var(--text-primary)] text-[clamp(2.8rem,8vw,8rem)] max-w-[18ch]">
        <span className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            animate={inView ? { y: 0 } : { y: '110%' }}
            transition={{ duration: 0.95, delay: 0.15, ease }}
          >
            Better health&nbsp;
          </motion.span>
        </span>
        <span className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block font-fraunces italic font-normal text-[var(--accent)]"
            initial={{ y: '110%' }}
            animate={inView ? { y: 0 } : { y: '110%' }}
            transition={{ duration: 0.95, delay: 0.3, ease }}
          >
            starts here.
          </motion.span>
        </span>
      </h2>
      <p className="text-base sm:text-lg text-[var(--text-primary)] max-w-md">
        Available on web, iOS, and Android.
      </p>
      <EditorialButton href="https://dialysis.live/" target="_blank">
        Visit dialysis.live
      </EditorialButton>
    </div>
  );
};

export default DialysisPage;
