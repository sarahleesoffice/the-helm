import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const marqueeItems = [
  'THE GOLD STANDARD OF CHARTERS',
  'MIAMI AFTER DARK',
  'PRIVATE DEPARTURES',
  'CURATED FLEET',
  'WHITE-GLOVE SERVICE',
];

const fleet = [
  {
    tier: 'Signature',
    size: '40–55 ft',
    title: 'The Entry to the Lifestyle',
    copy: 'For intimate celebrations, skyline runs, and first-class days on Biscayne Bay. Clean lines, polished interiors, and a confident Miami presence.',
    highlights: ['Captain-led', 'Sunset-ready', 'Perfect for 6–10 guests'],
  },
  {
    tier: 'Grand',
    size: '60–80 ft',
    title: 'The Statement Piece',
    copy: 'The tier for hosts who want the deck to feel like a private members’ club. More room, more power, more presence, more wow.',
    highlights: ['Host-forward layout', 'Premium sound', 'Ideal for 10–18 guests'],
  },
  {
    tier: 'Pinnacle',
    size: '80+ ft',
    title: 'The Only Way to Arrive',
    copy: 'For the biggest moments and the biggest entrances. Elevated service, dramatic silhouettes, and a full luxury yacht energy from dock to departure.',
    highlights: ['Ultra-luxury finish', 'Crewed service', 'Best for VIP events'],
  },
];

const proof = [
  'Luxury-first curation with boats that look as premium in person as they do in the photos.',
  'Exclusive routing for skyline cruises, Haulover sandbar days, and unforgettable sunset departures.',
  'Concierge support that keeps the entire booking experience polished, clear, and fast.',
];

const experience = [
  {
    title: 'Miami Gold Energy',
    copy: 'A brighter accent palette, hotter contrast, and glowing edges that feel expensive instead of generic.',
  },
  {
    title: 'More Exclusive Copy',
    copy: 'Messaging that sounds like a luxury invitation, not a rental listing: sharper, bolder, and more selective.',
  },
  {
    title: 'Glass, Glow, and Presence',
    copy: 'Layered panels, luminous borders, and deep-blue shadows to create a premium night-out mood.',
  },
];

const ctaStats = [
  ['Miami / South Florida', 'Coverage'],
  ['Vetted captains + vessels', 'Curated network'],
  ['Starts at $500', 'Entry point'],
];

function SectionHeading({ kicker, title, copy }: { kicker: string; title: string; copy: string }) {
  return (
    <div className="max-w-3xl">
      <Badge className="mb-4 border-[rgba(212,175,55,0.25)] bg-[rgba(212,175,55,0.12)] text-[#f8e7b2]">{kicker}</Badge>
      <h2 className="font-display text-3xl uppercase tracking-[0.12em] text-white md:text-5xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">{copy}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-[#02070d] text-white">
      <div className="pointer-events-none absolute inset-0 lux-grid opacity-40" />
      <div className="pointer-events-none absolute left-[-12%] top-[-8%] h-96 w-96 rounded-full bg-[rgba(212,175,55,0.18)] hero-orb" />
      <div className="pointer-events-none absolute right-[-12%] top-[8%] h-[34rem] w-[34rem] rounded-full bg-[rgba(20,110,140,0.2)] hero-orb" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[18%] h-80 w-80 rounded-full bg-[rgba(212,175,55,0.08)] hero-orb" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#02070d]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="font-display text-xl uppercase tracking-[0.3em] text-white md:text-2xl">
            The Helm
          </a>
          <Button href="#footer">Reserve the Deck</Button>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-7xl px-5 pb-6 pt-8 md:px-8 md:pt-10">
        <div className="overflow-hidden rounded-full border border-white/10 bg-white/5 py-3 backdrop-blur-xl">
          <div className="flex w-max animate-marquee gap-6 whitespace-nowrap px-6 text-[11px] font-semibold uppercase tracking-[0.42em] text-[#f1d788] md:text-xs">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={item + '-' + index} className="flex items-center gap-6">
                <span>{item}</span>
                <span className="text-white/35">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 pt-8 md:px-8 md:pb-24 md:pt-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Badge className="border-[rgba(212,175,55,0.24)] bg-[rgba(212,175,55,0.1)] text-[#ffe7aa]">
              Miami Gold Charter Concierge
            </Badge>
            <h1 className="mt-6 max-w-4xl font-display text-5xl uppercase leading-[0.9] tracking-[0.05em] text-grid text-white md:text-7xl lg:text-8xl">
              The Only Way to See Miami
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
              The Helm delivers the gold standard of charters for people who want the yacht, the skyline, and the service to feel unmistakably premium.
              We curate the fleet, verify the crew, and keep the experience sharp from request to departure.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#fleet">Meet the Fleet</Button>
              <Button href="#how-it-works" variant="outline">
                How It Works
              </Button>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {ctaStats.map(([value, label]) => (
                <Card key={label} className="glass-panel border-white/10">
                  <CardContent className="p-4">
                    <div className="text-sm text-white/52">{label}</div>
                    <div className="mt-2 font-display text-xl uppercase tracking-[0.08em] text-white">{value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="relative overflow-hidden glass-panel border-[rgba(212,175,55,0.18)]">
            <CardContent className="relative p-5 md:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_36%),radial-gradient(circle_at_bottom,rgba(17,96,125,0.24),transparent_42%)]" />
              <div className="relative space-y-5">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] uppercase tracking-[0.34em] text-white/55">Luxury Preview</div>
                  <div className="rounded-full border border-[rgba(212,175,55,0.24)] bg-[rgba(212,175,55,0.12)] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#ffe6a1]">
                    Miami Gold
                  </div>
                </div>

                <div className="aspect-[4/5] rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(2,7,13,0.96))] p-6 shadow-glass">
                  <div className="flex h-full flex-col justify-between rounded-[22px] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_34%),linear-gradient(180deg,rgba(5,22,32,0.45),rgba(2,7,13,0.96))] p-5">
                    <div className="space-y-4">
                      <p className="text-xs uppercase tracking-[0.34em] text-[#f1d788]">Exclusive route</p>
                      <p className="max-w-xs font-display text-4xl uppercase leading-tight tracking-[0.08em] text-white md:text-[2.8rem]">
                        Gold light. Dark water. High-end Miami.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="rounded-[26px] border border-white/8 bg-white/5 p-4">
                        <div className="flex items-center justify-between text-sm text-white/74">
                          <span>Skyline departure</span>
                          <span className="text-[#f1d788]">01</span>
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-white/8">
                          <div className="h-2 w-[78%] rounded-full bg-[linear-gradient(90deg,#d4af37,#f5d77a)] shadow-[0_0_28px_rgba(212,175,55,0.6)]" />
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-3">
                        {['Sunset', 'Sandbar', 'VIP night'].map((item) => (
                          <div key={item} className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-center text-xs uppercase tracking-[0.22em] text-white/76">
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
          {proof.map((snippet) => (
            <Card key={snippet} className="glass-panel border-white/10">
              <CardContent className="p-5">
                <p className="text-sm leading-7 text-white/78">{snippet}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="fleet" className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Curated Fleet"
          title="Different tiers. Same unmistakable standard."
          copy="Every yacht in the collection is chosen to feel polished, photogenic, and worthy of the Miami Gold treatment."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {fleet.map((boat) => (
            <Card key={boat.tier} className="glass-panel border-white/10">
              <CardContent className="flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] uppercase tracking-[0.32em] text-[#f1d788]">{boat.tier}</div>
                  <div className="text-xs uppercase tracking-[0.22em] text-white/45">{boat.size}</div>
                </div>
                <h3 className="mt-4 font-display text-2xl uppercase tracking-[0.08em] text-white md:text-[1.85rem]">{boat.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/74 md:text-base">{boat.copy}</p>
                <div className="mt-6 space-y-3">
                  {boat.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/80">
                      <span className="h-2 w-2 rounded-full bg-[#d4af37] shadow-[0_0_18px_rgba(212,175,55,0.75)]" />
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Why It Feels Premium"
          title="The glow, the glass, the attitude"
          copy="This version leans harder into luxury yacht energy: richer gold, stronger contrast, and a more exclusive voice throughout the page."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {experience.map((item) => (
            <Card key={item.title} className="glass-panel border-white/10">
              <CardContent className="p-6">
                <div className="text-[11px] uppercase tracking-[0.3em] text-[#f1d788]">Miami Gold</div>
                <h3 className="mt-3 font-display text-2xl uppercase tracking-[0.08em] text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/74">{item.copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="How It Works"
          title="Fast, selective, and concierge-led"
          copy="The experience is designed to feel like a private booking desk, not a marketplace feed."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {[
            ['Tell us the vibe', 'Share the date, guest count, and type of day you want on the water.'],
            ['Get matched', 'We shortlist the right yachts and make the strongest option obvious.'],
            ['Arrive in style', 'Confirm, board, and enjoy a polished departure with no chaos.'],
          ].map(([title, copy], index) => (
            <Card key={title} className="glass-panel border-white/10">
              <CardContent className="p-6">
                <div className="text-[11px] uppercase tracking-[0.32em] text-[#f1d788]">Step 0{index + 1}</div>
                <h3 className="mt-3 font-display text-2xl uppercase tracking-[0.08em] text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/74">{copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <Card className="overflow-hidden border-[rgba(212,175,55,0.18)] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_34%),rgba(255,255,255,0.05)] glass-panel">
          <CardContent className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="text-[11px] uppercase tracking-[0.32em] text-[#f1d788]">The Gold Standard</div>
              <h2 className="mt-4 max-w-2xl font-display text-4xl uppercase leading-tight tracking-[0.08em] text-white md:text-6xl">
                The charter vibe should feel expensive the second the page loads
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/74 md:text-base">
                This refresh pushes The Helm toward a louder, more selective Miami luxury identity so the brand looks as sharp as the yachts it represents.
              </p>
            </div>
            <div className="rounded-[26px] border border-white/10 bg-[#07131d]/90 p-6 shadow-glass">
              <div id="footer" className="space-y-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-white/45">Concierge Request</div>
                  <div className="mt-2 font-display text-2xl uppercase tracking-[0.08em] text-white">Private booking request</div>
                </div>
                <div className="space-y-3 text-sm text-white/74">
                  <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">Name: The Helm Client</div>
                  <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">Destination: Miami / South Florida</div>
                  <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">Experience: Luxury yacht charter</div>
                </div>
                <Button href="#top" className="w-full">
                  Reserve the Deck
                </Button>
                <p className="text-xs leading-6 text-white/48">
                  The Helm is a concierge-style charter matching service. Vessel availability is confirmed before booking.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-white/10 bg-[#02070d] pb-10 pt-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm text-white/52 md:flex-row md:items-center md:justify-between md:px-8">
          <span>THE HELM</span>
          <span>Miami yacht charters · luxury charter concierge</span>
        </div>
      </footer>
    </main>
  );
}
