import ViewCustomers from '../ui/customers/ViewCustomers';
import CreateCustomer from '../ui/customers/CreateCustomer';
import ViewCustomer from '../ui/customers/ViewCustomer';
import EditCustomer from '../ui/customers/EditCustomer';
import ViewContacts from '../ui/contacts/ViewContacts';
import CreateContact from '../ui/contacts/CreateContact';
import ViewContact from '../ui/contacts/ViewContact';
import EditContact from '../ui/contacts/EditContact';

export const CustomersRouters = {
    '/manager/customers': {
        component: ViewCustomers,
        title: 'View Customers'
    },
    '/manager/customers/create': {
        component: CreateCustomer,
        title: 'Create Customer'
    },
    '/manager/customers/:_id/detail': {
        component: ViewCustomer,
        title: 'View Customer'
    },
    '/manager/customers/:_id/edit': {
        component: EditCustomer,
        title: 'Edit Customer'
    },
    '/manager/contacts': {
        component: ViewContacts,
        title: 'View Contacts'
    },
    '/manager/contacts/create': {
        component: CreateContact,
        title: 'Create Contact'
    },
    '/manager/contacts/:_id/detail': {
        component: ViewContact,
        title: 'View Contact'
    },
    '/manager/contacts/:_id/edit': {
        component: EditContact,
        title: 'Edit Contact'
    },
};
