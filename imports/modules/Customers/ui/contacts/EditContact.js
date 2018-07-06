import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {
    Row, Col,
} from 'reactstrap';
import {t, PT} from '/imports/common/Translation';
import FormComponent from '/imports/ui/default/pages/models/components/FormComponent';
import Models from '../../../../collections/Models/Models';
import container from '../../../../common/Container';
import Contacts from '../../collections/Contacts/Contacts';

class EditContact extends Component {
    static viewInfo = {controller: 'Contacts', action: 'Edit'};

    render() {
        const {record} = this.props;
        const model = Models.getModel('Contacts') || Contacts.getLayouts();

        const title = t.__('Edit') + ': ' + (record[model.view.title] || '');

        return (
            <div className="EditContact animated fadeIn">
                <PT title={title}/>
                <Row>
                    <Col>
                        <FormComponent
                            title={title}
                            model={model}
                            record={record}
                            method="contacts.update"
                            detailLink="/manager/contacts/%s/detail"
                            listLink="/manager/contacts"/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default container((props, onData) => {
    const _id = props.match.params._id;
    const sub = Meteor.subscribe('contacts.detail', _id);
    if (sub.ready()) {
        onData(null, {
            record: Contacts.findOne(_id)
        });
    }
}, EditContact);
