// Enhanced JavaScript for skills animation with zoom and pop effects

// Intersection Observer for skills animation
function initSkillsAnimation() {
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const skillCategory = entry.target;
        
        // Add animation class with slight delay for staggered effect
        setTimeout(() => {
          skillCategory.classList.add('animate-in');
          
          // Animate skill progress bars
          const progressBars = skillCategory.querySelectorAll('.skill-progress');
          progressBars.forEach((bar, index) => {
            const level = bar.getAttribute('data-level');
            setTimeout(() => {
              bar.style.setProperty('--skill-width', level + '%');
            }, index * 100);
          });
        }, 100);
        
        // Unobserve after animation starts
        skillsObserver.unobserve(skillCategory);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe all skill categories
  const skillCategories = document.querySelectorAll('.skill-category');
  skillCategories.forEach((category, index) => {
    // Set staggered animation delay
    category.style.animationDelay = `${index * 0.1}s`;
    skillsObserver.observe(category);
  });
}

// Enhanced Skills Component with animation triggers
const SkillsSection = () => {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const SkillCategory = ({ title, skills, delay = 0 }) => {
    return (
      <div 
        className={`skill-category ${isVisible ? 'animate-in' : ''}`}
        style={{ 
          animationDelay: `${delay}ms`,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
          opacity: isVisible ? 1 : 0
        }}
      >
        <h3>{title}</h3>
        {skills.map((skill, index) => (
          <div 
            key={skill.name} 
            className="skill-item"
            style={{
              transitionDelay: isVisible ? `${delay + (index * 100)}ms` : '0ms'
            }}
          >
            <div className="skill-name">
              <span>{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress"
                data-level={skill.level}
                style={{
                  '--skill-width': isVisible ? `${skill.level}%` : '0%',
                  transitionDelay: `${delay + (index * 150)}ms`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technical expertise and tools I work with
          </p>
        </div>
        <div className="skills-grid">
          <SkillCategory 
            title="Programming" 
            skills={portfolioData.skills.programming} 
            delay={100}
          />
          <SkillCategory 
            title="Hardware & IoT" 
            skills={portfolioData.skills.hardware} 
            delay={200}
          />
          <SkillCategory 
            title="Tools & Platforms" 
            skills={portfolioData.skills.tools} 
            delay={300}
          />
          <SkillCategory 
            title="Other Skills" 
            skills={portfolioData.skills.other} 
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

// Add hover effects for enhanced interaction
function addSkillHoverEffects() {
  document.addEventListener('DOMContentLoaded', () => {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach((category) => {
      category.addEventListener('mouseenter', () => {
        category.style.transform = 'translateY(-5px) scale(1.02)';
        category.style.boxShadow = '0 8px 30px rgba(20, 184, 166, 0.15)';
      });
      
      category.addEventListener('mouseleave', () => {
        category.style.transform = 'translateY(0) scale(1)';
        category.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
      });
    });
  });
}

// Initialize all animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initSkillsAnimation();
  addSkillHoverEffects();
});