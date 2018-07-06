import React, {Component} from 'react';
import Contacts from '../../collections/Contacts/Contacts';
import Models from '../../../../collections/Models/Models';
import {ListViewComponent} from '../../../../ui/default/pages/models/components/ListComponent';
import {t} from '../../../../common/Translation';

export default class ViewContacts extends Component {
    static viewInfo = {controller: 'Contacts', action: 'List'};

    render() {
        const model = Models.getModel('Contacts') || Contacts.getLayouts();

        return (
            <ListViewComponent
                title={t.__('View Contacts')}
                className="ViewContacts"
                collection={Contacts}
                model={model}
                createLink={'/manager/contacts/create'}
                detailLink={'/manager/contacts/%s/detail'}
                editLink={'/manager/contacts/%s/edit'}/>
        );
    }
}
