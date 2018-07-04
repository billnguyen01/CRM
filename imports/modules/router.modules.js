import {CustomersRouters} from './Customers/config/routers';

let HomeRouterModules = {};
HomeRouterModules = Object.assign(HomeRouterModules, {});
export {HomeRouterModules};

const RouterModules = {
    ...CustomersRouters
};
export {RouterModules};
