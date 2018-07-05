import ViewCustomers from '../ui/customers/ViewCustomers';
import CreateCustomer from '../ui/customers/CreateCustomer';
import ViewCustomer from '../ui/customers/ViewCustomer';
import EditCustomer from '../ui/customers/EditCustomer';

export const CustomersRouters = {
    "/manager/customers": {
        component: ViewCustomers,
        title: "View Customers"
    },
    "/manager/customers/create": {
        component: CreateCustomer,
        title: "Create Customer"
    },
    "/manager/customers/:_id/detail": {
        component: ViewCustomer,
        title: "View Customer"
    },
    "/manager/customers/:_id/edit": {
        component: EditCustomer,
        title: "Edit Customer"
    },
};
