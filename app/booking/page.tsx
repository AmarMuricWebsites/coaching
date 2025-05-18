"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Clock,
  Dumbbell,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { BookingCalendar } from "@/components/booking-calendar";
import { ClassCard } from "@/components/class-card";

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState("step1");
  const [bookingComplete, setBookingComplete] = useState(false);
  const [selectedClass, setSelectedClass] = useState({
    title: "Personal Training",
    price: "$75.00",
    duration: "60 minutes",
  });

  const goToNextStep = () => {
    if (currentStep === "step1") {
      setCurrentStep("step2");
    } else if (currentStep === "step2") {
      setCurrentStep("step3");
    } else if (currentStep === "step3") {
      setBookingComplete(true);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep === "step2") {
      setCurrentStep("step1");
    } else if (currentStep === "step3") {
      setCurrentStep("step2");
    }
  };

  if (bookingComplete) {
    return (
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between mx-auto">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl"
            >
              <Dumbbell className="h-6 w-6 text-teal-600" />
              <span>FitCoach</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="/#services"
                className="text-sm font-medium hover:text-teal-600 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/#about"
                className="text-sm font-medium hover:text-teal-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="/#testimonials"
                className="text-sm font-medium hover:text-teal-600 transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="/#pricing"
                className="text-sm font-medium hover:text-teal-600 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/#contact"
                className="text-sm font-medium hover:text-teal-600 transition-colors"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Button asChild variant="outline" className="hidden md:flex">
                <Link href="/#contact">Book a Session</Link>
              </Button>
              <Button asChild>
                <Link href="/#contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center">
          <div className="container py-12 md:py-24 max-w-md mx-auto">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <CheckCircle2 className="h-24 w-24 text-teal-600" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight">
                Booking Confirmed!
              </h1>
              <p className="text-muted-foreground">
                Thank you for booking your session with FitCoach. We've sent a
                confirmation email with all the details.
              </p>
              <div className="bg-muted p-6 rounded-lg text-left space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Class:</span>
                  <span className="font-medium">{selectedClass.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date:</span>
                  <span className="font-medium">May 20, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time:</span>
                  <span className="font-medium">10:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">{selectedClass.duration}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total Paid:</span>
                  <span>$81.00</span>
                </div>
              </div>
              <div className="space-y-4">
                <Button
                  asChild
                  className="w-full bg-teal-600 hover:bg-teal-700"
                >
                  <Link href="/">Return to Homepage</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/booking">Book Another Session</Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
        <footer className="border-t bg-background">
          <div className="container py-6 text-center text-sm text-muted-foreground mx-auto">
            <p>
              &copy; {new Date().getFullYear()} FitCoach. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between mx-auto">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Dumbbell className="h-6 w-6 text-teal-600" />
            <span>FitCoach</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/#services"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#testimonials"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="/#pricing"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden md:flex">
              <Link href="/#contact">Book a Session</Link>
            </Button>
            <Button asChild>
              <Link href="/#contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8 md:py-12 mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Button asChild variant="ghost" size="sm" className="gap-1">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
          <div className="flex flex-col gap-2 mb-8">
            <h1 className="text-3xl font-bold tracking-tight">
              Book a Session
            </h1>
            <p className="text-muted-foreground">
              Choose a class, select a date and time, and provide your details
              to book your session.
            </p>
          </div>

          <Tabs
            value={currentStep}
            onValueChange={setCurrentStep}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="step1">1. Select Class</TabsTrigger>
              <TabsTrigger value="step2">2. Choose Date & Time</TabsTrigger>
              <TabsTrigger value="step3">3. Your Details</TabsTrigger>
            </TabsList>

            <TabsContent value="step1">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ClassCard
                  title="Personal Training"
                  description="One-on-one sessions focused on your specific goals with personalized attention."
                  duration="60 min"
                  price="$75"
                  type="personal"
                  onSelect={() =>
                    setSelectedClass({
                      title: "Personal Training",
                      price: "$75.00",
                      duration: "60 minutes",
                    })
                  }
                />
                <ClassCard
                  title="HIIT Workout"
                  description="High-intensity interval training to maximize calorie burn and improve fitness."
                  duration="45 min"
                  price="$25"
                  type="hiit"
                  onSelect={() =>
                    setSelectedClass({
                      title: "HIIT Workout",
                      price: "$25.00",
                      duration: "45 minutes",
                    })
                  }
                />
                <ClassCard
                  title="Strength & Conditioning"
                  description="Build muscle and improve overall strength with focused resistance training."
                  duration="60 min"
                  price="$30"
                  type="strength"
                  onSelect={() =>
                    setSelectedClass({
                      title: "Strength & Conditioning",
                      price: "$30.00",
                      duration: "60 minutes",
                    })
                  }
                />
                <ClassCard
                  title="Yoga Flow"
                  description="Improve flexibility, balance, and mental clarity with guided yoga practice."
                  duration="60 min"
                  price="$20"
                  type="yoga"
                  onSelect={() =>
                    setSelectedClass({
                      title: "Yoga Flow",
                      price: "$20.00",
                      duration: "60 minutes",
                    })
                  }
                />
                <ClassCard
                  title="Cardio Blast"
                  description="Elevate your heart rate and burn calories with this high-energy cardio session."
                  duration="45 min"
                  price="$25"
                  type="cardio"
                  onSelect={() =>
                    setSelectedClass({
                      title: "Cardio Blast",
                      price: "$25.00",
                      duration: "45 minutes",
                    })
                  }
                />
                <ClassCard
                  title="Core & Mobility"
                  description="Focus on strengthening your core and improving overall mobility and flexibility."
                  duration="45 min"
                  price="$25"
                  type="core"
                  onSelect={() =>
                    setSelectedClass({
                      title: "Core & Mobility",
                      price: "$25.00",
                      duration: "45 minutes",
                    })
                  }
                />
              </div>
              <div className="mt-8 flex justify-end">
                <Button
                  className="bg-teal-600 hover:bg-teal-700"
                  onClick={goToNextStep}
                >
                  Continue to Date & Time
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="step2">
              <div className="grid gap-8 md:grid-cols-[1fr_300px]">
                <Card>
                  <CardHeader>
                    <CardTitle>Select Date & Time</CardTitle>
                    <CardDescription>
                      Choose when you'd like to attend your session
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BookingCalendar />
                  </CardContent>
                </Card>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Available Times</CardTitle>
                      <CardDescription>
                        Select a time slot for your session
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RadioGroup
                        defaultValue="9am"
                        className="grid grid-cols-2 gap-2"
                      >
                        {[
                          "9:00 AM",
                          "10:00 AM",
                          "11:00 AM",
                          "1:00 PM",
                          "2:00 PM",
                          "3:00 PM",
                          "4:00 PM",
                          "5:00 PM",
                        ].map((time) => (
                          <div
                            key={time}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem value={time} id={time} />
                            <Label
                              htmlFor={time}
                              className="flex items-center gap-2"
                            >
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              {time}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Selection</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Class:</span>
                        <span className="font-medium">
                          {selectedClass.title}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date:</span>
                        <span className="font-medium">May 20, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time:</span>
                        <span className="font-medium">10:00 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">
                          {selectedClass.duration}
                        </span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Price:</span>
                        <span className="font-medium">
                          {selectedClass.price}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <Button variant="outline" onClick={goToPreviousStep}>
                  Back to Class Selection
                </Button>
                <Button
                  className="bg-teal-600 hover:bg-teal-700"
                  onClick={goToNextStep}
                >
                  Continue to Your Details
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="step3">
              <div className="grid gap-8 md:grid-cols-[1fr_300px]">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Details</CardTitle>
                    <CardDescription>
                      Please provide your information to complete the booking
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Fitness Experience</Label>
                      <Select defaultValue="intermediate">
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">
                            Intermediate
                          </SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="notes">
                        Special Notes or Requirements
                      </Label>
                      <Textarea
                        id="notes"
                        placeholder="Any injuries, preferences, or other information your trainer should know"
                      />
                    </div>
                  </CardContent>
                  <CardHeader>
                    <CardTitle>Payment Information</CardTitle>
                    <CardDescription>Secure payment processing</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input
                        id="card-number"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name-on-card">Name on Card</Label>
                      <Input id="name-on-card" placeholder="John Doe" />
                    </div>
                  </CardContent>
                </Card>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Booking Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Class:</span>
                        <span className="font-medium">
                          {selectedClass.title}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date:</span>
                        <span className="font-medium">May 20, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time:</span>
                        <span className="font-medium">10:00 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">
                          {selectedClass.duration}
                        </span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Session Price:
                        </span>
                        <span className="font-medium">
                          {selectedClass.price}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax:</span>
                        <span className="font-medium">$6.00</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-bold">
                        <span>Total:</span>
                        <span>$81.00</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                      <Button
                        className="w-full bg-teal-600 hover:bg-teal-700"
                        onClick={goToNextStep}
                      >
                        Complete Booking
                      </Button>
                      <p className="mt-2 text-xs text-center text-muted-foreground">
                        By completing this booking, you agree to our Terms of
                        Service and Cancellation Policy.
                      </p>
                    </CardFooter>
                  </Card>
                </div>
              </div>
              <div className="mt-8 flex justify-start">
                <Button variant="outline" onClick={goToPreviousStep}>
                  Back to Date & Time
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="border-t bg-background">
        <div className="container py-6 text-center text-sm text-muted-foreground mx-auto">
          <p>
            &copy; {new Date().getFullYear()} FitCoach. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
