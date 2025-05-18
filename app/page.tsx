import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  ChevronRight,
  Clock,
  Dumbbell,
  MapPin,
  MessageSquare,
  Star,
  User,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroImage from "@/public/a.jpg";
import BImage from "@/public/b.jpg";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/30">
        <div className="container flex h-16 items-center justify-between mx-auto">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Dumbbell className="h-6 w-6 text-teal-600" />
            <span>FitCoach</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#services"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex bg-teal-600">
              <Link href="/booking">Book a Session</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative flex items-center justify-center min-h-screen">
          <div className="absolute inset-0 z-0">
            <Image
              src={HeroImage}
              alt="Fitness background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="container relative z-10 px-4 md:px-6 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl mx-auto">
              Transform Your Body, Transform Your Life
            </h1>
            <p className="mt-6 max-w-xl mx-auto text-lg md:text-xl text-white/80">
              Expert personal training tailored to your goals
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 h-14 px-8 text-base"
              >
                <Link href="#contact">
                  Start Your Journey
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-8 bg-transparent text-base border-white text-white hover:bg-white/20"
              >
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                  Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Tailored Fitness Solutions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Customized training programs designed to meet your specific
                  goals and fitness level.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  title: "Personal Training",
                  description:
                    "One-on-one sessions focused on your specific goals with personalized attention and guidance.",
                  icon: <Users className="h-10 w-10 text-teal-600" />,
                  features: [
                    "Customized workout plans",
                    "Nutritional guidance",
                    "Progress tracking",
                    "Flexible scheduling",
                  ],
                },
                {
                  title: "Group Fitness",
                  description:
                    "Energetic group sessions that combine motivation, community, and effective workouts.",
                  icon: <Users className="h-10 w-10 text-teal-600" />,
                  features: [
                    "Supportive community",
                    "Cost-effective training",
                    "Varied workout styles",
                    "Scheduled sessions",
                  ],
                },
                {
                  title: "Online Coaching",
                  description:
                    "Remote training programs with regular check-ins and adjustments to keep you on track.",
                  icon: <MessageSquare className="h-10 w-10 text-teal-600" />,
                  features: [
                    "Train anywhere",
                    "Video form checks",
                    "Digital workout plans",
                    "24/7 messaging support",
                  ],
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-teal-600 transition-all duration-200"
                >
                  <CardHeader className="p-6">
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-teal-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6 w-full bg-teal-600 hover:bg-teal-700">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-teal-50"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700 w-fit">
                  About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Meet Your Coach
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  With over 10 years of experience in fitness and nutrition,
                  I&apos;ve helped hundreds of clients transform their bodies
                  and lives. My approach combines science-based training methods
                  with personalized support to ensure you reach your goals.
                </p>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Certifications</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-teal-600" />
                      <span>Certified Personal Trainer (NASM)</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-teal-600" />
                      <span>Nutrition Coach (Precision Nutrition)</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-teal-600" />
                      <span>Corrective Exercise Specialist</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-teal-600" />
                      <span>Strength and Conditioning Coach</span>
                    </li>
                  </ul>
                </div>
                <Button asChild className="w-fit bg-teal-600 hover:bg-teal-700">
                  <Link href="#contact">Work With Me</Link>
                </Button>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square">
                <Image
                  src={BImage}
                  alt="Coach Profile"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Success Stories
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from clients who have transformed their lives through our
                  coaching programs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  name: "Sarah J.",
                  image: "/placeholder.svg?height=100&width=100&text=Sarah",
                  quote:
                    "I've lost 30 pounds and gained so much confidence. The personalized approach made all the difference in my fitness journey.",
                  achievement: "Lost 30 pounds in 6 months",
                },
                {
                  name: "Michael T.",
                  image: "/placeholder.svg?height=100&width=100&text=Michael",
                  quote:
                    "After years of trying different programs, this is the only one that helped me build sustainable habits and see real results.",
                  achievement: "Gained 15 pounds of muscle",
                },
                {
                  name: "Jessica R.",
                  image: "/placeholder.svg?height=100&width=100&text=Jessica",
                  quote:
                    "The online coaching program fits perfectly with my busy schedule. I can work out on my own time but still get expert guidance.",
                  achievement: "Completed first marathon",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="text-center">
                  <CardHeader className="pb-2">
                    <div className="relative mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full">
                      {/* <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                      /> */}
                      <User className="absolute h-16 w-16 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 " />
                    </div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <div className="flex justify-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-4 inline-block rounded-full bg-teal-100 px-3 py-1 text-xs text-teal-700">
                      {testimonial.achievement}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-teal-50"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Invest in Your Health
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that fits your goals and lifestyle.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  title: "Starter",
                  price: "$99",
                  period: "per month",
                  description:
                    "Perfect for beginners looking to establish a fitness routine.",
                  features: [
                    "1 session per week",
                    "Basic nutrition guidance",
                    "Monthly progress check-ins",
                    "Access to training app",
                  ],
                  cta: "Get Started",
                },
                {
                  title: "Premium",
                  price: "$199",
                  period: "per month",
                  description:
                    "Our most popular plan for dedicated fitness enthusiasts.",
                  features: [
                    "2 sessions per week",
                    "Detailed nutrition planning",
                    "Bi-weekly progress check-ins",
                    "Priority scheduling",
                    "Access to training app",
                  ],
                  cta: "Join Premium",
                  highlighted: true,
                },
                {
                  title: "Elite",
                  price: "$299",
                  period: "per month",
                  description: "Comprehensive coaching for maximum results.",
                  features: [
                    "3 sessions per week",
                    "Custom meal planning",
                    "Weekly progress check-ins",
                    "24/7 coach access",
                    "Access to training app",
                    "Recovery protocols",
                  ],
                  cta: "Go Elite",
                },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className={`flex flex-col ${
                    plan.highlighted ? "border-2 border-teal-600 shadow-lg" : ""
                  }`}
                >
                  {plan.highlighted && (
                    <div className="bg-teal-600 text-white text-center py-1 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="p-6">
                    <CardTitle className="text-xl">{plan.title}</CardTitle>
                    <div className="mt-4 flex items-baseline justify-center">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="ml-1 text-sm text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>
                    <CardDescription className="mt-4">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 p-6 pt-0">
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-teal-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button
                      className={`w-full ${
                        plan.highlighted ? "bg-teal-600 hover:bg-teal-700" : ""
                      }`}
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="schedule"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                  Schedule
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Weekly Class Schedule
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our group fitness classes throughout the week.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <div className="mb-6 flex flex-wrap justify-center gap-2">
                <Button variant="outline" className="rounded-full" size="sm">
                  All Classes
                </Button>
                <Button variant="outline" className="rounded-full" size="sm">
                  HIIT
                </Button>
                <Button variant="outline" className="rounded-full" size="sm">
                  Strength
                </Button>
                <Button variant="outline" className="rounded-full" size="sm">
                  Cardio
                </Button>
                <Button variant="outline" className="rounded-full" size="sm">
                  Yoga
                </Button>
                <Button variant="outline" className="rounded-full" size="sm">
                  Pilates
                </Button>
              </div>
              <Tabs defaultValue="monday" className="w-full">
                <TabsList className="grid w-full grid-cols-7">
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ].map((day) => (
                    <TabsTrigger key={day} value={day.toLowerCase()}>
                      {day.substring(0, 3)}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {[
                  "monday",
                  "tuesday",
                  "wednesday",
                  "thursday",
                  "friday",
                  "saturday",
                  "sunday",
                ].map((day, dayIndex) => (
                  <TabsContent
                    key={day}
                    value={day}
                    className="border rounded-lg mt-6 p-4"
                  >
                    <div className="grid gap-4">
                      {[
                        {
                          time: "6:00 AM",
                          class: "Morning HIIT",
                          duration: "45 min",
                          trainer: "Alex",
                          type: "HIIT",
                          spots: 8,
                        },
                        {
                          time: "8:00 AM",
                          class: "Power Yoga",
                          duration: "60 min",
                          trainer: "Sarah",
                          type: "Yoga",
                          spots: 12,
                        },
                        {
                          time: "12:00 PM",
                          class: "Lunch Express",
                          duration: "30 min",
                          trainer: "Mike",
                          type: "Cardio",
                          spots: 10,
                        },
                        {
                          time: "5:30 PM",
                          class: "Strength & Conditioning",
                          duration: "60 min",
                          trainer: "Jessica",
                          type: "Strength",
                          spots: 6,
                        },
                        {
                          time: "7:00 PM",
                          class: "Evening Flow",
                          duration: "45 min",
                          trainer: "David",
                          type: "Yoga",
                          spots: 15,
                        },
                      ]
                        .filter((_, index) => {
                          // Vary classes by day - skip some classes on certain days
                          if (dayIndex === 5 || dayIndex === 6) {
                            // Weekend
                            return index !== 2; // No lunch express on weekends
                          }
                          if (dayIndex === 3) {
                            // Thursday
                            return index !== 4; // No evening flow on Thursday
                          }
                          return true;
                        })
                        .map((session, index) => (
                          <div
                            key={index}
                            className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 last:border-0 last:pb-0 gap-4"
                          >
                            <div className="flex items-center gap-4">
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                                {session.type === "HIIT" && (
                                  <Dumbbell className="h-6 w-6" />
                                )}
                                {session.type === "Yoga" && (
                                  <Users className="h-6 w-6" />
                                )}
                                {session.type === "Cardio" && (
                                  <Activity className="h-6 w-6" />
                                )}
                                {session.type === "Strength" && (
                                  <Dumbbell className="h-6 w-6" />
                                )}
                                {session.type === "Pilates" && (
                                  <Users className="h-6 w-6" />
                                )}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <p className="font-medium">{session.class}</p>
                                  <span className="inline-block rounded-full bg-teal-100 px-2 py-0.5 text-xs text-teal-700">
                                    {session.type}
                                  </span>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    {session.duration}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <User className="h-3 w-3" />
                                    {session.trainer}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Users className="h-3 w-3" />
                                    {session.spots} spots left
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 ml-16 sm:ml-0">
                              <p className="text-sm font-medium">
                                {session.time}
                              </p>
                              <Button
                                asChild
                                size="sm"
                                className="bg-teal-600 hover:bg-teal-700"
                              >
                                <Link href="/booking">Book</Link>
                              </Button>
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className="mt-6 text-center">
                      <Button asChild variant="outline" className="gap-2">
                        <Link href="/booking">
                          View All Classes
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-teal-50"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                    Contact
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    Ready to start your fitness journey? Contact me today for a
                    free consultation.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-teal-600" />
                    <p>123 Fitness Street, Healthy City, HC 12345</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-teal-600" />
                    <p>coach@fitcoach.com</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-teal-600" />
                    <p>Mon-Fri: 6AM-8PM, Sat: 8AM-2PM, Sun: Closed</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border bg-background p-6 shadow-sm">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell me about your fitness goals..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-600 text-white">
          <div className="container px-4 md:px-6 text-center mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Life?
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-white/80 md:text-xl">
              Take the first step towards a healthier, stronger you. Book your
              free consultation today.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 bg-white text-teal-600 hover:bg-white/90"
            >
              <Link href="#contact">Get Started Now</Link>
            </Button>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col gap-6 py-12 px-4 md:px-6 md:flex-row md:justify-between mx-auto">
          <div className="flex flex-col gap-6 md:max-w-sm">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl"
            >
              <Dumbbell className="h-6 w-6 text-teal-600" />
              <span>FitCoach</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Personalized fitness coaching that delivers real results.
              Transform your body, transform your life.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#services"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Personal Training
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Group Fitness
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Online Coaching
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Nutrition Planning
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 px-4 md:px-6 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} FitCoach. All rights reserved.
            </p>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              Designed with ♥ for a healthier world
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
