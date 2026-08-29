import { BlogPost, CaseStudy, SiteSettings } from "@/types";

export const siteSettings: SiteSettings = {
  siteName: "ZynTech Labs",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://zyntechlabs.io",
  defaultTitle: "Custom Enterprise Software Development Company | ZynTech Labs",
  defaultDescription:
    "ZynTech Labs builds scalable enterprise software, mobile apps, SaaS platforms, AI automation and cloud solutions for fintech, logistics and growing businesses.",
  defaultOgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  gtmId: "GTM-WFGWS5HN",
  ga4Id: "G-LPLPSRELWG",
  googleVerification: "google-site-verification-token",
  socials: {
    linkedin: "https://www.linkedin.com/company/zyntechlabs",
    twitter: "https://twitter.com/zyntechlabs",
    github: "https://github.com/zyntechlabs",
  },
};

export const caseStudiesData: CaseStudy[] = [
  {
    _id: "cs-1",
    title: "Revolutionizing Last-Mile Delivery with Automated Dispatch",
    client: "GIG Logistics",
    slug: "gig-logistics",
    tagline: "Enterprise Fleet Automation & Real-Time Tracking Platform",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    category: "Logistics & Supply Chain",
    industry: "Logistics & Freight",
    overview:
      "GIG Logistics required an enterprise-grade digital transformation to manage over 15,000 daily parcel dispatches across 40+ transit hubs with zero delay and dynamic driver routing.",
    challenge:
      "The client was experiencing peak hour delivery bottlenecks, lack of end-to-end automated package visibility, and legacy dispatch systems prone to high human error and downtime.",
    solution:
      "We engineered a distributed, high-concurrency dispatch orchestration platform with automated routing algorithms, live GPS microservices, driver mobile apps, and automated client SMS/WhatsApp notifications.",
    results: [
      "42% reduction in last-mile transit times via real-time dynamic route optimization.",
      "99.98% system uptime during Black Friday & peak holiday shipping surges.",
      "Streamlined dispatch workflow allowing 3.5x higher parcel volume per operator.",
    ],
    metrics: [
      { label: "Dispatch Efficiency", value: "+42%", change: "Faster turnaround" },
      { label: "Daily Deliveries", value: "150K+", change: "Processed daily" },
      { label: "Operational Cost", value: "-28%", change: "Saved annually" },
      { label: "Platform Uptime", value: "99.98%", change: "Zero downtime" },
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Kafka", "AWS EKS", "Docker"],
    testimonial: {
      quote:
        "ZynTech Labs transformed our core logistics architecture. Their enterprise software handled our multi-fold holiday surge without a single glitch.",
      author: "Oluwaseun Adeyemi",
      position: "VP of Technology & Operations",
      company: "GIG Logistics",
    },
    seo: {
      metaTitle: "GIG Logistics Case Study | Enterprise Fleet Management | ZynTech Labs",
      metaDescription:
        "Learn how ZynTech Labs built an automated last-mile dispatch and tracking platform for GIG Logistics handling 150K+ daily shipments.",
      canonicalUrl: "https://zyntechlabs.io/case-study/gig-logistics",
      schemaType: "CaseStudy",
    },
  },
  {
    _id: "cs-2",
    title: "AI-Powered Fleet Management & Driver Telematics",
    client: "Tarzan Transport",
    slug: "tarzan-transport",
    tagline: "Cross-Border Fleet Management & Predictive Maintenance",
    heroImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    category: "Fleet Telematics",
    industry: "Heavy Freight & Transportation",
    overview:
      "Tarzan Transport operates a cross-border fleet of heavy freight trucks. They needed an integrated telematics, fuel monitoring, and predictive maintenance platform to reduce operating costs.",
    challenge:
      "Fuel theft, unscheduled engine breakdowns in remote transit zones, and unmonitored driver idle hours were causing heavy annual operational losses.",
    solution:
      "Built an IoT-integrated SaaS telematics dashboard that analyzes CAN-bus telemetry in real time, generates predictive maintenance alerts 72 hours before critical engine failures, and tracks automated geofencing.",
    results: [
      "Prevented 85% of unexpected highway engine breakdowns with early telemetry warnings.",
      "Cut annual fuel waste and unauthorized detours by 34%.",
      "Centralized cross-border customs documentation into automated cloud manifests.",
    ],
    metrics: [
      { label: "Fuel Cost Saved", value: "34%", change: "Direct reduction" },
      { label: "Fleet Monitored", value: "850+", change: "Heavy trucks" },
      { label: "Breakdown Reduction", value: "85%", change: "Predictive alerts" },
      { label: "ROI Achieved", value: "4.2x", change: "Within 6 months" },
    ],
    techStack: ["React", "Go", "TimescaleDB", "MQTT", "Python AI", "Google Cloud"],
    testimonial: {
      quote:
        "The IoT and telematics system engineered by ZynTech Labs gave our fleet operations total transparency and shaved millions in maintenance expenses.",
      author: "Marcus Vance",
      position: "Chief Fleet Director",
      company: "Tarzan Transport",
    },
    seo: {
      metaTitle: "Tarzan Transport Case Study | IoT Fleet Telematics | ZynTech Labs",
      metaDescription:
        "Discover how ZynTech Labs engineered an IoT telematics and predictive maintenance platform for Tarzan Transport's cross-border fleet.",
      canonicalUrl: "https://zyntechlabs.io/case-study/tarzan-transport",
      schemaType: "CaseStudy",
    },
  },
];

export const blogPostsData: BlogPost[] = [
  {
    _id: "post-1",
    title: "How Enterprise Companies Are Scaling Microservices in 2026",
    slug: "scaling-enterprise-microservices-2026",
    excerpt:
      "A deep dive into event-driven architectures, Kubernetes orchestration, and database sharding techniques for enterprise systems handling millions of transactions.",
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-08-15T10:00:00Z",
    readTime: "7 min read",
    author: {
      name: "Alex Sterling",
      slug: "alex-sterling",
      role: "Lead Solutions Architect",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      bio: "Alex is a veteran cloud architect specializing in high-throughput distributed systems.",
    },
    category: {
      title: "Cloud & DevOps",
      slug: "cloud-devops",
    },
    tags: ["Microservices", "Kubernetes", "Architecture", "Enterprise"],
    seo: {
      metaTitle: "How Enterprise Companies Are Scaling Microservices in 2026 | ZynTech Labs",
      metaDescription:
        "Discover key architectural patterns for scaling enterprise microservices, event streaming with Kafka, and achieving 99.999% availability.",
      canonicalUrl: "https://zyntechlabs.io/blog/scaling-enterprise-microservices-2026",
      schemaType: "BlogPosting",
    },
  },
  {
    _id: "post-2",
    title: "The Future of AI Automation in Supply Chain & Logistics",
    slug: "ai-automation-supply-chain-logistics",
    excerpt:
      "Explore how predictive AI routing, autonomous warehouse sorting, and dynamic freight pricing are reshaping global logistics operations.",
    coverImage: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-08-20T14:30:00Z",
    readTime: "5 min read",
    author: {
      name: "Priya Sharma",
      slug: "priya-sharma",
      role: "Head of AI & Data Engineering",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      bio: "Priya leads AI research & logistics automation deployments at ZynTech Labs.",
    },
    category: {
      title: "AI & Automation",
      slug: "ai-automation",
    },
    tags: ["AI", "Logistics", "Automation", "Machine Learning"],
    seo: {
      metaTitle: "The Future of AI Automation in Supply Chain & Logistics | ZynTech Labs",
      metaDescription:
        "Learn how AI automation is revolutionizing fleet dispatch, predictive maintenance, and supply chain visibility.",
      canonicalUrl: "https://zyntechlabs.io/blog/ai-automation-supply-chain-logistics",
      schemaType: "BlogPosting",
    },
  },
  {
    _id: "post-3",
    title: "Building High-Security Fintech Platforms: A Compliance Guide",
    slug: "building-high-security-fintech-platforms",
    excerpt:
      "Essential security practices, PCI-DSS compliance requirements, and end-to-end tokenization architectures for enterprise banking software.",
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-08-24T09:15:00Z",
    readTime: "8 min read",
    author: {
      name: "Alex Sterling",
      slug: "alex-sterling",
      role: "Lead Solutions Architect",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      bio: "Alex is a veteran cloud architect specializing in high-throughput distributed systems.",
    },
    category: {
      title: "Fintech & Security",
      slug: "fintech-security",
    },
    tags: ["Fintech", "Cybersecurity", "Compliance", "Architecture"],
    seo: {
      metaTitle: "Building High-Security Fintech Platforms: A Compliance Guide | ZynTech Labs",
      metaDescription:
        "Comprehensive architectural guide on PCI-DSS, zero-trust security, and vault tokenization for enterprise financial platforms.",
      canonicalUrl: "https://zyntechlabs.io/blog/building-high-security-fintech-platforms",
      schemaType: "BlogPosting",
    },
  },
];

export const industriesData = [
  {
    id: "fintech",
    title: "Fintech & Banking",
    tag: "Finance",
    icon: "Landmark",
    shortDesc: "Scalable core banking, digital wallets, payment gateways, and fraud detection systems.",
    fullDesc:
      "We engineer ultra-secure, PCI-DSS compliant financial technology solutions with sub-millisecond transaction handling, automated AML/KYC checks, and custom payment ledger architectures.",
    features: ["Core Banking Systems", "Multi-Currency Wallets", "Automated Fraud Detection", "Payment Gateway Integration"],
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    tag: "Logistics",
    icon: "Truck",
    shortDesc: "End-to-end fleet tracking, warehouse automation, route optimization, and telematics.",
    fullDesc:
      "Enterprise dispatch platforms, IoT fleet monitoring, automated geofencing, and predictive arrival algorithms for global freight carriers and on-demand delivery networks.",
    features: ["Automated Dispatch Engine", "IoT Telematics & GPS", "Warehouse Management (WMS)", "Driver Mobile Apps"],
  },
  {
    id: "healthcare",
    title: "Healthcare & MedTech",
    tag: "Healthcare",
    icon: "HeartPulse",
    shortDesc: "HIPAA-compliant telemedicine, EHR systems, diagnostic AI, and patient portals.",
    fullDesc:
      "Secure digital health ecosystems designed for hospitals, clinics, and medical startups, providing seamless patient scheduling, encrypted health records, and diagnostic intelligence.",
    features: ["HIPAA-Compliant EHR", "Telehealth Video Systems", "Medical IoT Integration", "Patient Billing Portals"],
  },
  {
    id: "ecommerce",
    title: "Retail & E-Commerce",
    tag: "Retail",
    icon: "ShoppingBag",
    shortDesc: "High-volume headless commerce, omnichannel POS, inventory sync, and AI recommendation engines.",
    fullDesc:
      "Modern e-commerce architectures built for global retail brands requiring instant product search, real-time inventory management across warehouses, and lightning-fast checkout.",
    features: ["Headless Commerce", "Omnichannel Inventory Sync", "AI Product Recommendations", "Custom POS Systems"],
  },
  {
    id: "saas",
    title: "Enterprise SaaS",
    tag: "B2B SaaS",
    icon: "Cloud",
    shortDesc: "Multi-tenant B2B platforms, subscription billing, RBAC security, and analytics dashboards.",
    fullDesc:
      "Turnkey SaaS product development from inception to enterprise scale. We build multi-tenant databases, robust billing engines, and granular role-based access control.",
    features: ["Multi-Tenant Architecture", "Stripe / LemonSqueezy Billing", "Granular RBAC Security", "Custom Analytics BI"],
  },
  {
    id: "realestate",
    title: "Real Estate & PropTech",
    tag: "PropTech",
    icon: "Building2",
    shortDesc: "Property management software, VR virtual tours, automated lease agreements, and CRM portals.",
    fullDesc:
      "Digital platforms for real estate developers, brokers, and property managers to streamline listing distribution, tenant screening, lease automation, and maintenance tickets.",
    features: ["Property Listing Portals", "Automated Lease Contracts", "Tenant & Owner Portals", "Smart Metering IoT"],
  },
];

export const servicesData = [
  {
    icon: "Code2",
    title: "Custom Enterprise Software",
    description:
      "Tailor-made software architectures designed specifically for your business workflows, removing operational inefficiencies and automating high-volume business tasks.",
  },
  {
    icon: "Smartphone",
    title: "Mobile App Development",
    description:
      "High-performance native and cross-platform iOS & Android mobile applications with offline-first sync, biometric security, and responsive UX.",
  },
  {
    icon: "Sparkles",
    title: "AI & Machine Learning",
    description:
      "Custom AI models, predictive analytics, intelligent OCR document processing, and generative AI copilot integrations built into your workflow.",
  },
  {
    icon: "CloudRain",
    title: "Cloud & DevOps Engineering",
    description:
      "Scalable AWS, GCP, and Azure cloud infrastructure with automated CI/CD pipelines, Kubernetes container orchestration, and 99.99% high-availability.",
  },
  {
    icon: "Layers",
    title: "UI/UX Product Design",
    description:
      "Data-driven user experience design, comprehensive design systems, clickable prototypes, and conversion-optimized enterprise interfaces.",
  },
  {
    icon: "ShieldCheck",
    title: "Cybersecurity & Compliance",
    description:
      "Zero-trust security implementations, comprehensive vulnerability testing, automated audit logging, and SOC2 / ISO / HIPAA compliance readiness.",
  },
];
