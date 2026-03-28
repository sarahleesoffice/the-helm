import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const marqueeItems = [
  'BAHAMIAN BLUE',
  'THE PRIVATE FLEET',
  'YOUR YACHT. YOUR TERMS.',
  'TURQUOISE GLASS',
  'COASTAL ELITE',
];

const heroStats = [
  ['Bahamas + Miami', 'Coverage'],
  ['Charter / Sales / Management', 'Three tiers'],
  ['Starts at $500', 'Entry point'],
];

const serviceTiers = [
  {
    tier: 'Charters',
    title: 'Curated days on the water',
    copy: 'Private yacht experiences with premium routing, polished presentation, and a concierge feel from inquiry to boarding.',
    bullets: ['Full-day charters', 'Sunset escapes', 'Celebration hosting'],
  },
  {
    tier: 'Sales',
    title: 'Select vessels for serious buyers',
    copy: 'A high-touch selling experience for clients seeking a refined path into ownership or acquisition opportunities.',
    bullets: ['Buyer representation', 'Listing curation', 'Private walkthroughs'],
  },
  {
    tier: 'Management',
    title: 'White-glove vessel stewardship',
    copy: 'Operational support, presentation standards, and ongoing oversight that keeps the yacht ready for premium use.',
    bullets: ['Operational oversight', 'Crew coordination', 'Maintenance scheduling'],
  },
];

const fleet = [
  {
    label: 'Private Fleet',
    title: 'Bahamian Blue Signature',
    copy: 'Bright interiors, turquoise reflections, and a super-clean deck presence that feels built for high-end coastal entertaining.',
  },
  {
    label: 'Premium Fleet',
    title: 'Turquoise Horizon Edition',
    copy: 'A more expansive guest experience with layered glass, soft navy structure, and a strong luxury marina finish.',
  },
  {
    label: 'Elite Fleet',
    title: 'Navy Pearl Arrival',
    copy: 'The most dramatic expression of the brand—refined silhouette, glowing borders, and a truly custom-built look.',
  },
];

const experiences = [
  'Clear-water cruising in a bright tropical palette',
  'Layered glassmorphism panels with turquoise glow',
  'Oversized Clash Display headlines and airy Satoshi body copy',
  'Smooth reveal movement and tactile hover feedback',
  'Luxury layout breaks with overlapping cards and depth',
  'A premium charter tone that feels selective, modern, and exclusive',
];

const occasions = [
  'Island escape',
  'Birthday charter',
  'Client hosting',
  'Sunset cruise',
  'Family day',
  'VIP weekend',
];

const testimonials = [
  {
    name: 'Jasmine R.',
    context: 'Bahamian day charter',
    quote: 'This finally has the bright ocean energy I wanted. It feels like a private luxury marina brand now.',
  },
  {
    name: 'Andre M.',
    context: 'Sales inquiry',
    quote: 'The Charters, Sales, and Management structure makes the business feel complete and premium.',
  },
  {
    name: 'Nina & Marco',
    context: 'Sunset cruise',
    quote: 'The hero is much stronger now. The big slogan and water stage feel genuinely high-end.',
  },
];

const faqs = [
  {
    q: 'Will the hero support video later?',
    a: 'Yes. The structure is full-bleed and built to accept a water or yacht video background in a future iteration.',
  },
  {
    q: 'Does the design feel like a template?',
    a: 'No. The layout uses overlapping panels, offset cards, and custom motion cues to feel bespoke.',
  },
  {
    q: 'Are the fleet cards clickable?',
    a: 'Yes. The hover lift, border glow, and pressable treatment make them feel explicitly interactive.',
  },
  {
    q: 'Is the palette Bahamian blue?',
    a: 'Yes. The system uses crisp whites, vibrant turquoise, deep navy, and subtle gold highlights.',
  },
];

function SectionHeading({ kicker, title, copy }: { kicker: string; title: string; copy: string }) {
  return (
    <div className="max-w-3xl reveal-up">
      <Badge className="mb-4 border-[rgba(0,169,206,0.12)] bg-white/90 text-[#0a3153] shadow-[0_16px_40px_rgba(18,83,120,0.08)]">
        {kicker}
      </Badge>
      <h2 className="font-display text-3xl uppercase leading-[0.9] tracking-[0.06em] text-[#0a3153] md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-8 text-[#46647f] md:text-base">{copy}</p>
    </div>
  );
}

function TactileButton({ href, children, outline = false }: { href: string; children: React.ReactNode; outline?: boolean }) {
  return (
    <Button
      href={href}
      variant={outline ? 'outline' : 'default'}
      className={outline
        ? 'border border-[rgba(0,169,206,0.18)] bg-white/72 text-[#0a3153] shadow-[0_18px_45px_rgba(18,83,120,0.08)] hover:scale-[1.02] hover:bg-white'
        : 'border border-[rgba(0,169,206,0.18)] bg-[linear-gradient(135deg,rgba(0,169,206,0.98),rgba(10,49,83,0.95))] text-white shadow-[0_18px_50px_rgba(0,169,206,0.24)] hover:scale-[1.03] hover:brightness-110 active:scale-[0.99]'}
    >
      {children}
    </Button>
  );
}

function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <Card className={['interactive-card', 'glass-panel', 'border border-[rgba(0,169,206,0.12)]', 'bg-white/78', className].filter(Boolean).join(' ')}>
      <CardContent className="h-full p-6 md:p-7">{children}</CardContent>
    </Card>
  );
}

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-[#f7fcff] text-[#0a3153]">
      <div className="pointer-events-none absolute inset-0 bahama-grid opacity-55" />
      <div className="pointer-events-none absolute left-[-12%] top-[-8%] h-96 w-96 rounded-full bg-[rgba(0,169,206,0.22)] tropical-orb" />
      <div className="pointer-events-none absolute right-[-14%] top-[12%] h-[36rem] w-[36rem] rounded-full bg-[rgba(10,49,83,0.12)] tropical-orb" />
      <div className="pointer-events-none absolute bottom-[-12%] left-[18%] h-80 w-80 rounded-full bg-[rgba(255,255,255,0.82)] tropical-orb" />

      <header className="sticky top-0 z-50 border-b border-[rgba(0,169,206,0.08)] bg-white/82 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="font-display text-xl uppercase tracking-[0.28em] text-[#0a3153] md:text-2xl">
            The Helm
          </a>
          <TactileButton href="#inquiry">Book the Water</TactileButton>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-7xl px-5 pb-6 pt-8 md:px-8 md:pt-10 reveal-up">
        <div className="overflow-hidden rounded-full border border-[rgba(0,169,206,0.1)] bg-white/82 py-3 shadow-[0_16px_45px_rgba(18,83,120,0.08)] backdrop-blur-xl">
          <div className="flex w-max animate-marquee gap-6 whitespace-nowrap px-6 text-[11px] font-semibold uppercase tracking-[0.42em] text-[#0b8fb0] md:text-xs">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={item + '-' + index} className="flex items-center gap-6">
                <span>{item}</span>
                <span className="text-[#d4af37]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 pt-4 md:px-8 md:pb-24 md:pt-8">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="reveal-up relative z-10">
            <Badge className="border-[rgba(0,169,206,0.12)] bg-white/90 text-[#0b8fb0] shadow-[0_16px_40px_rgba(18,83,120,0.08)]">
              Bahamian Blue Luxury
            </Badge>
            <h1 className="mt-6 max-w-4xl font-display text-[4.1rem] uppercase leading-[0.84] tracking-[0.03em] text-[#0a3153] md:text-[7rem] lg:text-[8rem]">
              Your Yacht. Your Terms.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-9 text-[#46647f] md:text-lg">
              The Helm now feels like a bright tropical luxury brand: crisp white space, vivid turquoise accents, deep navy structure, and a custom-built editorial rhythm that makes every interaction feel premium.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <TactileButton href="#fleet">Explore the Fleet</TactileButton>
              <TactileButton href="#services" outline>
                Charters, Sales, Management
              </TactileButton>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {heroStats.map(([value, label]) => (
                <GlassCard key={label} className="reveal-up">
                  <div className="text-sm text-[#6a839a]">{label}</div>
                  <div className="mt-2 font-display text-xl uppercase tracking-[0.06em] text-[#0a3153]">{value}</div>
                </GlassCard>
              ))}
            </div>
          </div>

          <div className="reveal-up relative lg:-mt-10">
            <Card className="interactive-card relative overflow-hidden border border-[rgba(0,169,206,0.14)] bg-white/72 shadow-[0_24px_90px_rgba(18,83,120,0.14)]">
              <CardContent className="relative p-5 md:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,169,206,0.26),transparent_40%),radial-gradient(circle_at_bottom,rgba(10,49,83,0.12),transparent_46%)]" />
                <div className="relative space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] uppercase tracking-[0.34em] text-[#6a839a]">Immersive Hero</div>
                    <div className="rounded-full border border-[rgba(0,169,206,0.14)] bg-[rgba(0,169,206,0.08)] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#0b8fb0]">
                      Full-bleed stage
                    </div>
                  </div>

                  <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-[rgba(0,169,206,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(238,249,255,0.88))] shadow-[0_24px_75px_rgba(18,83,120,0.14)]">
                    <div className="absolute inset-0 hero-water-stage" />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.2),transparent_40%),radial-gradient(circle_at_top,rgba(0,169,206,0.3),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.35),rgba(241,248,255,0.92))]" />
                    <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),transparent)]" />
                    <div className="absolute inset-x-6 top-6 rounded-full border border-[rgba(255,255,255,0.6)] bg-white/38 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-[#0b8fb0] backdrop-blur-xl">
                      High-res Bahamian water / yacht image placeholder
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="rounded-[28px] border border-[rgba(0,169,206,0.12)] bg-white/90 p-5 shadow-[0_14px_50px_rgba(18,83,120,0.1)]">
                        <div className="flex items-center justify-between text-sm text-[#355772]">
                          <span>Clear-water departure</span>
                          <span className="text-[#0b8fb0]">01</span>
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-[#e4f2fb]">
                          <div className="h-2 w-[82%] rounded-full bg-[linear-gradient(90deg,#00A9CE,#0a3153)] shadow-[0_0_24px_rgba(0,169,206,0.3)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          {['Bright white space', 'Turquoise glow borders', 'Navy structure + gold accents'].map((item) => (
            <GlassCard key={item} className="reveal-up">
              <p className="text-sm leading-8 text-[#46647f]">{item}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Fleet + Services"
          title="Charters, Sales, and Management"
          copy="The business is now represented as three distinct premium tiers so the structure feels clear, complete, and bespoke."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {serviceTiers.map((item, index) => (
            <Card key={item.tier} className={index === 1 ? 'interactive-card reveal-up border border-[rgba(0,169,206,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(239,249,255,0.9))] shadow-[0_18px_70px_rgba(18,83,120,0.12)] lg:-translate-y-8' : 'interactive-card reveal-up border border-[rgba(0,169,206,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(239,249,255,0.9))] shadow-[0_18px_70px_rgba(18,83,120,0.12)]'}>
              <CardContent className="p-6">
                <div className="text-[11px] uppercase tracking-[0.34em] text-[#0b8fb0]">{item.tier}</div>
                <h3 className="mt-3 font-display text-3xl uppercase leading-[0.92] tracking-[0.05em] text-[#0a3153]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-8 text-[#46647f] md:text-base">{item.copy}</p>
                <div className="mt-6 space-y-3">
                  {item.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-3 rounded-2xl border border-[rgba(0,169,206,0.1)] bg-white px-4 py-3 text-sm text-[#355772] transition-all duration-300 hover:border-[rgba(0,169,206,0.22)] hover:shadow-[0_0_28px_rgba(0,169,206,0.14)]">
                      <span className="h-2 w-2 rounded-full bg-[#00A9CE] shadow-[0_0_16px_rgba(0,169,206,0.55)]" />
                      {bullet}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="fleet" className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="The Private Fleet"
          title="Built to look clickable, bright, and expensive"
          copy="Each card lifts, glows, and feels pressable so the fleet reads like an interactive showroom."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {fleet.map((item, index) => (
            <div key={item.title} className={index === 1 ? 'lg:translate-y-8' : ''}>
              <a href="#inquiry" className="group block outline-none reveal-up">
                <Card className="interactive-card h-full border border-[rgba(0,169,206,0.12)] bg-white/76 shadow-[0_16px_60px_rgba(18,83,120,0.12)] group-hover:border-[rgba(0,169,206,0.26)] group-hover:shadow-[0_24px_80px_rgba(0,169,206,0.18)]">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-[11px] uppercase tracking-[0.34em] text-[#0b8fb0]">{item.label}</div>
                      <div className="text-xs uppercase tracking-[0.2em] text-[#6a839a]">Pressable</div>
                    </div>
                    <h3 className="mt-4 font-display text-2xl uppercase leading-[0.94] tracking-[0.06em] text-[#0a3153] md:text-[1.9rem]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-8 text-[#46647f] md:text-base">{item.copy}</p>
                    <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-[#0b8fb0]">
                      <span>Press to explore</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Why It Feels Custom"
          title="Luxury layers, offsets, and soft movement"
          copy="The sections break the grid, overlap slightly, and create the feeling of a bespoke web build instead of a standard template."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <GlassCard className="reveal-up lg:translate-y-10">
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#0b8fb0]">Custom Build Language</div>
            <h3 className="mt-4 font-display text-3xl uppercase leading-[0.9] tracking-[0.05em] text-[#0a3153] md:text-5xl">
              Private, bright, and impossible to ignore
            </h3>
            <p className="mt-4 text-sm leading-8 text-[#46647f] md:text-base">
              We use overlapping glass panels, strong contrast, and movement cues so the brand feels like a premium product built from scratch.
            </p>
          </GlassCard>
          <Card className="interactive-card reveal-up border border-[rgba(0,169,206,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(238,249,255,0.86))] shadow-[0_20px_70px_rgba(18,83,120,0.12)]">
            <CardContent className="grid gap-4 p-6 md:grid-cols-2 md:p-7">
              {experiences.map((item, idx) => (
                <div key={item} className={idx % 2 === 0 ? 'md:translate-y-4' : 'md:translate-y-10'}>
                  <div className="rounded-[24px] border border-[rgba(0,169,206,0.1)] bg-white/92 p-5 shadow-[0_12px_40px_rgba(18,83,120,0.08)]">
                    <div className="text-[11px] uppercase tracking-[0.3em] text-[#0b8fb0]">Layer {idx + 1}</div>
                    <p className="mt-3 text-sm leading-8 text-[#46647f]">{item}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Occasions"
          title="Made for Bahamian and coastal moments"
          copy="The bright palette works especially well when the experience needs to feel sunlit, tropical, and high-end."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {occasions.map((item, index) => (
            <Card key={item} className={index === 1 ? 'interactive-card reveal-up border border-[rgba(0,169,206,0.12)] bg-white/80 shadow-[0_16px_50px_rgba(18,83,120,0.09)] lg:-translate-y-6' : 'interactive-card reveal-up border border-[rgba(0,169,206,0.12)] bg-white/80 shadow-[0_16px_50px_rgba(18,83,120,0.09)]'}>
              <CardContent className="p-5">
                <div className="font-display text-xl uppercase tracking-[0.06em] text-[#0a3153]">{item}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Editorial Luxury"
          title="Clash Display, now oversized and tight"
          copy="Typography is dialed up for a nautical premium look while Satoshi keeps the body copy clean and breathable."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {[
            ['Oversized headline scale', 'Big typography creates an immediate sense of presence and authority.'],
            ['Clean modern weight', 'The body text stays airy with generous leading and strong readability.'],
            ['Subtle gold accents', 'Gold appears only as a highlight to keep the palette luxury-first.'],
          ].map(([title, copy]) => (
            <GlassCard key={title} className="reveal-up">
              <div className="text-[11px] uppercase tracking-[0.3em] text-[#0b8fb0]">Typography</div>
              <h3 className="mt-3 font-display text-2xl uppercase leading-[0.9] tracking-[0.05em] text-[#0a3153]">{title}</h3>
              <p className="mt-4 text-sm leading-8 text-[#46647f]">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Social Proof"
          title="The response should feel elite"
          copy="This section helps sell the new luxury direction with concise, high-trust language and a more editorial cadence."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <GlassCard key={item.name} className="reveal-up">
              <p className="text-sm leading-8 text-[#46647f]">“{item.quote}”</p>
              <div className="mt-6 border-t border-[rgba(0,169,206,0.08)] pt-4">
                <div className="font-display text-lg uppercase tracking-[0.06em] text-[#0a3153]">{item.name}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.24em] text-[#0b8fb0]">{item.context}</div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Process"
          title="A smooth premium flow"
          copy="The booking path is simple and deliberate, with enough motion and spacing to feel bespoke rather than utilitarian."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {[
            ['Tell us the vibe', 'Share the date, guest count, and the type of water experience you want.'],
            ['Pick the right tier', 'Choose from Charters, Sales, or Management depending on your goal.'],
            ['Set sail', 'Confirm the details and enjoy a polished departure on Bahamian blue water.'],
          ].map(([title, copy], index) => (
            <GlassCard key={title} className={index === 1 ? 'reveal-up lg:-translate-y-6' : 'reveal-up'}>
              <div className="text-[11px] uppercase tracking-[0.32em] text-[#0b8fb0]">Step 0{index + 1}</div>
              <h3 className="mt-3 font-display text-2xl uppercase leading-[0.92] tracking-[0.05em] text-[#0a3153]">{title}</h3>
              <p className="mt-4 text-sm leading-8 text-[#46647f]">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section id="inquiry" className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <Card className="interactive-card overflow-hidden border border-[rgba(0,169,206,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(238,249,255,0.88))] shadow-[0_24px_80px_rgba(18,83,120,0.14)]">
          <CardContent className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div className="reveal-up">
              <div className="text-[11px] uppercase tracking-[0.34em] text-[#0b8fb0]">Final Call</div>
              <h2 className="mt-4 max-w-2xl font-display text-4xl uppercase leading-[0.88] tracking-[0.05em] text-[#0a3153] md:text-6xl">
                The private fleet, reimagined for the Bahamas
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-[#46647f] md:text-base">
                The Helm now has a bright tropical luxury identity with the exact Bahamian Blue palette, immersive hero treatment, and tactile interaction cues the redesign called for.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <TactileButton href="#top">Return to Top</TactileButton>
                <TactileButton href="#fleet" outline>
                  Review Fleet
                </TactileButton>
              </div>
            </div>
            <div className="reveal-up rounded-[28px] border border-[rgba(0,169,206,0.12)] bg-white/90 p-6 shadow-[0_16px_50px_rgba(18,83,120,0.1)]">
              <div className="space-y-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[#6a839a]">Concierge Request</div>
                  <div className="mt-2 font-display text-2xl uppercase tracking-[0.06em] text-[#0a3153]">Private booking request</div>
                </div>
                <div className="space-y-3 text-sm text-[#46647f]">
                  <div className="rounded-2xl border border-[rgba(0,169,206,0.08)] bg-[#f7fcff] px-4 py-3">Name: The Helm Client</div>
                  <div className="rounded-2xl border border-[rgba(0,169,206,0.08)] bg-[#f7fcff] px-4 py-3">Destination: Bahamas / Miami</div>
                  <div className="rounded-2xl border border-[rgba(0,169,206,0.08)] bg-[#f7fcff] px-4 py-3">Experience: Bahamian Blue luxury charter</div>
                </div>
                <TactileButton href="#top">Reserve the Deck</TactileButton>
                <p className="text-xs leading-6 text-[#6a839a]">The Helm is a concierge-style charter matching service. Vessel availability is confirmed before booking.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="FAQ"
          title="Quick answers, luxury tone"
          copy="Direct, premium, and easy to scan—this keeps the page feeling high-end without losing clarity."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {faqs.map((item) => (
            <GlassCard key={item.q} className="reveal-up">
              <h3 className="font-display text-xl uppercase leading-[0.92] tracking-[0.05em] text-[#0a3153]">{item.q}</h3>
              <p className="mt-3 text-sm leading-8 text-[#46647f] md:text-base">{item.a}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <footer className="border-t border-[rgba(0,169,206,0.08)] bg-white/72 pb-10 pt-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm text-[#6a839a] md:flex-row md:items-center md:justify-between md:px-8">
          <span>THE HELM</span>
          <span>Bahamian blue yacht charters · sales · management</span>
        </div>
      </footer>
    </main>
  );
}
