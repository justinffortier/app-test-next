import { Container, Row, Col } from 'react-bootstrap';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';


export default function Home() {
  return (
    <ContentWrapper className="py-104 text-center">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-200 mb-0">
              hello world
            </h1>
          </Col>
        </Row>
      </Container>
    </ContentWrapper>
  );
}
