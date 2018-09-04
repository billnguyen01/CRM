import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Card, CardHeader, CardBody,
    Collapse,
} from 'reactstrap';

export class RelatedComponent extends Component {
    static propTypes = {

    };

    render() {
        const {icon, title} = this.props;

        return (
            <Card>
                <CardHeader>
                    {icon ? <i className={icon}/> : null} {title}
                </CardHeader>
                <Collapse>
                    <CardBody>

                    </CardBody>
                </Collapse>
            </Card>
        );
    }
}
