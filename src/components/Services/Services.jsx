import { Container, Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Engineering',
      description: 'Build websites, mobile apps, and e-commerce technology with cutting-edge solutions.',
      icon: '⚙️',
      link: '/services'
    },
    {
      title: 'Strategy',
      description: 'CTO consulting and product strategy to align technology with business goals.',
      icon: '🎯',
      link: '/services'
    },
    {
      title: 'Design',
      description: 'Create user-friendly experiences with intuitive UI/UX design services.',
      icon: '🎨',
      link: '/services'
    }
  ];

  return (
    <section className="py-5 bg-light">
      <Container className="py-5">
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-5 fw-700 mb-3">Our Services</h2>
            <p className="lead text-muted">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col lg={4} md={6} key={index}>
              <Link href={service.link} className="text-decoration-none">
                <Card className="h-100 border-0 shadow-soft">
                  <Card.Body className="p-4">
                    <div className="mb-3" style={{ fontSize: '3rem' }}>
                      {service.icon}
                    </div>
                    <h4 className="fw-600 mb-3">{service.title}</h4>
                    <p className="text-muted mb-0">
                      {service.description}
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
