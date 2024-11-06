"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ExternalLink,
  FileCode,
  ImageIcon,
  GitFork,
  Heart,
  Crosshair,
  Brain,
  ShieldCheck,
  Shield,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  ThumbsUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiGraphql,
  SiAwsamplify,
  SiDigitalocean,
  SiDocker,
  SiVercel,
} from "react-icons/si";

const skills = [
  { name: "NextJS 15", icon: SiNextdotjs, color: "#000000" },
  { name: "React JS 19 (RC)", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "NodeJS", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "AWS", icon: SiAwsamplify, color: "#FF9900" },
  { name: "Digital Ocean", icon: SiDigitalocean, color: "#0080FF" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
];

const projects = [
  {
    title: "Resume Builder SaaS",
    description:
      "A modern resume builder application with customizable templates and real-time editing.",
    link: "https://resume-builder-saas.vercel.app",
    github: "chiranjeebhub/resume-builder-saas",
    icon: FileCode,
  },
  // {
  //   title: "Weather Forecast",
  //   description:
  //     "Real-time weather forecasting application with detailed meteorological data and interactive maps.",
  //   link: "https://chiranjeeb-weather.vercel.app",
  //   github: "chiranjeebhub/weatherforecast",
  //   icon: Cloud,
  // },
  {
    title: "Walle",
    description:
      "A Wallpaper app built with React native for both mobile and web.",
    link: "https://walleapp.vercel.app",
    github: "chiranjeebhub/walle",
    icon: ImageIcon,
  },
  // {
  //   title: "Devasmriti v2",
  //   description:
  //     "Dashboard for a spiritual platform, offering various services and information.",
  //   link: "https://dashboard.devasmriti.com",
  //   github: "chiranjeebhub/devasmritiv2",
  //   icon: LayoutDashboard,
  // },
  {
    title: "VSCode Portfolio",
    description:
      "A unique portfolio website designed to look like Visual Studio Code.",
    link: "https://vscode-portfolio-cj.vercel.app",
    github: "chiranjeebhub/vscode-portfolio",
    icon: FileCode,
  },
  // {
  //   title: "Image Wizard",
  //   description:
  //     "An image processing and manipulation tool with various filters and effects.",
  //   link: "https://image-wizard-cj.vercel.app",
  //   github: "chiranjeebhub/image-wizard",
  //   icon: ImageIcon,
  // },
  {
    title: "GitHub Arena",
    description:
      "A platform for developers to compete and showcase their GitHub contributions.",
    link: "https://github-arena.vercel.app",
    github: "chiranjeebhub/github-arena",
    icon: GitFork,
  },
  {
    title: "Donation App",
    description:
      "A web application for managing and processing charitable donations.",
    link: "https://www.sudhamfoundation.com",
    github: "chiranjeebhub/donationapp",
    icon: Heart,
  },
  {
    title: "Natuv (in Progress)",
    description:
      "An application for weapons retailers, optimized for mobile devices.",
    link: "https://weapons.retailers.app",
    github: "chiranjeebhub/natuv",
    icon: Crosshair,
  },
  {
    title: "EarnGPT (in Progress)",
    description:
      "A platform leveraging AI to help users earn money through various tasks.",
    link: "https://www.earngpt.com",
    github: "chiranjeebhub/earngpt",
    icon: Brain,
  },
  // {
  //   title: "Startup Brokers",
  //   description:
  //     "A comprehensive platform for startup investments and brokerage.",
  //   link: "https://www.startupbrokers.com",
  //   github: "chiranjeebhub/StartupBrokers-NextJS-V1",
  //   icon: Building2,
  // },
  {
    title: "Insurance Super Admin",
    description: "An admin panel for managing insurance policies and claims.",
    link: "https://my.coverfi.app",
    github: "chiranjeebhub/insurance-superadmin",
    icon: ShieldCheck,
  },
  {
    title: "Coverfi",
    description:
      "A platform for managing and administering insurance coverage.",
    link: "https://admin.coverfi.app",
    github: "chiranjeebhub/coverfi",
    icon: Shield,
  },
];

const careerHistory = [
  {
    company: "Nvest Campus Pvt.Ltd.",
    position: "Senior Full Stack Developer",
    duration: "2019 - Present",
    description: "Leading development of enterprise-level web applications.",
  },
  {
    company: "Rebrand Digital",
    position: "Software Developer",
    duration: "2017 - 2019",
    description: "Developed and maintained multiple client projects.",
  },
  {
    company: "FNY Digital",
    position: "Web Developer",
    duration: "2016 - 2017",
    description: "Worked on on front-end development tasks.",
  },
];

export default function MyPortfolio() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 6);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <aside className="lg:col-span-1">
              <Card className="sticky top-8 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg bg-gradient-to-b from-blue-500/10 to-secondary/20 z-0">
                <CardContent className="relative z-10 p-6">
                  <div className="mb-6 relative group">
                    <Image
                      src="/me.jpg"
                      alt="Chiranjeeb Jena"
                      width={150}
                      height={150}
                      className="rounded-full mx-auto border-4 border-background relative z-10 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h1 className="text-3xl font-bold text-center mb-2">
                    Chiranjeeb Jena
                  </h1>
                  <p className="text-xl text-center text-muted-foreground mb-4">
                    Full Stack Developer / Tech Enthusiast
                  </p>

                  <div className="flex justify-center items-center space-x-2 mb-4 text-sm text-muted-foreground">
                    <Tooltip>
                      <TooltipTrigger>
                        <MapPin className="h-4 w-4" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Location</p>
                      </TooltipContent>
                    </Tooltip>
                    <span>Hyderabad, India</span>
                    <span className="mx-2">•</span>
                    <Tooltip>
                      <TooltipTrigger>
                        <Calendar className="h-4 w-4" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Availability</p>
                      </TooltipContent>
                    </Tooltip>
                    <span>Available for hire</span>
                  </div>
                  <div className="flex justify-center space-x-4 mb-6">
                    <Tooltip>
                      <TooltipTrigger>
                        <Button
                          variant="outline"
                          size="icon"
                          asChild
                          className="rounded-full"
                        >
                          <Link href="https://github.com/chiranjeebhub">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Profile</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger>
                        <Button
                          variant="outline"
                          size="icon"
                          asChild
                          className="rounded-full"
                        >
                          <Link href="https://linkedin.com/in/ichiranjeeb">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>LinkedIn Profile</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger>
                        <Button
                          variant="outline"
                          size="icon"
                          asChild
                          className="rounded-full"
                        >
                          <Link href="mailto:work.chiranjeeb@gmail.com">
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Send Email</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <Button className="w-full" asChild>
                      <Link href="mailto:work.chiranjeeb@gmail.com">
                        <Mail className="mr-2 h-4 w-4" /> Contact Me
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/path-to-your-resume.pdf">
                        <FileText className="mr-2 h-4 w-4" /> Resume
                      </Link>
                    </Button>
                  </div>
                  {showMore && (
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2" />
                        <span>11+ years of experience</span>
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="h-4 w-4 mr-2" />
                        <span>B.Tech in Computer Science</span>
                      </div>
                      <div className="flex items-center">
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        <span>Got Thumbs-up from 50+ clients</span>
                      </div>
                      <div className="mt-4">
                        <hr className="border-gray-200 dark:border-gray-700 my-5" />
                        {/* <h3 className="font-semibold mb-3">Career History</h3> */}
                        {careerHistory.map((job, index) => (
                          <div key={index} className="mb-4 last:mb-0">
                            <div className="flex items-center mb-1">
                              <Briefcase className="h-4 w-4 mr-2 text-primary" />
                              <h4 className="font-medium">{job.company}</h4>
                            </div>
                            <div className="ml-6 text-sm">
                              <p className="text-muted-foreground">
                                {job.position}
                              </p>
                              <div className="flex items-center text-xs text-muted-foreground mt-1">
                                <Calendar className="h-3 w-3 mr-1" />
                                <span>{job.duration}</span>
                              </div>
                              {/* <p className="mt-1">{job.description}</p> */}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <Button
                    variant="link"
                    onClick={() => setShowMore(!showMore)}
                    className="mt-4 w-full"
                  >
                    {showMore ? "Show Less" : "Show More"}
                  </Button>
                </CardContent>
              </Card>
            </aside>
            <main className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    I am a passionate full stack developer with 5 years of
                    experience in building web applications. I specialize in
                    React, NextJS, Node.js, AI and cloud technologies. I am
                    always eager to learn new technologies and take on
                    challenging projects that push the boundaries of whats
                    possible on the web.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {skills.map((skill) => (
                      <Card
                        key={skill.name}
                        className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg rounded-lg"
                        style={
                          {
                            "--hover-color": skill.color,
                          } as React.CSSProperties
                        }
                      >
                        <CardContent
                          className="p-4 flex items-center space-x-3 group hover:bg-opacity-10 transition-colors duration-300 ease-in-out"
                          style={
                            {
                              "--hover-bg-color": `${skill.color}1A`,
                            } as React.CSSProperties
                          }
                        >
                          <skill.icon className="text-2xl text-primary transition-colors duration-300 ease-in-out group-hover:text-[var(--hover-color)]" />
                          <span className="text-sm font-medium transition-colors duration-300 ease-in-out group-hover:text-[var(--hover-color)]">
                            {skill.name}
                          </span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    Some of the Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {visibleProjects.map((project, index) => (
                      <Card
                        key={index}
                        className="overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center mb-4">
                            <project.icon className="w-8 h-8 mr-3 text-primary" />
                            <h3 className="text-xl font-semibold">
                              {project.title}
                            </h3>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            {project.description}
                          </p>
                          <div className="flex gap-3">
                            <Button variant="outline" asChild>
                              <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="mr-2 h-4 w-4" /> Live
                                Demo
                              </Link>
                            </Button>
                            <Button variant="outline" asChild>
                              <Link
                                href={`https://github.com/${project.github}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="mr-2 h-4 w-4" /> Source Code
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  {projects.length > 6 && (
                    <div className="mt-8 text-center">
                      <Button
                        onClick={() => setShowAllProjects(!showAllProjects)}
                        variant="outline"
                      >
                        {showAllProjects ? (
                          <>
                            Show Less <ChevronUp className="ml-2 h-4 w-4" />
                          </>
                        ) : (
                          <>
                            Show More <ChevronDown className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </main>
          </div>
        </div>
        <footer className="border-t border-gray-200 dark:border-gray-700 mt-16">
          <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Chiranjeeb Jena. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}
