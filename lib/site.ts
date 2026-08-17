/**
 * Single source of truth for every piece of brand data and marketing copy.
 * Change the agency name, phone number, or any section's wording here — the
 * components read from this file and nowhere else.
 */

export const site = {
  name: "Done For You Insurance Agency",
  shortName: "Done For You",
  tagline: "Commercial coverage, handled end to end.",
  // TODO: replace with the real business phone number before launch
  phone: "(888) 555-0142",
  phoneHref: "tel:+18885550142",
  // TODO: replace with the real office address and license number
  address: "1200 Corporate Center Drive, Suite 240, Newport Beach, CA 92660",
  license: "CA License #0M12345",
  hours: "Monday to Friday, 8:00am to 6:00pm PT",
  email: "quotes@doneforyouinsurance.com",
  foundedYear: 1998,
} as const;

export const nav = [
  { label: "Coverages", href: "#coverages" },
  { label: "Industries", href: "#industries" },
  { label: "Why Us", href: "#why-us" },
  { label: "How It Works", href: "#process" },
  { label: "FAQ", href: "#faq" },
] as const;

export const hero = {
  eyebrow: "Commercial & Contractor Insurance",
  headline: "Insurance that is actually handled for you.",
  subhead:
    "We place general liability, workers' compensation, and bonds for California contractors and business owners. You tell us what you do. We handle the carriers, the paperwork, and the certificates.",
  primaryCta: { label: "Get a Free Quote", href: "#quote" },
  secondaryCta: { label: "Talk to an Agent", href: site.phoneHref },
  trustPoints: [
    "A-rated carriers",
    "Same-day certificates",
    "Licensed in California",
  ],
} as const;

export const trustBar = {
  intro: "Placing coverage with the carriers you already know",
  // Placeholder carrier names — swap for real appointed carriers when confirmed
  carriers: ["Travelers", "The Hartford", "Chubb", "Liberty Mutual", "CNA", "Nationwide"],
  rating: {
    score: "4.8",
    outOf: "5",
    count: "410",
  },
} as const;

export type Coverage = {
  id: string;
  title: string;
  summary: string;
  covers: string[];
};

export const coverages: Coverage[] = [
  {
    id: "general-liability",
    title: "General Liability",
    summary:
      "The first policy almost every business needs. Covers third-party injury and property damage, and it is what landlords and general contractors ask for before you can start work.",
    covers: [
      "Customer slip-and-fall injuries",
      "Damage you cause to a client's property",
      "Legal defense costs and settlements",
      "Typical limits: $1M per occurrence / $2M aggregate",
    ],
  },
  {
    id: "workers-comp",
    title: "Workers' Compensation",
    summary:
      "California requires it the moment you have one employee. No exceptions, and the state enforces it aggressively with penalties that start at $10,000.",
    covers: [
      "Medical treatment for on-the-job injuries",
      "Lost wages while an employee recovers",
      "Rehabilitation and return-to-work costs",
      "Death benefits for the employee's family",
    ],
  },
  {
    id: "commercial-property",
    title: "Commercial Property",
    summary:
      "Covers your building, leasehold improvements, equipment, and inventory against fire, theft, vandalism, and covered natural disasters.",
    covers: [
      "Buildings you own and improvements you lease",
      "Tools, equipment, furniture, and inventory",
      "Wildfire exposure — we check for exclusions",
      "Equipment breakdown, added by endorsement",
    ],
  },
  {
    id: "commercial-auto",
    title: "Commercial Auto",
    summary:
      "Personal auto policies exclude business use. If a truck, van, or vehicle is titled to the business or used for work, it needs its own policy.",
    covers: [
      "Owned, leased, and rented business vehicles",
      "Hired and non-owned auto liability",
      "Physical damage and comprehensive",
      "Cargo and tools carried in the vehicle",
    ],
  },
  {
    id: "builders-risk",
    title: "Builder's Risk",
    summary:
      "Project-specific coverage for structures under construction. Written for the length of the build and released when the job closes out.",
    covers: [
      "Structures under construction or renovation",
      "Materials on site, in transit, and in storage",
      "Theft of materials before installation",
      "Soft costs and delay expenses",
    ],
  },
  {
    id: "surety-bonds",
    title: "Surety Bonds",
    summary:
      "The bonds California contractors are required to carry, plus the performance and payment bonds larger jobs demand before they will award the contract.",
    covers: [
      "CSLB $25,000 contractor license bond",
      "Performance and payment bonds",
      "Bid bonds for public works projects",
      "Qualifying individual (RMO/RME) bonds",
    ],
  },
];

export const industries = [
  { name: "General Contractors", note: "GL, bonds, builder's risk" },
  { name: "Specialty Trades", note: "Electrical, plumbing, HVAC" },
  { name: "Roofing & Framing", note: "Hard-to-place classes welcome" },
  { name: "Restaurants & Food", note: "Liquor liability, property" },
  { name: "Retail & Wholesale", note: "Product liability, stock" },
  { name: "Manufacturing", note: "Equipment, comp, product" },
  { name: "Real Estate & Property", note: "Habitational, E&O" },
  { name: "Professional Services", note: "E&O, cyber, benefits" },
] as const;

export const whyUs = {
  eyebrow: "Why Done For You",
  headline: "You run the business. We run the insurance.",
  body: "Most agencies hand you a quote and disappear until renewal. We stay on the file — chasing carriers, issuing certificates, and flagging gaps before they turn into a denied claim.",
  stats: [
    { value: 27, suffix: "+", label: "Years placing California risk" },
    { value: 40, suffix: "+", label: "A-rated carrier appointments" },
    { value: 12000, suffix: "+", label: "Certificates issued last year" },
  ],
  points: [
    {
      title: "One person owns your file",
      body: "You get a named agent with a direct line, not a queue and a ticket number. They know your operation before you finish explaining it.",
    },
    {
      title: "Certificates the same day",
      body: "A GC asking for a COI before Monday is routine, not an emergency. Most requests go out within a few hours of the ask.",
    },
    {
      title: "We shop the whole market",
      body: "Forty-plus appointments means we compare real options instead of defending the one carrier we happen to represent.",
    },
    {
      title: "Plain English, always",
      body: "You will know what is covered, what is excluded, and what it costs before you sign anything. No jargon, no surprises at claim time.",
    },
  ],
} as const;

export const process = {
  eyebrow: "How It Works",
  headline: "Four steps. Usually done inside 48 hours.",
  steps: [
    {
      title: "Tell us what you do",
      body: "Two minutes on the form or five on the phone. Your trade, your payroll, your vehicles, and any job you have coming up.",
    },
    {
      title: "We shop the market",
      body: "We take your operation to the carriers that actually want your class of business, and we come back with real numbers.",
    },
    {
      title: "You pick, in plain English",
      body: "We walk you through two or three options side by side. What each covers, what each excludes, what each costs.",
    },
    {
      title: "You are covered",
      body: "We bind the policy, send your certificates, and stay on the file for endorsements, audits, and renewal.",
    },
  ],
} as const;

export const quoteForm = {
  eyebrow: "Free Quote",
  headline: "Get your quote started",
  subhead:
    "Fill this out and a licensed agent will call you back — usually within one business hour. No obligation, and we will not sell your information.",
  coverageOptions: [
    "General Liability",
    "Workers' Compensation",
    "Commercial Property",
    "Commercial Auto",
    "Builder's Risk",
    "Surety Bond",
    "Not sure — help me figure it out",
  ],
} as const;

export const faqs = [
  {
    q: "How fast can I get a certificate of insurance?",
    a: "For an active policy, most certificate requests go out the same business day, and usually within a couple of hours. If a general contractor needs specific additional-insured wording or a waiver of subrogation, tell us up front and we will confirm the endorsement is on the policy before we issue.",
  },
  {
    q: "What does general liability actually cost for a contractor?",
    a: "It depends on your trade, revenue, and claims history. A small handyman or finish-trade operation often lands between $600 and $1,800 a year. Roofing, framing, and anything working at height run considerably higher because carriers price them as high-hazard classes. We will give you a real number, not a range, once we know your operation.",
  },
  {
    q: "Do I need workers' compensation if it is just me?",
    a: "If you are a sole proprietor with no employees, California generally does not require it. The catch is that most general contractors will not let you on a job site without it, and if you hire any uninsured subcontractor, their injuries can land on your policy. Many owners carry it for access to work rather than because the state demands it.",
  },
  {
    q: "I was declined or non-renewed. Can you still help?",
    a: "Usually, yes. Declines are common in roofing, framing, and any class with recent losses, and they normally mean the carrier's appetite changed rather than that you are uninsurable. We have surplus lines markets for exactly this situation. Bring us the non-renewal notice and the loss runs.",
  },
  {
    q: "How does a workers' comp audit work?",
    a: "Your premium starts as an estimate based on projected payroll. At the end of the term the carrier audits your actual payroll and job classifications, then bills or refunds the difference. Keeping clean records of subcontractor certificates matters here — uninsured subs get counted as your employees and that is where surprise audit bills come from.",
  },
  {
    q: "Can you handle multiple policies and states?",
    a: "Yes. Most of our clients carry three or four lines with us, and we can coordinate coverage for operations that cross state lines. Consolidating with one agency is also how you stop paying for the same exposure twice across overlapping policies.",
  },
] as const;

export const ctaBand = {
  headline: "Talk to a real person about your coverage.",
  body: "No call center, no phone tree. A licensed California agent who can answer your question on the first call.",
} as const;
