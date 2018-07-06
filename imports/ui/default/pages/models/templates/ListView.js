import React, {Component} from 'react';
import {
    Alert,
} from 'reactstrap';
import {myModel} from '/imports/common/Model';
import {t, T} from '/imports/common/Translation';
import Models from '/imports/collections/Models/Models';
import {ListViewComponent} from '../components/ListComponent';

/**
 * list for custom collection
 */
class ListView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            model: {}
        }
    }

    componentWillMount() {
        const modelName = this.props.match.params._model;
        this.state.model = Models.findOne({model: modelName});
    }

    render() {
        const model = this.state.model;
        if (!model._id) {
            return <Alert color="danger"><T>No Data</T></Alert>;
        }

        const collection = myModel.getCollection(model.model);

        return (
            <ListViewComponent
                title={model.model + ' ' + t.__('List')}
                className="module-ListView"
                collection={collection}
                model={model}
                createLink={'/manager/model/' + model.model + '/create'}
                editLink={'/manager/model/' + model.model + '/%s/edit'}
                detailLink={'/manager/model/' + model.model + '/%s/detail'}/>
        );
    }
}

export default ListView;
