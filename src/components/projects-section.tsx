import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Eye } from "lucide-react"
import { ImagePreviewModal } from "@/components/image-preview-modal"
import { useState } from "react"
import ScrollStack, { ScrollStackItem } from "./ui/scroll-stack"

// Import project images
import projectSohanUIUX from "@/assets/project-sohan-uiux.png"
import projectSohanWeb from "@/assets/project-sohan-web.png"
import projectMatrix from "@/assets/project-matrix.png"
import projectNammai from "@/assets/project-nammai.png"
import projectOneOps from "@/assets/project-oneops.png"

const projects = [
  {
    title: "sohan.app",
    description: "Personal portfolio website showcasing technical skills and certifications with modern design and responsive layout.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://sohan.app",
    githubUrl: "#",
    featured: true,
    image: projectSohanUIUX
  },
  {
    title: "MATRIX 2K25",
    description: "AI-driven event management platform featuring full-stack architecture, real-time updates, and interactive user experience.",
    technologies: ["Full-Stack", "AI Integration", "Real-time Updates", "Event Management"],
    liveUrl: "https://klematrix2k25.in",
    githubUrl: "#",
    featured: true,
    image: projectMatrix
  },
  {
    title: "Nammai Live",
    description: "Conversational AI chatbot website inspired by modern AI assistants with integrated backend APIs and natural language processing.",
    technologies: ["AI/ML", "Backend APIs", "Conversational AI", "NLP"],
    liveUrl: "https://nammai.live",
    githubUrl: "#",
    featured: false,
    image: projectNammai
  },
  {
    title: "OneOps DevOps Platform",
    description: "AI-powered DevOps automation platform featuring zero-config CI/CD, smart automation, and seamless cloud integrations.",
    technologies: ["DevOps", "CI/CD", "Cloud Integration", "Automation", "AI"],
    liveUrl: "https://oneops-18.vercel.app",
    githubUrl: "#",
    featured: true,
    image: projectOneOps
  }
]

export function ProjectsSection() {
  const [previewImage, setPreviewImage] = useState<{
    src: string
    alt: string
    title: string
  } | null>(null)

  const openPreview = (src: string, alt: string, title: string) => {
    setPreviewImage({ src, alt, title })
  }

  const closePreview = () => {
    setPreviewImage(null)
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              A collection of projects showcasing full-stack development, AI integration, and modern web technologies
            </p>
          </div>

          <div className="w-full max-w-4xl mx-auto">
            <ScrollStack
              useWindowScroll
              itemDistance={40}
              itemScale={0.02}
              itemStackDistance={15}
              stackPosition="15%"
              scaleEndPosition="5%"
              baseScale={0.9}
              blurAmount={2}
              rotationAmount={5}
            >
              {projects.map((project, index) => (
                <ScrollStackItem key={index}>
                  <Card
                    className="glass border-border-elevated hover:glow group cursor-pointer scroll-stack-card"
                  >
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="relative group/image md:w-1/2">
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none cursor-pointer transition-all duration-300 group-hover/image:scale-105"
                          onClick={() => openPreview(project.image, `${project.title} preview`, project.title)}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-all duration-300 rounded-t-lg md:rounded-l-lg md:rounded-tr-none flex items-center justify-center">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="opacity-0 group-hover/image:opacity-100 transition-all duration-300 text-white hover:text-white glass"
                            onClick={() => openPreview(project.image, `${project.title} preview`, project.title)}
                          >
                            <Eye className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>

                      <div className="md:w-1/2 flex flex-col">
                        <CardHeader className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-xl font-semibold text-text-primary group-hover:gradient-text transition-all duration-300">
                                {project.title}
                                {project.featured && (
                                  <Badge variant="secondary" className="ml-2 bg-primary/20 text-primary">
                                    Featured
                                  </Badge>
                                )}
                              </CardTitle>
                              <CardDescription className="text-text-secondary mt-2">
                                {project.description}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="mt-auto">
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="border-border-elevated hover:scale-105 transition-transform duration-200"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex gap-3">
                            <Button
                              size="sm"
                              className="bg-primary hover:bg-primary/90 text-primary-foreground"
                              asChild
                            >
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </a>
                            </Button>

                            <Button
                              variant="outline"
                              size="sm"
                              className="glass border-border-elevated hover:bg-surface-elevated"
                              asChild
                            >
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                Code
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="glass border-border-elevated hover:bg-surface-elevated px-8"
              asChild
            >
              <a href="https://github.com/sohan20051519" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>

      <ImagePreviewModal
        isOpen={!!previewImage}
        onClose={closePreview}
        imageSrc={previewImage?.src || ""}
        imageAlt={previewImage?.alt || ""}
        title={previewImage?.title}
      />
    </section>
  )
}