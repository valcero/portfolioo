export const profile = {
  name: "Hamza Rehman",
  role: "Backend & Full-Stack Software Engineer",
  education: "B.Tech in Computer Science Engineering (2026)",
  email: "mohdhamzarehman@gmail.com",
  github: "https://github.com/valcero",
  linkedin: "https://www.linkedin.com/in/mohdhamzarehman/",
  resumeUrl: "/resume.pdf",
  resumeFileName: "Hamza_Rehman_Resume.pdf",
  siteUrl: "https://hamzarehman.dev",
};

export type StackCategory = "Languages" | "Frameworks" | "Data" | "DevOps";

export const stack: { name: string; category: StackCategory }[] = [
  { name: "Go", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "React", category: "Frameworks" },
  { name: "Next.js", category: "Frameworks" },
  { name: "Node.js", category: "Frameworks" },
  { name: "Django", category: "Frameworks" },
  { name: "PostgreSQL", category: "Data" },
  { name: "Redis", category: "Data" },
  { name: "SQLC", category: "Data" },
  { name: "Prisma", category: "Data" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Linux", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
];

export const categories: ("All" | StackCategory)[] = [
  "All",
  "Languages",
  "Frameworks",
  "Data",
  "DevOps",
];

export type Highlight = {
  id: string;
  title: string;
  tags: string[];
  summary: string;
};

export const experience = {
  title: "Software Engineering Intern (Backend)",
  company: "Farmako",
  note: "YC-backed healthcare startup",
  location: "Gurugram",
  period: "Jan 2026 – Jul 2026",
  highlights: [
    {
      id: "services",
      title: "Production services",
      tags: ["Go", "Node.js", "REST"],
      summary:
        "Built production backend microservices and REST APIs in Go and Node.js.",
    },
    {
      id: "draftrx",
      title: "DraftRx",
      tags: ["Go", "PostgreSQL", "Slack"],
      summary:
        "Engineered DraftRx, an internal doctor-facing Slack automation tool built with Go and PostgreSQL to streamline teleconsultation workflows.",
    },
    {
      id: "coupons",
      title: "Coupon validation service",
      tags: ["Go", "Redis", "PostgreSQL"],
      summary:
        "Developed a high-throughput Go coupon validation microservice backed by Redis caching and PostgreSQL for checkout workflows.",
    },
    {
      id: "cicd",
      title: "CI/CD and AI tooling",
      tags: ["GitHub Actions", "CI/CD"],
      summary:
        "Automated testing and deployments via GitHub Actions pipelines, using AI tooling for test generation and backend workflow automation.",
    },
  ] satisfies Highlight[],
};

export type Project = {
  name: string;
  tagline: string;
  status?: string;
  metrics: string[];
  bullets: string[];
  tags: string[];
  /** Falls back to the GitHub profile until a repo URL is set. */
  repo?: string;
  live?: string;
  /** Extra download link, e.g. a release page. */
  download?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    name: "QuickPay QR",
    tagline: "Cross-platform app that opens straight to a saved UPI or merchant QR.",
    status: "Live",
    metrics: ["AES-256-GCM", "Go on WASM + Android", "Zero analytics"],
    bullets: [
      "Built a cross-platform Android and web app that opens straight to a saved UPI or merchant QR at full brightness, with multiple QR profiles, biometric lock and light/dark themes.",
      "Wrote the core logic once in Go (QR validation, profiles, encrypted vault) and ran it as WebAssembly in the browser and as a native library on Android via gomobile, behind one bridge API.",
      "Encrypted all data at rest with AES-256-GCM, kept keys in the Android Keystore, and collected no accounts or analytics.",
      "Designed an optional Go and PostgreSQL sync REST API that stores only client-encrypted blobs. Shipped signed APK releases and a Cloudflare-hosted web app.",
    ],
    tags: ["Go", "TypeScript", "React Native", "Expo", "WebAssembly", "PostgreSQL"],
    repo: "https://github.com/valcero/quick-pay",
    live: "https://quick-pay-v1.mohdhamzarehman.workers.dev/",
    download: {
      label: "Download APK",
      href: "https://github.com/valcero/quick-pay/releases/latest",
    },
  },
  {
    name: "TaskFlow",
    tagline: "Kanban board with a Go API, realtime sync and n8n automation.",
    metrics: ["402 → 930 req/s", "p99 145 → 49 ms", "2,000/2,000 events in 3.6 s"],
    bullets: [
      "Built a responsive Next.js and TypeScript kanban UI with Tailwind CSS, drag-and-drop with optimistic updates, and realtime board sync over Server-Sent Events, supporting light and dark themes.",
      "Developed a Go REST API on PostgreSQL with JWT auth, rotating refresh tokens and role-based access control. Fixed a row-lock race found in load testing, raising card-move throughput from 402 to 930 req/s and cutting p99 latency from 145 ms to 49 ms.",
      "Integrated n8n workflow automation in both directions: HMAC-SHA256-signed webhooks trigger workflows (Discord alerts on card moves and due dates), and n8n creates cards through the API using scoped API tokens.",
      "Engineered an event-driven webhook delivery pipeline on a Postgres queue delivering 2,000 of 2,000 events in 3.6 s, with a GitHub Actions CI/CD pipeline running linting, tests and a smoke test on Docker-based Postgres.",
    ],
    tags: ["Go", "PostgreSQL", "Next.js", "TypeScript", "Tailwind CSS", "n8n", "Docker", "GitHub Actions"],
    repo: "https://github.com/valcero/taskflow",
  },
  {
    name: "EventPulse",
    tagline: "Webhook delivery service with signed requests, retries and a live dashboard.",
    metrics: ["HMAC-SHA256 signed", "At-least-once delivery", "5 attempts, backoff + jitter"],
    bullets: [
      "Built a Go REST API that accepts events and delivers them to registered HTTP endpoints. An event and its delivery fan-out commit in a single PostgreSQL transaction.",
      "Designed a lease-based worker pool on PostgreSQL using FOR UPDATE SKIP LOCKED, so any number of workers share the queue and a crashed worker's rows become due again when the lease expires.",
      "Signed every request with per-endpoint HMAC-SHA256 and rotatable secrets. Added SSRF protection, no redirect following, and Redis rate limiting per application and per endpoint that fails open.",
      "Retried failures with exponential backoff and jitter before a terminal failed state. Used sqlc type-safe queries and monthly range-partitioned delivery tables.",
      "Shipped a Next.js and Tailwind dashboard, Prometheus metrics, a provisioned Grafana board and alert rules, plus Docker Compose and Kubernetes manifests with an HPA.",
    ],
    tags: ["Go", "PostgreSQL", "Redis", "sqlc", "Next.js", "TypeScript", "Prometheus", "Grafana", "Docker", "Kubernetes"],
    repo: "https://github.com/valcero/eventpulse",
  },
  {
    name: "CloudGuard",
    tagline: "DevSecOps and EKS GitOps platform for a hardened SQS worker on AWS.",
    metrics: ["5 CI security gates", "Pod Security: restricted", "$0 local demo"],
    bullets: [
      "Provisioned AWS infrastructure with Terraform modules (VPC, EKS, SNS to SQS with a DLQ, IRSA, Datadog monitors) and dev and prod environments, deployed with a Helm chart.",
      "Gated CI with Gitleaks, gosec, Checkov, tfsec and Trivy so any finding fails the build, and pushed the image to GHCR only after every gate passed.",
      "Hardened workloads: non-root pods with a read-only root filesystem, all capabilities dropped, seccomp RuntimeDefault, default-deny NetworkPolicy, HPA and PDB.",
      "Scoped IAM through IRSA to one service account that can only receive and delete on one queue. Encrypted queues and state, enforced IMDSv2, and restricted the EKS API to a given CIDR.",
      "Wrote a Go SQS worker with health and metrics endpoints in a distroless image, and kept demos free by running on kind with EKS and NAT off by default.",
    ],
    tags: ["Go", "Terraform", "AWS", "EKS", "Helm", "Kubernetes", "GitHub Actions", "Trivy", "Datadog"],
    repo: "https://github.com/valcero/cloudguard",
  },
];