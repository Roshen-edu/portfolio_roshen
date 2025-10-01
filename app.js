const { useState, useEffect, useRef } = React;

// Data from the application_data_json
const portfolioData = {
  personalInfo: {
    name: "Roshen",
    fullName: "Roshen Reji",
    tagline: "Computer Science Student & Aspiring Space-Tech Innovator",
    description: "Passionate about software development and space technology, with a vision of working in or building for the space-tech industry. Currently exploring freelancing, personal development, and productivity tools.",
    location: "Kottayam, Kerala, India",
    education: "College of Engineering Kidangoor - Computer Science"
  },
  skills: {
    programming: [
      {"name": "Python", "level": 75},
      {"name": "JavaScript", "level": 70},
      {"name": "C++", "level": 65},
      {"name": "HTML/CSS", "level": 80},
      {"name": "React", "level": 60}
    ],
    hardware: [
      {"name": "Arduino", "level": 70},
      {"name": "ESP32", "level": 65},
      {"name": "IoT Development", "level": 60},
      {"name": "Circuit Design", "level": 55}
    ],
    tools: [
      {"name": "Git/GitHub", "level": 70},
      {"name": "Wokwi Simulator", "level": 80},
      {"name": "VS Code", "level": 85},
      {"name": "Discord", "level": 90}
    ],
    other: [
      {"name": "Audio Engineering", "level": 75},
      {"name": "Problem Solving", "level": 85},
      {"name": "Research", "level": 80},
      {"name": "Self-Learning", "level": 90}
    ]
  },
  certificates: [
    {
      "title": "CS50 Introduction to Computer Science",
      "issuer": "Harvard University",
      "date": "2025",
      "status": "In Progress"
    },
    {
      "title": "Arduino Programming Fundamentals",
      "issuer": "Online Learning Platform",
      "date": "2025",
      "status": "Completed"
    },
    {
      "title": "Web Development Basics",
      "issuer": "SkillsBuild",
      "date": "2025",
      "status": "Completed"
    },
    {
      "title": "ESP32 IoT Development",
      "issuer": "Technical Certification",
      "date": "2025",
      "status": "In Progress"
    }
  ],
  achievements: [
    {
      "title": "Water Level Indicator Project",
      "description": "Developed a comprehensive water level monitoring system using ESP32 with buzzer, display, LEDs, and bargraph components",
      "date": "September 2025",
      "category": "Project"
    },
    {
      "title": "Audio Optimization Expertise",
      "description": "Mastered advanced EQ techniques for OnePlus Buds Pro 3, achieving professional-level audio performance",
      "date": "July 2025",
      "category": "Technical Achievement"
    },
    {
      "title": "Started CS Journey",
      "description": "Successfully enrolled at College of Engineering Kidangoor for Computer Science program",
      "date": "July 2025",
      "category": "Academic"
    },
    {
      "title": "Active Learning Community Participation",
      "description": "Actively engaged in Discord CS communities and online learning platforms for continuous skill development",
      "date": "2025",
      "category": "Community"
    }
  ],
  contact: {
    email: "roshen.reji@example.com",
    location: "Kottayam, Kerala, India",
    availability: "Available for internships and freelance projects",
    interests: ["Space Technology", "Software Development", "Electronics", "Audio Engineering"]
  }
};

// Header Component
const Header = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <a href="#home" className="nav__logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          {portfolioData.personalInfo.name}
        </a>
        <button 
          className="nav__mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
        <ul className={`nav__menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <a 
              href="#home" 
              className={`nav__link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className={`nav__link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#certificates" 
              className={`nav__link ${activeSection === 'certificates' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('certificates'); }}
            >
              Certificates
            </a>
          </li>
          <li>
            <a 
              href="#achievements" 
              className={`nav__link ${activeSection === 'achievements' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('achievements'); }}
            >
              Achievements
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`nav__link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <h1 className="hero__name animate-fade-in-up">
          {portfolioData.personalInfo.name}
        </h1>
        <h2 className="hero__tagline animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {portfolioData.personalInfo.tagline}
        </h2>
        <p className="hero__description animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {portfolioData.personalInfo.description}
        </p>
        <div className="hero__cta animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button 
            className="btn btn--primary btn--lg"
            onClick={() => scrollToSection('skills')}
          >
            View My Work
          </button>
          <button 
            className="btn btn--outline btn--lg"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

// Enhanced Skills Section Component
const SkillsSection = () => {
  const skillsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Delay animation to ensure DOM is ready
          setTimeout(() => {
            animateSkillsSection();
          }, 100);
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateSkillsSection = () => {
    const categories = document.querySelectorAll('.skills__category');
    
    // Animate categories with staggered delays
    categories.forEach((category, categoryIndex) => {
      setTimeout(() => {
        category.classList.add('animate-in');
        
        // Animate individual skills within each category
        const skillItems = category.querySelectorAll('.skill-item');
        const progressBars = category.querySelectorAll('.skill__progress');
        
        skillItems.forEach((skill, skillIndex) => {
          setTimeout(() => {
            skill.classList.add('animate-in');
          }, skillIndex * 150);
        });

        // Animate progress bars after skills appear
        setTimeout(() => {
          progressBars.forEach((bar, barIndex) => {
            const level = bar.getAttribute('data-level');
            setTimeout(() => {
              bar.style.setProperty('--target-width', `${level}%`);
              bar.style.width = `${level}%`;
              bar.classList.add('animate-shimmer');
            }, barIndex * 100);
          });
        }, skillItems.length * 150 + 300);
        
      }, categoryIndex * 200);
    });
  };

  const SkillCategory = ({ title, skills, categoryKey }) => (
    <div className="skills__category" data-category={categoryKey}>
      <h3 className="skills__category-title">{title}</h3>
      {skills.map((skill, index) => (
        <div key={`${categoryKey}-${index}`} className="skill-item">
          <div className="skill__header">
            <span className="skill__name">{skill.name}</span>
            <span className="skill__level">{skill.level}%</span>
          </div>
          <div className="skill__bar">
            <div 
              className="skill__progress" 
              data-level={skill.level}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="section">
        <h2 className="section__title">Skills & Technologies</h2>
        <div className="skills__grid">
          <SkillCategory 
            title="Programming Languages" 
            skills={portfolioData.skills.programming}
            categoryKey="programming"
          />
          <SkillCategory 
            title="Hardware & IoT" 
            skills={portfolioData.skills.hardware}
            categoryKey="hardware"
          />
          <SkillCategory 
            title="Tools & Platforms" 
            skills={portfolioData.skills.tools}
            categoryKey="tools"
          />
          <SkillCategory 
            title="Other Skills" 
            skills={portfolioData.skills.other}
            categoryKey="other"
          />
        </div>
      </div>
    </section>
  );
};

// Certificates Section Component
const CertificatesSection = () => {
  const certificatesRef = useRef(null);
  const [certificatesVisible, setCertificatesVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCertificatesVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (certificatesRef.current) {
      observer.observe(certificatesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="certificates" className="section" ref={certificatesRef}>
      <h2 className="section__title">Certificates</h2>
      <div className="certificates__grid">
        {portfolioData.certificates.map((cert, index) => (
          <div 
            key={index}
            className={`certificate-card fade-in-element ${certificatesVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <h3 className="certificate__title">{cert.title}</h3>
            <p className="certificate__issuer">{cert.issuer}</p>
            <p className="certificate__date">{cert.date}</p>
            <span className={`certificate__status certificate__status--${cert.status === 'Completed' ? 'completed' : 'progress'}`}>
              {cert.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

// Achievements Section Component
const AchievementsSection = () => {
  const achievementsRef = useRef(null);
  const [achievementsVisible, setAchievementsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAchievementsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="section achievements" ref={achievementsRef}>
      <h2 className="section__title">Achievements</h2>
      <div className="achievements__timeline">
        {portfolioData.achievements.map((achievement, index) => (
          <div 
            key={index}
            className={`achievement-item slide-in-left ${achievementsVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="achievement__card">
              <h3 className="achievement__title">{achievement.title}</h3>
              <p className="achievement__description">{achievement.description}</p>
              <div className="achievement__meta">
                <span className="achievement__date">{achievement.date}</span>
                <span className="achievement__category">{achievement.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show success message
    setShowSuccessMessage(true);
    // Clear form
    setFormData({ name: '', email: '', subject: '', message: '' });
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  const contactRef = useRef(null);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setContactVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="section" ref={contactRef}>
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container">
        <div className={`contact__info slide-in-left ${contactVisible ? 'visible' : ''}`}>
          <h3 className="contact__info-title">Let's Work Together</h3>
          <p className="contact__info-text">
            I'm always interested in hearing about new opportunities, especially in space technology and software development.
          </p>
          <div className="contact__details">
            <div className="contact__detail">
              <span className="contact__detail-icon">📧</span>
              <span>{portfolioData.contact.email}</span>
            </div>
            <div className="contact__detail">
              <span className="contact__detail-icon">📍</span>
              <span>{portfolioData.contact.location}</span>
            </div>
            <div className="contact__detail">
              <span className="contact__detail-icon">💼</span>
              <span>{portfolioData.contact.availability}</span>
            </div>
          </div>
          <div className="contact__interests">
            <h4 style={{ color: 'var(--color-text)', marginBottom: 'var(--space-12)' }}>Interests</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-8)' }}>
              {portfolioData.contact.interests.map((interest, index) => (
                <span 
                  key={index}
                  className="status status--info"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
        <form 
          className={`contact__form slide-in-right ${contactVisible ? 'visible' : ''}`}
          onSubmit={handleSubmit}
        >
          <h3 className="contact__form-title">Send a Message</h3>
          
          {showSuccessMessage && (
            <div style={{
              background: 'rgba(var(--color-success-rgb), 0.1)',
              color: 'var(--color-success)',
              padding: 'var(--space-12) var(--space-16)',
              borderRadius: 'var(--radius-base)',
              marginBottom: 'var(--space-16)',
              border: '1px solid rgba(var(--color-success-rgb), 0.2)',
              textAlign: 'center',
              fontWeight: 'var(--font-weight-medium)'
            }}>
              ✅ Thank you for your message! I will get back to you soon.
            </div>
          )}
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="form-control"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn--primary btn--full-width">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => (
  <footer className="footer">
    <p>&copy; 2025 {portfolioData.personalInfo.fullName}. All rights reserved.</p>
  </footer>
);

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'skills', 'certificates', 'achievements', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px'
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    React.createElement('div', { className: 'App' },
      React.createElement(Header, { activeSection: activeSection }),
      React.createElement('main', null,
        React.createElement(HeroSection, null),
        React.createElement(SkillsSection, null),
        React.createElement(CertificatesSection, null),
        React.createElement(AchievementsSection, null),
        React.createElement(ContactSection, null)
      ),
      React.createElement(Footer, null)
    )
  );
};

// Render the app
ReactDOM.render(React.createElement(App), document.getElementById('root'));