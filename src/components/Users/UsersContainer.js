import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
    toggleFollow,
    setUsers,
    setUsersCount,
    setCurrentPage,
    setIsFetching
} from '../../redux/users-reducer';

import * as axios from 'axios';
import serverUrl from '../../redux/serverUrl'
import Preloader from '../common/Preloader/Preloader';


class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`${serverUrl}/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setIsFetching(false)
            this.props.setUsers(res.data.items)
            this.props.setUsersCount(res.data.totalCount)
        })

    }
    onPaginationClick = (p) => {
        this.props.setCurrentPage(p)
        this.props.setIsFetching(true)
        axios.get(`${serverUrl}/users?page=${p}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items)
            this.props.setIsFetching(false)
        })
    }
    toggleFollow = (id) => this.props.toggleFollow(id);
    render() {
        return <div className='main'>
            {this.props.isFetching ? <Preloader /> :
                <Users
                    toggleFollow={this.toggleFollow}
                    onPaginationClick={this.onPaginationClick}
                    usersCount={this.props.usersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users} />
            }
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

const UsersContainer = connect(mapStateToProps, {
    toggleFollow,
    setUsers,
    setUsersCount,
    setCurrentPage,
    setIsFetching,

})(UsersAPIContainer);
export default UsersContainer;