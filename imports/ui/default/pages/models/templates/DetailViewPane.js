import React, {Component} from 'react';
import {
    Row, Col,
} from 'reactstrap';
import DetailComponent from '../components/DetailComponent';

export default class DetailViewPane extends Component {
    render() {
        const {model, record} = this.props;
        return (
            <div>
                <Row>
                    <Col>
                        <DetailComponent
                            model={model}
                            record={record}/>
                    </Col>
                </Row>
            </div>
        );
    }
}
