"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  HomeIcon,
  Heart,
  TrendingUp,
  Users,
  ArrowRight,
  Menu,
  Calendar,
  BarChart3,
  MessageSquare,
  ImageIcon,
  Video,
  Zap,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { useState } from "react"

export default function LetfyLanding() {
  const [isYearly, setIsYearly] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const getPrice = (monthlyPrice: number) => {
    if (monthlyPrice === 0) return 0
    return isYearly ? Math.round(monthlyPrice * 0.85) : monthlyPrice
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time. Your account will remain active until the end of your current billing period.",
    },
    {
      question: "Is Letfy safe for my social media accounts?",
      answer:
        "Absolutely. We use secure OAuth authentication and never store your passwords. All data is encrypted and we follow industry best practices for security.",
    },
    {
      question: "How does Letfy ensure data security?",
      answer:
        "We use enterprise-grade encryption, secure servers, and comply with GDPR regulations. Your data is protected with bank-level security measures.",
    },
    {
      question: "Is Letfy available in my country?",
      answer:
        "Letfy is available worldwide. We support multiple languages and currencies to serve our global user base.",
    },
    {
      question: "How can I contact the support team?",
      answer:
        "You can reach our support team through email, live chat, or our help center. Premium users get priority support with faster response times.",
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <HomeIcon className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Letify</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#examples" className="text-muted-foreground hover:text-foreground transition-colors">
                Examples
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
              <a href="/letify-team" className="text-muted-foreground hover:text-foreground transition-colors">
                Team
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden sm:inline-flex" asChild>
                <a href="https://app.letify.cloud/sign-in">Login</a>
              </Button>
              <Button asChild>
                <a href="https://app.letify.cloud/sign-up">Get Started</a>
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-linear-to-br from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  🚀 Social Media Made Simple
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  Grow your business
                  <span className="text-primary"> with your best</span>
                  social media assistant
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl">
                  Transform your social media presence with automated content creation. Generate engaging posts,
                  stories, and graphics that drive real results.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Start Creating Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  View Examples
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Check className="h-4 w-4 text-primary" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Free templates included</span>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="w-full max-w-lg">
                <svg className="w-full h-96" viewBox="0 0 500 400">
                  {/* Graph bars with animation - Much larger size */}
                  <rect x="50" y="300" width="60" height="100" fill="currentColor" className="text-primary/60">
                    <animate attributeName="height" values="80;100;90" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="y" values="320;300;310" dur="3s" repeatCount="indefinite" />
                  </rect>
                  <rect
                    x="140"
                    y="250"
                    width="60"
                    height="150"
                    fill="currentColor"
                    className="text-primary/70"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <animate
                      attributeName="height"
                      values="130;150;140"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="0.5s"
                    />
                    <animate attributeName="y" values="270;250;260" dur="3s" repeatCount="indefinite" begin="0.5s" />
                  </rect>
                  <rect
                    x="230"
                    y="200"
                    width="60"
                    height="200"
                    fill="currentColor"
                    className="text-primary/80"
                    style={{ animationDelay: "1s" }}
                  >
                    <animate attributeName="height" values="180;200;190" dur="3s" repeatCount="indefinite" begin="1s" />
                    <animate attributeName="y" values="220;200;210" dur="3s" repeatCount="indefinite" begin="1s" />
                  </rect>
                  <rect
                    x="320"
                    y="150"
                    width="60"
                    height="250"
                    fill="currentColor"
                    className="text-primary/90"
                    style={{ animationDelay: "1.5s" }}
                  >
                    <animate
                      attributeName="height"
                      values="230;250;240"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="1.5s"
                    />
                    <animate attributeName="y" values="170;150;160" dur="3s" repeatCount="indefinite" begin="1.5s" />
                  </rect>
                  <rect
                    x="410"
                    y="100"
                    width="60"
                    height="300"
                    fill="currentColor"
                    className="text-primary"
                    style={{ animationDelay: "2s" }}
                  >
                    <animate attributeName="height" values="280;300;290" dur="3s" repeatCount="indefinite" begin="2s" />
                    <animate attributeName="y" values="120;100;110" dur="3s" repeatCount="indefinite" begin="2s" />
                  </rect>

                  {/* Trend line */}
                  <polyline
                    points="80,350 170,275 260,225 350,175 440,125"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    className="text-primary"
                    strokeDasharray="12,12"
                  >
                    <animate attributeName="stroke-dashoffset" values="0;-24" dur="2s" repeatCount="indefinite" />
                  </polyline>

                  {/* Grid lines for better visual context */}
                  <defs>
                    <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                      <path
                        d="M 50 0 L 0 0 0 50"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-muted-foreground/20"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Everything You Need to Win on Social Media</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Powerful tools designed to boost your social media presence and engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Post Analytics</CardTitle>
                <CardDescription>
                  Track your content performance with detailed analytics. See what works and optimize your strategy for
                  maximum engagement.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <ImageIcon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Content Creation</CardTitle>
                <CardDescription>
                  Generate stunning visuals and copy with AI. Create professional posts in seconds with our smart
                  templates and design tools.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>CRM System</CardTitle>
                <CardDescription>
                  Manage your clients and leads in one place. Track interactions, schedule follow-ups, and never miss an
                  opportunity.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Chatbot Integration</CardTitle>
                <CardDescription>
                  Automate customer interactions with smart chatbots. Respond instantly and capture leads 24/7 across
                  all platforms.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Design Templates</CardTitle>
                <CardDescription>
                  Access hundreds of professional templates. Customize colors, fonts, and layouts to match your brand
                  perfectly.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Listing Analytics</CardTitle>
                <CardDescription>
                  Monitor your market presence and competitor performance. Get insights to stay ahead of the
                  competition.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Close More Deals and Take Back Your Nights</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Let our AI assistant help you find potential customers and save time while increasing your sales through
              social media marketing.
            </p>
            <Button size="lg" className="text-lg px-8">
              <Calendar className="mr-2 h-5 w-5" />
              Book Consultation Free
            </Button>
          </div>
        </div>
      </section>

      <section id="examples" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Some Examples</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Say goodbye to scrambling for content ideas, designing posts, and researching to publish them. Letfy saves
              your time and allows you to focus on your deals.
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Posts</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-linear-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center"
                  >
                    <ImageIcon className="h-8 w-8 text-primary" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Reels</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-9/16 bg-linear-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center"
                  >
                    <Video className="h-8 w-8 text-primary" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Pricing</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Monthly/Yearly plans to fit your needs
            </p>

            <div className="flex items-center justify-center mt-8">
              <div className="flex items-center bg-muted rounded-lg p-1">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    !isYearly
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    isYearly ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Yearly
                  <Badge variant="secondary" className="ml-2 text-xs">
                    15% OFF
                  </Badge>
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Free Plan</CardTitle>
                <CardDescription>Get started with basic features</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">€{getPrice(0)}</span>
                  <span className="text-muted-foreground">/{isYearly ? "year" : "month"}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>1 profile</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Monthly 15 Facebook Posts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Email Support</span>
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <a href="https://app.letify.cloud/sign-up">Get Plan</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Mini Plan</CardTitle>
                <CardDescription>Perfect for small businesses</CardDescription>
                <div className="mt-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold">€{getPrice(39)}</span>
                    {isYearly && <span className="text-lg text-muted-foreground line-through">€39</span>}
                  </div>
                  <span className="text-muted-foreground">/{isYearly ? "year" : "month"}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Link 2 profiles (Facebook, Instagram)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Unlimited Facebook Posts (text+image)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Chrome Extension</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Monthly 15 Reels/Stories (text+video)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Adding Credits Option</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Basic Listing Analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Design Templates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Priority Support</span>
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <a href="https://app.letify.cloud/sign-up">Get Plan</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary shadow-lg relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle>Full Plan</CardTitle>
                <CardDescription>Best for growing agencies</CardDescription>
                <div className="mt-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold">€{getPrice(89)}</span>
                    {isYearly && <span className="text-lg text-muted-foreground line-through">€89</span>}
                  </div>
                  <span className="text-muted-foreground">/{isYearly ? "year" : "month"}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Link 5 profiles (Facebook, Instagram, TikTok, Messenger, WhatsApp)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Unlimited Facebook Posts (text+image)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Chrome Extension for posts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Monthly 30 Reels (text+video)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Adding Credits Option</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Advanced Listing Analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>More Design Templates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Messenger and WhatsApp Chatbots</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Lead Capture Mode</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>CRM Client Database</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Priority Support</span>
                  </li>
                </ul>
                <Button className="w-full" asChild><a href="https://app.letify.cloud/sign-up">Get Plan</a></Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For agencies and teams</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">Custom</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Unlimited profiles</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>All features included</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Custom integrations</span>
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <a href="mailto:admin@letify.cloud">Contact Sales</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Everything you need to know about Letfy
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <Card key={index} className="border-border">
                <CardHeader
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-left">{faq.question}</CardTitle>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <Heart className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Letify</span>
              </div>
              <p className="text-muted-foreground">Your best social media assistant that helps your business</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#examples" className="hover:text-foreground transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-foreground transition-colors">
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-foreground transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted-foreground">© 2025 Letfy. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
