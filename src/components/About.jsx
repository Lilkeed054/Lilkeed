import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Card, ProgressBar, Badge, Button } from 'react-bootstrap';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const personalInfo = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'Education',
      items: ['Zomac Digital Academy', 'Full Stack Development'],
      color: 'primary'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      items: ['Gweru, Zimbabwe', 'Remote Work Ready'],
      color: 'success'
    },
    {
      icon: 'fas fa-bullseye',
      title: 'Focus',
      items: ['Web Applications', 'Modern Frameworks','Websites'],
      color: 'warning'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Status',
      items: ['Open to Opportunities', 'Available Now'],
      color: 'danger'
    }
  ];

  const skills = [
    { name: 'React.js', level: 95, color: '#61DAFB' },
    { name: 'JavaScript', level: 90, color: '#F7DF1E' },
    { name: 'HTML/CSS', level: 95, color: '#E34F26' },
    { name: 'Node.js', level: 80, color: '#339933' },
    { name: 'Python', level: 75, color: '#3776AB' },
    { name: 'UI/UX', level: 85, color: '#FF6B6B' },
  ];

  const tabs = [
    { id: 'story', label: 'My Story', icon: '📖' },
    { id: 'skills', label: 'My Skills', icon: '💻' },
    { id: 'mission', label: 'My Mission', icon: '🎯' },
  ];

  const tabContent = {
    story: (
      <div className="tab-content">
        <h4 className="mb-4 text-primary">From Curiosity to Code</h4>
        <p className="mb-4">
          My journey into software development began with a simple question: "How does this work?" 
          This curiosity evolved into a passion for creating digital solutions that make a difference.
        </p>
        <p className="mb-4">
          After completing my training at <strong>Zomac Digital Academy</strong>, 
          I discovered the power of code to transform ideas into reality. What started as learning syntax 
          became a craft—a way to build intuitive, efficient, and beautiful applications and websites.
        </p>
        <div className="d-flex align-items-center mt-4">
          <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3 me-3">
            <i className="fas fa-map-marker-alt fa-lg"></i>
          </div>
          <div>
            <h6 className="mb-1">Based in Zimbabwe, Working Globally</h6>
            <p className="text-muted mb-0">Bringing world-class solutions to clients everywhere</p>
          </div>
        </div>
      </div>
    ),
    skills: (
      <div className="tab-content">
        <h4 className="mb-4 text-primary">Technical Expertise</h4>
        <p className="mb-4">
          I specialize in modern web technologies with a focus on creating responsive, 
          performant applications and websites that provide exceptional user experiences.
        </p>
        <div className="row">
          {[
            { icon: 'fab fa-react', title: 'Frontend', desc: 'React, JavaScript, CSS' },
            { icon: 'fas fa-server', title: 'Backend', desc: 'Node.js, Python, APIs' },
            { icon: 'fas fa-database', title: 'Database', desc: 'MongoDB, PostgreSQL' },
            { icon: 'fas fa-mobile-alt', title: 'Mobile', desc: 'Responsive Design' },
          ].map((skill, index) => (
            <div key={index} className="col-md-6 mb-3">
              <div className="d-flex align-items-start">
                <div className={`text-${index % 2 === 0 ? 'primary' : 'success'} me-3`}>
                  <i className={`${skill.icon} fa-2x`}></i>
                </div>
                <div>
                  <h6 className="fw-bold">{skill.title}</h6>
                  <p className="text-muted mb-0">{skill.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    mission: (
      <div className="tab-content">
        <h4 className="mb-4 text-primary">Building Tomorrow's Solutions</h4>
        <p className="mb-4">
          My mission is to create technology that <strong>empowers people</strong> and <strong>solves real problems</strong>. 
          I'm committed to building software that not only works perfectly but also makes a positive impact.
        </p>
        <div className="bg-primary bg-opacity-10 p-4 rounded-3 mb-4">
          <div className="d-flex align-items-center">
            <div className="bg-primary text-white rounded-circle p-2 me-3">
              <i className="fas fa-lightbulb fa-lg"></i>
            </div>
            <div>
              <h5 className="text-primary mb-2">Innovation & Excellence</h5>
              <p className="mb-0">
                Every project is an opportunity to push boundaries and deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <section id="about" ref={sectionRef} className="py-5 bg-light">
      <Container>
        {/* Header */}
        <div className={`text-center mb-5 ${isVisible ? 'animate__animated animate__fadeInDown' : ''}`}>
          <Badge bg="primary" className="px-3 py-2 mb-3">
            <i className="fas fa-user me-2"></i>
            About Me
          </Badge>
          <h2 className="display-5 fw-bold mb-3">
            Crafting Digital <span className="text-primary">Experiences</span>
          </h2>
          <p className="lead text-muted mb-0 mx-auto" style={{ maxWidth: '600px' }}>
            Building elegant solutions through code, creativity, and a passion for innovation
          </p>
        </div>

        {/* Stats */}
        <Row className="mb-5 g-4">
          {[
            { value: 5, label: 'Projects', suffix: '+', delay: 0 },
            { value: 100, label: 'Code Quality', suffix: '%', delay: 1 },
            { value: 24, label: 'Learning Hours', suffix: '/week', delay: 2 },
            { value: 5, label: 'Tech Skills', suffix: '+', delay: 3 },
          ].map((stat, index) => (
            <Col md={3} sm={6} key={index}>
              <Card className="border-0 shadow-sm text-center h-100">
                <Card.Body className="p-4">
                  <div className="display-6 fw-bold text-primary mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <p className="text-muted mb-0">{stat.label}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="g-5 mb-5">
          {/* Left Column - Tabs */}
          <Col lg={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                {/* Tabs Navigation */}
                <div className="d-flex border-bottom mb-4">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`btn btn-link text-decoration-none py-2 px-3 ${activeTab === tab.id ? 'text-primary border-bottom border-primary border-2' : 'text-muted'}`}
                      style={{ fontWeight: activeTab === tab.id ? '600' : '400' }}
                    >
                      <span className="me-2">{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="pt-2">
                  {tabContent[activeTab]}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Column - Skills */}
          <Col lg={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-2 p-2 me-3">
                    <i className="fas fa-code fa-lg"></i>
                  </div>
                  <div>
                    <h4 className="h5 fw-bold mb-1">Technical Skills</h4>
                    <p className="text-muted mb-0">Mastering modern web technologies</p>
                  </div>
                </div>

                <div className="skills-container">
                  {skills.map((skill, index) => (
                    <div key={index} className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="fw-medium">{skill.name}</span>
                        <span className="fw-bold text-primary">{skill.level}%</span>
                      </div>
                      <ProgressBar 
                        now={skill.level} 
                        className="rounded-pill" 
                        style={{ height: '8px' }}
                        variant="primary"
                      />
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mt-4 pt-3 border-top">
                  <h6 className="fw-bold mb-3">Currently Exploring</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {[
                      { name: 'TypeScript', color: '' },
                     
                    ].map((tech, index) => (
                      <Badge 
                        key={index}
                        className="px-3 py-2"
                        style={{ 
                          backgroundColor: `${tech.color}20`,
                          color: tech.color,
                          border: `1px solid ${tech.color}40`,
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Personal Info */}
        <Row className="g-3 mb-5">
          {personalInfo.map((info, index) => (
            <Col md={3} sm={6} key={index}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-3">
                  <div className="d-flex align-items-center mb-2">
                    <div className={`bg-${info.color} bg-opacity-10 text-${info.color} rounded-2 p-2 me-3`}>
                      <i className={`${info.icon}`}></i>
                    </div>
                    <h6 className="fw-bold mb-0">{info.title}</h6>
                  </div>
                  <div>
                    {info.items.map((item, i) => (
                      <p key={i} className="small text-muted mb-1">
                        <i className="fas fa-circle text-primary me-1" style={{ fontSize: '6px' }}></i>
                        {item}
                      </p>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Philosophy */}
        <Card className="border-0 shadow-sm bg-primary text-white">
          <Card.Body className="p-5">
            <Row className="align-items-center">
              <Col lg={8}>
                <h3 className="h2 fw-bold mb-3">
                  Building with <span className="text-warning">Purpose</span>
                </h3>
                <p className="lead mb-0">
                  Every line of code I write carries a commitment to excellence, 
                  a focus on user experience, and a drive to create something meaningful.
                </p>
              </Col>
              <Col lg={4} className="text-lg-end mt-4 mt-lg-0">
                <Button 
                  variant="light" 
                  size="lg"
                  className="fw-bold px-4 py-3"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Let's Build Together <i className="fas fa-rocket ms-2"></i>
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>

      {/* Add CSS for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate__animated {
          animation-duration: 1s;
          animation-fill-mode: both;
        }
        
        .animate__fadeInDown {
          animation-name: fadeInDown;
        }
        
        .animate__fadeInUp {
          animation-name: fadeInUp;
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .skill-bar {
          transition: width 1.5s ease-in-out;
        }
        
        .progress-bar {
          transition: width 1.5s ease-in-out;
        }
        
        .progress {
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default About;