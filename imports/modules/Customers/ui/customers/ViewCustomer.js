import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {
    Row,
    Col
} from 'reactstrap';

import container from '/imports/common/Container';
import {t, PT} from '/imports/common/Translation';
import Models from '/imports/collections/Models/Models';
import Customers from '../../collections/Customers/Customers';
import DetailComponent from '../../../../ui/default/pages/models/components/DetailComponent';

class ViewCustomer extends Component {
    static viewInfo = {controller: 'Customers', action: 'View'};

    render() {
        const {customer} = this.props;
        const model = Models.getModel('Customers') || Customers.getLayouts();
        const title = t.__('View Customer');
        const customerName = customer[model.view.title] || '';

        return (
            <div className="ViewCustomer animated fadeIn">
                <PT title={title + ': ' + customerName}/>

                <Row>
                    <Col xs="12" lg="12">
                        <DetailComponent
                            title={title}
                            model={model}
                            record={customer}
                            editLink="/manager/customers/%s/edit"/>
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
}, ViewCustomer);
