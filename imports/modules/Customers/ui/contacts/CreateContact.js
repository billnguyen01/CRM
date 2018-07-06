import React, {Component} from 'react';
import {
    Row, Col
} from 'reactstrap';
import {t, PT} from '/imports/common/Translation';
import FormComponent from '/imports/ui/default/pages/models/components/FormComponent';
import Models from '../../../../collections/Models/Models';
import Contacts from '../../collections/Contacts/Contacts';

export default class CreateContact extends Component {
    static viewInfo = {controller: 'Contacts', action: 'Create'};

    render() {
        const model = Models.getModel('Customers') || Contacts.getLayouts();
        const title = t.__('Create Contact');

        return (
            <div className='CreateContact animated fadeIn'>
                <PT title={title}/>
                <Row>
                    <Col>
                        <FormComponent
                            title={title}
                            model={model}
                            method='contacts.insert'
                            detailLink='/manager/contacts/%s/detail'
                            listLink='/manager/contacts'/>
                    </Col>
                </Row>
            </div>
        );
    }
}
