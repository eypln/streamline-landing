"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  BarChart3,
  Calendar,
  Check,
  ChevronDown,
  ImageIcon,
  Menu,
  MessageSquare,
  TrendingUp,
  Users,
  Video,
  Zap,
  Sparkles,
  Star,
  Share2,
  Home,
} from "lucide-react"

/* ─── Animation variants ─────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const scaleIn = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function TypewriterText({ text, delay = 1200 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("")
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  useEffect(() => {
    if (!started || displayed.length >= text.length) return
    const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), 32)
    return () => clearTimeout(t)
  }, [started, displayed, text])

  return (
    <span>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block w-0.5 h-3.5 bg-primary ml-0.5 align-middle rounded-full"
      />
    </span>
  )
}

/* ─── Static data ─────────────────────────────────────────── */
const features = [
  {
    icon: BarChart3,
    title: "Post Analytics",
    description:
      "Track your content performance with detailed analytics. See what works and optimise your strategy for maximum engagement.",
    gradient: "from-primary/8 to-transparent",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: ImageIcon,
    title: "Content Creation",
    description:
      "Generate stunning visuals and copy with AI. Create professional posts in seconds with smart templates and design tools.",
    gradient: "from-violet-500/8 to-transparent",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-500",
  },
  {
    icon: Users,
    title: "CRM System",
    description:
      "Manage your clients and leads in one place. Track interactions, schedule follow-ups, and never miss an opportunity.",
    gradient: "from-blue-500/8 to-transparent",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: MessageSquare,
    title: "Chatbot Integration",
    description:
      "Automate customer interactions with smart chatbots. Respond instantly and capture leads 24/7 across all platforms.",
    gradient: "from-emerald-500/8 to-transparent",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
  {
    icon: Zap,
    title: "Design Templates",
    description:
      "Access hundreds of professional templates. Customise colours, fonts, and layouts to match your brand perfectly.",
    gradient: "from-amber-500/8 to-transparent",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
  },
  {
    icon: TrendingUp,
    title: "Listing Analytics",
    description:
      "Monitor your market presence and competitor performance. Get insights to stay ahead of the competition.",
    gradient: "from-rose-500/8 to-transparent",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-500",
  },
]

const stats = [
  { value: "400+", label: "Active agents" },
  { value: "98%", label: "Satisfaction rate" },
  { value: "12×", label: "More leads" },
  { value: "3 hrs", label: "Saved per day" },
]

const plans = [
  {
    name: "Free",
    description: "Get started with the basics",
    monthly: 0,
    popular: false,
    cta: "Get Started",
    href: "https://app.letify.cloud/sign-up",
    features: ["1 profile", "30 Facebook posts/month (text + image)", "Email support"],
  },
  {
    name: "Mini",
    description: "Perfect for small businesses",
    monthly: 39,
    popular: false,
    cta: "Get Plan",
    href: "https://app.letify.cloud/sign-up",
    features: [
      "2 profiles (Facebook, Instagram)",
      "Unlimited Facebook posts",
      "Chrome Extension",
      "15 Reels/Stories per month",
      "Adding Credits option",
      "Basic Listing Analytics",
      "Design Templates",
      "Priority support",
    ],
  },
  {
    name: "Full",
    description: "Best for growing agencies",
    monthly: 89,
    popular: true,
    cta: "Get Plan",
    href: "https://app.letify.cloud/sign-up",
    features: [
      "5 profiles (Facebook, Instagram, TikTok, Messenger, WhatsApp)",
      "Unlimited Facebook posts",
      "Chrome Extension",
      "30 Reels per month",
      "Adding Credits option",
      "Advanced Listing Analytics",
      "More Design Templates",
      "Messenger & WhatsApp Chatbots",
      "Lead Capture Mode",
      "CRM Client Database",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    description: "For agencies and teams",
    monthly: null,
    popular: false,
    cta: "Contact Sales",
    href: "mailto:admin@letify.cloud",
    features: [
      "Unlimited profiles",
      "All features included",
      "Priority support",
      "Custom integrations",
      "For agencies and teams",
      "Contact us for pricing",
    ],
  },
]

const faqData = [
  {
    question: "How does Letify help me create content?",
    answer:
      "Letify uses AI to generate engaging social media posts, captions, and visuals tailored for real estate. Simply input your listing details and our AI creates professional content ready to publish.",
  },
  {
    question: "Which social media platforms does Letify support?",
    answer:
      "Letify supports Facebook, Instagram, TikTok, WhatsApp, and Messenger. We are constantly adding more platforms based on user feedback.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time. Your account will remain active until the end of your current billing period.",
  },
  {
    question: "Is Letify safe for my social media accounts?",
    answer:
      "Absolutely. We use secure OAuth authentication and never store your passwords. All data is encrypted and we follow industry best practices for security.",
  },
  {
    question: "How does Letify ensure data security?",
    answer:
      "We use enterprise-grade encryption, secure servers, and comply with GDPR regulations. Your data is protected with bank-level security measures.",
  },
  {
    question: "What payment methods can I use?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
  },
  {
    question: "Do the prices include tax?",
    answer:
      "Prices are shown excluding tax. Applicable taxes will be calculated and displayed at checkout based on your location.",
  },
]

/* ─── Component ───────────────────────────────────────────── */
export default function LetifyLanding() {
  const [isYearly, setIsYearly] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const getPrice = (monthly: number) => (isYearly ? Math.round(monthly * 0.85) : monthly)

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">

      {/* ── Ambient glow ── */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-175 h-175 bg-primary/6 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-[10%] w-125 h-125 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-[10%] w-100 h-100 bg-primary/4 rounded-full blur-[100px]" />
      </div>

      {/* ══════════════ HEADER ══════════════ */}
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-1.5 shadow-sm">
              <div className="h-7 w-7 overflow-hidden rounded-full bg-white ring-1 ring-border">
                <Image src="/Logo/32.png" alt="Letify" width={28} height={28} className="h-full w-full object-cover" priority />
              </div>
              <span className="text-sm font-semibold">Letify</span>
            </div>

            <nav className="hidden md:flex items-center gap-7">
              {[
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Examples", href: "#examples" },
                { label: "FAQ", href: "#faq" },
                { label: "Team", href: "/letify-team" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
                <a href="https://app.letify.cloud/sign-in">Login</a>
              </Button>
              <Button size="sm" className="rounded-full px-5 shadow-sm shadow-primary/20" asChild>
                <a href="https://app.letify.cloud/sign-up">
                  Get Started <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ══════════════ HERO ══════════════ */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-center py-24 lg:py-32">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-7">
              <motion.div variants={fadeUp}>
                <Badge className="rounded-full px-4 py-1.5 text-sm gap-2 bg-primary/10 text-primary border-primary/20">
                  <Sparkles className="h-3.5 w-3.5" />
                  AI-Powered Letting Assistant
                </Badge>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl lg:text-[4.25rem] font-bold leading-[1.06] tracking-tight"
              >
                Grow your{" "}
                <span className="relative inline-block">
                  <span className="text-primary">listings</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.75 w-full bg-primary/35 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{ originX: 0 }}
                  />
                </span>
                <br />with your best<br />
                <span className="text-accent">social media AI</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Transform your real estate presence with automated content creation. Generate engaging posts,
                stories, and graphics that drive real leads — while you focus on closing deals.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="rounded-full text-base px-8 shadow-lg shadow-primary/20" asChild>
                  <a href="https://app.letify.cloud/sign-up">
                    Start Creating Free <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full text-base px-8 bg-transparent" asChild>
                  <a href="#examples">View Examples</a>
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                {["No credit card required", "Free templates included", "Cancel anytime"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — dashboard mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative rounded-3xl border border-border/60 bg-card/70 backdrop-blur-md p-5 shadow-2xl shadow-primary/10 overflow-hidden">
                {/* Mesh gradients */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_80%_0%,hsl(var(--primary)/0.07),transparent)] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_100%,hsl(var(--accent)/0.05),transparent)] pointer-events-none" />

                {/* macOS traffic lights + title bar */}
                <div className="relative flex items-center gap-2.5 mb-5">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-rose-400/80" />
                    <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="inline-flex items-center gap-1.5 bg-muted/60 rounded-full px-3 py-1 text-xs text-muted-foreground">
                      <motion.div
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        className="h-1.5 w-1.5 rounded-full bg-primary"
                      />
                      Letify AI · Creating content
                    </div>
                  </div>
                </div>

                {/* Property illustration */}
                <div className="relative rounded-2xl overflow-hidden h-44 mb-4">
                  <div className="absolute inset-0 bg-linear-to-br from-violet-300/40 via-primary/20 to-sky-300/30" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_30%,hsl(var(--primary)/0.28),transparent)]" />
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 176" preserveAspectRatio="xMidYMid slice">
                    <circle cx="330" cy="38" r="24" fill="white" opacity="0.16" />
                    <circle cx="355" cy="28" r="16" fill="white" opacity="0.12" />
                    <circle cx="55" cy="52" r="20" fill="white" opacity="0.11" />
                    <circle cx="338" cy="34" r="20" fill="#fde68a" opacity="0.55" />
                    <circle cx="338" cy="34" r="13" fill="#fbbf24" opacity="0.65" />
                    <ellipse cx="200" cy="154" rx="160" ry="14" fill="#86efac" opacity="0.18" />
                    <rect x="146" y="96" width="108" height="56" rx="3" fill="white" opacity="0.75" />
                    <path d="M132 98 L200 55 L268 98 Z" fill="#7c3aed" opacity="0.6" />
                    <rect x="230" y="62" width="12" height="22" rx="2" fill="#5b21b6" opacity="0.55" />
                    <rect x="156" y="104" width="24" height="18" rx="2" fill="#bfdbfe" opacity="0.85" />
                    <rect x="220" y="104" width="24" height="18" rx="2" fill="#bfdbfe" opacity="0.85" />
                    <line x1="168" y1="104" x2="168" y2="122" stroke="white" strokeWidth="1.5" opacity="0.6" />
                    <line x1="156" y1="113" x2="180" y2="113" stroke="white" strokeWidth="1.5" opacity="0.6" />
                    <line x1="232" y1="104" x2="232" y2="122" stroke="white" strokeWidth="1.5" opacity="0.6" />
                    <line x1="220" y1="113" x2="244" y2="113" stroke="white" strokeWidth="1.5" opacity="0.6" />
                    <rect x="185" y="116" width="30" height="36" rx="3" fill="#6d28d9" opacity="0.5" />
                    <circle cx="211" cy="134" r="2.5" fill="#c4b5fd" opacity="0.9" />
                    <rect x="104" y="126" width="9" height="26" rx="2" fill="#92400e" opacity="0.5" />
                    <circle cx="108" cy="118" r="21" fill="#4ade80" opacity="0.38" />
                    <circle cx="108" cy="110" r="15" fill="#22c55e" opacity="0.48" />
                    <rect x="279" y="128" width="9" height="24" rx="2" fill="#92400e" opacity="0.45" />
                    <circle cx="283" cy="120" r="18" fill="#4ade80" opacity="0.35" />
                    <circle cx="283" cy="113" r="12" fill="#22c55e" opacity="0.42" />
                  </svg>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/35 to-transparent flex items-end justify-between">
                    <div className="bg-background/85 backdrop-blur-sm rounded-lg px-2.5 py-1.5">
                      <div className="text-xs font-semibold leading-tight">3BR Villa · Marbella</div>
                      <div className="text-[11px] text-muted-foreground">240m² · Pool · Garden</div>
                    </div>
                    <div className="bg-primary/90 text-primary-foreground rounded-lg px-2.5 py-1.5 text-xs font-bold">€1,850/mo</div>
                  </div>
                </div>

                {/* AI caption typing */}
                <div className="rounded-xl bg-muted/30 border border-border/40 px-4 py-3 text-sm leading-relaxed min-h-14">
                  <TypewriterText text="Stunning 3-bedroom villa with private pool and sea views. Contact us today for a private viewing! 🏡✨ #MaltaProperty #LuxuryVilla" />
                </div>

                {/* Platform icons */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-muted-foreground font-medium">Publishing to</span>
                  <div className="flex gap-2">
                    {[
                      { label: "IG", bg: "from-purple-500 to-rose-400" },
                      { label: "FB", bg: "from-blue-600 to-blue-500" },
                      { label: "TT", bg: "from-zinc-800 to-zinc-700" },
                      { label: "WA", bg: "from-emerald-500 to-emerald-400" },
                    ].map((p, i) => (
                      <motion.div
                        key={p.label}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.5 + i * 0.12, type: "spring", bounce: 0.55 }}
                        className={`h-7 w-7 rounded-full bg-linear-to-br ${p.bg} flex items-center justify-center text-white text-[10px] font-bold shadow-sm`}
                      >
                        {p.label}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Engagement strip */}
                <div className="mt-4 pt-3.5 border-t border-border/50 flex items-center justify-between">
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>👍 247</span>
                    <span>💬 18</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-medium text-primary">
                    <Zap className="h-3 w-3" /> 8.4% engagement
                  </div>
                </div>
              </div>

              {/* Floating notifications */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-4 rounded-xl bg-background border border-border shadow-lg px-3 py-2 flex items-center gap-2.5"
              >
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Share2 className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-semibold leading-tight">Post Published</div>
                  <div className="text-[11px] text-muted-foreground">Instagram • 2s ago</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-4 rounded-xl bg-background border border-border shadow-lg px-3 py-2 flex items-center gap-2.5"
              >
                <div className="h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Users className="h-4 w-4 text-emerald-500" />
                </div>
                <div>
                  <div className="text-xs font-semibold leading-tight">New Lead Captured</div>
                  <div className="text-[11px] text-muted-foreground">+1 contact added</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/3 -left-6 rounded-xl bg-background border border-border shadow-lg px-3 py-2 flex items-center gap-2.5"
              >
                <div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <Home className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <div className="text-xs font-semibold leading-tight">Listing Boosted</div>
                  <div className="text-[11px] text-muted-foreground">3 new enquiries</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ══════════════ STATS ══════════════ */}
      <section className="py-14 border-y border-border/60 bg-muted/25">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center">
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════ FEATURES ══════════════ */}
      <section id="features" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <motion.div variants={fadeUp}>
              <Badge variant="outline" className="rounded-full px-4 text-sm">Features</Badge>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold tracking-tight">
              Everything You Need to<br /><span className="text-primary">Win on Social Media</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful tools designed to boost your social media presence and drive real estate leads.
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={scaleIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl border border-border bg-card p-6 overflow-hidden hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-default"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="relative">
                  <div
                    className={`h-11 w-11 rounded-xl ${f.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <f.icon className={`h-5 w-5 ${f.iconColor}`} />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════ MID CTA ══════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/8 via-transparent to-accent/8" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,hsl(var(--primary)/0.06),transparent)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="max-w-3xl mx-auto text-center space-y-7">
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold tracking-tight">
              Close More Deals and<br /><span className="text-primary">Take Back Your Nights</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
              Let our AI assistant help you find potential customers and save time while increasing your sales.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button size="lg" className="rounded-full text-base px-8 shadow-lg shadow-primary/20" asChild>
                <a href="https://app.letify.cloud/sign-up">
                  <Calendar className="mr-2 h-4 w-4" /> Book Free Consultation
                </a>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════ EXAMPLES ══════════════ */}
      <section id="examples" className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <motion.div variants={fadeUp}>
              <Badge variant="outline" className="rounded-full px-4 text-sm">Examples</Badge>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold tracking-tight">
              Content Created by Letify
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Say goodbye to scrambling for ideas. Letify saves your time so you can focus on your deals.
            </motion.p>
          </AnimatedSection>

          <div className="space-y-14">
            <AnimatedSection>
              <motion.h3 variants={fadeUp} className="text-xl font-semibold mb-6 text-center">Posts</motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                    className="aspect-square rounded-2xl bg-linear-to-br from-primary/15 to-accent/15 border border-border flex items-center justify-center cursor-pointer"
                  >
                    <ImageIcon className="h-8 w-8 text-primary/40" />
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.h3 variants={fadeUp} className="text-xl font-semibold mb-6 text-center">Reels</motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                    className="aspect-9/16 rounded-2xl bg-linear-to-br from-accent/15 to-primary/15 border border-border flex items-center justify-center cursor-pointer"
                  >
                    <Video className="h-8 w-8 text-primary/40" />
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════ PRICING ══════════════ */}
      <section id="pricing" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <motion.div variants={fadeUp}>
              <Badge variant="outline" className="rounded-full px-4 text-sm">Pricing</Badge>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold tracking-tight">
              Simple, Transparent Pricing
            </motion.h2>

            <motion.div variants={fadeUp} className="flex items-center justify-center pt-4">
              <div className="relative flex items-center bg-muted rounded-full p-1 gap-0.5">
                {(["Monthly", "Yearly"] as const).map((period) => {
                  const active = (period === "Yearly") === isYearly
                  return (
                    <button
                      key={period}
                      onClick={() => setIsYearly(period === "Yearly")}
                      className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors z-10 ${
                        active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {active && (
                        <motion.div
                          layoutId="pricing-pill"
                          className="absolute inset-0 bg-background rounded-full shadow-sm -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                        />
                      )}
                      {period}
                      {period === "Yearly" && (
                        <span className="ml-1.5 text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded-full">
                          -15%
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={scaleIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`relative rounded-2xl border p-6 flex flex-col transition-all duration-300 ${
                  plan.popular
                    ? "border-primary bg-primary/5 shadow-xl shadow-primary/10"
                    : "border-border bg-card hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="rounded-full bg-primary text-primary-foreground px-3 py-1 gap-1 shadow-sm">
                      <Star className="h-3 w-3" /> Most Popular
                    </Badge>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                  <div className="mt-4">
                    {plan.monthly === null ? (
                      <span className="text-3xl font-bold">Custom</span>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-bold">
                            {plan.monthly === 0 ? "Free" : `€${getPrice(plan.monthly)}`}
                          </span>
                          {plan.monthly > 0 && (
                            <span className="text-sm text-muted-foreground">/{isYearly ? "yr" : "mo"}</span>
                          )}
                        </div>
                        <AnimatePresence>
                          {isYearly && plan.monthly > 0 && (
                            <motion.span
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="block text-sm text-muted-foreground line-through"
                            >
                              €{plan.monthly}/mo
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-full ${plan.popular ? "" : "bg-transparent"}`}
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <a href={plan.href}>{plan.cta}</a>
                </Button>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════ FAQ ══════════════ */}
      <section id="faq" className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <motion.div variants={fadeUp}>
              <Badge variant="outline" className="rounded-full px-4 text-sm">FAQ</Badge>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold tracking-tight">
              Frequently Asked Questions
            </motion.h2>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto space-y-2.5">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.055, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-border bg-background overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/40 transition-colors"
                >
                  <span className="font-medium text-sm leading-snug pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="shrink-0 text-muted-foreground"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/60 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ FOOTER CTA ══════════════ */}
      <section className="py-20 relative overflow-hidden bg-background border-t border-border/60">
        <div className="absolute inset-0 bg-linear-to-br from-primary/6 via-transparent to-accent/6 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="max-w-2xl mx-auto text-center space-y-6">
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold tracking-tight">
              Ready to transform your<br /><span className="text-primary">letting business?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground">
              Join 400+ real estate professionals already using Letify.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20" asChild>
                <a href="https://app.letify.cloud/sign-up">
                  Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 bg-transparent" asChild>
                <a href="mailto:admin@letify.cloud">Contact Sales</a>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer className="py-14 border-t border-border/60 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5">
                <div className="h-7 w-7 overflow-hidden rounded-full bg-white ring-1 ring-border">
                  <Image src="/Logo/32.png" alt="Letify" width={28} height={28} className="h-full w-full object-cover" />
                </div>
                <span className="text-sm font-semibold">Letify</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your best social media assistant for real estate professionals.
              </p>
            </div>

            {[
              {
                title: "Product",
                links: [
                  { label: "Features", href: "#features" },
                  { label: "Templates", href: "#examples" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "FAQ", href: "#faq" },
                ],
              },
              {
                title: "Company",
                links: [
                  { label: "About", href: "#" },
                  { label: "Team", href: "/letify-team" },
                  { label: "Blog", href: "#" },
                  { label: "Contact", href: "#" },
                ],
              },
              {
                title: "Legal",
                links: [
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms of Service", href: "#" },
                  { label: "Contact Us", href: "mailto:admin@letify.cloud" },
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold mb-4">{col.title}</h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-sm text-muted-foreground">© 2025 Letify. All rights reserved.</p>
            <p className="text-sm text-muted-foreground">Built for real estate professionals</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
