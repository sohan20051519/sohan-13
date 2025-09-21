import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="hero-bg absolute inset-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in-up">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
              Available for Opportunities
            </Badge>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up [animation-delay:0.1s] opacity-0">
            <span className="gradient-text">Sohan A</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-text-secondary mb-8 animate-fade-in-up [animation-delay:0.2s] opacity-0">
            Full Stack Developer & DevOps Engineer
          </p>
          
          <div className="text-lg max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up [animation-delay:0.3s] opacity-0 text-text-secondary">
            <p>
              Experienced in building responsive web applications using AI-assisted coding workflows with 
              modern technologies. Skilled in full-stack development, DevOps practices, and cloud deployment.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up [animation-delay:0.4s] opacity-0">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 glow"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="glass border-border-elevated hover:bg-surface-elevated px-8 py-3"
              asChild
            >
              <a 
                href="https://drive.google.com/uc?export=download&id=1Jt4kf_kJp-LLeDxTW3yvTFSiXYldyC-s"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 animate-fade-in-up [animation-delay:0.5s] opacity-0">
            <a 
              href="https://github.com/sohan20051519" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:glow transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/sohan2005" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:glow transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:sohan20051519@gmail.com"
              className="p-3 glass rounded-full hover:glow transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl floating" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl floating [animation-delay:2s]" />
    </section>
  )
}