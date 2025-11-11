import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-forest-gradient text-white py-5" style={{ minHeight: '600px' }}>
      <Container>
        <Row className="align-items-center" style={{ minHeight: '500px' }}>
          <Col lg={7}>
            <h1 className="display-4 fw-700 mb-4 text-white">
              Innovative Digital Solutions For Your Business
            </h1>
            <p className="lead mb-4 opacity-90" style={{ fontSize: '1.25rem' }}>
              Top provider of innovative solutions for over a decade. We specialize in web
              and mobile development, engineering, UI/UX design, and strategic support.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <Link href="/contact" passHref legacyBehavior>
                <Button variant="light" size="lg" className="px-4 py-3">
                  Get Started
                </Button>
              </Link>
              <Link href="/portfolio" passHref legacyBehavior>
                <Button variant="outline-light" size="lg" className="px-4 py-3">
                  View Our Work
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
