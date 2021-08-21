import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
    toggleFollow,
    getUsers,
} from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPaginationClick = (p) => {
        this.props.getUsers(p, this.props.pageSize)
    }
    toggleFollow = (userId) => {
        let [user] = this.props.users.filter(u => u.id === userId);
        this.props.toggleFollow(userId, user.followed)
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> :
                <Users
                    onToggleFollow={this.toggleFollow}
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
)(UsersContainer)