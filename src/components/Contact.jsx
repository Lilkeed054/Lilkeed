import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, Modal } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const contactInfo = [
    {
      icon: 'fa-envelope',
      title: 'Email',
      info: 'siraritaonashe@gmail.com',
      link: 'mailto:siraritaonashe@gmail.com'
    },
    {
      icon: 'fa-phone',
      title: 'Phone',
      info: '+263715113134',
      link: 'tel:+263715113134'
    },
    {
      icon: 'fa-map-marker-alt',
      title: 'Location',
      info: 'Gweru, Zimbabwe',
      link: '#'
    },
    {
      icon: 'fa-clock',
      title: 'Response Time',
      info: 'Within 24 hours',
      link: '#'
    }
  ];

  const socialLinks = [
    { platform: 'GitHub', icon: 'fa-github', link: 'https:/github.com/lilkeed', color: '#333' },
    { platform: 'LinkedIn', icon: 'fa-linkedin', link: 'https:/Linkedin/siraritaonshe', color: '#0077B5' },
    { platform: 'instagram', icon: 'fa-instagram', link: 'https:/www.instagram.com/lil_keed1', color: '#1DA1F2' },
    { platform: 'Facebook', icon: 'fa-facebook', link: 'https:/facebook.com/Taonashe Sirari', color: '#333' },
    { platform: 'Email', icon: 'fa-envelope', link: 'mailto:siraritaonashe@gmail.com', color: '#EA4335' },
    
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setLoading(false);
    setSubmitted(true);
    setShowSuccessModal(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-5">
      <Container>
        {/* Header */}
        <Row className="mb-5">
          <Col xs={12} className="text-center">
            <h2 className="display-5 fw-bold mb-3">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-muted lead">
              Have a project in mind? Let's discuss how we can work together.
            </p>
            <div className="mx-auto mb-4" style={{ width: '100px', height: '2px', backgroundColor: '#0d6efd' }}></div>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Contact Information */}
          <Col lg={4}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <h5 className="text-dark mb-4">
                  <i className="fas fa-info-circle text-primary me-2"></i>
                  Contact Information
                </h5>
                
                <p className="text-muted mb-4">
                  Feel free to reach out for collaborations, opportunities, or just to say hello.
                </p>
                
                {/* Contact Cards */}
                <div className="mb-4">
                  {contactInfo.map((item, index) => (
                    <div 
                      key={index}
                      className="d-flex align-items-start mb-3"
                      onClick={() => window.open(item.link, '_blank')}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="bg-primary bg-opacity-10 text-primary rounded-2 p-2 me-3">
                        <i className={`fas ${item.icon}`}></i>
                      </div>
                      <div>
                        <h6 className="text-dark mb-1">{item.title}</h6>
                        <p className="text-muted mb-0">{item.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Social Links */}
                <div className="mt-4">
                  <h6 className="text-dark mb-3">Connect with me</h6>
                  <div className="d-flex gap-2">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center justify-content-center rounded-2"
                        style={{ 
                          width: '40px', 
                          height: '40px',
                          backgroundColor: social.color,
                          color: 'white',
                          textDecoration: 'none',
                          transition: 'transform 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                      >
                        <i className={`fab ${social.icon}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Form */}
          <Col lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h5 className="text-dark mb-4">
                  <i className="fas fa-paper-plane text-primary me-2"></i>
                  Send a Message
                </h5>
                
                {submitted && (
                  <Alert variant="success" className="mb-4">
                    <div className="d-flex align-items-center">
                      <i className="fas fa-check-circle me-3"></i>
                      <div>
                        <strong>Message sent successfully!</strong> I'll get back to you soon.
                      </div>
                    </div>
                  </Alert>
                )}
                
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label className="text-dark mb-2">
                          <span className="text-danger">*</span> Your Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your name"
                          className="py-2"
                        />
                      </Form.Group>
                    </Col>
                    
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label className="text-dark mb-2">
                          <span className="text-danger">*</span> Email Address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your email"
                          className="py-2"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label className="text-dark mb-2">
                      <span className="text-danger">*</span> Subject
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is this regarding?"
                      className="py-2"
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label className="text-dark mb-2">
                      <span className="text-danger">*</span> Message
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell me about your project or inquiry..."
                      className="py-2"
                    />
                  </Form.Group>
                  
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                      <i className="fas fa-lock me-1"></i>
                      Your information is secure
                    </small>
                    
                    <Button
                      type="submit"
                      variant="primary"
                      className="px-4"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane me-2"></i>
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>

            {/* What to Expect */}
            <div className="mt-4 p-4 bg-light rounded-3 border">
              <h6 className="text-dark mb-3">
                <i className="fas fa-clock text-primary me-2"></i>
                What to expect
              </h6>
              <Row>
                {[
                  { title: 'Quick Response', desc: 'I typically respond within 24 hours' },
                  { title: 'Clear Communication', desc: 'I\'ll clarify requirements and expectations' },
                  { title: 'Professional Approach', desc: 'Timely and detailed project discussions' },
                  { title: 'Follow-up', desc: 'I\'ll keep you updated throughout the process' },
                ].map((item, index) => (
                  <Col md={6} key={index} className="mb-3">
                    <div className="d-flex align-items-start">
                      <div className="text-primary me-2">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div>
                        <strong className="text-dark">{item.title}</strong>
                        <p className="text-muted mb-0 small">{item.desc}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>

        {/* Call to Action */}
        <Row className="mt-5">
          <Col xs={12} className="text-center">
            <div className="bg-primary bg-opacity-10 p-4 rounded-3">
              <h5 className="text-dark mb-3">Ready to start a project?</h5>
              <p className="text-muted mb-4">
                Let's discuss your ideas and how I can help bring them to life.
              </p>
              <Button 
                variant="primary"
                size="lg"
                onClick={() => {
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                  // Auto-focus on the name field
                  setTimeout(() => {
                    const nameInput = document.querySelector('input[name="name"]');
                    if (nameInput) nameInput.focus();
                  }, 500);
                }}
              >
                <i className="fas fa-calendar-check me-2"></i>
                Start a Conversation
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Success Modal */}
      <Modal
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
        centered
        size="sm"
      >
        <Modal.Body className="p-4 text-center">
          <div className="mb-3">
            <div className="mx-auto bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: '60px', height: '60px' }}>
              <i className="fas fa-check fa-xl"></i>
            </div>
            <h5 className="text-dark mb-2">Message Sent!</h5>
            <p className="text-muted mb-0">
              Thank you for your message. I'll get back to you shortly.
            </p>
          </div>
          <Button 
            variant="primary"
            onClick={() => setShowSuccessModal(false)}
            className="mt-3"
          >
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Contact;