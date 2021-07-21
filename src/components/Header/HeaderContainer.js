import React from 'react';
import Header from './Header'
import { connect } from 'react-redux';
import { getAuthData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthData();
    }
    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} />
        )
    }
}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { getAuthData })(HeaderContainer);