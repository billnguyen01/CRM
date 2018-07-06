import React, {Component} from 'react';
import {t} from '/imports/common/Translation';
import Models from '/imports/collections/Models/Models';
import Customers from '../../collections/Customers/Customers';
import {DetailViewComponent} from '../../../../ui/default/pages/models/components/DetailComponent';

export default class ViewCustomer extends Component {
    static viewInfo = {controller: 'Customers', action: 'View'};

    render() {
        const model = Models.getModel('Customers') || Customers.getLayouts();
        const title = t.__('View Customer');

        return (
            <DetailViewComponent
                title={title}
                className="ViewCustomer"
                model={model}
                collection={Customers}
                _id={this.props.match.params._id}
                subscribe="customers.detail"
                prefix="customers"/>
        );
    }
}
