import {Col, Container, Row} from "react-bootstrap";
import {CardSmall} from "../card/cardSmall/CardSmall.jsx";
import './blocks.scss'

export function ForWho() {
    return (
        <Container>
            <div className="block-vertical">
                <div className="title-text">Кому подойдет</div>
                <Row className="card-position gx-4 gy-3">
                    <Col md="4" xs="12">
                        <CardSmall title="Студент" subtitle="ТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекст" />
                    </Col>
                    <Col md="4" xs="12">
                        <CardSmall title="Семья" subtitle="ТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекст"/>
                    </Col>
                    <Col md="4" xs="12">
                        <CardSmall title="Предприниматель" subtitle="ТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекст"/>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}