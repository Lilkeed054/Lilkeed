import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';

const Footer = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    setIsVisible(true);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
    setShowNewsletter(false);
  };

  const navigationLinks = [
    { name: 'Home', icon: 'fa-home' },
    { name: 'About', icon: 'fa-user' },
    { name: 'Skills', icon: 'fa-tools' },
    { name: 'Projects', icon: 'fa-code-branch' },
    { name: 'Contact', icon: 'fa-envelope' },
  ];

  const socialLinks = [
    { platform: 'GitHub', icon: 'fa-github', link: 'https:/github.com/lilkeed', color: '#333' },
    { platform: 'LinkedIn', icon: 'fa-linkedin', link: 'https:/Linkedin/siraritaonshe', color: '#0077B5' },
    { platform: 'instagram', icon: 'fa-instagram', link: 'https:/www.instagram.com/lil_keed1', color: '#1DA1F2' },
    { platform: 'Facebook', icon: 'fa-facebook', link: 'https:/facebook.com/Taonashe Sirari', color: '#333' },
    { platform: 'Email', icon: 'fa-envelope', link: 'mailto:siraritaonashe@gmail.com', color: '#EA4335' },
    
  ];

  const quickLinks = [
    { name: 'Privacy Policy', link: '#' },
    { name: 'Terms of Service', link: '#' },
    { name: 'Cookie Policy', link: '#' },
  ];

  return (
    <footer className="position-relative overflow-hidden bg-white">
      {/* Background Elements - Lighter version */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
        <div 
          className="position-absolute"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(13, 110, 253, 0.03) 0%, transparent 70%)',
            top: '-200px',
            right: '-100px',
          }}
        ></div>
        <div 
          className="position-absolute"
          style={{
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.02) 0%, transparent 70%)',
            bottom: '-100px',
            left: '-50px',
          }}
        ></div>
      </div>

      {/* Main Footer */}
      <div className="py-5 position-relative" style={{ zIndex: 1 }}>
        <Container>
          <Row className="g-4 mb-5">
            {/* Brand Column */}
            <Col lg={4} md={6}>
              <div className={`${isVisible ? 'animate__animated animate__fadeInLeft' : ''}`}>
                <div className="d-flex align-items-center mb-4">
                  <div 
                    className="bg-gradient-primary me-3 rounded-3 p-2"
                    style={{
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <span className="fw-bold fs-4 text-white">TS</span>
                  </div>
                  <div>
                    <h4 className="h3 fw-bold mb-1 text-dark">Taonashe Sirari</h4>
                    <p className="text-muted mb-0">Full Stack Developer</p>
                  </div>
                </div>
                <p className="text-muted mb-4">
                  Crafting exceptional digital experiences through clean code, innovative design, 
                  and a passion for creating solutions that make a difference.
                </p>
                
                {/* Social Links */}
                <div className="d-flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="social-icon d-flex align-items-center justify-content-center"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.platform}
                      style={{ 
                        '--social-color': social.color,
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                        color: '#333'
                      }}
                    >
                      <i className={`fab ${social.icon} fa-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </Col>

            {/* Quick Links */}
            <Col lg={2} md={6}>
              <div className={`${isVisible ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: '0.1s' }}>
                <h5 className="h4 fw-bold mb-4 text-dark">Navigation</h5>
                <ul className="list-unstyled footer-links">
                  {navigationLinks.map((item, index) => (
                    <li key={index} className="mb-3">
                      <a 
                        href={`#${item.name.toLowerCase()}`}
                        className="d-flex align-items-center text-dark text-decoration-none hover-link"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(item.name.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <i className={`fas ${item.icon} me-2 fa-sm text-primary`}></i>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            {/* Contact Info */}
            <Col lg={3} md={6}>
              <div className={`${isVisible ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: '0.2s' }}>
                <h5 className="h4 fw-bold mb-4 text-dark">Get In Touch</h5>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex align-items-start">
                    <div className="contact-icon me-3">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <span className="d-block text-muted small">Email</span>
                      <a href="mailto:siraritaonashe@gmail.com" className="text-dark text-decoration-none">
                        siraritaonashe@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <div className="contact-icon me-3">
                      <i className="fas fa-map-marker-alt text-primary"></i>
                    </div>
                    <div>
                      <span className="d-block text-muted small">Location</span>
                      <span className="text-dark">Gweru, Zimbabwe</span>
                    </div>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <div className="contact-icon me-3">
                      <i className="fas fa-phone text-primary"></i>
                    </div>
                    <div>
                      <span className="d-block text-muted small">Phone</span>
                      <a href="tel:+263715113134" className="text-dark text-decoration-none">
                        +263 71 511 3134
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>

            {/* Newsletter & CTA */}
            <Col lg={3} md={6}>
              <div className={`${isVisible ? 'animate__animated animate__fadeInRight' : ''}`} style={{ animationDelay: '0.3s' }}>
                <div className="cta-card p-4 rounded-3 position-relative overflow-hidden border">
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-10"></div>
                  <div className="position-relative">
                    <h5 className="h4 fw-bold mb-3 text-white">Ready to Collaborate?</h5>
                    <p className="text-white mb-white">
                      Have a project in mind? Let's work together to bring your vision to life.
                    </p>
                    <Button 
                      variant="primary"
                      size="lg"
                      className="w-100 fw-bold hover-lift"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      style={{
                        background: 'linear-gradient(135deg, #0d6efd, #6f42c1)',
                        border: 'none'
                      }}
                    >
                      <i className="fas fa-paper-plane me-2"></i>
                      Start a Project
                    </Button>
                    <div className="text-center mt-3">
                      <button 
                        className="btn btn-link text-dark text-decoration-none"
                        onClick={() => setShowNewsletter(true)}
                      >
                        <i className="fas fa-bell me-1 text-primary"></i>
                        Subscribe to Updates
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          {/* Divider */}
          <div className="border-top my-4"></div>

          {/* Bottom Footer */}
          <Row className="align-items-center py-3">
            <Col md={6} className="mb-3 mb-md-0">
              <p className="text-muted mb-0 small">
                © {new Date().getFullYear()} <span className="text-primary fw-bold">Taonashe Sirari</span>. All rights reserved.
                Crafted with <i className="fas fa-heart text-danger mx-1"></i> and lots of ☕
              </p>
            </Col>
            
            <Col md={6}>
              <div className="d-flex flex-wrap align-items-center justify-content-md-end gap-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    className="text-muted text-decoration-none small hover-link"
                  >
                    {link.name}
                  </a>
                ))}
                <button 
                  className="btn btn-outline-dark btn-sm px-3 d-flex align-items-center"
                  onClick={scrollToTop}
                >
                  <i className="fas fa-arrow-up me-2"></i>
                  Back to Top
                </button>
              </div>
            </Col>
          </Row>

          {/* Stats Counter */}
          <div className="mt-4 pt-4 border-top">
            <Row className="text-center g-3">
              {[
                { label: 'Projects Completed', value: '5+' },
                { label: 'Code Commits', value: '500+' },
                { label: 'Hours Coding', value: '1000+' },
                { label: 'Cups of Coffee', value: '∞' },
              ].map((stat, index) => (
                <Col key={index} xs={6} md={3}>
                  <div className="stat-item">
                    <div className="display-6 fw-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-muted small">{stat.label}</div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          className="scroll-top-btn position-fixed bottom-4 end-4 btn btn-primary rounded-circle shadow-lg hover-lift"
          onClick={scrollToTop}
          style={{
            width: '50px',
            height: '50px',
            zIndex: 1000,
            animation: 'bounce 2s infinite'
          }}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}

      {/* Enhanced Newsletter Modal */}
      <Modal
        show={showNewsletter}
        onHide={() => setShowNewsletter(false)}
        centered
        size="md"
        className="newsletter-modal"
      >
        <Modal.Header className="border-0 pb-0 position-relative">
          <button
            type="button"
            className="btn-close position-absolute end-3 top-3"
            onClick={() => setShowNewsletter(false)}
            aria-label="Close"
          ></button>
          <Modal.Title className="w-100 text-center">
            <div className="modal-icon mx-auto mb-3">
              <i className="fas fa-paper-plane fa-2x text-primary"></i>
            </div>
            <h4 className="h3 fw-bold mb-2">Stay in the Loop</h4>
            <p className="text-muted small mb-0">
              Get exclusive updates on new projects, tech insights, and development tips
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-4">
          <Form onSubmit={handleNewsletterSubmit}>
            <Form.Group className="mb-4">
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0">
                  <i className="fas fa-envelope text-muted"></i>
                </span>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="py-3 border-start-0"
                  required
                />
              </div>
            </Form.Group>
            <Button 
              type="submit"
              variant="primary"
              size="lg"
              className="w-100 fw-bold py-3 hover-lift"
              style={{
                background: 'linear-gradient(135deg, #0d6efd, #6f42c1)',
                border: 'none'
              }}
            >
              <i className="fas fa-paper-plane me-2"></i>
              Subscribe Now
            </Button>
          </Form>
          <div className="text-center mt-4">
            <p className="text-muted small mb-0">
              <i className="fas fa-lock me-1"></i>
              Your email is safe with us. No spam, ever.
            </p>
          </div>
        </Modal.Body>
      </Modal>

      {/* Custom Styles */}
      <style>{`
        .bg-gradient-primary {
          background: linear-gradient(135deg, #0d6efd 0%, #6f42c1 100%);
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          color: #333;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.05);
        }

        .social-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--social-color);
          transform: translateY(100%);
          transition: transform 0.3s ease;
          z-index: 0;
        }

        .social-icon:hover::before {
          transform: translateY(0);
        }

        .social-icon i {
          position: relative;
          z-index: 1;
          transition: color 0.3s ease;
        }

        .social-icon:hover i {
          color: white !important;
        }

        .social-icon:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .contact-icon {
          width: 36px;
          height: 36px;
          background: rgba(13, 110, 253, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cta-card {
          background: rgba(13, 110, 253, 0.03);
          border: 1px solid rgba(13, 110, 253, 0.1);
        }

        .footer-links a {
          transition: all 0.3s ease;
          padding: 4px 0;
          color: #333 !important;
        }

        .footer-links a:hover {
          color: #0d6efd !important;
          transform: translateX(5px);
        }

        .hover-link {
          transition: all 0.3s ease;
          color: #333 !important;
        }

        .hover-link:hover {
          color: #0d6efd !important;
          transform: translateY(-2px);
        }

        .hover-lift {
          transition: all 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        .scroll-top-btn {
          animation: bounce 2s infinite;
        }

        .modal-icon {
          width: 70px;
          height: 70px;
          background: rgba(13, 110, 253, 0.1);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-item {
          padding: 15px;
          background: rgba(13, 110, 253, 0.05);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          background: rgba(13, 110, 253, 0.1);
          transform: translateY(-5px);
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
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

        .animate__fadeInLeft {
          animation-name: fadeInLeft;
        }

        .animate__fadeInRight {
          animation-name: fadeInRight;
        }

        .animate__fadeInUp {
          animation-name: fadeInUp;
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .newsletter-modal .modal-content {
          border-radius: 20px;
          overflow: hidden;
          border: none;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }

        .newsletter-modal .modal-header {
          padding: 40px 30px 20px;
        }

        .newsletter-modal .modal-body {
          padding: 0 30px 40px;
        }

        .input-group-text {
          border-radius: 12px 0 0 12px !important;
        }

        .form-control {
          border-radius: 0 12px 12px 0 !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;