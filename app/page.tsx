import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const marquee = [
  'YOUR YACHT. YOUR TERMS.',
  'CHARTERS',
  'SALES',
  'MANAGEMENT',
  'BAHAMIAN BLUE',
];

const heroMetrics = [
  ['Miami + Bahamas', 'Coverage'],
  ['Charter / Sales / Management', 'Three tiers'],
  ['Concierge response', 'White-glove support'],
];

const services = [
  {
    tier: 'Charters',
    title: 'Private days on the water',
    copy: 'Sunlit, white-glove charter experiences with matching support for the right boat, crew, and route.',
    points: ['Birthday charters', 'Sunset cruises', 'Sandbar days'],
  },
  {
    tier: 'Sales',
    title: 'Select vessels, presented properly',
    copy: 'High-trust vessel sales with premium presentation, curated listings, and a polished acquisition journey.',
    points: ['Buyer support', 'Listing curation', 'Private showings'],
  },
  {
    tier: 'Management',
    title: 'Stewardship with standards',
    copy: 'Operational oversight that keeps the vessel ready, the crew aligned, and the experience consistent.',
    points: ['Crew coordination', 'Maintenance planning', 'Launch readiness'],
  },
];

const fleet = [
  {
    title: 'Signature Edition',
    size: '40–55 ft',
    copy: 'Bright, compact, and ideal for a first premium day on the water.',
  },
  {
    title: 'Executive Edition',
    size: '60–80 ft',
    copy: 'More space, more presence, and a stronger hospitality footprint.',
  },
  {
    title: 'Flagship Edition',
    size: '80+ ft',
    copy: 'The most elevated expression of the brand with a true statement feel.',
  },
];

const proof = [
  '“The entire experience felt organized, upscale, and easy to understand.”',
  '“The blue-and-white look makes it feel like a real marine luxury brand.”',
  '“Every interaction feels pressable and premium.”',
  '“The slogan lands immediately: Your Yacht. Your Terms.”',
];

const occasions = [
  'Birthdays',
  'Corporate hosting',
  'Sunset cruises',
  'Family outings',
  'VIP weekends',
  'Sandbar socials',
];

const steps = [
  {
    title: 'Tell us the vibe',
    copy: 'Share the date, headcount, and the experience you want on the water.',
  },
  {
    title: 'Get matched',
    copy: 'We align you with the right tier, boat, and crew fit.',
  },
  {
    title: 'Set sail',
    copy: 'Confirm and arrive with everything handled before you board.',
  },
];

const faqs = [
  {
    q: 'Is this positioned as a charter concierge?',
    a: 'Yes. The Helm is presented as a premium charter, sales, and management brand with a curated feel.',
  },
  {
    q: 'Can the hero support video later?',
    a: 'Yes. The structure is built as a full-bleed stage for future yacht or ocean footage.',
  },
  {
    q: 'What makes the interface feel interactive?',
    a: 'Cards lift, borders glow, and buttons scale slightly so the entire page feels pressable.',
  },
  {
    q: 'What color system is used?',
    a: 'Crisp whites, ocean blues, deep navy structure, and bright yellow accents for energy and contrast.',
  },
];

function SectionHeading({ kicker, title, copy }: { kicker: string; title: string; copy: string }) {
  return (
    <div className="max-w-3xl reveal-up">
      <Badge className="mb-4 section-badge">{kicker}</Badge>
      <h2 className="font-display text-3xl uppercase leading-[0.92] tracking-[0.08em] text-[#0a2f4f] md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-8 text-[#4d6a84] md:text-base">{copy}</p>
    </div>
  );
}

function GlassPanel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <Card className={['glass-panel', className].filter(Boolean).join(' ')}>
      <CardContent className="h-full p-6 md:p-7">{children}</CardContent>
    </Card>
  );
}

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-[#f6fbff] text-[#0a2f4f]">
      <div className="pointer-events-none absolute inset-0 marine-grid opacity-55" />
      <div className="pointer-events-none absolute left-[-10%] top-[-8%] h-[30rem] w-[30rem] rounded-full bg-[rgba(0,169,206,0.2)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-12%] top-[10%] h-[34rem] w-[34rem] rounded-full bg-[rgba(255,205,0,0.18)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-12%] left-[16%] h-[24rem] w-[24rem] rounded-full bg-[rgba(10,47,79,0.08)] blur-3xl" />

      <header className="sticky top-0 z-50 border-b border-[rgba(10,47,79,0.08)] bg-white/82 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="font-display text-xl uppercase tracking-[0.28em] text-[#0a2f4f] md:text-2xl">
            The Helm
          </a>
          <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.26em] text-[#5b7892] md:flex">
            <a href="#services" className="transition-colors hover:text-[#00a9ce]">Services</a>
            <a href="#fleet" className="transition-colors hover:text-[#00a9ce]">Fleet</a>
            <a href="#process" className="transition-colors hover:text-[#00a9ce]">Process</a>
            <a href="#faq" className="transition-colors hover:text-[#00a9ce]">FAQ</a>
          </nav>
          <Button href="#inquiry" className="hover:scale-[1.02] active:scale-[0.99]">
            Reserve Now
          </Button>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-7xl px-5 pb-6 pt-8 md:px-8 md:pt-10 reveal-up">
        <div className="overflow-hidden rounded-full border border-[rgba(0,169,206,0.12)] bg-white/88 py-3 shadow-[0_16px_45px_rgba(10,47,79,0.06)] backdrop-blur-xl">
          <div className="flex w-max animate-marquee gap-6 whitespace-nowrap px-6 text-[11px] font-semibold uppercase tracking-[0.42em] text-[#00a9ce] md:text-xs">
            {[...marquee, ...marquee].map((item, index) => (
              <span key={item + '-' + index} className="flex items-center gap-6">
                <span>{item}</span>
                <span className="text-[#ffd23f]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-4 md:px-8 md:pb-24 md:pt-8">
        <div className="relative isolate overflow-hidden rounded-[40px] border border-[rgba(0,169,206,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,251,255,0.96))] px-5 py-7 shadow-[0_24px_90px_rgba(10,47,79,0.1)] md:px-7 md:py-8 lg:px-8 lg:py-10">
          <div className="pointer-events-none absolute inset-0 hero-ocean-splash" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(246,251,255,0.72)),radial-gradient(circle_at_16%_12%,rgba(255,255,255,0.9),transparent_22%),radial-gradient(circle_at_70%_18%,rgba(255,210,63,0.22),transparent_16%),radial-gradient(circle_at_70%_72%,rgba(0,169,206,0.22),transparent_24%)]" />
          <div className="pointer-events-none absolute -left-12 top-8 h-40 w-40 rounded-full bg-[rgba(255,255,255,0.42)] blur-3xl" />
          <div className="pointer-events-none absolute right-[-4%] top-[-6%] h-[24rem] w-[24rem] rounded-full bg-[rgba(0,169,206,0.18)] blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-10%] left-[28%] h-[22rem] w-[22rem] rounded-full bg-[rgba(255,210,63,0.2)] blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(246,251,255,0.96))]" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[60%] bg-[linear-gradient(90deg,rgba(6,28,49,0.7),rgba(6,28,49,0.28),transparent)]" />

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="reveal-up relative z-10 max-w-3xl rounded-[36px] border border-[rgba(255,255,255,0.12)] bg-[rgba(6,28,49,0.18)] p-6 backdrop-blur-md md:p-8">
              <Badge className="section-badge">Phantom Marine-inspired luxury</Badge>
              <h1 className="mt-6 max-w-4xl font-display text-[4rem] uppercase leading-[0.84] tracking-[0.03em] text-white drop-shadow-[0_10px_30px_rgba(6,28,49,0.55)] md:text-[6.9rem] lg:text-[7.8rem]">
                Your Yacht. Your Terms.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-9 text-white/86 drop-shadow-[0_4px_20px_rgba(6,28,49,0.45)] md:text-lg">
                The Helm is now styled like a white-hot marine luxury brand: crisp whites, ocean blues, bright yellow accents, and a premium layout that feels polished, fast, and unmistakably high-end.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="#fleet" className="hover:scale-[1.03] active:scale-[0.99]">Explore the Fleet</Button>
                <Button href="#services" variant="outline" className="hover:scale-[1.02]">View Services</Button>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {heroMetrics.map(([value, label]) => (
                  <GlassPanel key={label} className="reveal-up">
                    <div className="text-sm text-[#6d879c]">{label}</div>
                    <div className="mt-2 font-display text-xl uppercase tracking-[0.06em] text-[#0a2f4f]">{value}</div>
                  </GlassPanel>
                ))}
              </div>
            </div>

            <div className="reveal-up relative lg:-mt-6">
              <Card className="interactive-card relative overflow-hidden border border-[rgba(0,169,206,0.14)] bg-white/78 shadow-[0_24px_90px_rgba(10,47,79,0.12)]">
                <CardContent className="relative p-5 md:p-7">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,169,206,0.2),transparent_40%),radial-gradient(circle_at_bottom,rgba(255,210,63,0.16),transparent_44%)]" />
                  <div className="relative space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="text-[10px] uppercase tracking-[0.34em] text-[#6d879c]">Immersive hero</div>
                      <div className="rounded-full border border-[rgba(255,210,63,0.35)] bg-[rgba(255,210,63,0.12)] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#0a2f4f]">
                        Full-bleed stage
                      </div>
                    </div>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-[rgba(0,169,206,0.12)] bg-[#eaf8ff] shadow-[0_24px_75px_rgba(10,47,79,0.12)]">
                      <div className="absolute inset-0 hero-water-stage" />
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.28),transparent_40%),radial-gradient(circle_at_top,rgba(0,169,206,0.3),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.4),rgba(234,248,255,0.88))]" />
                      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),transparent)]" />
                      <div className="absolute inset-x-6 top-6 rounded-full border border-[rgba(255,255,255,0.62)] bg-white/42 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-[#00a9ce] backdrop-blur-xl">
                        High-res water / yacht placeholder
                      </div>
                      <div className="absolute left-6 top-1/2 -translate-y-1/2 rounded-[28px] border border-[rgba(255,255,255,0.55)] bg-white/88 p-5 shadow-[0_16px_50px_rgba(10,47,79,0.08)]">
                        <div className="text-[10px] uppercase tracking-[0.3em] text-[#6d879c]">Featured route</div>
                        <div className="mt-2 max-w-[13rem] font-display text-3xl uppercase leading-[0.92] tracking-[0.06em] text-[#0a2f4f]">
                          Blue water, bright light.
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="rounded-[28px] border border-[rgba(0,169,206,0.12)] bg-white/92 p-5 shadow-[0_14px_50px_rgba(10,47,79,0.08)]">
                          <div className="flex items-center justify-between text-sm text-[#355772]">
                            <span>Marine concierge experience</span>
                            <span className="text-[#ffd23f]">01</span>
                          </div>
                          <div className="mt-3 h-2 rounded-full bg-[#e4f2fb]">
                            <div className="h-2 w-[82%] rounded-full bg-[linear-gradient(90deg,#00a9ce,#0a2f4f)] shadow-[0_0_24px_rgba(0,169,206,0.28)]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <div className="grid gap-4 md:grid-cols-4">
          {proof.map((item) => (
            <GlassPanel key={item} className="reveal-up">
              <p className="text-sm leading-8 text-[#4d6a84]">{item}</p>
            </GlassPanel>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Services"
          title="Charters, Sales, and Management"
          copy="The brand is organized into a simple three-tier system so the offering feels clear, premium, and easy to scan."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {services.map((item, index) => (
            <Card key={item.tier} className={index === 1 ? 'interactive-card reveal-up service-card lg:-translate-y-8' : 'interactive-card reveal-up service-card'}>
              <CardContent className="p-6">
                <div className="text-[11px] uppercase tracking-[0.34em] text-[#00a9ce]">{item.tier}</div>
                <h3 className="mt-3 font-display text-3xl uppercase leading-[0.92] tracking-[0.05em] text-[#0a2f4f]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-8 text-[#4d6a84] md:text-base">{item.copy}</p>
                <div className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <div key={point} className="flex items-center gap-3 rounded-2xl border border-[rgba(0,169,206,0.1)] bg-white px-4 py-3 text-sm text-[#355772] transition-all duration-300 hover:border-[rgba(0,169,206,0.24)] hover:shadow-[0_0_24px_rgba(0,169,206,0.12)]">
                      <span className="h-2 w-2 rounded-full bg-[#ffd23f] shadow-[0_0_16px_rgba(255,210,63,0.6)]" />
                      {point}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="fleet" className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Fleet"
          title="A presentation that feels pressable"
          copy="The showcase cards use lift, glow, and a clean marine look so they read like premium product tiles instead of generic boxes."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {fleet.map((item, index) => (
            <div key={item.title} className={index === 1 ? 'lg:translate-y-8' : ''}>
              <a href="#inquiry" className="group block outline-none reveal-up">
                <Card className="interactive-card h-full overflow-hidden border border-[rgba(0,169,206,0.12)] bg-white/86 shadow-[0_16px_60px_rgba(10,47,79,0.08)] group-hover:border-[rgba(0,169,206,0.26)] group-hover:shadow-[0_24px_80px_rgba(0,169,206,0.14)]">
                  <CardContent className="flex h-full flex-col p-0">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[linear-gradient(180deg,#effaff,#dff3fb)]">
                      <div className="absolute inset-0 fleet-image" />
                      <div className="absolute left-5 top-5 rounded-full border border-[rgba(255,255,255,0.7)] bg-white/50 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[#0a2f4f] backdrop-blur-xl">
                        {item.size}
                      </div>
                      <div className="absolute bottom-5 left-5 rounded-full border border-[rgba(255,210,63,0.4)] bg-[rgba(255,210,63,0.16)] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[#0a2f4f] backdrop-blur-xl">
                        Yellow accent
                      </div>
                    </div>
                    <div className="flex h-full flex-col p-6">
                      <div className="text-[11px] uppercase tracking-[0.34em] text-[#00a9ce]">{item.title}</div>
                      <p className="mt-4 text-sm leading-8 text-[#4d6a84] md:text-base">{item.copy}</p>
                      <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-[#00a9ce]">
                        <span>Press to explore</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Design Language"
          title="Whites, ocean blues, and bright yellow energy"
          copy="The composition intentionally stays bright, editorial, and tropical with strong contrast so it feels closer to a luxury marine showroom than a template landing page."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <GlassPanel className="reveal-up lg:translate-y-10">
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#00a9ce]">Premium Surface</div>
            <h3 className="mt-4 font-display text-3xl uppercase leading-[0.9] tracking-[0.05em] text-[#0a2f4f] md:text-5xl">
              Bright, airy, and more expensive-looking
            </h3>
            <p className="mt-4 text-sm leading-8 text-[#4d6a84] md:text-base">
              Every surface is tuned for white space, glass depth, and a crisp marine identity with tactile feedback on hover and tap.
            </p>
          </GlassPanel>
          <Card className="interactive-card reveal-up border border-[rgba(0,169,206,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(236,248,253,0.88))] shadow-[0_20px_70px_rgba(10,47,79,0.1)]">
            <CardContent className="grid gap-4 p-6 md:grid-cols-2 md:p-7">
              {[
                'Ocean-blue structure anchors the layout.',
                'Bright yellow accents create luxury contrast.',
                'Glassmorphism cards feel pressable on hover.',
                'Oversized display type gives the site presence.',
              ].map((item, idx) => (
                <div key={item} className={idx % 2 === 0 ? 'md:translate-y-4' : 'md:translate-y-10'}>
                  <div className="rounded-[24px] border border-[rgba(0,169,206,0.1)] bg-white/92 p-5 shadow-[0_12px_40px_rgba(10,47,79,0.06)]">
                    <div className="text-[11px] uppercase tracking-[0.3em] text-[#00a9ce]">Layer {idx + 1}</div>
                    <p className="mt-3 text-sm leading-8 text-[#4d6a84]">{item}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Occasions"
          title="Designed for the moments that matter"
          copy="This section keeps the offering grounded in real use cases while maintaining the bright marine-sales tone."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {occasions.map((item, index) => (
            <Card key={item} className={index === 1 ? 'interactive-card reveal-up service-card lg:-translate-y-6' : 'interactive-card reveal-up service-card'}>
              <CardContent className="p-5">
                <div className="font-display text-xl uppercase tracking-[0.06em] text-[#0a2f4f]">{item}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Process"
          title="Clear steps, minimal friction"
          copy="A marine luxury website should feel decisive and easy to navigate, so the process stays simple and visually clean."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <GlassPanel key={step.title} className={index === 1 ? 'reveal-up lg:-translate-y-6' : 'reveal-up'}>
              <div className="text-[11px] uppercase tracking-[0.32em] text-[#00a9ce]">Step 0{index + 1}</div>
              <h3 className="mt-3 font-display text-2xl uppercase leading-[0.92] tracking-[0.05em] text-[#0a2f4f]">{step.title}</h3>
              <p className="mt-4 text-sm leading-8 text-[#4d6a84]">{step.copy}</p>
            </GlassPanel>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Social Proof"
          title="The premium tone should feel confident"
          copy="Short, decisive copy helps reinforce the new aesthetic without adding visual clutter."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {proof.slice(0, 3).map((item) => (
            <GlassPanel key={item} className="reveal-up">
              <p className="text-sm leading-8 text-[#4d6a84]">{item}</p>
            </GlassPanel>
          ))}
        </div>
      </section>

      <section id="inquiry" className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <Card className="interactive-card overflow-hidden border border-[rgba(0,169,206,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(236,248,253,0.88))] shadow-[0_24px_80px_rgba(10,47,79,0.1)]">
          <CardContent className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="reveal-up">
              <div className="text-[11px] uppercase tracking-[0.34em] text-[#00a9ce]">Final Call</div>
              <h2 className="mt-4 max-w-2xl font-display text-4xl uppercase leading-[0.88] tracking-[0.05em] text-[#0a2f4f] md:text-6xl">
                Your Yacht. Your Terms.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-[#4d6a84] md:text-base">
                The Helm now reads like a premium marine sales site with a brighter white-and-blue palette, yellow accent energy, and a more immediate luxury feel.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Button href="#top" className="hover:scale-[1.03] active:scale-[0.99]">Return to Top</Button>
                <Button href="#fleet" variant="outline" className="hover:scale-[1.02]">Review Fleet</Button>
              </div>
            </div>
            <div className="reveal-up rounded-[28px] border border-[rgba(0,169,206,0.12)] bg-white/92 p-6 shadow-[0_16px_50px_rgba(10,47,79,0.08)]">
              <div className="space-y-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[#6d879c]">Concierge Request</div>
                  <div className="mt-2 font-display text-2xl uppercase tracking-[0.06em] text-[#0a2f4f]">Private booking request</div>
                </div>
                <div className="space-y-3 text-sm text-[#4d6a84]">
                  <div className="rounded-2xl border border-[rgba(0,169,206,0.08)] bg-[#f7fbff] px-4 py-3">Name: The Helm Client</div>
                  <div className="rounded-2xl border border-[rgba(0,169,206,0.08)] bg-[#f7fbff] px-4 py-3">Destination: Miami / Bahamas</div>
                  <div className="rounded-2xl border border-[rgba(0,169,206,0.08)] bg-[#f7fbff] px-4 py-3">Experience: White-glove marine luxury</div>
                </div>
                <Button href="#top" className="w-full hover:scale-[1.03] active:scale-[0.99]">Reserve the Deck</Button>
                <p className="text-xs leading-6 text-[#6d879c]">The Helm is a premium charter, sales, and management brand. Vessel availability is confirmed before booking.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <SectionHeading
          kicker="FAQ"
          title="Quick answers with a luxury tone"
          copy="Concise answers keep the page feeling clean, modern, and easy to trust."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {faqs.map((item) => (
            <GlassPanel key={item.q} className="reveal-up">
              <h3 className="font-display text-xl uppercase leading-[0.92] tracking-[0.05em] text-[#0a2f4f]">{item.q}</h3>
              <p className="mt-3 text-sm leading-8 text-[#4d6a84] md:text-base">{item.a}</p>
            </GlassPanel>
          ))}
        </div>
      </section>

      <footer className="border-t border-[rgba(10,47,79,0.08)] bg-white/76 pb-10 pt-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm text-[#6d879c] md:flex-row md:items-center md:justify-between md:px-8">
          <span>THE HELM</span>
          <span>Marine luxury charter concierge · Miami · Bahamas</span>
        </div>
      </footer>
    </main>
  );
}
