import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, HomeIcon, Users } from "lucide-react"

const teamMembers = [
  {
    name: "Agent Name 01",
    role: "Senior Property Advisor",
    bio: "Short intro placeholder for this agent. You can replace this with your custom profile text.",
  },
  {
    name: "Agent Name 02",
    role: "Luxury Portfolio Specialist",
    bio: "Short intro placeholder for this agent. You can replace this with your custom profile text.",
  },
  {
    name: "Agent Name 03",
    role: "Client Success Manager",
    bio: "Short intro placeholder for this agent. You can replace this with your custom profile text.",
  },
  {
    name: "Agent Name 04",
    role: "Sales Consultant",
    bio: "Short intro placeholder for this agent. You can replace this with your custom profile text.",
  },
  {
    name: "Agent Name 05",
    role: "Partnership Lead",
    bio: "Short intro placeholder for this agent. You can replace this with your custom profile text.",
  },
  {
    name: "Agent Name 06",
    role: "Operations Coordinator",
    bio: "Short intro placeholder for this agent. You can replace this with your custom profile text.",
  },
  {
    name: "Agent Name 07",
    role: "Senior Property Advisor",
    bio: "Short intro placeholder for this agent. You can replace this with your custom profile text.",
  },
  {
    name: "Agent Name 08",
    role: "Luxury Portfolio Specialist",
    bio: "Short intro placeholder for this agent. You can replace this with your custom profile text.",
  },
  {
    name: "Agent Name 09",
    role: "Client Success Manager",
    bio: "Short intro placeholder for this agent. You can replace this with your custom profile text.",
  },
  {
    name: "Agent Name 10",
    role: "Sales Consultant",
    bio: "Short intro placeholder for this agent. You can replace this with your custom profile text.",
  },
  {
    name: "Agent Name 11",
    role: "Partnership Lead",
    bio: "Short intro placeholder for this agent. You can replace this with your custom profile text.",
  },
  {
    name: "Agent Name 12",
    role: "Operations Coordinator",
    bio: "Short intro placeholder for this agent. You can replace this with your custom profile text.",
  },
  {
    name: "Agent Name 13",
    role: "Senior Property Advisor",
    bio: "Short intro placeholder for this agent. You can replace this with your custom profile text.",
  },
  {
    name: "Agent Name 14",
    role: "Luxury Portfolio Specialist",
    bio: "Short intro placeholder for this agent. You can replace this with your custom profile text.",
  },
  {
    name: "Agent Name 15",
    role: "Client Success Manager",
    bio: "Short intro placeholder for this agent. You can replace this with your custom profile text.",
  },
  {
    name: "Agent Name 16",
    role: "Sales Consultant",
    bio: "Short intro placeholder for this agent. You can replace this with your custom profile text.",
  },
  {
    name: "Agent Name 17",
    role: "Partnership Lead",
    bio: "Short intro placeholder for this agent. You can replace this with your custom profile text.",
  },
  {
    name: "Agent Name 18",
    role: "Operations Coordinator",
    bio: "Short intro placeholder for this agent. You can replace this with your custom profile text.",
  },
]

export default function LetifyTeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <HomeIcon className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Letify</span>
            </a>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="/letify-team" className="text-foreground font-medium">
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
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 lg:py-28 bg-linear-to-br from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <Badge variant="secondary" className="w-fit">
              <Users className="h-3.5 w-3.5 mr-1" />
              Meet The Team
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
              The agents behind
              <span className="text-primary"> Letify Team</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Looking to lease or list a premium property in Malta? QuickLets Letify Team is ready to support you at
              every step.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              With strong knowledge of the Maltese real estate landscape and a wide network of qualified landlords and
              tenants, we are fully prepared to match you with the right opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="https://app.letify.cloud/sign-up">
                  Join Letify
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent" asChild>
                <a href="/">Back To Homepage</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Card key={member.name + index} className="border-border hover:border-primary/40 transition-colors">
                <CardHeader className="space-y-4">
                  <div className="aspect-square rounded-xl bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-3xl font-semibold text-primary/80">{member.name.slice(0, 2)}</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{member.name}</CardTitle>
                    <CardDescription className="text-base">{member.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
