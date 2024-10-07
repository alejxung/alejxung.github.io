'use client'

import { useMediaQuery } from 'react-responsive'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Menu } from "@/components/Menu"

export default function Portfolio() {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 })

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Alex Jung</span>
          <span className="font-bold text-xl">AJ</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          {!isSmallScreen && (
            <>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#education">Education</Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#experience">Experience</Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">Projects</Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">Contact</Link>
            </>
          )}
          <ThemeToggle />
          {isSmallScreen && <Menu />}
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              {/* Profile Image */}
              <div className="relative w-32 h-32 md:w-48 md:h-48 mb-4">
                <Image
                  src="/profile.png"
                  alt="Alex Jung Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Alex Jung
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Web & ML/AI Developer building exceptional digital experiences. <br />
                  I create efficient, fast-executing codes in websites that make an impact.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Education</h2>
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
                <p className="text-muted-foreground">
                  University of Illinois at Urbana-Champaign, 2021 - 2027 <br />
                  Currently Sophomore, Junior Standing
                </p>
                <p className="text-sm text-muted-foreground">
                  Relevant Courses:
                  Intro to Computer Science,
                  Discrete Structures,
                  Linear Algebra with Computational Applications,
                  Data Structures
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Experience</h2>
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold">Senior Airmen Leader</h3>
                <p className="text-muted-foreground">Republic of Korea Air Force, Jul 2022 – Apr 2024</p>
                <p className="text-sm text-muted-foreground">
                  • Represented over 100 soldiers within the battalion <br />
                  • Guided more than 80 newly assigned junior Airmen on Air Force protocols and procedures <br />
                  • Attended the monthly wing-wide meetings to address various issues as the battalion’s representative
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">Web Development Team</h3>
                <p className="text-muted-foreground">Korean Student Association at UIUC, Aug 2021 – Apr 2022</p>
                <p className="text-sm text-muted-foreground">
                  • Performing fast server response speed, flexible code factoring, and beautiful design using React.js & Tailwind
                  CSS for front end <br />
                  • Working with Headless CMS by optimizing API system from Frontity & WordPress and flexible code base <br />
                  • Implementing website structure through Digital Ocean by setting up an Ubuntu server <br />
                  • Collecting and storing user data to discover the website’s userbase, helped monetizing user flow
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">El Molino Team</h3>
                <p className="text-muted-foreground">Amizade Virtual Service Learning, Aug 2021 – Dec 2021</p>
                <p className="text-sm text-muted-foreground">
                  • Designed and executed an official website for the educational unit El Molino in Bolivia, including main, about
                  us, programs, and contact page<br />
                  • Actively developed website prototypes in response to direct client feedback to satisfy high standards<br />
                  • Organized meetings with Amizade Bolivia site directors via technology such as Zoom & WhatsApp
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Projects
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>InTheView</CardTitle>
                  <CardDescription>
                    Interview preparation tool leveraging the OpenAI API and Firebase for real-time feedback,
                    TTS functionality, responsive design across multiple devices, session management, and accurate speech
                    transcription with Whisper STT.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/InTheView.png"
                    alt="InTheView"
                    width={400}
                    height={300}
                    className="w-full h-[200px] object-cover rounded-md"
                  />
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="https://github.com/alejxung/InTheView">View Project</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Meal Compass</CardTitle>
                  <CardDescription>
                    Dynamic restaurant search tool that scrapes and stores over 20,000 entries
                    from the Michelin Guide and Blue Ribbon API in MongoDB, featuring a React front-end,
                    Google Maps API integration for navigation, and complex filtering options for an enhanced user experience.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/MealCompass.png"
                    alt="MealCompass"
                    width={400}
                    height={300}
                    className="w-full h-[200px] object-cover rounded-md"
                  />
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="https://github.com/alejxung/MealCompass">View Project</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>TourneyBoard</CardTitle>
                  <CardDescription>
                    User-friendly tournament scoreboard application that allows users to dynamically
                    generate brackets, manage players, utilize drag-and-drop functionality, and advance winners through rounds,
                    all while supporting easy installation and customization.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/TourneyBoard.png"
                    alt="TourneyBoard"
                    width={400}
                    height={300}
                    className="w-full h-[200px] object-cover rounded-md"
                  />
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="https://github.com/alejxung/TourneyBoard">View Project</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2024 Alex Jung. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="https://github.com/alejxung">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="https://www.linkedin.com/in/alejxung/">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="mailto:aevum20@gmail.com">
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </Link>
        </nav>
      </footer>
    </div>
  )
}