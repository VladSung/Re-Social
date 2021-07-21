import React, { setState } from 'react';
import { Input } from '@material-ui/core';

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            status: this.props.status
        }
    }
    editStatus = (newStatus) => {
        this.setState({
            status: newStatus
        })
    }
    activatedEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivatedEditMode = () => {
        this.setState({
            editMode: false
        })

    }
    onKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.updateStatus(this.state.status)
            this.deactivatedEditMode();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <>
            {this.state.editMode && <Input
                style={{ color: '#fff', width: '100%', background: 'rgb(255 255 255 /20%)', padding: '0 15px' }}
                value={this.state.status}
                onKeyDown={this.onKeyDown}
                autoFocus={true}
                onChange={(e) => { this.editStatus(e.target.value) }} onBlur={this.deactivatedEditMode} />
            }
            {!this.state.editMode && <span onDoubleClick={this.activatedEditMode}>{this.state.status || 'Нет статуса'}</span>}

        </>
    }
}

export default ProfileStatus;