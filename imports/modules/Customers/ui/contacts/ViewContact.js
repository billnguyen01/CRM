import React, {Component} from 'react';
import {t} from '/imports/common/Translation';
import Models from '/imports/collections/Models/Models';
import Contacts from '../../collections/Contacts/Contacts';
import {DetailViewComponent} from '../../../../ui/default/pages/models/components/DetailComponent';

export default class ViewContact extends Component {
    static viewInfo = {controller: 'Contacts', action: 'View'};

    render() {
        const model = Models.getModel('Contacts') || Contacts.getLayouts();
        const title = t.__('View Contact');

        return (
            <DetailViewComponent
                title={title}
                className="ViewContact"
                model={model}
                collection={Contacts}
                _id={this.props.match.params._id}
                subscribe="contacts.detail"
                prefix="contacts"/>
        );
    }
}
