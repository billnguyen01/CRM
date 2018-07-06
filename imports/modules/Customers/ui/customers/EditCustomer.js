import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {
    Row, Col,
} from 'reactstrap';
import {t, PT} from '/imports/common/Translation';
import FormComponent from '/imports/ui/default/pages/models/components/FormComponent';
import Models from '../../../../collections/Models/Models';
import container from '../../../../common/Container';
import Customers from '../../collections/Customers/Customers';

class EditCustomer extends Component {
    static viewInfo = {controller: 'Customers', action: 'Edit'};

    render() {
        const {customer} = this.props;
        const model = Models.getModel('Customers') || Customers.getLayouts();
        const title = t.__('Edit') + ': ' + (customer[model.view.title] || '');

        return (
            <div className="EditCustomer animated fadeIn">
                <PT title={title}/>
                <Row>
                    <Col>
                        <FormComponent
                            title={title}
                            model={model}
                            record={customer}
                            method="customers.update"
                            detailLink="/manager/customers/%s/detail"
                            listLink="/manager/customers"/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default container((props, onData) => {
    const customerId = props.match.params._id;
    const customerSub = Meteor.subscribe('customers.detail', customerId);
    if (customerSub.ready()) {
        onData(null, {
            customer: Customers.findOne(customerId)
        });
    }
}, EditCustomer);
