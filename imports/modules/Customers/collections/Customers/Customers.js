import SimpleSchema from 'simpl-schema';
import CollectionAssign from '../../../../common/CollectionAssign';
import {customerLayouts} from './layouts';

class CustomersCollection extends CollectionAssign {
    /**
     * get default layouts
     */
    getLayouts() {
        return customerLayouts;
    }
}

const Customers = new CustomersCollection('customers');

Customers.allow({
    insert: () => false,
    update: () => false,
    remove: () => false,
});

Customers.deny({
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

Schema.Customers = CollectionAssign.schema({
    createdAt: {
        type: String,
        autoValue() {
            if (this.isInsert) return (new Date()).toISOString();
            return this.value;
        },
    },
    avatar: {type: String, optional: true},
    customerType: {type: String, defaultValue: 'PERSON'},
    salutation: {type: String, optional: true},
    fistName: {type: String, optional: true},
    lastName: {type: String, optional: true},
    name: {type: String},
    legalName: {type: String},
    phone: {type: String},
    email: {type: String},
    dateOfBirth: {type: String, optional: true},
    billingAddress: {type: Array, optional: true},
    "billingAddress.$": {type: Schema.Address, blackbox: true},
    shippingAddress: {type: Array, optional: true},
    "shippingAddress.$": {type: Schema.Address}
});

Customers.attachSchema(Schema.Customers);

export default Customers;
