import { useState } from "react";
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Award, BookOpen, Briefcase, Send, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  // Handle scroll for navbar effect
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-background"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ishant
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#education" className="text-sm font-medium hover:text-primary transition-colors">
              Education
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            )}
            <button
              onClick={() => setAuthModalOpen(true)}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all"
            >
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border py-4 px-4">
            <div className="flex flex-col gap-4">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </a>
              <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#education" className="text-sm font-medium hover:text-primary transition-colors">
                Education
              </a>
              <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </a>
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  {theme === "light" ? (
                    <>
                      <Moon size={18} /> Dark Mode
                    </>
                  ) : (
                    <>
                      <Sun size={18} /> Light Mode
                    </>
                  )}
                </button>
              )}
              <button
                onClick={() => {
                  setAuthModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Auth Modal */}
      {authModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-2xl p-8 max-w-md w-full shadow-2xl animate-fade-in">
            <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
            <p className="text-muted-foreground mb-6">Sign in to your portfolio dashboard</p>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 bg-secondary text-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 bg-secondary text-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all">
                Sign In
              </button>
              <button
                onClick={() => setAuthModalOpen(false)}
                className="w-full px-4 py-2 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl font-bold font-serif">
              <div style={{ marginRight: "200px" }}>
                <div>
                  <p>Hi, I'm </p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                <div>
                  Ishant
                </div>
              </div>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light">
              First-year student passionate about design, development, and creating digital experiences
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm exploring the intersection of creative design and technology. This portfolio showcases my skills, projects, and journey as I grow as a developer and designer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all inline-flex items-center justify-center gap-2"
            >
              View My Work <ExternalLink size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-all"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-8">
            <a href="https://github.com/ishant-rgb-hub" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-full hover:bg-accent hover:text-accent-foreground transition-all">
              <Github size={20} />
            </a>
            <a href="http://linkedin.com/in/ishant-yadav-922b1b38b/" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-full hover:bg-accent hover:text-accent-foreground transition-all">
              <Linkedin size={20} />
            </a>
            <a href="mailto:ishant@example.com" className="p-3 bg-secondary rounded-full hover:bg-accent hover:text-accent-foreground transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold font-serif mb-8 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a first-year student with a passion for building beautiful, intuitive digital experiences. My journey started with curiosity about how websites work, and it's evolved into a deep interest in both frontend development and UI/UX design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring design trends, learning new frameworks, or working on personal projects that push my creative boundaries. I believe in continuous learning and challenging myself to grow every day.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This portfolio represents my commitment to presenting myself professionally and showcasing the skills I've developed so far in my academic and personal journey.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg mb-2">Quick Facts</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Currently in my first year of university</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Located in San Francisco, CA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Self-taught developer with formal education</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Open to internships and collaborations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold font-serif mb-12 text-center">Skills & Expertise</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-primary" size={28} />
                <h3 className="text-2xl font-bold">Technical Skills</h3>
              </div>

              <div className="space-y-4">
                {[
                  { skill: "Frontend Development", level: "Advanced" },
                  { skill: "React & JavaScript", level: "Advanced" },
                  { skill: "TypeScript", level: "Intermediate" },
                  { skill: "Tailwind CSS", level: "Advanced" },
                  { skill: "UI/UX Design", level: "Intermediate" },
                  { skill: "Responsive Design", level: "Advanced" },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{item.skill}</span>
                      <span className="text-sm text-primary font-semibold">{item.level}</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ${
                          item.level === "Advanced" ? "w-full" : item.level === "Intermediate" ? "w-2/3" : "w-1/2"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-accent" size={28} />
                <h3 className="text-2xl font-bold">Soft Skills</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {["Communication", "Teamwork", "Problem Solving", "Creativity", "Time Management", "Adaptability"].map(
                  (skill, idx) => (
                    <div key={idx} className="p-4 bg-secondary rounded-lg border border-border text-center hover:shadow-md transition-all">
                      <p className="font-medium">{skill}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold font-serif mb-12 text-center">Education</h2>

          <div className="space-y-8">
            {[
              {
                school: "Newton School of Technology",
                program: "Bachelor of Science in Computer Science",
                year: "2024 - Present",
                highlights: ["GPA: 8.8/10", "Dean's List", "Relevant Coursework: Web Development, UI/UX Design"],
              },
              {
                school: "RPS Public school",
                program: "High School Diploma with Honors",
                year: "2020 - 2024",
                highlights: ["Valedictorian", "AP Computer Science A (5)", "President of Coding Club"],
              },
            ].map((edu, idx) => (
              <div key={idx} className="relative pl-6 pb-8 border-l-2 border-primary">
                <div className="absolute -left-3 top-0 w-4 h-4 bg-primary rounded-full" />
                <div className="p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold">{edu.school}</h3>
                    <span className="text-sm text-primary font-semibold">{edu.year}</span>
                  </div>
                  <p className="text-lg text-accent font-semibold mb-4">{edu.program}</p>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, hidx) => (
                      <li key={hidx} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary font-bold mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold font-serif mb-4 text-center">Featured Projects</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that demonstrate my skills in frontend development and design.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Design System Portfolio",
                description: "A comprehensive design system built with React and Tailwind CSS, featuring 50+ reusable components with full documentation.",
                tags: ["React", "TypeScript", "Tailwind CSS", "Figma"],
                link: "#",
              },
              {
                title: "E-Commerce Website",
                description: "A fully functional e-commerce platform with product filtering, cart management, and checkout process. Built with modern web technologies.",
                tags: ["React", "JavaScript", "API Integration", "UI/UX"],
                link: "#",
              },
              {
                title: "Task Management App",
                description: "A collaborative task management application with real-time updates, user authentication, and team collaboration features.",
                tags: ["React", "Firebase", "Material UI", "Responsive"],
                link: "#",
              },
              {
                title: "Personal Finance Tracker",
                description: "An intuitive finance tracking application that helps users manage budgets, track expenses, and visualize spending patterns.",
                tags: ["React", "Chart.js", "LocalStorage", "Mobile-First"],
                link: "#",
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="group bg-background rounded-xl border border-border overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-300"
              >
                <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all" />

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tidx) => (
                      <span key={tidx} className="px-3 py-1 bg-secondary text-xs font-medium rounded-full text-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all pt-2"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif mb-4">Let's Connect</h2>
            <p className="text-lg text-muted-foreground">
              I'd love to hear from you! Whether you want to discuss projects, opportunities, or just say hello, feel free to reach out.
            </p>
          </div>

          <div className="space-y-6">
            {/* Contact Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all inline-flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>

            {/* Contact Info */}
            <div className="border-t border-border pt-8">
              <p className="text-center text-muted-foreground mb-6">Or connect with me directly:</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="mailto:ishant@example.com"
                  className="flex items-center justify-center gap-3 p-4 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <Mail className="text-primary" size={20} />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-semibold">ishant@example.com</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-3 p-4 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <Github className="text-primary" size={20} />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">GitHub</p>
                    <p className="font-semibold">github.com/alex</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#about" className="hover:opacity-100 transition-opacity">About</a></li>
                <li><a href="#skills" className="hover:opacity-100 transition-opacity">Skills</a></li>
                <li><a href="#projects" className="hover:opacity-100 transition-opacity">Projects</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Social</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">GitHub</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Twitter</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="mailto:ishant@example.com" className="hover:opacity-100 transition-opacity">ishant@example.com</a></li>
                <li><span>San Francisco, CA</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            <p>© 2024 Ishant. All rights reserved.</p>
            <p className="mt-2">Designed & built by Ishant</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
