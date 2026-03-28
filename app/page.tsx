import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const marqueeItems = [
  'CHART YOUR COURSE',
  "MIAMI'S PREMIER CHARTER SERVICE",
  'LUXURY ON THE WATER',
  'PRIVATE CHARTERS',
  'YACHT RENTALS',
];

const proofSnippets = [
  '“Booked in minutes and the boat was even better than the photos.”',
  '“The captain was polished, punctual, and knew the best sandbar route.”',
  '“Every detail felt premium without the usual charter stress.”',
  '“We showed up, stepped aboard, and everything was already handled.”',
];

const storyPoints = [
  'Finding a trustworthy charter can feel like scrolling through a sea of inconsistent listings, missing details, and unreliable operators.',
  'The Helm removes the guesswork by matching you with vetted boats, proven captains, and a booking flow that feels effortless from first message to departure.',
];

const forWho = [
  'Birthday yacht days',
  'Corporate client hosting',
  'Romantic sunset escapes',
  'Fishing and offshore days',
  'Sandbar weekends',
  'Luxury family outings',
];

const whatYouGet = [
  'Curated fleet matched to your vibe, guest count, and route.',
  'Verified captains and crew with real charter experience.',
  'Seamless booking support from request to launch.',
  '24/7 concierge for itinerary changes, add-ons, and timing updates.',
];

const steps = [
  { title: 'Browse & Pick', copy: 'Tell us the occasion, headcount, and vibe. We match you with the right boat options.' },
  { title: 'Book & Confirm', copy: 'We handle the details, secure the booking, and confirm the crew and schedule.' },
  { title: 'Set Sail', copy: 'Arrive, board, and enjoy the water while the logistics stay invisible.' },
];

const testimonials = [
  {
    name: 'Jasmine R.',
    context: 'Miami birthday charter',
    quote: 'We had a 12-guest birthday and the boat felt like a private club on the water. Zero friction, full luxury.',
  },
  {
    name: 'Andre M.',
    context: 'Corporate hosted outing',
    quote: 'The Helm handled the entire flow. We looked prepared, the guests were impressed, and the day ran perfectly.',
  },
  {
    name: 'Nina & Marco',
    context: 'Sunset cruise',
    quote: 'It felt intimate, elevated, and easy. They matched us with the right captain and the best route for the evening.',
  },
];

const bonuses = [
  'Complimentary captain consultation',
  'Route planning for sandbars, skyline cruises, and sunset timing',
  'Onboard amenities guide so you know exactly what to bring',
];

const valueStack = [
  'Boat matching based on occasion, size, and budget.',
  'Captain and crew verification before departure.',
  'Route and timing recommendations for Miami waters.',
  'Booking coordination so you are not juggling multiple vendors.',
  'Luxury concierge support for upgrades and special requests.',
];

const faqs = [
  {
    q: 'Do I need a license to book a charter?',
    a: 'No. The Helm connects you with charter-ready boats and qualified captains, so the experience stays simple for guests.',
  },
  {
    q: 'What is included in the booking?',
    a: 'Every charter is confirmed with the essentials up front, and we walk you through the boat, captain, and any available amenities before you commit.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'Prime weekends move fast. Book as early as possible, especially for holidays, events, and sunset departures.',
  },
  {
    q: 'Can you help with special occasions?',
    a: 'Yes. Birthdays, proposals, corporate hosting, fishing trips, and milestone celebrations are all a fit.',
  },
  {
    q: 'What if I want a different boat after booking?',
    a: 'If availability allows, we will re-match your booking to a better fit and keep the process as smooth as possible.',
  },
];

function SectionHeading({ kicker, title, copy }: { kicker: string; title: string; copy: string }) {
  return (
    <div className="max-w-3xl">
      <Badge className="mb-4">{kicker}</Badge>
      <h2 className="font-display text-3xl uppercase tracking-[0.12em] text-white md:text-5xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">{copy}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-[#040a0f] text-white">
      <div className="pointer-events-none absolute inset-0 glass-grid opacity-35" />
      <div className="pointer-events-none hero-orb absolute left-[-10%] top-[-8%] h-80 w-80 rounded-full bg-[rgba(201,168,76,0.26)]" />
      <div className="pointer-events-none hero-orb absolute right-[-12%] top-[18%] h-[28rem] w-[28rem] rounded-full bg-[rgba(18,88,110,0.2)]" />

      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#040a0f]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="font-display text-xl uppercase tracking-[0.28em] text-white md:text-2xl">The Helm</a>
          <Button href="#pricing">Book Now</Button>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-7xl px-5 pb-6 pt-8 md:px-8 md:pt-10">
        <div className="marquee-mask overflow-hidden rounded-full border border-white/10 bg-white/5 py-3">
          <div className="flex w-max animate-marquee gap-6 whitespace-nowrap px-6 text-[11px] font-semibold uppercase tracking-[0.42em] text-gold md:text-xs">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-6">
                <span>{item}</span>
                <span className="text-white/40">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 pt-8 md:px-8 md:pb-24 md:pt-12">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <Badge>Premium Miami Charter Concierge</Badge>
            <h1 className="mt-6 max-w-4xl font-display text-5xl uppercase leading-[0.94] tracking-[0.04em] text-grid text-white md:text-7xl lg:text-8xl">
              Where the Ocean is Yours
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
              The Helm is a premium Miami boat charter middle-man service for clients who want luxury without the stress.
              We vet the boats, verify the captains, and coordinate the details so your time on the water feels exclusive, effortless, and polished.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#pricing">Book Your Charter</Button>
              <Button href="#how-it-works" variant="outline">See How It Works</Button>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                ['Miami / South Florida', 'Coverage'],
                ['Verified boats & captains', 'Vetted network'],
                ['Starting at $500', 'Charter entry point'],
              ].map(([value, label]) => (
                <Card key={label} className="border-white/8 bg-white/6">
                  <CardContent className="p-4">
                    <div className="text-sm text-white/55">{label}</div>
                    <div className="mt-2 font-display text-xl uppercase tracking-[0.08em] text-white">{value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="relative overflow-hidden border-white/12 bg-[rgba(255,255,255,0.06)]">
            <CardContent className="relative p-5 md:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.18),transparent_35%),radial-gradient(circle_at_bottom,rgba(27,91,110,0.22),transparent_42%)]" />
              <div className="relative space-y-5">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] uppercase tracking-[0.32em] text-white/55">VSL Placeholder</div>
                  <div className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-gold">Coming Soon</div>
                </div>
                <div className="aspect-[4/5] rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(4,10,15,0.96))] p-6 shadow-glow">
                  <div className="flex h-full flex-col justify-between rounded-[20px] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.12),transparent_38%),linear-gradient(180deg,rgba(3,18,27,0.4),rgba(4,10,15,0.95))] p-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.34em] text-gold">The Helm</p>
                      <p className="mt-4 max-w-xs font-display text-4xl uppercase leading-tight tracking-[0.08em] text-white">
                        Luxury chartering, simplified.
                      </p>
                    </div>
                    <div className="grid gap-3 text-sm text-white/78">
                      <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                        <span>Curated fleet</span>
                        <span className="text-gold">01</span>
                      </div>
                      <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                        <span>Verified captains</span>
                        <span className="text-gold">02</span>
                      </div>
                      <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                        <span>White-glove support</span>
                        <span className="text-gold">03</span>
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
        <div className="grid gap-4 md:grid-cols-4">
          {proofSnippets.map((snippet) => (
            <Card key={snippet} className="border-white/8 bg-white/5">
              <CardContent className="p-5">
                <p className="text-sm leading-7 text-white/78">{snippet}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Story"
          title="Trust should never be the hard part"
          copy="The charter market is full of mixed signals, inconsistent pricing, and boats that look better online than they do at the dock. The Helm exists to cut through the noise and hand you a premium path to the water."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {storyPoints.map((point, index) => (
            <Card key={point} className="border-white/8 bg-white/5">
              <CardContent className="flex h-full gap-4 p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.1)] text-sm font-semibold text-gold">
                  0{index + 1}
                </div>
                <p className="text-sm leading-7 text-white/75 md:text-base">{point}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Who This Is For"
          title="Built for the moments that deserve a better backdrop"
          copy="Whether you are hosting clients or celebrating a milestone, The Helm pairs the right vessel with the right atmosphere."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {forWho.map((item) => (
            <Card key={item} className="border-white/8 bg-white/5">
              <CardContent className="flex items-center justify-between p-5">
                <span className="text-base text-white/82">{item}</span>
                <span className="text-gold">✦</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="What You Get"
          title="A curated charter experience, not just a booking"
          copy="The Helm is designed to feel like a private concierge desk for the water. We keep the process crisp, premium, and low-friction."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {whatYouGet.map((item) => (
            <Card key={item} className="border-white/8 bg-white/5">
              <CardContent className="flex gap-4 p-6">
                <div className="mt-1 h-3 w-3 rounded-full bg-gold shadow-[0_0_20px_rgba(201,168,76,0.8)]" />
                <p className="text-sm leading-7 text-white/78 md:text-base">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="How It Works"
          title="Three steps to getting on the water"
          copy="We keep the process elegant and clear. No endless back-and-forth, no confusing listings, no guesswork."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.title} className="border-white/8 bg-white/5">
              <CardContent className="p-6">
                <div className="text-[11px] uppercase tracking-[0.32em] text-gold">Step 0{index + 1}</div>
                <h3 className="mt-3 font-display text-2xl uppercase tracking-[0.08em] text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/72">{step.copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Results"
          title="What a premium charter day feels like"
          copy="These sample client outcomes show the level of polish, comfort, and confidence The Helm is built to deliver."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="border-white/8 bg-white/5">
              <CardContent className="flex h-full flex-col p-6">
                <p className="text-sm leading-7 text-white/80">“{item.quote}”</p>
                <div className="mt-6 border-t border-white/8 pt-4">
                  <div className="font-display text-lg uppercase tracking-[0.08em] text-white">{item.name}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.24em] text-gold/90">{item.context}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Bonuses"
          title="Value that makes the booking feel even smoother"
          copy="Every charter booking gets extra support designed to make the day feel more polished and less rushed."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {bonuses.map((item) => (
            <Card key={item} className="border-white/8 bg-white/5">
              <CardContent className="p-6">
                <div className="text-[11px] uppercase tracking-[0.28em] text-gold">Bonus</div>
                <p className="mt-3 text-sm leading-7 text-white/78">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Value Stack"
          title="Everything included in a The Helm booking"
          copy="A clean charter experience should feel complete before you even step onboard."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {valueStack.map((item) => (
            <Card key={item} className="border-white/8 bg-white/5">
              <CardContent className="flex gap-4 p-5">
                <span className="mt-1 text-gold">✦</span>
                <p className="text-sm leading-7 text-white/78">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Pricing & Offer"
          title="Charters starting at $500"
          copy="Availability is limited on premium weekends and sunset windows. If you want the best options, move early and lock in your preferred date."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="border-[rgba(201,168,76,0.22)] bg-[linear-gradient(180deg,rgba(201,168,76,0.12),rgba(255,255,255,0.05))]">
            <CardContent className="p-7 md:p-8">
              <div className="text-[11px] uppercase tracking-[0.32em] text-gold">Limited availability</div>
              <h3 className="mt-4 font-display text-4xl uppercase tracking-[0.08em] text-white md:text-5xl">Private access starts here</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/76 md:text-base">
                Charter pricing depends on vessel, duration, guest count, and seasonality. We keep the entry point accessible while preserving a premium feel.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="#footer">Request Availability</Button>
                <Button href="#faq" variant="outline">Read FAQs</Button>
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-5">
            {[
              ['Half-Day Escape', 'Ideal for quick luxury outings, sandbar hangs, and sunset cruises.'],
              ['Full-Day Charter', 'Best for birthdays, celebrations, and client hosting with more onboard time.'],
            ].map(([title, copy]) => (
              <Card key={title} className="border-white/8 bg-white/5">
                <CardContent className="p-6">
                  <div className="font-display text-2xl uppercase tracking-[0.08em] text-white">{title}</div>
                  <p className="mt-3 text-sm leading-7 text-white/76">{copy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="Guarantee"
          title="Book with confidence"
          copy="If the charter experience does not match the confirmed booking spec, we will work to rebook you at no extra cost, subject to availability."
        />
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-5 pb-18 md:px-8 md:pb-24">
        <SectionHeading
          kicker="FAQ"
          title="Quick answers to common booking questions"
          copy="Clear expectations make the whole process feel more premium."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {faqs.map((item) => (
            <Card key={item.q} className="border-white/8 bg-white/5">
              <CardContent className="p-6">
                <h3 className="font-display text-xl uppercase tracking-[0.08em] text-white">{item.q}</h3>
                <p className="mt-3 text-sm leading-7 text-white/74 md:text-base">{item.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-10 md:px-8 md:pb-16">
        <Card className="overflow-hidden border-[rgba(201,168,76,0.2)] bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.16),transparent_35%),rgba(255,255,255,0.05)]">
          <CardContent className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="text-[11px] uppercase tracking-[0.32em] text-gold">Final Call</div>
              <h2 className="mt-4 font-display text-4xl uppercase leading-tight tracking-[0.08em] text-white md:text-6xl">Chart the day before the best dates are gone</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/74 md:text-base">
                If you want a premium charter experience in Miami or South Florida, The Helm is ready to curate it.
              </p>
            </div>
            <div className="rounded-[26px] border border-white/10 bg-[#07121a]/80 p-6 shadow-glass">
              <div id="footer" className="space-y-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-white/50">The Helm Concierge</div>
                  <div className="mt-2 font-display text-2xl uppercase tracking-[0.08em] text-white">Private booking request</div>
                </div>
                <div className="grid gap-3 text-sm text-white/72">
                  <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">Name: The Helm Client</div>
                  <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">Destination: Miami / South Florida</div>
                  <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">Experience: Luxury charter request</div>
                </div>
                <Button href="#top" className="w-full">Book Your Charter</Button>
                <p className="text-xs leading-6 text-white/48">The Helm is a concierge-style charter matching service. Exact vessel availability is confirmed before booking.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-white/8 bg-[#040a0f] pb-10 pt-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm text-white/50 md:flex-row md:items-center md:justify-between md:px-8">
          <span>THE HELM</span>
          <span>Miami boat charter concierge · premium South Florida experiences</span>
        </div>
      </footer>
    </main>
  );
}
