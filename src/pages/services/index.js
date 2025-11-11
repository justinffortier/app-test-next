import { Container, Row, Col, Card } from 'react-bootstrap';

export default function ServicesPage() {
  return (
    <>
      <section className="py-5 bg-forest-gradient text-white">
        <Container className="py-5">
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4 fw-700 mb-4 text-white">Our Services</h1>
              <p className="lead opacity-90">
                Comprehensive digital solutions to help your business thrive
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container className="py-5">
          <Row className="g-4">
            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-soft">
                <Card.Body className="p-4">
                  <div className="mb-3" style={{ fontSize: '3rem' }}>⚙️</div>
                  <h4 className="fw-600 mb-3">Engineering</h4>
                  <p className="text-muted">
                    Build websites, mobile apps, and e-commerce technology with modern frameworks.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-soft">
                <Card.Body className="p-4">
                  <div className="mb-3" style={{ fontSize: '3rem' }}>🎯</div>
                  <h4 className="fw-600 mb-3">Strategy</h4>
                  <p className="text-muted">
                    CTO consulting and product strategy to align technology with business goals.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-soft">
                <Card.Body className="p-4">
                  <div className="mb-3" style={{ fontSize: '3rem' }}>🎨</div>
                  <h4 className="fw-600 mb-3">Design</h4>
                  <p className="text-muted">
                    Create user-friendly experiences with intuitive UI/UX design services.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
