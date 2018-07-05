import React, {Component} from 'react';
import {Meteor} from "meteor/meteor";
import {
    Row,
    Col,
    Alert
} from 'reactstrap';

import container from '/imports/common/Container';
import {T, PT} from '/imports/common/Translation';
import {Loading} from '../../../components/Loading/Loading';
import Models from '/imports/collections/Models/Models';
import {myModel} from '/imports/common/Model';
import DetailComponent from '../components/DetailComponent';

/**
 * detail a record for custom collection
 */
class DetailView extends Component {
    render() {
        const {model, record} = this.props;

        if (!model || !model._id || !record) {
            return <Alert color="danger"><T>No Data</T></Alert>;
        }

        const title = record[model.view.title];
        return (
            <div>
                <PT title={title}/>
                <Row>
                    <Col>
                        <DetailComponent
                            title={title}
                            model={model}
                            record={record}
                            editLink={'/manager/model/' + model.model + '/' + record._id + '/edit'}/>
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
}, DetailView, {loadingHandler: () => <Loading/>});
