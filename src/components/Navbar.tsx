import React, { useState, useEffect } from "react"
import { useTheme } from "./theme-provider"
import { Menu, X, Sun, Moon } from "lucide-react"

import logo from '../assets/ftslogo.png';

const menuItems = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Platform", href: "#platform", id: "platform" },
  { name: "Products", href: "#products", id: "products" },
  { name: "Solutions", href: "#solutions", id: "solutions" },
  { name: "Services", href: "#services", id: "services" },
  { name: "About", href: "#about", id: "about" },
  { name: "Results", href: "#case-studies", id: "case-studies" },
  { name: "Contact", href: "#contact", id: "contact" },
]

export const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 20)
      
      if (scrollY < 100) {
        setActiveSection("home")
        return
      }
      
      const sections = menuItems.map(item => item.id)
      const scrollPosition = scrollY + 150

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 px-4 md:px-8 ${isScrolled ? "py-4" : "py-8"}`}>
        <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-500 ${isScrolled ? "glass shadow-primary/10 border-border bg-card/80" : "bg-transparent hover:bg-white/5 border-transparent hover:border-white/10 backdrop-blur-0 hover:backdrop-blur-md"}`}>
          <div className="flex items-center justify-between px-8 py-4">
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <img 
                src={logo} 
                alt="FAAZ Technology Solutions" 
                className="h-10 md:h-12 object-contain transition-all duration-300 transform group-hover:scale-105 brightness-150 contrast-125 drop-shadow-[0_0_15px_rgba(79,70,229,0.3)]" 
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.filter(item => item.id !== 'contact').map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`relative group text-xs font-bold uppercase tracking-widest transition-all duration-300 py-1 ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                  <span className={`absolute left-0 bottom-0 w-full h-[2px] transition-transform duration-300 origin-left ${
                    activeSection === item.id 
                    ? "bg-primary scale-x-100" 
                    : "bg-primary scale-x-0 group-hover:scale-x-100"
                  }`} />
                </a>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-xl glass text-foreground hover:text-primary transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-primary" />}
              </button>
              
              <button
                onClick={(e) => handleClick(e as any, 'contact')}
                className="px-8 py-3 bg-primary/20 backdrop-blur-md border border-primary/50 text-foreground text-xs font-black uppercase tracking-widest rounded-full hover:bg-primary/40 hover:border-primary/80 transition-all shadow-[0_4px_24px_rgba(79,70,229,0.3)]"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl glass text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div className="absolute inset-0 bg-background/95 backdrop-blur-2xl" />
          <div className="relative h-full flex flex-col items-center justify-center gap-8 p-6">
            <button 
              className="absolute top-8 right-8 p-2 rounded-xl glass text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.id)}
                className={`text-3xl font-heading font-bold transition-all duration-500 transform ${
                  isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                } ${activeSection === item.id ? "text-primary" : "text-foreground/60 hover:text-foreground"}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.name}
              </a>
            ))}
            <button
              className={`mt-4 flex items-center gap-2 px-6 py-3 rounded-2xl glass transition-all duration-500 transform ${
                isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${menuItems.length * 50}ms` }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-primary" />}
              <span className="text-foreground">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
