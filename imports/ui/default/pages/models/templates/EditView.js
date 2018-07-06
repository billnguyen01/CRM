import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {
    Row,
    Col,
    Alert
} from 'reactstrap';

import container from '/imports/common/Container';
import {t, PT} from '/imports/common/Translation';
import {Loading} from '../../../components/Loading/Loading';
import Models from '/imports/collections/Models/Models';
import {myModel} from '/imports/common/Model';
import FormComponent from '../components/FormComponent';

/**
 * edit a record for custom collection
 */
class EditView extends Component {
    render() {
        const {
            model,
            record
        } = this.props;

        if (!model || !model._id || !record) {
            return <Alert color="danger"><T>No Data</T></Alert>;
        }

        return (
            <div>
                <PT title={t.__('Edit') + ' ' + model.model + ': ' + record[model.view.title]}/>
                <Row>
                    <Col>
                        <FormComponent
                            title={t.__('Edit') + ' ' + model.model}
                            model={model}
                            record={record}
                            method="models.updateRecord"/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default container((props, onData) => {
    const modelName = props.match.params._model;
    const recordId = props.match.params._id;
    const collection = myModel.getCollection(modelName);
    const sub = Meteor.subscribe('models.detailRecord', modelName, recordId);
    if (sub.ready()) {
        onData(null, {
            model: Models.findOne({model: modelName}),
            record: collection.findOne(recordId)
        });
    }
}, EditView, {loadingHandler: () => <Loading/>});
