import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Home, User, Code, Award, Mail } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: Code },
  { name: "Certificates", href: "#certificates", icon: Award },
  { name: "Contact", href: "#contact", icon: Mail },
]

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100
      setIsVisible(scrolled)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
      let current = "home"
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section
            break
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      // Use instant jump to avoid clashing with Lenis or other smooth scroll
      element.scrollIntoView({ behavior: "instant", block: 'start' } as ScrollIntoViewOptions)
    }
  }

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="glass rounded-full px-4 py-2 flex items-center gap-2 shadow-lg border-border-elevated">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.href.substring(1)
          
          return (
            <Button
              key={item.name}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(item.href)}
              className={`transition-all duration-300 rounded-full ${
                isActive 
                  ? "bg-primary/20 text-primary" 
                  : "hover:bg-primary/10 text-text-secondary hover:text-primary"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="ml-2 hidden sm:inline">{item.name}</span>
            </Button>
          )
        })}
        
        <div className="w-px h-6 bg-border mx-2" />
        <ThemeToggle />
      </div>
    </nav>
  )
}