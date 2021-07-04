import {
    NavLink,
    useRouteMatch
} from 'react-router-dom';
import styles from './dialog.module.css'

function Dialog({ dialogs }) {
    const match = useRouteMatch();
    return (
        <>
            {dialogs.map((user) => <li key={user.id} className={styles.dialog}>
                <NavLink activeClassName={styles.active} to={`${match.url}/${user.id}`}>
                    <div className={styles.userPhoto}>
                        <img src={user.photo} alt='' />
                    </div>
                    <p>{user.name}</p>
                </NavLink>
            </li>)}

        </>
    );
}

export default Dialog