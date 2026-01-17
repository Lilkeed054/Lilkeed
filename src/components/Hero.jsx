import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import myPhoto from "../assets/NLBNE4289.JPG";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const texts = ['Frontend Developer', 'Full Stack Engineer', 'UI/UX Enthusiast', 'Problem Solver'];

  // Typing animation
  useEffect(() => {
    const tick = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setTypedText(isDeleting 
        ? fullText.substring(0, typedText.length - 1)
        : fullText.substring(0, typedText.length + 1)
      );

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const ticker = setTimeout(tick, isDeleting ? 50 : 100);
    return () => clearTimeout(ticker);
  }, [typedText, isDeleting, loopNum]);

  return (
    <section 
      id="home" 
      className="min-vh-100 d-flex align-items-center position-relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Animated Background Elements */}
      <div className="position-absolute w-100 h-100" style={{ zIndex: 0 }}>
        <div 
          className="position-absolute rounded-circle bg-primary bg-opacity-10"
          style={{
            width: '600px',
            height: '600px',
            top: '-10%',
            right: '-10%',
            animation: 'spin 40s linear infinite'
          }}
        ></div>
        <div 
          className="position-absolute rounded-circle bg-danger bg-opacity-10"
          style={{
            width: '400px',
            height: '400px',
            bottom: '-5%',
            left: '-5%',
            animation: 'spin 30s linear infinite reverse'
          }}
        ></div>
      </div>

      <Container className="position-relative z-3 py-5">
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            {/* Welcome Text */}
            <div className="mb-3">
              <Badge bg="primary" className="px-3 py-2 fs-6 mb-4 animate__animated animate__fadeInLeft">
                <i className="fas fa-hand-wave me-2"></i>
                Hello, I'm
              </Badge>
            </div>

            {/* Name with Bootstrap Typography */}
            <h1 className="display-1 fw-bold mb-4 animate__animated animate__fadeInUp">
              <span className="text-primary">Taonashe</span>{' '}
              <span className="text-dark">Sirari</span>
            </h1>

            {/* Typing Animation */}
            <div className="mb-4">
              <div className="d-flex align-items-center">
                <div className="me-3 text-primary animate__animated animate__pulse animate__infinite">
                  <i className="fas fa-code fa-2x"></i>
                </div>
                <h2 className="h1 text-dark mb-0 fw-normal" style={{ minHeight: '60px' }}>
                  <span className="text-primary fw-bold">{typedText}</span>
                  <span className="text-primary ms-1">|</span>
                </h2>
              </div>
            </div>

            {/* Introduction */}
            <p className="lead text-muted mb-4 animate__animated animate__fadeInUp animate__delay-1s">
              I create <strong className="text-primary">modern websites and web applications</strong> with clean code and 
              intuitive user interfaces. Passionate about building solutions that make a difference.
            </p>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap gap-3 mb-5">
              <Button 
                variant="primary" 
                size="lg"
                className="px-4 py-3 fw-bold animate__animated animate__pulse animate__delay-2s"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <i className="fas fa-paper-plane me-2"></i>
                Get in Touch
              </Button>
              
              <Button 
                variant="outline-primary" 
                size="lg"
                className="px-4 py-3 fw-bold animate__animated animate__fadeInRight animate__delay-2s"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <i className="fas fa-briefcase me-2"></i>
                View Projects
              </Button>
            </div>

            {/* Highlights */}
            <Row className="g-3 mt-4 animate__animated animate__fadeInUp animate__delay-3s">
              <Col md={4}>
                <div className="bg-white p-3 rounded-3 shadow-sm h-100">
                  <div className="text-primary mb-2">
                    <i className="fas fa-graduation-cap fa-lg"></i>
                  </div>
                  <h6 className="fw-bold mb-1">Trained @Zomac</h6>
                  <p className="small text-muted mb-0">Professional Training</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="bg-white p-3 rounded-3 shadow-sm h-100">
                  <div className="text-warning mb-2">
                    <i className="fas fa-bolt fa-lg"></i>
                  </div>
                  <h6 className="fw-bold mb-1">Quick Learner</h6>
                  <p className="small text-muted mb-0">Adaptable & Fast</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="bg-white p-3 rounded-3 shadow-sm h-100">
                  <div className="text-success mb-2">
                    <i className="fas fa-check-circle fa-lg"></i>
                  </div>
                  <h6 className="fw-bold mb-1">Available Now</h6>
                  <p className="small text-muted mb-0">Ready to contribute</p>
                </div>
              </Col>
            </Row>
          </Col>
          
          {/* Profile Image */}
          <Col lg={6} className="text-center">
            <div className="position-relative d-inline-block mb-4">
              {/* Image Container */}
              <div className="position-relative animate__animated animate__pulse animate__slow animate__infinite">
                <div className="rounded-circle overflow-hidden shadow-lg" 
                     style={{ 
                       width: '350px', 
                       height: '350px',
                       border: '8px solid white'
                     }}>
                  <img 
                    src={myPhoto}
                    alt="Taonashe Sirari"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                
                {/* Floating Badges */}
                <Badge bg="primary" className="position-absolute top-0 start-0 translate-middle animate__animated animate__bounce animate__delay-1s">
                  <i className="fas fa-react me-1"></i> React
                </Badge>
                <Badge bg="danger" className="position-absolute top-0 end-0 translate-middle animate__animated animate__bounce animate__delay-2s">
                  <i className="fas fa-palette me-1"></i> UI/UX
                </Badge>
                <Badge bg="success" className="position-absolute bottom-0 start-50 translate-middle animate__animated animate__bounce animate__delay-3s">
                  <i className="fas fa-layer-group me-1"></i> Full Stack
                </Badge>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-5">
              <h5 className="fw-bold mb-4">
                <i className="fas fa-cogs text-primary me-2"></i>
                Tech Stack
              </h5>
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {['React', 'JavaScript', 'Node.js', 'Python', 'Bootstrap', 'Git','laravel','PHP'].map((tech, index) => (
                  <Badge 
                    key={tech}
                    bg="light" 
                    text="dark"
                    className="px-3 py-2 fs-6 border animate__animated animate__fadeInUp"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <i className={`fab fa-${tech.toLowerCase()} me-2`}></i>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Currently Learning */}
            <div className="mt-4 pt-4 border-top">
              <h6 className="fw-bold mb-3">
                <i className="fas fa-rocket text-primary me-2"></i>
                Currently Exploring
              </h6>
              <div className="d-flex gap-2 justify-content-center">
                {['TypeScript', ].map((tech, index) => (
                  <Badge 
                    key={tech}
                    bg="info" 
                    className="px-3 py-2 animate__animated animate__pulse animate__infinite"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {/* Scroll Indicator */}
        <div className="text-center mt-5 pt-3">
          <div className="d-flex flex-column align-items-center">
            <small className="text-muted mb-2">Scroll to explore</small>
            <div className="animate__animated animate__bounce animate__infinite">
              <i className="fas fa-chevron-down text-primary fa-lg"></i>
            </div>
          </div>
        </div>
      </Container>

      {/* Social Links */}
      <div className="position-fixed bottom-0 end-0 mb-4 me-4 d-none d-lg-block z-3">
        <div className="d-flex flex-column gap-2">
          {[
            { icon: 'fa-github', color: 'dark', href: 'https://github.com/lilkeed' },
            { icon: 'fa-linkedin', color: 'primary', href: 'https://Linkedin/siraritaonshe' },
            { icon: 'fa-instagram', color: 'info', href: 'https://www.instagram.com/lil_keed1' },
            { icon: 'fa-envelope', color: 'danger', href: 'mailto:siraritaonashe@gmail.com' },
          ].map((social, index) => (
            <a 
              key={index}
              href={social.href}
              className={`btn btn-${social.color} rounded-circle d-flex align-items-center justify-content-center`}
              style={{ width: '45px', height: '45px' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fab ${social.icon}`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes typing {
          0% { width: 0; }
          100% { width: 100%; }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .cursor {
          animation: blink 1s infinite;
        }
      `}</style>

      {/* Animate.css CDN for animations */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </section>
  );
};

export default Hero;