import {Col, Container, Row} from "react-bootstrap";
import {CardSmall} from "../card/cardSmall/CardSmall.jsx";

export function Possibilities() {
    return (
        <Container>
            <div className="block-vertical">
                <div className="title-text">Возможности</div>
                <Row className="card-position gx-4 gy-3">
                    <Col md={6} xs={12}>
                        <CardSmall title="Планирование" subtitle="Позволяет планировать расходы по доходам. Помогает эффективно планировать средства на основе доходов по заданной задаче."/>
                    </Col>
                    <Col md={6} xs={12}>
                        <CardSmall title='Распределение' subtitle='Представляет более подробные рекомендации по распределению средств на короткий промежуток времени, в соответствии с доступными средствами.'/>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}