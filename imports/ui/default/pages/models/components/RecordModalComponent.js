import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Button
} from 'reactstrap';
import {ShowModal} from '../../../helpers/tags/Modal';
import DetailComponent from '../components/DetailComponent';
import FormComponent from './FormComponent';
import {T, t} from '/imports/common/Translation';

export class DetailModalComponent extends Component {
    static propTypes = {
        isOpen: PropTypes.bool,
        model: PropTypes.object,
        record: PropTypes.object
    };

    render() {
        const {isOpen, record, model} = this.props;
        return (
            <ShowModal isOpen={isOpen}>
                <DetailComponent
                    model={model}
                    record={record}/>
            </ShowModal>
        );
    }
}

export class FormModalComponent extends Component {
    static propTypes = {
        isOpen: PropTypes.bool,
        model: PropTypes.object,
        record: PropTypes.object,
        onClose: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    componentWillMount() {
        this.state.isOpen = this.props.isOpen;
    }

    componentWillReceiveProps(nextProps) {
        this.state.isOpen = nextProps.isOpen;
    }

    mdToggle() {
        this.setState({isOpen: false});
        const {onClose} = this.props;
        onClose && onClose();
    }

    onSubmit() {
        this.editForm.onSubmit();
    }

    afterSubmit() {
        this.setState({isOpen: false});
        const {onClose} = this.props;
        onClose && onClose();
    }

    render() {
        const {model, record} = this.props;
        const method = model && model.updateMethod || '';

        return (
            <ShowModal isOpen={this.state.isOpen}
                       mdTitle={t.__('Modal')}
                       mdToggle={() => this.mdToggle()}>
                <FormComponent
                    onlyForm={true}
                    model={model}
                    record={record || {}}
                    method={method}
                    onRef={(ref) => this.editForm = ref}
                    afterSubmit={() => this.afterSubmit()}/>

                <Button color="primary"
                        onClick={() => this.onSubmit()}>
                    {record && record._id ? <T>Update</T> : <T>Save</T>}
                </Button>
            </ShowModal>
        );
    }
}
