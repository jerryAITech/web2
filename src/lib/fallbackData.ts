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
  faqs: [
    {
      question: "What types of custom enterprise software does ZynTech Labs develop?",
      answer:
        "We architect and build end-to-end custom enterprise software systems including high-throughput core banking engines, real-time fleet telematics & dispatch platforms, AI document processing pipelines, multi-tenant B2B SaaS platforms, and HIPAA-compliant healthcare portals.",
    },
    {
      question: "How does the discovery call and project engagement process work?",
      answer:
        "After you book a discovery call via our contact form, our senior solutions architect meets with your technical stakeholders to audit requirements. Within 48 hours, we provide an architectural blueprint, tech stack recommendations, milestone timelines, and fixed or dedicated team pricing options.",
    },
    {
      question: "Do we own 100% of the source code and intellectual property?",
      answer:
        "Yes, absolutely. Upon milestone completion, 100% of the custom source code, documentation, CI/CD deployment scripts, and intellectual property rights are fully transferred to your company under our standard Master Services Agreement.",
    },
    {
      question: "How does your Next.js + Headless CMS setup compare to WordPress?",
      answer:
        "Our Next.js architecture provides sub-second page loads (<1.0s LCP), zero plugin security vulnerabilities, perfect 98–100 Google Core Web Vitals, and a modern Sanity.io CMS dashboard with real-time Yoast-style SEO controls and visual editing.",
    },
    {
      question: "What are your standard delivery timelines for MVP and enterprise scale platforms?",
      answer:
        "Typical enterprise MVP delivery spans 6 to 10 weeks. For large-scale distributed platforms requiring complex IoT or microservice integrations, we operate on bi-weekly agile sprint cadences with continuous automated testing and deployment.",
    },
  ],
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
    categories: [
      { title: "Cloud & DevOps", slug: "cloud-devops" },
      { title: "Architecture", slug: "architecture" },
    ],
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
    categories: [{ title: "AI & Automation", slug: "ai-automation" }],
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
    categories: [{ title: "Fintech & Security", slug: "fintech-security" }],
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
    image: "https://zyntechlabs.io/wp-content/uploads/2026/08/fintech_and_banking.webp",
    shortDesc:
      "We excel in building state-of-the-art fintech and bank software solutions that provide modern financial institutions with innovative technology solutions.",
    fullDesc:
      "We excel in building state-of-the-art fintech and bank software solutions that provide modern financial institutions with innovative technology solutions. Our expertise include payment gateway software, digital wallet technology, core banking integration solutions, fraud prevention systems, and compliance technologies like KYC/Audit Management are part of our services.",
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    tag: "Logistics",
    image: "https://zyntechlabs.io/wp-content/uploads/2026/08/logistics.webp",
    shortDesc:
      "Using advanced digital technologies, we help logistics and supply chain companies optimize their operations.",
    fullDesc:
      "Using advanced digital technologies, we help logistics and supply chain companies optimize their operations. We design and implement digital solutions for fleet management, GPS asset tracking, dispatch optimization, warehouse management software, and multi-carrier integration solutions for the logistics industry.",
  },
  {
    id: "realestate",
    title: "Real Estate",
    tag: "Real Estate",
    image: "https://zyntechlabs.io/wp-content/uploads/2026/08/real_estate.webp",
    shortDesc:
      "Our company helps real estate businesses leverage technology for their digital transformation by providing innovative technology solutions for them.",
    fullDesc:
      "Our company helps real estate businesses leverage technology for their digital transformation by providing innovative technology solutions for them. We create property management platforms, virtual tour solutions, CRM automation, secure payment solutions, and more that simplify operations and enhance the buyer journey.",
  },
  {
    id: "telecom",
    title: "Telecom",
    tag: "Telecom",
    image: "https://zyntechlabs.io/wp-content/uploads/2026/08/telecom.webp",
    shortDesc:
      "We create advanced telecom software solutions aimed at helping businesses improve connectivity and efficiency.",
    fullDesc:
      "We create advanced telecom software solutions aimed at helping businesses improve connectivity and efficiency. Our solutions include BSS/OSS integrations, billing and charging solutions, network monitoring solutions, USSD/IVR solutions, and more.",
  },
  {
    id: "towing",
    title: "Towing & Roadside Services",
    tag: "Roadside",
    image: "https://zyntechlabs.io/wp-content/uploads/2026/08/towing.webp",
    shortDesc:
      "Our company delivers purpose-built technology solutions for towing and roadside assistance providers.",
    fullDesc:
      "Our company delivers purpose-built technology solutions for towing and roadside assistance providers. We develop dispatch management systems, driver operation platforms, GPS tracking solutions, insurance integrations, and self-service customer booking portals that improve response times and service efficiency.",
  },
  {
    id: "enterprise",
    title: "Other Enterprise Verticals",
    tag: "Enterprise",
    image: "https://zyntechlabs.io/wp-content/uploads/2026/08/enterprise.webp",
    shortDesc:
      "We also support healthcare, e-commerce and other new industries.",
    fullDesc:
      "We also support healthcare, e-commerce and other new industries. Whether it's complex workflows, critical systems, or a large digital setup your company requires, we step up when it matters the most.",
  },
];

export const servicesData = [
  {
    image: "https://zyntechlabs.io/wp-content/uploads/2026/08/mobile_app_develop.webp",
    title: "Mobile App Development",
    description:
      "We develop native apps for iOS and Android, and use React Native and Flutter for cross-platform options. Our aim? To deliver top-notch mobile experiences that run smoothly, stay dependable, and scale up to keep users hooked.",
  },
  {
    image: "https://zyntechlabs.io/wp-content/uploads/2026/08/web_and_development.webp",
    title: "Web & Enterprise Platform Development",
    description:
      "Ensure secure and scalable web applications, enterprise portals, customer platforms and internal business systems. Designed with contemporary technologies and strong architectures to facilitate sustainable development and operational efficiency.",
  },
  {
    image: "https://zyntechlabs.io/wp-content/uploads/2026/08/saas.webp",
    title: "SaaS & Custom Software Development",
    description:
      "We develop scalable SaaS solutions and custom software which will support you in achieving your business objectives. From strategy to support, we create apps that enhance growth and creativity, ensuring security and top performance too.",
  },
  {
    image: "https://zyntechlabs.io/wp-content/uploads/2026/08/ux_ui.webp",
    title: "UI/UX & Product Design",
    description:
      "User-centered design backed by research, strategy, and data. We develop simple digital experiences, design systems that scale to any size, and interfaces that are conversion-driven to increase adoption and ROI.",
  },
  {
    image: "https://zyntechlabs.io/wp-content/uploads/2026/08/cloud_engineering.webp",
    title: "Cloud Engineering & DevOps",
    description:
      "Focus on cloud-native infrastructure for AWS, Azure and Google Cloud. We're experts in CI/CD automation, containerization, infra-as-code, security optimization, and making sure systems stay up and available.",
  },
  {
    image: "https://zyntechlabs.io/wp-content/uploads/2026/08/ai_intelligent.webp",
    title: "AI & Intelligent Automation",
    description:
      "Utilize AI features and capabilities such as machine learning, NLP, computer vision, and predictive analytics in enterprise stuff. In software development, as well we do workflow automation.",
  },
];

export const innovationData = [
  {
    image: "https://zyntechlabs.io/wp-content/uploads/2026/08/ai_logo1.webp",
    title: "Seamless Integration",
    description:
      "Our services comprise the integration of AI-powered solutions into your current setup to achieve seamless operation.",
  },
  {
    image: "https://zyntechlabs.io/wp-content/uploads/2026/08/ai_logo2.webp",
    title: "Improved Decision Making",
    description:
      "Leverage the power of analytics and AI technologies to make more intelligent and prompt business decisions.",
  },
  {
    image: "https://zyntechlabs.io/wp-content/uploads/2026/08/ai_logo3.webp",
    title: "Enterprise-Level Security",
    description:
      "Help secure your sensitive information by encrypting them with the help of security techniques.",
  },
  {
    image: "https://zyntechlabs.io/wp-content/uploads/2026/08/ai_logo4.webp",
    title: "AI Customization",
    description:
      "We develop custom artificial intelligence systems based on the unique needs of your business.",
  },
  {
    image: "https://zyntechlabs.io/wp-content/uploads/2026/08/ai_logo5.webp",
    title: "Real-Time Monitoring",
    description:
      "Monitor your system's performance with live monitoring reports and dashboards.",
  },
  {
    image: "https://zyntechlabs.io/wp-content/uploads/2026/08/ai_logo6.webp",
    title: "Agile Development Methodology",
    description:
      "We develop using the agile approach which makes enterprise software development process management easier for both.",
  },
];

export const trustedByLogos = [
  "https://zyntechlabs.io/wp-content/uploads/2026/08/aj99@3x.webp",
  "https://zyntechlabs.io/wp-content/uploads/2026/08/alpha.webp",
  "https://zyntechlabs.io/wp-content/uploads/2026/08/giggo.webp",
  "https://zyntechlabs.io/wp-content/uploads/2026/08/wetap.webp",
  "https://zyntechlabs.io/wp-content/uploads/2026/08/white_hawk.webp",
];

export const techStackRowOne = [
  { name: "HTML", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/html.webp" },
  { name: "CSS", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/css.webp" },
  { name: "Vue Js", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/vue_js.webp" },
  { name: "Kotlin", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/kotlin.webp" },
  { name: "React", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/react.webp" },
  { name: "Javascript", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/javascript.webp" },
  { name: "Java", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/java.webp" },
  { name: "Swift", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/swift.webp" },
  { name: "Angular", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/angular.webp" },
  { name: "SQL", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/sql.webp" },
  { name: "PHP", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/php.webp" },
  { name: "Objective C", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/c_lan.webp" },
  { name: "Realm", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/realm.webp" },
  { name: "XML", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/xml.webp" },
];

export const techStackRowTwo = [
  { name: "Mongo DB", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/mongo_db.webp" },
  { name: "TestNG", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/testng.webp" },
  { name: "Github Actions", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/github.webp" },
  { name: "Python", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/python.webp" },
  { name: ".Net", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/dot_net.webp" },
  { name: "Shopify", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/shopify.webp" },
  { name: "Wordpress", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/wordpress.webp" },
  { name: "DevOps", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/devops.webp" },
  { name: "Kubernetes", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/kubernetes.webp" },
  { name: "Selenium", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/selenium.webp" },
  { name: "Node.js", image: "https://zyntechlabs.io/wp-content/uploads/2026/08/node_js.webp" },
];

export const enterprisePillars = [
  {
    title: "Security-First Engineering",
    desc: "End-to-End (E2E) Encryption, penetration testing and compliance ready architecture to enterprise standards.",
  },
  {
    title: "SLA-Backed Delivery",
    desc: "Defined uptime commitments, incident response procedures, and escalation plans to guarantee reliability.",
  },
  {
    title: "Scalable Systems",
    desc: "Architecture that grows from pilot to millions of users without rearchitecting.",
  },
  {
    title: "Dedicated Teams",
    desc: "For every engagement, the team includes engineers, product leads and account managers for complete transparency and accountability.",
  },
];
