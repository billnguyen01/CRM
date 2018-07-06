import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {aclAccess} from '../collections/Users/aclUtils';

export function createRecord(collection, data) {
    const className = collection.name;
    aclAccess(className, 'Create');
    check(data, Object);

    return collection.insert(data);
}

export function editRecord(collection, data) {
    const className = collection.name;
    aclAccess(className, 'Edit');
    check(data, Object);

    try {
        const _id = data._id;
        collection.update(_id, {$set: data});
        return _id;
    } catch (e) {
        Meteor.error('500', e);
    }
}
