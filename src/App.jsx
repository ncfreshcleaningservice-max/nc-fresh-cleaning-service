export default function NCFreshCleaningServiceWebsite() {
  const textQuoteLink = "sms:2095181069?body=Hi%20NC%20Fresh%20Cleaning%20Service%2C%20I%E2%80%99d%20like%20a%20quote.";
  const phoneLink = "tel:2095181069";
  const emailLink = "mailto:ncfreshcleaningservice@gmail.com";
  const googleBusinessProfileLink = "https://maps.app.goo.gl/3LraCcKQYFmGFZR16";
  const googleReviewLink = "https://g.page/r/CYypHO7loCj2EAE/review"; 
  const logoUrl = "/logo.jpg";

  const featuredImage =
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80";

 const reviews = [
  {
    name: "Mariah – Lodi",
    text: "Exceptional attention to detail, dependable communication, and a level of care that immediately stood out. My home looked refreshed, polished, and truly well cared for.",
  },
  {
    name: "Jessica – Elk Grove",
    text: "Professional, trustworthy, and consistent from start to finish. The quality of work exceeded expectations, and every detail was handled with care.",
  },
  {
    name: "Andy – Property Manager",
    text: "Reliable service, strong communication, and excellent presentation on every project. A dependable choice for property turnovers and detailed cleanups.",
  },
  {
  name: "Sandra – Stockton",
  text: "The move-out cleaning was outstanding. Every room looked ready for showing, and the attention to detail made a huge difference."
 },
];
  const galleryItems = [
    {
      title: "Kitchen Deep Cleaning",
      label: "Sparkling counters & appliances",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Move-Out Turnover",
      label: "Fresh and move-in ready",
      image:
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Bathroom Grout Refresh",
      label: "Detailed grout restoration",
      image:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Yard Cleanup",
      label: "Clean exterior presentation",
      image:
        "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const pricingExamples = [
    {
      title: "Standard Home Cleaning",
      price: "Custom Quote",
      description: "Ideal for routine residential cleaning based on size, condition, and frequency.",
    },
    {
      title: "Move-In / Move-Out Cleaning",
      price: "Custom Quote",
      description: "Priced based on square footage, overall condition, and level of detail needed.",
    },
    {
      title: "Deep Cleaning",
      price: "Custom Quote",
      description: "For homes needing extra attention in kitchens, bathrooms, floors, and buildup areas.",
    },
    {
      title: "Light Landscaping & Cleanups",
      price: "Custom Quote",
      description: "Pricing depends on yard condition, debris volume, trimming, and cleanup scope.",
    },
  ];

  const services = [
    {
      title: "Move-In / Move-Out Cleaning",
      description:
        "Detailed cleaning for homes, apartments, and turnovers to help every space look fresh, clean, and ready.",
    },
    {
      title: "Deep Cleaning",
      description:
        "Top-to-bottom deep cleaning for kitchens, bathrooms, baseboards, floors, and high-touch areas.",
    },
    {
      title: "Grout & Tile Cleaning",
      description:
        "Restore the look of tile and grout with focused deep cleaning for bathrooms, kitchens, and more.",
    },
    {
      title: "Window Cleaning",
      description:
        "Interior window cleaning to brighten your home and leave glass looking clear and polished.",
    },
    {
      title: "Recurring Home Cleaning",
      description:
        "Reliable ongoing service available weekly, biweekly, or monthly based on your needs.",
    },
    {
      title: "Light Landscaping",
      description:
        "Selective yard cleanup, planter cleanup, trimming, weed control, and general exterior touch-up services.",
    },
    {
      title: "Property Cleanups",
      description:
        "Yard cleanups, debris removal, seasonal cleanups, and exterior cleanup services for homes and rental properties.",
    },
  ];

  const highlights = [
    "Licensed & insured",
    "Reliable, detail-focused service",
    "Residential and apartment cleaning",
    "Flexible recurring or one-time service",
  ];

  const trustBadges = [
    "Fast local response",
    "Move-out specialists",
    "Recurring cleaning available",
    "Interior + exterior cleanup",
  ];

  const luxuryStats = [
    { value: "209 + 916", label: "Service coverage" },
    { value: "Fast", label: "Response time" },
    { value: "One-time", label: "Or recurring" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-sky-100/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="NC Fresh Cleaning Service logo"
              className="h-24 w-24 rounded-full border-2 border-sky-100 object-cover shadow-md"            />
            <div>
              <p className="text-xl font-bold tracking-tight text-slate-950">NC Fresh Cleaning Service</p>
              <p className="text-sm text-sky-700">Freshen up your space</p>
            </div>
          </div>
          <a
            href="#contact"
            className="rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5"
          >
            Get a Free Quote
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-sky-100/70">
        <div className="absolute inset-0">
          <div className="absolute -left-24 top-6 h-80 w-80 rounded-full bg-sky-200/35 blur-3xl" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-200/25 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-16 md:grid-cols-[1.05fr_.95fr] md:items-center md:py-24">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-sky-200 bg-white/90 px-4 py-1.5 text-sm font-semibold text-sky-700 shadow-sm">
              Premium local cleaning, real estate turnover, and exterior cleanup services
            </p>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
              A cleaner, brighter home with premium care in every detail
            </h1>
            <p className="mt-5 max-w-xl text-xl font-medium leading-8 text-slate-700">
              We treat every home with care, detail, and respect.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
              NC Fresh Cleaning Service helps homes, apartments, rental properties, and real estate listings look their best with dependable cleaning, deep detailing, grout care, windows, light landscaping, and property cleanups.
            </p>
            <p className="mt-4 max-w-xl text-base font-medium text-sky-700">
              Proudly serving Lodi, Stockton, Galt, Elk Grove, Sacramento, and surrounding communities throughout the 209 and 916 areas.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={textQuoteLink}
                className="rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5"
              >
                Text for a Fast Quote
              </a>
              <a
                href={phoneLink}
                className="rounded-2xl bg-slate-950 px-6 py-3 font-semibold text-white shadow-lg shadow-slate-200 transition hover:-translate-y-0.5"
              >
                Call (209) 518-1069
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                View Services
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/80 bg-white/85 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-sky-300/25 via-cyan-200/20 to-amber-200/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/80 p-3 shadow-2xl backdrop-blur">
              <div className="relative overflow-hidden rounded-[2rem]">
                <img src={featuredImage} alt="Freshly cleaned modern kitchen" className="h-[520px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-900/5 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-3 rounded-full bg-white/92 px-4 py-2 shadow-lg">
                  <img
                    src={logoUrl}
                    alt="NC Fresh Cleaning Service logo"
                    className="h-16 w-16 rounded-full border border-sky-100 object-cover"               
                    />
                  <div>
                    <p className="text-sm font-semibold text-slate-950">NC Fresh Cleaning Service</p>
                    <p className="text-xs text-slate-500">Premium local service</p>
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-[1.75rem] bg-slate-950/70 p-5 shadow-xl backdrop-blur-md">                
                  <div className="grid gap-4 sm:grid-cols-3">
                    {luxuryStats.map((stat) => (
                      <div key={stat.label}>
                        <p className="text-2xl font-bold tracking-tight text-white">{stat.value}</p>          
                        <p className="mt-1 text-sm text-sky-100">{stat.label}</p>     
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white/80 backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-3">
          <div className="rounded-[1.75rem] border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Why clients choose us</p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">Professional care without the stress</h3>
          </div>
          <div className="rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-lg font-semibold text-slate-950">Detail-focused work</p>
            <p className="mt-2 text-slate-600">From kitchens and bathrooms to windows and final touchups, every visit is handled with pride.</p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-lg font-semibold text-slate-950">Built for local trust</p>
            <p className="mt-2 text-slate-600">Fast communication, dependable scheduling, and a polished result that helps your home feel refreshed.</p>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-white/60 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Services</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Cleaning services tailored to your property
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From deep interior cleaning to outdoor touch-ups, every service is designed to leave your property looking fresh and cared for.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="rounded-[1.75rem] border border-white bg-white p-6 shadow-lg shadow-slate-100 ring-1 ring-slate-100 transition hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex rounded-full bg-gradient-to-r from-sky-100 to-amber-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  Service {index + 1}
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-sky-100 bg-gradient-to-r from-sky-50 via-white to-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Pricing Examples</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Simple pricing guidance for common services
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Every property is different, so final pricing is based on size, condition, access, and service frequency.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pricingExamples.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-white bg-white/90 p-6 shadow-lg shadow-sky-100 ring-1 ring-sky-100"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">{item.title}</p>
                <p className="mt-4 text-2xl font-bold text-slate-950">{item.price}</p>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-sky-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Before & After</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Show clients the difference
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A warm, visual gallery helps customers picture the result before they even call. These sample photos make the site feel more inviting, and you can replace them with your own before-and-after job photos anytime.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {galleryItems.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[1.75rem] border border-sky-100 bg-white shadow-lg shadow-slate-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-900/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-800">
                      {item.label}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">These can be replaced with your own before-and-after photos for the strongest customer impact.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-sky-100 bg-gradient-to-r from-white to-sky-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-3">
          {[
            {
              number: "1",
              title: "Request a quote",
              text: "Share the size of the property, type of cleaning needed, and any special requests.",
            },
            {
              number: "2",
              title: "Schedule your service",
              text: "Choose a time that works for you for one-time cleaning or recurring service.",
            },
            {
              number: "3",
              title: "Enjoy a fresh space",
              text: "Come back to a clean, refreshed home with work done carefully and professionally.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="rounded-[1.75rem] border border-white bg-white/90 p-8 shadow-lg shadow-slate-100 ring-1 ring-slate-100"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 text-2xl font-bold text-white shadow-md">
                {step.number}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      
             <section className="border-t border-sky-100 bg-slate-50">
  <div className="mx-auto max-w-7xl px-6 py-20">
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Reviews</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
        What clients appreciate most
      </h2>
      <p className="mt-4 text-lg text-slate-600">
        Client feedback reflects the consistency, detail, and professionalism behind every service provided.
      </p>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {reviews.map((review) => (
        <div
          key={review.name}
          className="rounded-[1.75rem] border border-white bg-white p-6 shadow-lg shadow-slate-100 ring-1 ring-slate-100"
        >
          <div className="mb-4 flex items-center gap-2 text-amber-500">★★★★★</div>
          <p className="text-lg font-semibold tracking-tight text-slate-950">{review.name}</p>
          <p className="mt-3 leading-7 text-slate-600">“{review.text}”</p>
        </div>
      ))}
    </div>

    <div className="mt-8 flex flex-wrap gap-4">
      <a
        href={googleBusinessProfileLink}
        className="inline-flex rounded-2xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
      >
        View Google Business Profile
      </a>
      <a
        href={googleReviewLink}
        className="inline-flex rounded-2xl border border-sky-200 bg-white px-6 py-3 font-semibold text-sky-700 shadow-sm transition hover:bg-sky-50"
      >
        Leave a Google Review
      </a>
      <a
        href="#contact"
        className="inline-flex rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5"
      >
        Ask for a Quote Today
      </a>
      <a
        href={emailLink}
        className="inline-flex rounded-2xl border border-amber-200 bg-amber-50 px-6 py-3 font-semibold text-amber-700 shadow-sm transition hover:bg-amber-100"
      >
        Email for Booking
      </a>
    </div>
  </div>
</section>
      <section id="contact" className="border-t border-sky-100 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1fr_.95fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Get in touch</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Ready for a cleaner home?</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Contact NC Fresh Cleaning Service today for a free quote. We’re here to help with move-outs, deep cleaning, recurring cleanings, grout and tile cleaning, windows, light landscaping, cleanups, and more.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={phoneLink}
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
              >
                Call (209) 518-1069
              </a>
              <a
                href={textQuoteLink}
                className="rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-900/30 transition hover:-translate-y-0.5"
              >
                Text for a Quote
              </a>
              <a
                href={emailLink}
                className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-white/15"
              >
                Email Us
              </a>
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">Why people book</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="font-semibold text-white">Clear communication</p>
                  <p className="mt-1 text-sm text-slate-300">Call, text, or email for simple scheduling and fast responses.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Quality presentation</p>
                  <p className="mt-1 text-sm text-slate-300">A polished result that helps your home or property feel fresh and cared for.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white p-8 text-slate-900 shadow-2xl">
            <div className="mb-6 flex items-center gap-3">
              <img src={logoUrl} alt="NC Fresh Cleaning Service logo" className="h-14 w-14 rounded-full border border-sky-100 object-cover" />
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Request Your Free Quote</h3>
                <p className="text-sm text-slate-500">Fast, local, and professional service</p>
              </div>
            </div>
            <div className="space-y-4 text-sm text-slate-700">
              <a href={phoneLink} className="block rounded-2xl bg-sky-50 p-4 transition hover:bg-sky-100">
                <p className="font-semibold text-sky-700">Phone</p>
                <p className="mt-1">(209) 518-1069</p>
              </a>
              <a href={emailLink} className="block rounded-2xl bg-amber-50 p-4 transition hover:bg-amber-100">
                <p className="font-semibold text-amber-700">Email</p>
                <p className="mt-1 break-all">ncfreshcleaningservice@gmail.com</p>
              </a>
              <div className="rounded-2xl bg-blue-50 p-4">
                <p className="font-semibold text-blue-700">Service Area</p>
                <p className="mt-1">Serving communities throughout the 209 and 916 areas</p>
              </div>
              <a href={googleReviewLink} className="block rounded-2xl bg-slate-50 p-4 transition hover:bg-slate-100">
                <p className="font-semibold text-slate-700">Google Reviews</p>
                <p className="mt-1">Connect your real Google review link here when ready.</p>
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              Call, text, or email today to schedule your free estimate.
            </p>
          </div>
        </div>
      </section>

     <footer className="border-t border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 px-6 py-10 text-white">       
       <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="NC Fresh Cleaning Service logo"
              className="h-16 w-16 rounded-full border border-white/20 object-cover"           
              />
            <div>
              <p className="font-semibold">NC Fresh Cleaning Service</p>
              <p className="text-base font-medium text-sky-200">Freshen up your space</p>        
            </div>
          </div>
         <p className="text-base font-medium text-sky-100">Serving communities throughout the 209 and 916 areas • (209) 518-1069</p>
       </div>
      </footer>
    </div>
  );
}
