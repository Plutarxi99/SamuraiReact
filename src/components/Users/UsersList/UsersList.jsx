import s from './UsersList.module.css';
import UsersItem from "../UsersItem/UsersItem";

const UsersList = ({props, users, clickFollow, clickBlock, clickUnFollow, clickUnBlock, getUsers}) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let onPageChanged = (p) => {
        props.setToggleIsFetching(true)
        props.setCurrentPage(p)
        getUsers();
    }

    return (
        <div>
            <div className={s.selectedPages}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPages }
                                 onClick={() => onPageChanged(p)}
                    >{p}</span>
                })}
            </div>
            <div className={s.list}>
                {users.map(u => <UsersItem
                    key={u.id}
                    user={u}
                    clickFollow={clickFollow}
                    clickBlock={clickBlock}
                    clickUnFollow={clickUnFollow}
                    clickUnBlock={clickUnBlock}
                />)}
            </div>
        </div>
    )
}

export default UsersList;
