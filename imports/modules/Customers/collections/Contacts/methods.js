import {Meteor} from 'meteor/meteor';
import Contacts from './Contacts';
import {createRecord, editRecord} from '../../../../common/BeanMethods';

Meteor.methods({
    'contacts.insert': function (data) {
        return createRecord(Contacts, data);
    },
    'contacts.update': function (data) {
        return editRecord(Contacts, data);
    }
});
