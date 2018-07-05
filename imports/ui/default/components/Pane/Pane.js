import React, {Component} from 'react';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

Modal.setAppElement('#HanaPlatformContainer');

export class Pane extends Component {
    onClose() {
        const {onClose} = this.props;
        onClose && onClose();
    }

    render() {
        const {isOpen, children,
            className, overlayClassName,
            title, subtitle} = this.props;

        return (
            <SlidingPane
                className={className}
                overlayClassName={overlayClassName}
                isOpen={isOpen}
                title={title}
                subtitle={subtitle}
                onRequestClose={() => {}}
                onClose={() => this.onClose()}>
                {children}
            </SlidingPane>
        );
    }
}
