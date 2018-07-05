import React, {Component} from 'react';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody
} from 'reactstrap';
import {Link} from 'react-router-dom';

import {T, t, PT} from '/imports/common/Translation';
import Customers from '../../collections/Customers/Customers';
import Models from '../../../../collections/Models/Models';
import ListComponent from '../../../../ui/default/pages/models/components/ListComponent';

class ViewCustomers extends Component {
    static viewInfo = {controller: 'Customers', action: 'List'};

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.limit = Customers.getLimit();
        this.pagination = Customers.pagination();
    }

    render() {
        const {limit, pagination} = this;
        const model = Models.getModel('Customers') || Customers.getLayouts();

        return (
            <div className="ViewCustomers animated fadeIn">
                <PT title={t.__('View Products')}/>
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"/> <T>View Customers</T>
                                <div className="card-actions">
                                    <Link to={'/manager/customers/create'} title={t.__('Create')}>
                                        <i className="fa fa-plus-circle"/>
                                    </Link>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <ListComponent
                                    model={model}
                                    pagination={pagination}
                                    limit={limit}
                                    detailLink="/manager/customers/%s/detail"
                                    editLink="/manager/customers/%s/edit"/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ViewCustomers;
