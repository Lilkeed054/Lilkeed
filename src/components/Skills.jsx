import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, ProgressBar, Badge } from 'react-bootstrap';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const technicalSkills = {
    frontend: [
      { name: 'React.js', level: 85, icon: 'fa-react', color: '#61DAFB', description: 'Modern component-based UI development' },
      { name: 'JavaScript (ES6+)', level: 90, icon: 'fa-js', color: '#F7DF1E', description: 'Advanced JavaScript features & patterns' },
      { name: 'HTML5/CSS3', level: 95, icon: 'fa-html5', color: '#E34F26', description: 'Semantic markup & modern CSS' },
      { name: 'Bootstrap 5', level: 88, icon: 'fa-bootstrap', color: '#7952B3', description: 'Responsive design framework' },
      
      
    ],
    backend: [
      { name: 'Node.js', level: 80, icon: 'fa-node-js', color: '#339933', description: 'Server-side JavaScript runtime' },
      { name: 'Laravel', level: 78, icon: 'fa-server', color: '#000000', description: 'Web application framework' },
      { name: 'Python', level: 75, icon: 'fa-python', color: '#3776AB', description: 'General-purpose programming' },
      { name: ' APIs', level: 85, icon: 'fa-code-branch', color: '#FF6B6B', description: 'API design & development' },
      { name: 'PHP', level: 70, icon: 'fa-database', color: '#47A248', description: 'Server-side scripting' },
      
    ],
    tools: [
      { name: 'Git/GitHub', level: 90, icon: 'fa-git-alt', color: '#F1502F', description: 'Version control & collaboration' },
      { name: 'VS Code', level: 95, icon: 'fa-code', color: '#007ACC', description: 'Code editor & extensions' },
      { name: 'npm', level: 85, icon: 'fa-box-open', color: '#CB3837', description: 'Package management' },
      { name: 'Insomnia', level: 80, icon: 'fa-cogs', color: '#8DD6F9', description: 'Testing Endpoints' },
      
    ]
  };

  const softSkills = [
    { name: 'Communication', level: 90, icon: 'fa-comments' },
    { name: 'Team Collaboration', level: 92, icon: 'fa-users' },
    { name: 'Problem Solving', level: 88, icon: 'fa-lightbulb' },
    { name: 'Adaptability', level: 94, icon: 'fa-sync-alt' },
    { name: 'Time Management', level: 90, icon: 'fa-clock' },
    { name: 'Attention to Detail', level: 96, icon: 'fa-search' },
  ];

  const learningGoals = [
    { name: 'TypeScript', status: 'In Progress', icon: 'fa-code', color: '#3178C6' },
    { name: 'Next.js', status: 'Learning', icon: 'fa-react', color: '#000000' },
    { name: 'GraphQL', status: 'Planned', icon: 'fa-project-diagram', color: '#E10098' },
    { name: 'AWS Certification', status: 'Future Goal', icon: 'fa-certificate', color: '#FF9900' },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-5 bg-light">
      <Container>
        {/* Header */}
        <div className={`text-center mb-5 ${isVisible ? 'animate__animated animate__fadeInDown' : ''}`}>
          <Badge bg="primary" className="px-3 py-2 mb-3">
            <i className="fas fa-tools me-2"></i>
            Skills & Expertise
          </Badge>
          <h2 className="display-5 fw-bold mb-3">
            Technical <span className="text-gradient">Mastery</span>
          </h2>
          <p className="lead text-muted mb-0 mx-auto" style={{ maxWidth: '700px' }}>
            A comprehensive toolkit of technologies and methodologies to build robust, scalable applications
          </p>
          <div className="mx-auto mt-4" style={{ width: '100px', height: '3px', background: 'linear-gradient(90deg, #0d6efd, #6f42c1)' }}></div>
        </div>

        {/* Technical Skills Tabs */}
        <div className={`mb-5 ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}>
          <Card className="border-0 shadow-lg">
            <Card.Body className="p-4 p-md-5">
              {/* Category Tabs - Enhanced */}
              <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
                {[
                  { id: 'frontend', label: 'Frontend', icon: 'fa-desktop', color: 'primary' },
                  { id: 'backend', label: 'Backend', icon: 'fa-server', color: 'danger' },
                  { id: 'tools', label: 'Tools & DevOps', icon: 'fa-tools', color: 'success' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`btn ${activeTab === tab.id ? 'btn-primary' : 'btn-outline-primary'} btn-lg px-4 py-3 d-flex align-items-center`}
                    style={{
                      transition: 'all 0.3s ease',
                      minWidth: '160px',
                      ...(activeTab === tab.id && {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 20px rgba(13, 110, 253, 0.2)'
                      })
                    }}
                  >
                    <i className={`fas ${tab.icon} me-3 fa-lg`}></i>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Skills Grid */}
              <Row className="g-4">
                {technicalSkills[activeTab].map((skill, index) => (
                  <Col lg={4} md={6} key={index}>
                    <Card 
                      className="border-0 h-100 skill-card"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                      }}
                      style={{
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                      }}
                    >
                      <Card.Body className="p-4">
                        <div className="d-flex align-items-center mb-4">
                          <div 
                            className="rounded-3 p-3 me-3"
                            style={{ 
                              background: `${skill.color}20`,
                              width: '60px',
                              height: '60px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <i className={`fab ${skill.icon} fa-2x`} style={{ color: skill.color }}></i>
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="fw-bold mb-1">{skill.name}</h5>
                            <div className="d-flex align-items-center">
                              <span className="fw-bold" style={{ color: skill.color }}>{skill.level}%</span>
                              <span className="text-muted ms-2 small">Proficiency</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-muted small mb-4">{skill.description}</p>
                        
                        <div className="skill-progress">
                          <div className="d-flex justify-content-between mb-1">
                            <span className="small">Beginner</span>
                            <span className="small">Expert</span>
                          </div>
                          <ProgressBar 
                            now={skill.level} 
                            style={{ 
                              height: '8px',
                              borderRadius: '4px',
                              overflow: 'hidden'
                            }}
                          >
                            <ProgressBar 
                              variant="custom"
                              now={skill.level}
                              style={{ 
                                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                                transition: 'width 1.5s ease-in-out'
                              }}
                            />
                          </ProgressBar>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </div>

        {/* Soft Skills & Professional Skills */}
        <Row className="g-4 mb-5">
          <Col lg={6}>
            <Card className="border-0 shadow-lg h-100">
              <Card.Body className="p-4 p-md-5">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3 me-3">
                    <i className="fas fa-users fa-2x"></i>
                  </div>
                  <div>
                    <h4 className="h3 fw-bold mb-1">Professional Skills</h4>
                    <p className="text-muted mb-0">Essential skills for teamwork and leadership</p>
                  </div>
                </div>

                <div className="soft-skills-container">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="mb-4">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="d-flex align-items-center">
                          <div className="text-primary me-3">
                            <i className={`fas ${skill.icon}`}></i>
                          </div>
                          <span className="fw-medium">{skill.name}</span>
                        </div>
                        <span className="fw-bold text-primary">{skill.level}%</span>
                      </div>
                      <ProgressBar 
                        now={skill.level} 
                        className="rounded-pill"
                        style={{ height: '6px' }}
                        variant="primary"
                      />
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="border-0 shadow-lg h-100">
              <Card.Body className="p-4 p-md-5">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-success bg-opacity-10 text-success rounded-3 p-3 me-3">
                    <i className="fas fa-chart-line fa-2x"></i>
                  </div>
                  <div>
                    <h4 className="h3 fw-bold mb-1">Skill Metrics</h4>
                    <p className="text-muted mb-0">Overview of my technical capabilities</p>
                  </div>
                </div>

                <Row className="text-center g-4">
                  {[
                    { 
                      label: 'Frontend', 
                      count: technicalSkills.frontend.length, 
                      icon: 'fa-desktop', 
                      color: 'primary',
                      description: 'Modern UI technologies'
                    },
                    { 
                      label: 'Backend', 
                      count: technicalSkills.backend.length, 
                      icon: 'fa-server', 
                      color: 'danger',
                      description: 'Server & database skills'
                    },
                    { 
                      label: 'Tools', 
                      count: technicalSkills.tools.length, 
                      icon: 'fa-tools', 
                      color: 'success',
                      description: 'Development tools'
                    },
                    { 
                      label: 'Total Skills', 
                      count: Object.values(technicalSkills).flat().length, 
                      icon: 'fa-star', 
                      color: 'warning',
                      description: 'Combined expertise'
                    },
                  ].map((metric, index) => (
                    <Col md={6} key={index}>
                      <div className="p-4 bg-light rounded-4">
                        <div className={`text-${metric.color} mb-3`} style={{ fontSize: '2rem' }}>
                          <i className={`fas ${metric.icon}`}></i>
                        </div>
                        <h3 className="display-6 fw-bold mb-2">{metric.count}</h3>
                        <h6 className="fw-bold mb-1">{metric.label}</h6>
                        <p className="text-muted small mb-0">{metric.description}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Learning Goals & Future Skills */}
        <Card className="border-0 shadow-lg bg-blue mb-5">
          <Card.Body className="p-4 p-md-5">
            <div className="d-flex align-items-center mb-4">
              <div className="bg-blue text-primary rounded-3 p-3 me-3">
                <i className="fas fa-rocket fa-2x"></i>
              </div>
              <div>
                <h4 className="h3 fw-bold text-dark mb-1">Learning Goals</h4>
                <p className="text-white-75 mb-0">Technologies I'm currently exploring and mastering</p>
              </div>
            </div>

            <Row className="g-4">
              {learningGoals.map((goal, index) => (
                <Col md={3} sm={6} key={index}>
                  <div className="text-center p-4 bg-white bg-opacity-10 rounded-4 h-100">
                    <div className="mb-3">
                      <i className={`fas ${goal.icon} fa-2x`} style={{ color: goal.color }}></i>
                    </div>
                    <h5 className="text-dark fw-bold mb-2">{goal.name}</h5>
                    <Badge 
                      bg="light" 
                      text="dark"
                      className="px-3 py-1"
                    >
                      {goal.status}
                    </Badge>
                  </div>
                </Col>
              ))}
            </Row>

            {/* Additional Technologies */}
            <div className="mt-5 pt-4 border-top border-white border-opacity-25">
              
              <div className="d-flex flex-wrap gap-2">
                {[
                   
                ].map((tech, index) => (
                  <Badge 
                    key={index}
                    bg="light" 
                    text="dark"
                    className="px-3 py-2"
                    style={{ 
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
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
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card.Body>
        </Card>

        {/* Philosophy */}
        <div className="text-center p-5 bg-white rounded-4 shadow-sm">
          <div className="display-1 text-primary mb-4">
            <i className="fas fa-bullseye"></i>
          </div>
          <h3 className="h2 fw-bold mb-3">
            Always <span className="text-gradient">Learning</span>
          </h3>
          <p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: '600px' }}>
            Technology evolves rapidly, and I'm committed to continuous learning and growth. 
            Each new skill mastered opens doors to building better, more innovative solutions.
          </p>
          <button 
            className="btn btn-primary btn-lg px-4 py-3 fw-bold"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'linear-gradient(135deg, #0d6efd, #6f42c1)',
              border: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(13, 110, 253, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            View My Projects <i className="fas fa-arrow-right ms-2"></i>
          </button>
        </div>
      </Container>

      {/* Custom CSS */}
      <style>{`
        .text-gradient {
          background: linear-gradient(135deg, #0d6efd, #6f42c1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .bg-gradient {
          background: linear-gradient(135deg, #0d6efd 0%, #6f42c1 100%);
          color: white;
        }
        
        .skill-card:hover .skill-progress .progress-bar {
          animation: progressFill 1.5s ease-out;
        }
        
        @keyframes progressFill {
          0% { width: 0; }
          100% { width: var(--progress-width); }
        }
        
        .progress-bar {
          --progress-width: 0;
          transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Custom progress bar colors */
        .progress-bar.bg-custom {
          background: linear-gradient(90deg, var(--bs-primary), var(--bs-primary-dark));
        }
      `}</style>
    </section>
  );
};

export default Skills;