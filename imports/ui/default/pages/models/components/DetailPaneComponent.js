import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Row, Col,
} from 'reactstrap';
import DetailComponent from '../components/DetailComponent';
import {FormModalComponent} from './RecordModalComponent';

export class DetailPaneComponent extends Component {
    static propTypes = {
        model: PropTypes.object,
        record: PropTypes.object,
        isEdit: PropTypes.bool,
        closeEdit: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            openEditForm: false
        };
    }

    onClose() {
        const {closeEdit} = this.props;
        closeEdit && closeEdit();
    }

    render() {
        const {isEdit, model, record} = this.props;
        return (
            <div>
                <Row>
                    <Col>
                        <DetailComponent
                            model={model}
                            record={record}/>
                    </Col>
                </Row>
                {/*edit record*/}
                <FormModalComponent
                    isOpen={isEdit}
                    model={model}
                    record={record}
                    onClose={() => this.onClose()}/>
            </div>
        );
    }
}
