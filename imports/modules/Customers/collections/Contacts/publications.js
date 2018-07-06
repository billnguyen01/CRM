import {Meteor} from 'meteor/meteor';
import Contacts from './Contacts';

Contacts.publishPagination();

Meteor.publish('contacts.detail', function (_id) {
    return Contacts.publish(Meteor.user(), {_id: _id});
});
