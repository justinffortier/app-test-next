import { Container, Row, Col, Card } from 'react-bootstrap';

export default function AboutPage() {
  return (
    <>
      <section className="py-5 bg-forest-gradient text-white">
        <Container className="py-5">
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4 fw-700 mb-4 text-white">About FYC Labs</h1>
              <p className="lead opacity-90">
                For over a decade, we've been helping businesses transform their digital presence.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container className="py-5">
          <Row className="mb-5">
            <Col lg={8} className="mx-auto">
              <h2 className="display-6 fw-700 mb-4">Our Story</h2>
              <p className="lead text-muted mb-4">
                Founded with a mission to deliver exceptional digital solutions, FYC Labs has grown
                into a trusted technology partner for organizations worldwide.
              </p>
              <p className="text-muted">
                We specialize in web and mobile development, strategic consulting, and user experience
                design. Our team works collaboratively to bring your vision to life with cutting-edge
                technology and innovative solutions.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container className="py-5">
          <Row className="text-center">
            <Col lg={4} md={6} className="mb-4">
              <h3 className="display-4 fw-700 text-forest-green">10+</h3>
              <p className="lead text-muted">Years of Excellence</p>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <h3 className="display-4 fw-700 text-forest-green">500+</h3>
              <p className="lead text-muted">Projects Delivered</p>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <h3 className="display-4 fw-700 text-forest-green">200+</h3>
              <p className="lead text-muted">Happy Clients</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
