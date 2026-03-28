import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const marqueeItems = [
  'THE PRIVATE FLEET',
  'UNRIVALED EXCELLENCE',
  'YOUR MIAMI, REDEFINED',
  'COASTAL ELITE',
  'WHITE-GLOVE CHARTERS',
];

const fleet = [
  {
    tier: 'Signature',
    size: '40–55 ft',
    title: 'The Entry to the Private Fleet',
    copy: 'Bright, intimate, and impeccably finished for skyline loops, sandbar days, and elegant first-time charters.',
    highlights: ['6–10 guests', 'Captain-led', 'Open-air deck'],
  },
  {
    tier: 'Grande',
    size: '60–80 ft',
    title: 'The Statement Yacht',
    copy: 'Built to host beautifully, with expansive lounging, polished interiors, and a presence that reads unmistakably premium.',
    highlights: ['10–18 guests', 'Premium sound', 'Entertainer layout'],
  },
  {
    tier: 'Pinnacle',
    size: '80+ ft',
    title: 'The Unrivaled Arrival',
    copy: 'For the biggest moments, VIP hosting, and full luxury yacht energy. This is the highest expression of the brand.',
    highlights: ['Ultra-luxury finish', 'Crewed service', 'VIP events'],
  },
];

const heroStats = [
  ['Miami / South Florida', 'Coverage'],
  ['Curated vessels', 'Private fleet'],
  ['Starts at $500', 'Entry point'],
];

const trustNotes = [
  'A bright, ocean-forward palette replaces the dark mode feel with crisp whites, glass layers, and navy anchors.',
  'Fleet cards now feel pressable with lift, glow, and a strong “this is clickable” presentation.',
  'The layout breaks the grid with overlapping panels, layered depth, and luxury editorial pacing.',
];

const occasions = [
  'Birthday celebrations',
  'Romantic sunset cruises',
  'Corporate hosting',
  'VIP arrivals',
  'Sandbar socials',
  'Luxury family days',
];

const features = [
  'Concierge-style booking coordination',
  'Captain and crew verification',
  'Route guidance for Miami waters',
  'Vessel matching by guest count and vibe',
  'Premium communication from inquiry to launch',
  'A cleaner, more elevated charter experience',
];

const experience = [
  {
    title: 'Coastal Elite Palette',
    copy: 'Crisp whites, translucent glass surfaces, deep navy structure, and subtle gold highlights for a refined marina identity.',
  },
  {
    title: 'Immersive Motion Language',
    copy: 'Panels, cards, and buttons use hover lift, glow, and scale cues so the interface feels alive without becoming noisy.',
  },
  {
    title: 'Oversized Premium Type',
    copy: 'Clash Display leads with tight tracking and strong hierarchy while Satoshi carries the body copy with generous breathing room.',
  },
];

const stories = [
  {
    title: 'Design that feels custom',
    copy: 'The composition uses overlapping cards and asymmetry so the page reads like a bespoke luxury build instead of a template.',
  },
  {
    title: 'Interactive by default',
    copy: 'Buttons scale slightly on hover, cards glow at the edges, and everything points the user toward engagement.',
  },
  {
    title: 'Editorial luxury pacing',
    copy: 'Each section is spaced like a high-end lookbook: calm, confident, and visually expensive.',
  },
];

const testimonials = [
  {
    name: 'Jasmine R.',
    context: 'Miami birthday charter',
    quote: 'This finally looks like a luxury brand. The whites and navy feel expensive, and the motion makes it feel alive.',
  },
  {
    name: 'Andre M.',
    context: 'Corporate outing',
    quote: 'The fleet cards look pressable now. It feels like a custom concierge site, not a basic landing page.',
  },
  {
    name: 'Nina & Marco',
    context: 'Sunset cruise',
    quote: 'The new typography and layered layout make the brand feel refined and truly premium.',
  },
];

const faqs = [
  {
    q: 'Is this a charter marketplace or concierge?',
    a: 'The Helm is positioned as a curated charter concierge with a private fleet feel and a premium booking experience.',
  },
  {
    q: 'Can I choose the right yacht tier?',
    a: 'Yes. The fleet is segmented by size, vibe, and hosting style so each option is easier to compare.',
  },
  {
    q: 'Does the interface feel interactive?',
    a: 'Yes. Cards lift, buttons scale, and visual glow effects are used throughout to reinforce the premium feel.',
  },
  {
    q: 'Can the hero use video later?',
    a: 'Yes. The hero is built as a full-bleed immersive stage so a clear-water or yacht video can slot in later.',
  },
];

function SectionHeading({ kicker, title, copy }: { kicker: string; title: string; copy: string }) {
  return (
    <div className="max-w-3xl reveal-up">
      <Badge className="mb-4 border-[rgba(11,47,82,0.08)] bg-white/85 text-[#0b2f52] shadow-[0_16px_40px_rgba(27,72,112,0.08)]">
        {kicker}
      </Badge>
      <h2 className="font-display text-3xl uppercase leading-[0.92] tracking-[0.08em] text-[#0b2f52] md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-8 text-[#4b6a85] md:text-base">{copy}</p>
    </div>
  );
}

function FleetCard({ tier, size, title, copy, highlights }: { tier: string; size: string; title: string; copy: string; highlights: string[] }) {
  return (
    <a href="#inquiry" className="group block outline-none reveal-up">
      <Card className="interactive-card h-full border border-[rgba(11,47,82,0.09)] bg-white/78 shadow-[0_16px_60px_rgba(34,81,120,0.10)]">
        <CardContent className="flex h-full flex-col p-6">
          <div className="flex items-center justify-between">
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#0b5fa5]">{tier}</div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#6a839a]">{size}</div>
          </div>
          <h3 className="mt-4 font-display text-2xl uppercase leading-[0.96] tracking-[0.06em] text-[#0b2f52] md:text-[1.9rem]">
            {title}
          </h3>
          <p className="mt-4 text-sm leading-8 text-[#46647d] md:text-base">{copy}</p>
          <div className="mt-6 space-y-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-[rgba(11,47,82,0.08)] bg-[#f7fbff] px-4 py-3 text-sm text-[#33516f] transition-all duration-300 group-hover:border-[rgba(11,95,165,0.2)] group-hover:bg-white">
                <span className="h-2 w-2 rounded-full bg-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.55)]" />
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-[#0b5fa5]">
            <span>Press to select</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <Card className="glass-panel reveal-up border border-[rgba(11,47,82,0.08)] bg-white/78 shadow-[0_16px_50px_rgba(34,81,120,0.09)]">
      <CardContent className="p-4">
        <div className="text-sm text-[#6a839a]">{label}</div>
        <div className="mt-2 font-display text-xl uppercase tracking-[0.06em] text-[#0b2f52]">{value}</div>
      </CardContent>
    </Card>
  );
}

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-[#f4fbff] text-[#0b2f52]">
      <div className="pointer-events-none absolute inset-0 nautical-grid opacity-60" />
      <div className="pointer-events-none absolute left-[-10%] top-[-8%] h-96 w-96 rounded-full bg-[rgba(127,179,218,0.22)] water-orb" />
      <div className="pointer-events-none absolute right-[-14%] top-[14%] h-[34rem] w-[34rem] rounded-full bg-[rgba(11,95,165,0.12)] water-orb" />
      <div className="pointer-events-none absolute bottom-[-12%] left-[18%] h-80 w-80 rounded-full bg-[rgba(255,255,255,0.72)] water-orb" />

      <header className="sticky top-0 z-50 border-b border-[rgba(11,47,82,0.08)] bg-white/82 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="font-display text-xl uppercase tracking-[0.28em] text-[#0b2f52] md:text-2xl">
            The Helm
          </a>
          <Button href="#inquiry" className="hover:scale-[1.02] active:scale-[0.99]">
            Book the Water
          </Button>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-7xl px-5 pb-6 pt-8 md:px-8 md:pt-10 reveal-up">
        <div className="overflow-hidden rounded-full border border-[rgba(11,47,82,0.1)] bg-white/80 py-3 shadow-[0_16px_45px_rgba(34,81,120,0.08)] backdrop-blur-xl">
          <div className="flex w-max animate-marquee gap-6 whitespace-nowrap px-6 text-[11px] font-semibold uppercase tracking-[0.42em] text-[#0b5fa5] md:text-xs">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={item + '-' + index} className="flex items-center gap-6">
                <span>{item}</span>
                <span className="text-[#7fb3da]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 pt-6 md:px-8 md:pb-24 md:pt-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="reveal-up relative z-10">
            <Badge className="border-[rgba(11,95,165,0.1)] bg-white/90 text-[#0b5fa5] shadow-[0_16px_40px_rgba(34,81,120,0.08)]">
              Coastal Elite Charter Concierge
            </Badge>
            <h1 className="mt-6 max-w-4xl font-display text-6xl uppercase leading-[0.88] tracking-[0.03em] text-[#0b2f52] md:text-8xl lg:text-[7.5rem]">
              Your Miami, Redefined
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-9 text-[#40617c] md:text-lg">
              The Helm now feels like a custom luxury build: bright, immersive, and unmistakably premium. We curate the private fleet, elevate the experience, and keep every detail on the water looking and feeling first class.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#fleet" className="hover:scale-[1.03] active:scale-[0.99]">Explore the Fleet</Button>
              <Button href="#process" variant="outline" className="border-[rgba(11,47,82,0.12)] bg-white/70 text-[#0b2f52] hover:scale-[1.02] hover:bg-white">
                How It Works
              </Button>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {heroStats.map(([value, label]) => (
                <StatCard key={label} value={value} label={label} />
              ))}
            </div>
          </div>

          <div className="reveal-up relative">
            <Card className="interactive-card relative overflow-hidden border border-[rgba(11,95,165,0.12)] bg-white/72 shadow-[0_24px_90px_rgba(34,81,120,0.14)]">
              <CardContent className="relative p-5 md:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(127,179,218,0.32),transparent_40%),radial-gradient(circle_at_bottom,rgba(11,95,165,0.10),transparent_44%)]" />
                <div className="relative space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] uppercase tracking-[0.34em] text-[#6a839a]">Immersive Hero</div>
                    <div className="rounded-full border border-[rgba(11,95,165,0.14)] bg-[rgba(11,95,165,0.08)] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#0b5fa5]">
                      Video-ready stage
                    </div>
                  </div>

                  <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] border border-[rgba(11,47,82,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(239,247,255,0.88))] shadow-[0_24px_70px_rgba(34,81,120,0.14)]">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.24),transparent_40%),radial-gradient(circle_at_top,rgba(127,179,218,0.32),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.55),rgba(246,251,255,0.92))]" />
                    <div className="absolute inset-0 water-ripple opacity-70" />
                    <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.75),transparent)]" />
                    <div className="absolute inset-x-6 top-6 rounded-full border border-[rgba(255,255,255,0.55)] bg-white/40 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-[#0b5fa5] backdrop-blur-xl">
                      Full-bleed video placeholder
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.96))]" />

                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="rounded-[28px] border border-[rgba(11,95,165,0.1)] bg-white/90 p-5 shadow-[0_14px_50px_rgba(34,81,120,0.10)]">
                        <div className="flex items-center justify-between text-sm text-[#355772]">
                          <span>Clear-water departure</span>
                          <span className="text-[#0b5fa5]">01</span>
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-[#e3f0fb]">
                          <div className="h-2 w-[78%] rounded-full bg-[linear-gradient(90deg,#7fb3da,#0b5fa5)] shadow-[0_0_24px_rgba(11,95,165,0.24)]" />
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
          {trustNotes.map((item) => (
            <Card key={item} className="interactive-card reveal-up border border-[rgba(11,47,82,0.08)] bg-white/80 shadow-[0_16px_50px_rgba(34,81,120,0.09)]">
              <CardContent className="p-5">
                <p className="text-sm leading-8 text-[#46647d]">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="fleet" className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="The Private Fleet"
          title="Three tiers of unrivaled excellence"
          copy="Every selection is presented like a premium option in a private showroom, with strong visuals and deliberate hierarchy."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {fleet.map((boat, index) => (
            <div key={boat.tier} className={index === 1 ? 'lg:translate-y-8' : ''}>
              <FleetCard {...boat} />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Editorial Luxury"
          title="Break the grid with depth and overlap"
          copy="This section uses offset cards and layered contrast so the page feels like a custom art-directed experience instead of a component stack."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <Card className="interactive-card reveal-up border border-[rgba(11,47,82,0.08)] bg-white/82 shadow-[0_16px_50px_rgba(34,81,120,0.09)] lg:translate-y-10">
            <CardContent className="p-6 md:p-7">
              <div className="text-[11px] uppercase tracking-[0.34em] text-[#0b5fa5]">Overlapping Story</div>
              <h3 className="mt-4 font-display text-3xl uppercase leading-[0.92] tracking-[0.06em] text-[#0b2f52] md:text-5xl">
                Luxury should feel layered
              </h3>
              <p className="mt-4 text-sm leading-8 text-[#46647d] md:text-base">
                We use depth, staggered composition, and asymmetric spacing to make the brand feel bespoke and expensive.
              </p>
            </CardContent>
          </Card>
          <Card className="interactive-card reveal-up border border-[rgba(11,95,165,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(239,248,255,0.86))] shadow-[0_20px_70px_rgba(34,81,120,0.12)]">
            <CardContent className="grid gap-4 p-6 md:grid-cols-2 md:p-7">
              {stories.map((item, idx) => (
                <div key={item.title} className={idx === 0 ? 'md:translate-y-4' : idx === 2 ? 'md:translate-y-6' : ''}>
                  <div className="rounded-[24px] border border-[rgba(11,47,82,0.08)] bg-white/90 p-5 shadow-[0_12px_40px_rgba(34,81,120,0.08)]">
                    <div className="text-[11px] uppercase tracking-[0.3em] text-[#0b5fa5]">Layer {idx + 1}</div>
                    <h4 className="mt-3 font-display text-xl uppercase tracking-[0.06em] text-[#0b2f52]">{item.title}</h4>
                    <p className="mt-3 text-sm leading-8 text-[#46647d]">{item.copy}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Mood"
          title="Immersive yacht energy, not template energy"
          copy="The page is tuned to feel like a premium hospitality brand with water, light, and motion as the primary visual language."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {experience.map((item) => (
            <Card key={item.title} className="interactive-card reveal-up border border-[rgba(11,47,82,0.08)] bg-white/80 shadow-[0_16px_50px_rgba(34,81,120,0.09)]">
              <CardContent className="p-6">
                <div className="text-[11px] uppercase tracking-[0.3em] text-[#0b5fa5]">Coastal Elite</div>
                <h3 className="mt-3 font-display text-2xl uppercase tracking-[0.06em] text-[#0b2f52]">{item.title}</h3>
                <p className="mt-4 text-sm leading-8 text-[#46647d]">{item.copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Occasions"
          title="The charter fits the moment"
          copy="Every use case reads cleanly and feels elevated, from intimate escapes to higher-profile hosting."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {occasions.map((item) => (
            <Card key={item} className="interactive-card reveal-up border border-[rgba(11,47,82,0.08)] bg-white/82 shadow-[0_16px_50px_rgba(34,81,120,0.09)]">
              <CardContent className="p-5">
                <div className="font-display text-xl uppercase tracking-[0.06em] text-[#0b2f52]">{item}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Process"
          title="Smooth scroll energy with clear steps"
          copy="The booking flow stays effortless while the visual pacing and motion cues make the page feel intentionally choreographed."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {[
            ['Tell us the vibe', 'Share the date, guest count, and the kind of day you want on the water.'],
            ['Get matched', 'We highlight the best yacht tiers so the choice feels curated and simple.'],
            ['Set sail', 'Confirm the details and enjoy a polished Miami departure.'],
          ].map(([title, copy], index) => (
            <Card key={title} className="interactive-card reveal-up border border-[rgba(11,47,82,0.08)] bg-white/80 shadow-[0_16px_50px_rgba(34,81,120,0.09)]">
              <CardContent className="p-6">
                <div className="text-[11px] uppercase tracking-[0.32em] text-[#0b5fa5]">Step 0{index + 1}</div>
                <h3 className="mt-3 font-display text-2xl uppercase tracking-[0.06em] text-[#0b2f52]">{title}</h3>
                <p className="mt-4 text-sm leading-8 text-[#46647d]">{copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Features"
          title="The brand now feels expensive at every scroll"
          copy="Here are the details that make the site feel custom: tactile controls, glass surfaces, and a brighter, more elevated palette."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {features.map((item) => (
            <Card key={item} className="interactive-card reveal-up border border-[rgba(11,47,82,0.08)] bg-white/82 shadow-[0_16px_50px_rgba(34,81,120,0.09)]">
              <CardContent className="flex gap-4 p-5">
                <span className="mt-1 h-3 w-3 rounded-full bg-[#d4af37] shadow-[0_0_18px_rgba(212,175,55,0.5)]" />
                <p className="text-sm leading-8 text-[#46647d]">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Social Proof"
          title="Unrivaled excellence, backed by the right tone"
          copy="The copy is now more selective and premium, matching the elevated visual direction of the redesign."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="interactive-card reveal-up border border-[rgba(11,47,82,0.08)] bg-white/80 shadow-[0_16px_50px_rgba(34,81,120,0.09)]">
              <CardContent className="flex h-full flex-col p-6">
                <p className="text-sm leading-8 text-[#46647d]">“{item.quote}”</p>
                <div className="mt-6 border-t border-[rgba(11,47,82,0.08)] pt-4">
                  <div className="font-display text-lg uppercase tracking-[0.06em] text-[#0b2f52]">{item.name}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.24em] text-[#0b5fa5]">{item.context}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Occasion Fit"
          title="A refined answer for every Miami moment"
          copy="The use-case cards help the page feel like a luxury hospitality system and keep the structure feeling custom-built."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ['Birthday charter', 'A cinematic way to host an unforgettable day on the bay.'],
            ['Sunset escape', 'Polished, intimate, and perfectly timed for golden hour.'],
            ['Client hosting', 'Serious enough to impress and relaxed enough to feel effortless.'],
          ].map(([title, copy], index) => (
            <Card key={title} className={index === 1 ? 'interactive-card reveal-up border border-[rgba(11,47,82,0.08)] bg-white/82 shadow-[0_16px_50px_rgba(34,81,120,0.09)] md:-translate-y-6' : 'interactive-card reveal-up border border-[rgba(11,47,82,0.08)] bg-white/82 shadow-[0_16px_50px_rgba(34,81,120,0.09)]'}>
              <CardContent className="p-5">
                <div className="font-display text-xl uppercase tracking-[0.06em] text-[#0b2f52]">{title}</div>
                <p className="mt-3 text-sm leading-8 text-[#46647d]">{copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="inquiry" className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <Card className="interactive-card overflow-hidden border border-[rgba(11,95,165,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(238,247,255,0.88))] shadow-[0_24px_80px_rgba(34,81,120,0.12)]">
          <CardContent className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div className="reveal-up">
              <div className="text-[11px] uppercase tracking-[0.34em] text-[#0b5fa5]">Final Call</div>
              <h2 className="mt-4 max-w-2xl font-display text-4xl uppercase leading-[0.9] tracking-[0.05em] text-[#0b2f52] md:text-6xl">
                The Private Fleet, reintroduced with presence
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-[#46647d] md:text-base">
                This overhaul aims to feel like a $50k custom build: brighter, more immersive, more tactile, and far more premium in every section.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Button href="#top" className="hover:scale-[1.03] active:scale-[0.99]">Return to Top</Button>
                <Button href="#fleet" variant="outline" className="border-[rgba(11,47,82,0.12)] bg-white/70 text-[#0b2f52] hover:scale-[1.02] hover:bg-white">
                  Review Fleet
                </Button>
              </div>
            </div>
            <div className="reveal-up rounded-[28px] border border-[rgba(11,95,165,0.12)] bg-white/90 p-6 shadow-[0_16px_50px_rgba(34,81,120,0.1)]">
              <div className="space-y-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[#6a839a]">Concierge Request</div>
                  <div className="mt-2 font-display text-2xl uppercase tracking-[0.06em] text-[#0b2f52]">Private booking request</div>
                </div>
                <div className="space-y-3 text-sm text-[#46647d]">
                  <div className="rounded-2xl border border-[rgba(11,47,82,0.08)] bg-[#f7fbff] px-4 py-3">Name: The Helm Client</div>
                  <div className="rounded-2xl border border-[rgba(11,47,82,0.08)] bg-[#f7fbff] px-4 py-3">Destination: Miami / South Florida</div>
                  <div className="rounded-2xl border border-[rgba(11,47,82,0.08)] bg-[#f7fbff] px-4 py-3">Experience: Coastal Elite charter</div>
                </div>
                <Button href="#top" className="w-full hover:scale-[1.03] active:scale-[0.99]">Reserve the Deck</Button>
                <p className="text-xs leading-6 text-[#6a839a]">The Helm is a concierge-style charter matching service. Vessel availability is confirmed before booking.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="FAQ"
          title="Quick answers with a premium tone"
          copy="A luxury build still needs clarity. These answers keep the experience direct and polished."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {faqs.map((item) => (
            <Card key={item.q} className="interactive-card reveal-up border border-[rgba(11,47,82,0.08)] bg-white/82 shadow-[0_16px_50px_rgba(34,81,120,0.09)]">
              <CardContent className="p-6">
                <h3 className="font-display text-xl uppercase leading-[0.95] tracking-[0.06em] text-[#0b2f52]">{item.q}</h3>
                <p className="mt-3 text-sm leading-8 text-[#46647d] md:text-base">{item.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t border-[rgba(11,47,82,0.08)] bg-white/70 pb-10 pt-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm text-[#6a839a] md:flex-row md:items-center md:justify-between md:px-8">
          <span>THE HELM</span>
          <span>Miami yacht charters · coastal elite luxury</span>
        </div>
      </footer>
    </main>
  );
}
