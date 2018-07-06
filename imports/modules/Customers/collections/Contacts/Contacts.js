import SimpleSchema from 'simpl-schema';
import CollectionAssign from '../../../../common/CollectionAssign';
import {contactLayouts} from './layouts';

class ContactsCollection extends CollectionAssign {
    getLayouts() {
        return contactLayouts;
    }
}

const Contacts = new ContactsCollection('contacts');

Contacts.allow({
    insert: () => false,
    update: () => false,
    remove: () => false,
});

Contacts.deny({
    insert: () => true,
    update: () => true,
    remove: () => true,
});

const Schema = {};

Schema.Address = new SimpleSchema({
    street: {type: String},
    ward: {type: String, defaultValue: ''},
    district: {type: String, defaultValue: ''},
    city: {type: String},
    state: {type: String, defaultValue: ''},
    zipCode: {type: String, defaultValue: ''},
    country: {type: String}
});

Schema.Contacts = CollectionAssign.schema({
    createdAt: {
        type: String,
        autoValue() {
            if (this.isInsert) return (new Date()).toISOString();
            return this.value;
        },
    },
    customer_id: {
        type: String,
        optional: true
    },
    avatar: {
        type: String,
        optional: true
    },
    salutation: {
        type: String,
        optional: true
    },
    fistName: {
        type: String,
        optional: true
    },
    lastName: {
        type: String,
        optional: true
    },
    name: {type: String},
    phone: {type: String},
    email: {type: String},
    dateOfBirth: {
        type: String,
        optional: true
    },
    billingAddress: {
        type: Array,
        optional: true
    },
    "billingAddress.$": {
        type: Schema.Address,
        blackbox: true
    },
});

Contacts.attachSchema(Schema.Contacts);

export default Contacts;
