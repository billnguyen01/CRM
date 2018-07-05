import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import Customers from './Customers';
import {aclAccess} from '../../../../collections/Users/aclUtils';

Meteor.methods({
    'customers.insert': function (customer) {
        // check permission
        aclAccess('Customers', 'Create');

        check(customer, Object);
        if (!customer.legalName) {
            customer.legalName = customer.name;
        }

        return Customers.insert(customer);
    },
    'customers.update': function (customer) {
        // check permission
        aclAccess('Customers', 'Edit');

        check(customer, Object);
        try {
            const customerId = customer._id;
            Customers.update(customerId, {$set: customer});
            return customerId;
        } catch (exception) {
            throw new Meteor.error('500', exception);
        }
    },
    'customers.import': function (data) {
        // check permission
        aclAccess('Customers', 'Edit');
        return Customers.importData(data);
    },
    'customers.searchKeyword': function (keyword, limit) {
        check(keyword, String);
        return Customers.find({
            name: {$regex: keyword}
        }, {limit: limit}).fetch();
    }
});