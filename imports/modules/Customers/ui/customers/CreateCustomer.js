import React, {Component} from 'react';
import {
    Row,
    Col
} from 'reactstrap';

import {t, PT} from '/imports/common/Translation';
import FormComponent from '/imports/ui/default/pages/models/components/FormComponent';
import Models from '../../../../collections/Models/Models';
import Customers from '../../collections/Customers/Customers';

class CreateCustomer extends Component {
    static viewInfo = {controller: 'Customers', action: 'Create'};

    render() {
        const model = Models.getModel('Customers') || Customers.getLayouts();
        const title = t.__('Create Customer');

        return (
            <div className="CreateCustomer animated fadeIn">
                <PT title={title}/>
                <Row>
                    <Col>
                        <FormComponent
                            title={title}
                            model={model}
                            method="customers.insert"
                            detailLink="/manager/customers/%s/detail"
                            listLink="/manager/customers"/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CreateCustomer;
