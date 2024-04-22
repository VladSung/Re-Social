import React from 'react';
import Pagination from '../common/Pagination/Pagination';
import User from './User'

const Users = (props) => {
    let toggleFollow = (userId) => {
        props.onToggleFollow(userId)
    }
    return (<>
        <Pagination onPaginationClick={props.onPaginationClick} usersCount={props.usersCount} pageSize={props.pageSize} currentPage={props.currentPage} />
        {props.users.map((u) =>
            <User toggleFollow={toggleFollow} user={u} key={u.id} followFetching={props.followFetching} />
        )}
    </>)
}

export default Users;