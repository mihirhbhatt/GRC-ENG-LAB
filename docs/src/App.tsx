import { useState, useEffect } from "react";
import {
  Shield,
  Terminal,
  BookOpen,
  Users,
  ChevronRight,
  ExternalLink,
  Lock,
  Code2,
  FileCheck,
  Search,
  Zap,
  ArrowRight,
  Menu,
  X,
  Flame,
  Target,
  Cpu,
  Eye,
  Cloud,
} from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const REPO_URL = "https://github.com/mihirhbhatt/GRC-ENG-LAB";

const labs = [
  {
    number: "01",
    title: "Deny Public S3 Buckets",
    description: "Use Rego and Conftest to prevent public S3 bucket configs",
    category: "Policy-as-Code",
    icon: Cloud,
    link: `${REPO_URL}/blob/main/Policy-As-Code/Lab%2001-Deny-Public-S3/README.md`,
    color: "from-cyan-500 to-blue-600",
    accent: "cyan",
  },
  {
    number: "02",
    title: "Block Open Security Groups",
    description:
      "Detect and block 0.0.0.0/0 open security groups using policy-as-code",
    category: "Policy-as-Code",
    icon: Lock,
    link: `${REPO_URL}/blob/main/Policy-As-Code/Lab%2002-Block-Open-Security-Groups/readme.md`,
    color: "from-emerald-500 to-green-600",
    accent: "emerald",
  },
  {
    number: "03",
    title: "IAM Policy Audits",
    description: "Enforce IAM policies with hands-on validation",
    category: "Policy-as-Code",
    icon: FileCheck,
    link: `${REPO_URL}/blob/main/Policy-As-Code/IAM-Policy-Audits/readme.md`,
    color: "from-violet-500 to-purple-600",
    accent: "violet",
  },
  {
    number: "04",
    title: "MFA for Privileged Accounts",
    description: "Enforce MFA for privileged accounts (IA-2(1))",
    category: "Policy-as-Code",
    icon: Shield,
    link: `${REPO_URL}/blob/main/Policy-As-Code/ia-2-1-enforcing-mfa-privileged-accounts/readme.md`,
    color: "from-amber-500 to-orange-600",
    accent: "amber",
  },
  {
    number: "05",
    title: "Control Mapping for Beginners",
    description: "Learn how to connect NIST 800 controls to technical implementations",
    category: "Control Mapping",
    icon: Target,
    link: `${REPO_URL}/blob/main/Control-Mapping/Lab%2001-Control-Mapping-for-Beginners/readme.md`,
    color: "from-rose-500 to-pink-600",
    accent: "rose",
  },
];

const learningPoints = [
  {
    icon: Code2,
    title: "Build & Test Security Controls",
    desc: "Write real policies, not just read about them.",
  },
  {
    icon: Terminal,
    title: "Conftest, Rego & Trivy in Practice",
    desc: "Use the tools the industry actually uses.",
  },
  {
    icon: Zap,
    title: "Policy-as-Code & CI/CD Automation",
    desc: "Reduce manual compliance work with automation.",
  },
  {
    icon: Search,
    title: "Map Controls to Implementations",
    desc: "Bridge the gap between frameworks and code.",
  },
  {
    icon: Eye,
    title: "Show Your Work",
    desc: 'Stop saying "it depends" and start proving it.',
  },
];

const audiences = [
  {
    icon: Shield,
    title: "GRC Pros",
    desc: "Who want to get more technical and hands-on.",
  },
  {
    icon: Cpu,
    title: "Cybersecurity Analysts",
    desc: 'Who want to understand the "G" and "R" in GRC.',
  },
  {
    icon: Code2,
    title: "Engineers",
    desc: "Told to meet compliance but don't know what that means.",
  },
  {
    icon: Search,
    title: "Self-Learners",
    desc: 'Stuck Googling "how to policy-as-code" in a 40-tab rabbit hole.',
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/90 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
                <Flame className="h-5 w-5 text-white" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-gray-950 animate-pulse" />
            </div>
            <span className="font-bold text-lg text-white tracking-tight">
              GRC<span className="text-cyan-400"> ENG</span> LAB
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {["Labs", "Learn", "Community", "Get Started"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                {item}
              </a>
            ))}
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-sm font-semibold rounded-lg hover:from-cyan-400 hover:to-emerald-400 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-800/50 mt-2 pt-4 space-y-1">
            {["Labs", "Learn", "Community", "Get Started"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="block px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-4 mt-3 text-center px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-sm font-semibold rounded-lg"
            >
              View on GitHub
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-950">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          Open Source • Hands-On • Learn by Doing
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6">
          <span className="block">GRC</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
            ENG LAB
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
          The sandbox for GRC pros to{" "}
          <span className="text-cyan-400 font-semibold">break things</span>,{" "}
          <span className="text-emerald-400 font-semibold">test ideas</span>, and{" "}
          <span className="text-violet-400 font-semibold">learn by doing</span>.
        </p>
        <p className="text-base text-gray-500 max-w-xl mx-auto mb-10">
          Tired of reading 500-page PDFs? No more theory with no application.
          No more guessing how policy-as-code works. Just hands-on labs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#labs"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-emerald-400 transition-all shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
          >
            Explore Labs
            <ChevronRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-3.5 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 hover:bg-white/5 font-semibold rounded-xl transition-all"
          >
            <GithubIcon className="h-5 w-5" />
            View on GitHub
            <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          {[
            { value: "5+", label: "Labs" },
            { value: "4", label: "Categories" },
            { value: "0", label: "Installs Needed" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl font-black text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-gray-500" />
        </div>
      </div>
    </section>
  );
}

function LearnSection() {
  return (
    <section id="learn" className="relative py-24 sm:py-32 bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-medium mb-4">
            <BookOpen className="h-3.5 w-3.5" />
            WHAT YOU'LL LEARN
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Turn Frameworks Into{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Something Real
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            This isn't your typical GRC content. We don't do boring here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningPoints.map((item, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl border border-gray-800/50 bg-gray-900/30 hover:border-cyan-500/30 hover:bg-gray-900/60 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-emerald-500/30 transition-all">
                  <item.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section id="community" className="relative py-24 sm:py-32 bg-gray-950">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-4">
            <Users className="h-3.5 w-3.5" />
            WHO THIS IS FOR
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Built for People Who{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Learn by Doing
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Whether you're a GRC veteran or just getting started, there's a lab
            with your name on it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl border border-gray-800/50 bg-gray-900/30 hover:border-violet-500/30 hover:bg-gray-900/60 transition-all duration-300 text-center"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-7 w-7 text-violet-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LabsSection() {
  const [hoveredLab, setHoveredLab] = useState<number | null>(null);

  return (
    <section id="labs" className="relative py-24 sm:py-32 bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-medium mb-4">
            <Terminal className="h-3.5 w-3.5" />
            HANDS-ON LABS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Pick a Lab.{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Break Things.
            </span>{" "}
            Learn.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each lab is self-contained, runs in your browser via GitHub Codespaces,
            and walks you through step-by-step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab, i) => (
            <a
              key={i}
              href={lab.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl border border-gray-800/50 bg-gray-900/30 hover:border-gray-700 hover:bg-gray-900/60 transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredLab(i)}
              onMouseLeave={() => setHoveredLab(null)}
            >
              {/* Top gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${lab.color}`} />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${lab.color} flex items-center justify-center shadow-lg`}>
                    <lab.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-gray-800/80 text-gray-400 text-xs font-medium border border-gray-700/50">
                      {lab.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-gray-800/80 text-gray-500 text-xs font-mono">
                      #{lab.number}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {lab.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {lab.description}
                </p>

                <div className="flex items-center text-sm text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                  Start Lab
                  <ArrowRight
                    className={`h-4 w-4 ml-1 transition-transform duration-300 ${
                      hoveredLab === i ? "translate-x-1" : ""
                    }`}
                  />
                </div>
              </div>
            </a>
          ))}

          {/* More labs coming card */}
          <div className="relative rounded-2xl border border-dashed border-gray-700/50 bg-gray-900/10 flex flex-col items-center justify-center p-8 text-center min-h-[260px]">
            <div className="h-12 w-12 rounded-xl border-2 border-dashed border-gray-700 flex items-center justify-center mb-4 animate-pulse">
              <Zap className="h-6 w-6 text-gray-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-500 mb-2">More Labs Coming</h3>
            <p className="text-gray-600 text-sm">
              Continuous Monitoring, Evidence Automation, and more…
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GetStartedSection() {
  const steps = [
    {
      number: "1",
      title: "Fork the Repo",
      desc: 'Click the "Fork" button at the top right of the GitHub repo to create your own copy.',
      icon: GithubIcon,
    },
    {
      number: "2",
      title: "Open in Codespaces",
      desc: 'On your fork, click "Code" → "Open with Codespaces" → "New codespace".',
      icon: Terminal,
    },
    {
      number: "3",
      title: "Let it Load",
      desc: "A browser-based VS Code workspace opens with all tools pre-configured. Zero installs.",
      icon: Cpu,
    },
    {
      number: "4",
      title: "Start the Lab",
      desc: "Follow the README in each lab folder. Create files, write code, and run tests.",
      icon: Flame,
    },
  ];

  return (
    <section id="get-started" className="relative py-24 sm:py-32 bg-gray-950">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-medium mb-4">
            <Zap className="h-3.5 w-3.5" />
            GET STARTED
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            No Installs.{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              No Excuses.
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            New to GitHub? You're not alone, and you're not too late. Most GRC
            professionals weren't handed a GitHub 101 course during onboarding.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative flex gap-6 p-6 rounded-2xl border border-gray-800/50 bg-gray-900/30 hover:border-emerald-500/30 hover:bg-gray-900/60 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-emerald-500/30 group-hover:to-cyan-500/30 transition-all">
                  <span className="text-2xl font-black bg-gradient-to-br from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    {step.number}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold text-lg rounded-xl hover:from-cyan-400 hover:to-emerald-400 transition-all shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
          >
            <GithubIcon className="h-6 w-6" />
            Open the Repo
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-4 text-gray-500 text-sm">
            Runs entirely in your browser. No local setup required.
          </p>
        </div>
      </div>
    </section>
  );
}

function DevContainerBanner() {
  return (
    <section className="relative py-16 bg-gray-950">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-gray-900/40 p-8 sm:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-black text-white mb-3">
                🧪 DevContainer Included
              </h3>
              <p className="text-gray-400 leading-relaxed">
                A pre-configured workspace with all tools you need — Terraform,
                Conftest, VS Code extensions — all set up and ready to go. You
                still create your own folders, files, and Rego policies from
                scratch. The DevContainer just skips the annoying setup.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Terminal, label: "Terraform" },
                  { icon: FileCheck, label: "Conftest" },
                  { icon: Code2, label: "VS Code" },
                ].map((tool, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50"
                  >
                    <tool.icon className="h-6 w-6 text-cyan-400" />
                    <span className="text-xs text-gray-400 font-medium">
                      {tool.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative py-12 bg-gray-950 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-500 flex items-center justify-center">
              <Flame className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-white">
              GRC<span className="text-cyan-400"> ENG</span> LAB
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} GRC ENG LAB • Open Source
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-gray-950 text-white antialiased">
      <Navbar />
      <HeroSection />
      <LearnSection />
      <AudienceSection />
      <LabsSection />
      <DevContainerBanner />
      <GetStartedSection />
      <Footer />
    </div>
  );
}
