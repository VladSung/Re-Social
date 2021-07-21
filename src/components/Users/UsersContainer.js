import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
    toggleFollow,
    getUsers,
} from '../../redux/users-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPaginationClick = (p) => {
        this.props.getUsers(p, this.props.pageSize)
    }
    toggleFollow = (id, followed) => {
        this.props.toggleFollow(id, followed)
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> :
                <Users
                    toggleFollow={this.toggleFollow}
                    onPaginationClick={this.onPaginationClick}
                    usersCount={this.props.usersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    followFetching={this.props.followFetching}
                />
            }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage,
        followFetching: state.usersPage.followFetching,
    }
}

export default compose(
    connect(mapStateToProps, {
        toggleFollow,
        getUsers,
    }),
    withAuthRedirect
)(UsersContainer)