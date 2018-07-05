import {Meteor} from 'meteor/meteor';
import Customers from './Customers';

Customers.publishPagination();

Meteor.publish('customers.detail', function (customerId) {
    return Customers.publish(Meteor.user(), {_id: customerId});
});
