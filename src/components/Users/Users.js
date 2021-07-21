import React from 'react';
import { Button } from '@material-ui/core';
import styles from './users.module.css';
import { Link } from 'react-router-dom';

const Users = (props) => {
    let pagesCount = Math.ceil(props.usersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let toggleFollow = (userId) => {
        let [user] = props.users.filter(u => u.id === userId);
        props.toggleFollow(userId, user.followed)

    }
    return (<>
        <div className={styles.pagination}>
            {pages.map((p) => {
                return <button key={p} onClick={() => props.onPaginationClick(p)} className={props.currentPage === p ? `${styles.selectedPage} ${styles.paginationButton}` : styles.paginationButton} >{p}</button>
            })}
        </div>
        {props.users.map((u) =>
            <div key={u.id} className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.userProfile}>
                        <Link to={`../profile/${u.id}`} className={styles.avatar}>
                            <div className={styles.avatarWrapper}>
                                <div className={styles.avatarContainer}>
                                    <img src={u.photo ? u.photo : 'https://i.pinimg.com/236x/27/cf/8f/27cf8f27b2882215168e1cff8d1daf5e.jpg'} alt='avatar' />
                                </div>
                            </div>
                        </Link>
                        <div className={styles.title}>
                            <h2>{u.name}</h2>
                        </div>
                    </div>
                    <div className={styles.actions}>
                        <Button
                            variant={u.followed ? 'outlined' : 'contained'}
                            disabled={props.followFetching.some(id => id === u.id)}
                            style={props.followFetching.some(id => id === u.id) ? { filter: 'invert(1)' } : {}}
                            size='small'
                            color='primary'
                            onClick={() => toggleFollow(u.id)}
                            className={styles.button}>{u.followed ? 'Отписаться' : 'Подписаться'}</Button>
                    </div>
                </div>
            </div>
        )}
    </>)
}

export default Users;