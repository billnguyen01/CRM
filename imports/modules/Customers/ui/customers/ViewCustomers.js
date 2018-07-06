import React, {Component} from 'react';
import {t} from '/imports/common/Translation';
import Customers from '../../collections/Customers/Customers';
import Models from '../../../../collections/Models/Models';
import {ListViewComponent} from '../../../../ui/default/pages/models/components/ListComponent';

class ViewCustomers extends Component {
    static viewInfo = {controller: 'Customers', action: 'List'};

    render() {
        const model = Models.getModel('Customers') || Customers.getLayouts();

        return (
            <ListViewComponent
                title={t.__('View Products')}
                className={'ViewCustomers'}
                collection={Customers}
                model={model}
                createLink={'/manager/customers/create'}
                detailLink={'/manager/customers/%s/detail'}
                editLink={'/manager/customers/%s/edit'}/>
        );
    }
}

export default ViewCustomers;
