
"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { ResponsiveLine } from "@nivo/line"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="flex items-center px-4 lg:px-6 h-14 bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between mx-auto">
          <Link href="#" className="flex items-center justify-center" prefetch={false}>
            <MountainIcon className="w-6 h-6" />
            <span className="sr-only">Empowering Deaf and Mute Students</span>
          </Link>
          <Button className="px-6 py-2 text-sm font-medium transition-colors rounded-md shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
            Get Started
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Revolutionizing the Future with AI
                  </h1>
                  <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                    Unlock intelligence beyond imagination with our cutting-edge AI solutions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors rounded-md shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Try Our AI Demo
                  </Button>
                  <Button
                    variant="secondary"
                    className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors border rounded-md shadow-sm border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="object-cover mx-auto overflow-hidden aspect-video rounded-xl sm:w-full lg:order-last lg:aspect-square">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 w-full h-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-md space-y-4">
                      <h2 className="text-3xl font-bold text-primary-foreground">AI Technology Stack</h2>
                      <p className="text-primary-foreground/80">
                        Discover the advanced technologies powering our cutting-edge AI solutions.
                      </p>
                      <Button className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors rounded-md shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                        Explore the Stack
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">AI Capabilities</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how our AI solutions can transform your business.
                </p>
              </div>
            </div>
            <div className="grid items-start max-w-5xl gap-6 py-12 mx-auto lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <div className="p-6 transition-colors duration-300 rounded-lg cursor-pointer bg-muted hover:bg-accent hover:text-accent-foreground">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-md bg-primary">
                    <HospitalIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Healthcare</h3>
                  <p className="text-muted-foreground">
                    Revolutionize healthcare with AI-powered diagnostics, personalized treatment plans, and predictive
                    analytics.
                  </p>
                </div>
                <div className="p-6 transition-colors duration-300 rounded-lg cursor-pointer bg-muted hover:bg-accent hover:text-accent-foreground">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-md bg-primary">
                    <CurrencyIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Finance</h3>
                  <p className="text-muted-foreground">
                    Optimize financial decisions, detect fraud, and gain valuable insights with our AI-driven financial
                    solutions.
                  </p>
                </div>
                <div className="p-6 transition-colors duration-300 rounded-lg cursor-pointer bg-muted hover:bg-accent hover:text-accent-foreground">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-md bg-primary">
                    <SchoolIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Education</h3>
                  <p className="text-muted-foreground">
                    Personalize learning, automate grading, and enhance educational outcomes with our AI-powered
                    solutions.
                  </p>
                </div>
              </div>
              <div className="object-cover object-center mx-auto overflow-hidden aspect-video rounded-xl sm:w-full lg:order-last">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 w-full h-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-md space-y-4">
                      <h2 className="text-3xl font-bold text-primary-foreground">AI Explainer</h2>
                      <p className="text-primary-foreground/80">
                        Discover how our AI solutions work with easy-to-understand animations.
                      </p>
                      <Button className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors rounded-md shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                        Watch Explainer
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-md mx-auto">
                <LineChart className="w-full aspect-[4/3]" />
              </div>
              <div className="p-6 transition-colors duration-300 rounded-lg cursor-pointer bg-muted hover:bg-accent hover:text-accent-foreground">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-md bg-primary">
                  <StoreIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Retail</h3>
                <p className="text-muted-foreground">
                  Optimize inventory, personalize customer experiences, and drive sales with our AI-powered retail
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">AI for Good</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how our AI solutions are making a positive impact on the world.
                </p>
              </div>
            </div>
            <div className="grid items-start max-w-5xl gap-6 py-12 mx-auto lg:grid-cols-2 lg:gap-12">
              <div className="w-full max-w-md mx-auto">
                <img
                  src="/placeholder.svg"
                  alt="AI for Good"
                  width={800}
                  height={450}
                  className="object-cover w-full h-auto rounded-xl"
                  style={{ aspectRatio: "800/450", objectFit: "cover" }}
                />
              </div>
              <div className="w-full max-w-md mx-auto space-y-6">
                <blockquote className="p-6 transition-colors duration-300 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Jane Doe</div>
                      <div className="text-sm text-muted-foreground">Sustainability Advocate</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "The AI solutions from this company have been instrumental in our efforts to combat climate change.
                    Their technology has helped us optimize energy usage and reduce our carbon footprint significantly."
                  </p>
                </blockquote>
                <blockquote className="p-6 transition-colors duration-300 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Dr. Michael Johnson</div>
                      <div className="text-sm text-muted-foreground">Medical Researcher</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "The AI-powered diagnostic tools from this company have revolutionized the way we approach
                    healthcare. They've helped us detect diseases earlier and develop more personalized treatment plans,
                    saving countless lives."
                  </p>
                </blockquote>
                <div className="p-6 transition-colors duration-300 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground">
                  <h3 className="mb-4 text-2xl font-bold">Support AI for Good</h3>
                  <p className="mb-4 text-muted-foreground">
                    Your contribution can help us expand our AI-driven initiatives that are making a positive impact on
                    the world.
                  </p>
                  <form className="flex gap-2">
                    <Input type="number" placeholder="Enter donation amount" className="flex-1" />
                    <Button type="submit">Donate</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Case Studies & Success Stories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how our AI solutions have transformed businesses across industries.
                </p>
              </div>
            </div>
            <div className="grid items-start max-w-5xl gap-6 py-12 mx-auto lg:grid-cols-2 lg:gap-12">
              <div className="w-full max-w-md mx-auto">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="p-6 transition-colors duration-300 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-md bg-primary">
                          <HospitalIcon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold">Healthcare Transformation</h3>
                        <p className="text-muted-foreground">
                          Our AI-powered diagnostics helped a leading hospital reduce patient wait times by 30% and
                          improve treatment outcomes.
                        </p>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center">
                            <Avatar className="w-8 h-8 mr-2">
                              <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                              <AvatarFallback>AC</AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium">Dr. Emily Johnson</span>
                          </div>
                          <Button variant="link" className="text-sm font-medium">
                            Read Case Study
                          </Button>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-6 transition-colors duration-300 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-md bg-primary">
                          <CurrencyIcon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold">Financial Optimization</h3>
                        <p className="text-muted-foreground">
                          Our AI-driven financial solutions helped a major bank reduce fraud by 25% and improve
                          investment portfolio performance.
                        </p>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center">
                            <Avatar className="w-8 h-8 mr-2">
                              <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                              <AvatarFallback>AC</AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium">John Doe</span>
                          </div>
                          <Button variant="link" className="text-sm font-medium">
                            Read Case Study
                          </Button>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-6 transition-colors duration-300 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-md bg-primary">
                          <SchoolIcon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold">Educational Transformation</h3>
                        <p className="text-muted-foreground">
                          Our AI-powered learning solutions helped a school district improve student outcomes by 20% and
                          reduce teacher workload.
                        </p>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center">
                            <Avatar className="w-8 h-8 mr-2">
                              <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                              <AvatarFallback>AC</AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium">Sarah Lee</span>
                          </div>
                          <Button variant="link" className="text-sm font-medium">
                            Read Case Study
                          </Button>
                        </div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
              <div className="w-full max-w-md mx-auto">
                <div className="p-6 transition-colors duration-300 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-md bg-primary">
                    <StoreIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Retail Optimization</h3>
                  <p className="text-muted-foreground">
                    Our AI-driven solutions helped a major retailer increase sales by 15% and improve customer
                    satisfaction.
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <Avatar className="w-8 h-8 mr-2">
                        <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                        <AvatarFallback>AC</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">Jane Smith</span>
                    </div>
                    <Button variant="link" className="text-sm font-medium">
                      Read Case Study
                    </Button>
                  </div>
                </div>
                <div className="p-6 mt-6 transition-colors duration-300 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-md bg-primary">
                    <FactoryIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Manufacturing Efficiency</h3>
                  <p className="text-muted-foreground">
                    Our AI-powered solutions helped a manufacturing company reduce production costs by 20% and improve
                    quality control.
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <Avatar className="w-8 h-8 mr-2">
                        <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                        <AvatarFallback>AC</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">Michael Chen</span>
                    </div>
                    <Button variant="link" className="text-sm font-medium">
                      Read Case Study
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CurrencyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  )
}


function FactoryIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </svg>
  )
}


function HospitalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 6v4" />
      <path d="M14 14h-4" />
      <path d="M14 18h-4" />
      <path d="M14 8h-4" />
      <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
      <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
    </svg>
  )
}


function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function SchoolIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  )
}


function StoreIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  )
}