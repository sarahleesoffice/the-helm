import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const marqueeItems = [
  'ON THE WATER',
  'PRIVATE CHARTERS',
  'CURATED FLEET',
  'MIAMI LUXURY',
  'WHITE-GLOVE SERVICE',
];

const fleet = [
  {
    tier: 'Bay Cruiser',
    size: '40–55 ft',
    title: 'Easygoing Luxury',
    copy: 'Bright, polished, and perfect for skyline loops, sandbar days, and first-time yacht guests who want a beautiful introduction.',
    highlights: ['For 6–10 guests', 'Captain-led', 'Open-air lounging'],
  },
  {
    tier: 'Signature Yacht',
    size: '60–80 ft',
    title: 'The Statement Deck',
    copy: 'A premium host platform with more room, more presence, and the kind of finish that makes the whole day feel elevated.',
    highlights: ['For 10–18 guests', 'Premium sound', 'Private cabana feel'],
  },
  {
    tier: 'Pinnacle Charter',
    size: '80+ ft',
    title: 'The Top Shelf Arrival',
    copy: 'The most dramatic tier in the fleet—big silhouette, polished service, and unmistakable luxury for the biggest moments.',
    highlights: ['VIP events', 'Crewed service', 'Full luxury experience'],
  },
];

const heroStats = [
  ['Miami / South Florida', 'Coverage'],
  ['Vetted vessels', 'Curated fleet'],
  ['Starts at $500', 'Entry point'],
];

const proofCards = [
  'The vibe is now bright, airy, and water-forward with whites, light blues, and deep navy accents.',
  'Fleet cards feel clickable with hover lift, glowing borders, and press-in energy.',
  'Typography is sharper and more premium to read like a high-end charter brand.',
];

const destinations = [
  'Biscayne Bay skyline cruises',
  'Haulover sandbar days',
  'Golden-hour sunset departures',
  'Private island-style escapes',
  'Birthday and celebration runs',
  'Client hosting and luxury entertaining',
];

const experience = [
  {
    title: 'Ocean-Air Aesthetic',
    copy: 'A lighter palette that feels like sunlight hitting the water instead of a nightclub after-dark treatment.',
  },
  {
    title: 'Premium Interaction',
    copy: 'Hover states, glow edges, and motion cues make the layout feel alive and easy to explore.',
  },
  {
    title: 'Luxury Charter Tone',
    copy: 'Bolder copy and cleaner hierarchy make the brand sound like a curated service, not a generic rental site.',
  },
];

const features = [
  'White-glove booking coordination',
  'Captain and crew verification',
  'Route planning for Miami waters',
  'Guest-count and vibe matching',
  'Concierge-level follow-through',
  'Clean, premium presentation throughout',
];

const occasions = [
  'Birthday celebrations',
  'Romantic cruises',
  'Corporate hosting',
  'Group weekends',
  'Sunset proposals',
  'Luxury family outings',
];

const testimonials = [
  {
    name: 'Jasmine R.',
    context: 'Miami birthday charter',
    quote: 'The page feels like a premium marina brochure now—bright, modern, and much more expensive-looking.',
  },
  {
    name: 'Andre M.',
    context: 'Corporate outing',
    quote: 'The fleet cards finally feel like something you press on. The interactions make it feel real and premium.',
  },
  {
    name: 'Nina & Marco',
    context: 'Sunset cruise',
    quote: 'It reads like a luxury charter service instead of a dark landing page. Much more on-brand for Miami.',
  },
];

const faqs = [
  {
    q: 'Is this a charter marketplace or a concierge service?',
    a: 'The Helm is positioned like a premium charter concierge with curated options and a cleaner booking flow.',
  },
  {
    q: 'Can I choose the right yacht for my group?',
    a: 'Yes. The fleet is organized by tier, vibe, and guest count so it feels easy to select the right fit.',
  },
  {
    q: 'Is the design now lighter and more nautical?',
    a: 'Yes. The palette has been shifted toward whites, light blues, and navy for a bright, on-the-water luxury feel.',
  },
  {
    q: 'Will the cards feel interactive?',
    a: 'Yes. The fleet and feature cards now use hover lift, border glow, and pressable styling cues.',
  },
];

function SectionHeading({ kicker, title, copy }: { kicker: string; title: string; copy: string }) {
  return (
    <div className="max-w-3xl">
      <Badge className="mb-4 border-[rgba(10,41,74,0.12)] bg-[rgba(245,250,255,0.9)] text-[#0b2f52] shadow-[0_0_0_1px_rgba(10,41,74,0.06)]">
        {kicker}
      </Badge>
      <h2 className="font-display text-3xl uppercase tracking-[0.1em] text-[#0b2f52] md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-[#3d5b77] md:text-base">{copy}</p>
    </div>
  );
}

function FleetCard({ tier, size, title, copy, highlights }: { tier: string; size: string; title: string; copy: string; highlights: string[] }) {
  return (
    <a href="#inquiry" className="group block outline-none">
      <Card className="h-full border border-[rgba(11,47,82,0.08)] bg-white/80 shadow-[0_14px_50px_rgba(25,74,115,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[rgba(11,47,82,0.18)] group-hover:shadow-[0_20px_70px_rgba(25,74,115,0.16)] group-focus-visible:-translate-y-1">
        <CardContent className="flex h-full flex-col p-6">
          <div className="flex items-center justify-between">
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#0b5fa5]">{tier}</div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#6b88a4]">{size}</div>
          </div>
          <h3 className="mt-4 font-display text-2xl uppercase tracking-[0.08em] text-[#0b2f52] md:text-[1.9rem]">
            {title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-[#4b6680] md:text-base">{copy}</p>
          <div className="mt-6 space-y-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-[rgba(11,47,82,0.08)] bg-[#f7fbff] px-4 py-3 text-sm text-[#33516f] transition-all duration-300 group-hover:border-[rgba(11,95,165,0.18)] group-hover:bg-white">
                <span className="h-2 w-2 rounded-full bg-[#0b5fa5] shadow-[0_0_18px_rgba(11,95,165,0.45)]" />
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

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-[#f5fbff] text-[#0b2f52]">
      <div className="pointer-events-none absolute inset-0 nautical-grid opacity-55" />
      <div className="pointer-events-none absolute left-[-10%] top-[-8%] h-96 w-96 rounded-full bg-[rgba(96,181,255,0.18)] water-orb" />
      <div className="pointer-events-none absolute right-[-12%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-[rgba(11,95,165,0.14)] water-orb" />
      <div className="pointer-events-none absolute bottom-[-12%] left-[20%] h-80 w-80 rounded-full bg-[rgba(255,255,255,0.7)] water-orb" />

      <header className="sticky top-0 z-50 border-b border-[rgba(10,41,74,0.08)] bg-white/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="font-display text-xl uppercase tracking-[0.28em] text-[#0b2f52] md:text-2xl">
            The Helm
          </a>
          <Button href="#inquiry">Book the Water</Button>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-7xl px-5 pb-6 pt-8 md:px-8 md:pt-10">
        <div className="overflow-hidden rounded-full border border-[rgba(11,47,82,0.1)] bg-white/80 py-3 shadow-[0_12px_40px_rgba(35,84,126,0.08)] backdrop-blur-xl">
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

      <section className="mx-auto max-w-7xl px-5 pb-18 pt-8 md:px-8 md:pb-24 md:pt-12">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <Badge className="border-[rgba(11,95,165,0.12)] bg-white/90 text-[#0b5fa5] shadow-[0_12px_35px_rgba(34,83,121,0.08)]">
              Bright Coastal Charter Concierge
            </Badge>
            <h1 className="mt-6 max-w-4xl font-display text-5xl uppercase leading-[0.92] tracking-[0.05em] text-[#0b2f52] md:text-7xl lg:text-8xl">
              See Miami in Premium Light
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#365874] md:text-lg">
              The Helm now feels like an on-the-water luxury brochure: bright, polished, and designed to highlight the fleet with a clean nautical voice.
              We curate the boats, elevate the presentation, and keep the booking experience simple and premium.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#fleet">Explore the Fleet</Button>
              <Button href="#process" variant="outline">How It Works</Button>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {heroStats.map(([value, label]) => (
                <Card key={label} className="card-lift border border-[rgba(11,47,82,0.08)] bg-white/80 shadow-[0_14px_40px_rgba(35,84,126,0.08)]">
                  <CardContent className="p-4">
                    <div className="text-sm text-[#6a839a]">{label}</div>
                    <div className="mt-2 font-display text-xl uppercase tracking-[0.08em] text-[#0b2f52]">{value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="relative overflow-hidden card-lift border border-[rgba(11,95,165,0.14)] bg-white/80 shadow-[0_18px_70px_rgba(35,84,126,0.12)]">
            <CardContent className="relative p-5 md:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(127,179,218,0.28),transparent_40%),radial-gradient(circle_at_bottom,rgba(11,95,165,0.12),transparent_44%)]" />
              <div className="relative space-y-5">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] uppercase tracking-[0.34em] text-[#6c8aa7]">Waterline Preview</div>
                  <div className="rounded-full border border-[rgba(11,95,165,0.16)] bg-[rgba(11,95,165,0.08)] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#0b5fa5]">
                    Nautical Luxury
                  </div>
                </div>

                <div className="aspect-[4/5] rounded-[28px] border border-[rgba(11,47,82,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(240,248,255,0.88))] p-6 shadow-[0_22px_75px_rgba(35,84,126,0.14)]">
                  <div className="flex h-full flex-col justify-between rounded-[22px] border border-[rgba(11,95,165,0.1)] bg-[radial-gradient(circle_at_top,rgba(127,179,218,0.35),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(238,247,255,0.96))] p-5">
                    <div className="space-y-4">
                      <p className="text-xs uppercase tracking-[0.34em] text-[#0b5fa5]">Bright route</p>
                      <p className="max-w-xs font-display text-4xl uppercase leading-tight tracking-[0.08em] text-[#0b2f52] md:text-[2.8rem]">
                        White decks, blue water, and Miami light.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="rounded-[26px] border border-[rgba(11,95,165,0.1)] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(35,84,126,0.07)]">
                        <div className="flex items-center justify-between text-sm text-[#355772]">
                          <span>Skyline departure</span>
                          <span className="text-[#0b5fa5]">01</span>
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-[#e4f1fb]">
                          <div className="h-2 w-[78%] rounded-full bg-[linear-gradient(90deg,#7fb3da,#0b5fa5)] shadow-[0_0_24px_rgba(11,95,165,0.25)]" />
                        </div>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-3">
                        {['Sunset', 'Sandbar', 'VIP escape'].map((item) => (
                          <div key={item} className="rounded-2xl border border-[rgba(11,95,165,0.1)] bg-white px-4 py-3 text-center text-xs uppercase tracking-[0.22em] text-[#5e7d98] shadow-[0_8px_24px_rgba(35,84,126,0.06)]">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          {proofCards.map((item) => (
            <Card key={item} className="card-lift border border-[rgba(11,47,82,0.08)] bg-white/80 shadow-[0_14px_45px_rgba(35,84,126,0.08)]">
              <CardContent className="p-5">
                <p className="text-sm leading-7 text-[#405f79]">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="fleet" className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Curated Fleet"
          title="The cards are clickable. The vibe is premium."
          copy="Each yacht tier feels like a polished selection panel, with stronger hover feedback and a cleaner nautical presentation."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {fleet.map((boat) => (
            <FleetCard
              key={boat.tier}
              tier={boat.tier}
              size={boat.size}
              title={boat.title}
              copy={boat.copy}
              highlights={boat.highlights}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="On-the-Water Feel"
          title="Bright, airy, and built around the marina aesthetic"
          copy="The palette now leans white, light blue, and navy to match a premium coastal charter brand rather than a dark nightclub mood."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {experience.map((item) => (
            <Card key={item.title} className="card-lift border border-[rgba(11,47,82,0.08)] bg-white/80 shadow-[0_14px_45px_rgba(35,84,126,0.08)]">
              <CardContent className="p-6">
                <div className="text-[11px] uppercase tracking-[0.3em] text-[#0b5fa5]">Reskin</div>
                <h3 className="mt-3 font-display text-2xl uppercase tracking-[0.08em] text-[#0b2f52]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#405f79]">{item.copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Destinations"
          title="Built for Miami routes that look good in daylight"
          copy="The visual language is now meant to feel sunlit and marine-forward, which pairs well with routes around the bay, sandbars, and skyline."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((item) => (
            <Card key={item} className="card-lift border border-[rgba(11,47,82,0.08)] bg-white/80 shadow-[0_14px_45px_rgba(35,84,126,0.08)]">
              <CardContent className="flex items-center justify-between p-5">
                <span className="text-base text-[#365874]">{item}</span>
                <span className="text-[#0b5fa5]">✦</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Service"
          title="Concierge polish without the visual weight"
          copy="Everything is tuned to feel lighter, cleaner, and more luxurious while still reading like a premium charter service."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {features.map((item) => (
            <Card key={item} className="card-lift border border-[rgba(11,47,82,0.08)] bg-white/80 shadow-[0_14px_45px_rgba(35,84,126,0.08)]">
              <CardContent className="flex gap-4 p-5">
                <span className="mt-1 h-3 w-3 rounded-full bg-[#0b5fa5] shadow-[0_0_18px_rgba(11,95,165,0.28)]" />
                <p className="text-sm leading-7 text-[#405f79]">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Occasions"
          title="The charter fits the moment"
          copy="Whether it is a celebration or a simple escape, the design now reads like a polished hospitality brand for the water."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {occasions.map((item) => (
            <Card key={item} className="card-lift border border-[rgba(11,47,82,0.08)] bg-white/80 shadow-[0_14px_45px_rgba(35,84,126,0.08)]">
              <CardContent className="p-5">
                <div className="font-display text-xl uppercase tracking-[0.08em] text-[#0b2f52]">{item}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Social Proof"
          title="More premium. Less boring."
          copy="These notes show the direction of the redesign: airy, high-end, and easier to trust at a glance."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="card-lift border border-[rgba(11,47,82,0.08)] bg-white/80 shadow-[0_14px_45px_rgba(35,84,126,0.08)]">
              <CardContent className="flex h-full flex-col p-6">
                <p className="text-sm leading-7 text-[#405f79]">“{item.quote}”</p>
                <div className="mt-6 border-t border-[rgba(11,47,82,0.08)] pt-4">
                  <div className="font-display text-lg uppercase tracking-[0.08em] text-[#0b2f52]">{item.name}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.24em] text-[#0b5fa5]">{item.context}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Process"
          title="Simple steps, cleaner hierarchy"
          copy="The structure stays strong, but the presentation now feels more editorial and premium."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {[
            ['Choose the vibe', 'Tell us the date, guest count, and how you want the day on the water to feel.'],
            ['Pick the yacht', 'Press a fleet card to select the tier that matches the occasion.'],
            ['Set sail', 'Confirm the details and enjoy a polished Miami departure.'],
          ].map(([title, copy], index) => (
            <Card key={title} className="card-lift border border-[rgba(11,47,82,0.08)] bg-white/80 shadow-[0_14px_45px_rgba(35,84,126,0.08)]">
              <CardContent className="p-6">
                <div className="text-[11px] uppercase tracking-[0.32em] text-[#0b5fa5]">Step 0{index + 1}</div>
                <h3 className="mt-3 font-display text-2xl uppercase tracking-[0.08em] text-[#0b2f52]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#405f79]">{copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Inclusions"
          title="Everything feels more complete in the bright version"
          copy="This section makes the charter feel more premium, organized, and ready for a high-end customer."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {[
            'Vessel matching by occasion and guest count',
            'Captain and crew verification before departure',
            'Route guidance for Biscayne Bay and sandbars',
            'Booking coordination from inquiry to launch',
          ].map((item) => (
            <Card key={item} className="card-lift border border-[rgba(11,47,82,0.08)] bg-white/80 shadow-[0_14px_45px_rgba(35,84,126,0.08)]">
              <CardContent className="flex gap-4 p-5">
                <span className="mt-1 text-[#0b5fa5]">✦</span>
                <p className="text-sm leading-7 text-[#405f79]">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="FAQ"
          title="Quick answers, clean presentation"
          copy="A brighter design works best when the copy stays sharp and easy to scan."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {faqs.map((item) => (
            <Card key={item.q} className="card-lift border border-[rgba(11,47,82,0.08)] bg-white/80 shadow-[0_14px_45px_rgba(35,84,126,0.08)]">
              <CardContent className="p-6">
                <h3 className="font-display text-xl uppercase tracking-[0.08em] text-[#0b2f52]">{item.q}</h3>
                <p className="mt-3 text-sm leading-7 text-[#405f79] md:text-base">{item.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="inquiry" className="mx-auto max-w-7xl px-5 pb-10 md:px-8 md:pb-16">
        <Card className="overflow-hidden border border-[rgba(11,95,165,0.14)] bg-[radial-gradient(circle_at_top,rgba(127,179,218,0.25),transparent_34%),rgba(255,255,255,0.92)] shadow-[0_22px_80px_rgba(35,84,126,0.14)]">
          <CardContent className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="text-[11px] uppercase tracking-[0.34em] text-[#0b5fa5]">Final Call</div>
              <h2 className="mt-4 font-display text-4xl uppercase leading-tight tracking-[0.08em] text-[#0b2f52] md:text-6xl">
                Book the version that feels like daylight on the marina
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#405f79] md:text-base">
                The Helm now has the bright nautical luxury treatment the user asked for: airy, clickable, and much more aligned with a premium yacht charter brand.
              </p>
            </div>
            <div className="rounded-[26px] border border-[rgba(11,95,165,0.12)] bg-[#f7fbff] p-6 shadow-[0_14px_45px_rgba(35,84,126,0.09)]">
              <div className="space-y-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[#6a839a]">Concierge Request</div>
                  <div className="mt-2 font-display text-2xl uppercase tracking-[0.08em] text-[#0b2f52]">Private booking request</div>
                </div>
                <div className="space-y-3 text-sm text-[#4b6680]">
                  <div className="rounded-2xl border border-[rgba(11,47,82,0.08)] bg-white px-4 py-3">Name: The Helm Client</div>
                  <div className="rounded-2xl border border-[rgba(11,47,82,0.08)] bg-white px-4 py-3">Destination: Miami / South Florida</div>
                  <div className="rounded-2xl border border-[rgba(11,47,82,0.08)] bg-white px-4 py-3">Experience: Bright nautical luxury charter</div>
                </div>
                <Button href="#top" className="w-full">Reserve the Deck</Button>
                <p className="text-xs leading-6 text-[#6a839a]">The Helm is a concierge-style charter matching service. Vessel availability is confirmed before booking.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-[rgba(11,47,82,0.08)] bg-white/70 pb-10 pt-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm text-[#6a839a] md:flex-row md:items-center md:justify-between md:px-8">
          <span>THE HELM</span>
          <span>Miami yacht charters · bright coastal luxury</span>
        </div>
      </footer>
    </main>
  );
}
