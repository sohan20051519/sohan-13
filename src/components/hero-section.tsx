import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Download } from "lucide-react"
import DotGrid from "./DotGrid"
 

export function HeroSection() {
  return (
    <>
      {/* HERO with DotGrid background */}
      <section id="home" className="min-h-screen flex items-center justify-start relative overflow-hidden bg-slate-900">
        {/* Dot Grid Background */}
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
          <DotGrid
            dotSize={8}
            gap={18}
            baseColor="#2b2640"
            activeColor="#4c3fff"
            proximity={220}
            shockRadius={260}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
            style={{}}
          />
        </div>

        {/* Centered hero copy */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl text-left">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              Available for Opportunities
            </Badge>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up [animation-delay:0.1s] opacity-0">
              <span className="gradient-text">Sohan A</span>
            </h1>

            <p className="text-xl sm:text-2xl text-text-secondary mb-8 animate-fade-in-up [animation-delay:0.2s] opacity-0">
              Full Stack Developer & DevOps Engineer
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start items-start sm:items-center mb-12 animate-fade-in-up [animation-delay:0.3s] opacity-0">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 px-8 py-3"
                asChild
              >
                <a href="#projects"> 
                  View projects
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-border-elevated hover:bg-surface-elevated px-8 py-3"
                asChild
              >
                <a 
                  href="https://drive.google.com/uc?export=download&id=1Jt4kf_kJp-LLeDxTW3yvTFSiXYldyC-s"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex justify-start gap-6 animate-fade-in-up [animation-delay:0.4s] opacity-0">
              <a 
                href="https://github.com/sohan20051519" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:glow transition-all duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/sohan2005" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:glow transition-all duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:sohan20051519@gmail.com"
                className="p-3 glass rounded-full hover:glow transition-all duration-300"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lanyard removed per request */}
    </>
  )
}