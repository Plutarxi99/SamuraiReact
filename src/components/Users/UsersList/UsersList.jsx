import s from './UsersList.module.css';
import UsersItem from "../UsersItem/UsersItem";

const buildPageRange = (current, total) => {
    const set = new Set();

    // Always include first two and last two pages
    [1, 2, total - 1, total].forEach(p => {
        if (p >= 1 && p <= total) set.add(p);
    });

    // Include window around current page
    for (let p = current - 2; p <= current + 2; p++) {
        if (p >= 1 && p <= total) set.add(p);
    }

    const sorted = Array.from(set).sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < sorted.length; i++) {
        if (i > 0 && sorted[i] - sorted[i - 1] > 1) {
            result.push('...');
        }
        result.push(sorted[i]);
    }

    return result;
};

const UsersList = ({
                       props,
                       users,
                       clickFollow,
                       clickBlock,
                       clickUnFollow,
                       clickUnBlock,
                       onPageChanged,
                       toggleFollowingProgress,
                       followUserThunk,
                       unfollowUserThunk
                   }) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    return (
        <div>
            <div className={s.pagination}>
                <button
                    className={s.pageBtnNav}
                    onClick={() => onPageChanged(props.currentPage - 1)}
                    disabled={props.currentPage === 1}
                    aria-label="Previous page"
                >‹
                </button>

                {buildPageRange(props.currentPage, pagesCount).map((p, idx) =>
                    p === '...'
                        ? <span key={`ellipsis-${idx}`} className={s.ellipsis}>…</span>
                        : <button
                            key={p}
                            className={props.currentPage === p ? `${s.pageBtn} ${s.pageBtnActive}` : s.pageBtn}
                            onClick={() => props.currentPage !== p && onPageChanged(p)}
                            disabled={props.currentPage === p}
                        >
                            {p}
                        </button>
                )}

                <button
                    className={s.pageBtnNav}
                    onClick={() => onPageChanged(props.currentPage + 1)}
                    disabled={props.currentPage === pagesCount}
                    aria-label="Next page"
                >›
                </button>
            </div>
            <div className={s.list}>
                {users.map(u => <UsersItem
                    key={u.id}
                    user={u}
                    clickFollow={clickFollow}
                    clickBlock={clickBlock}
                    clickUnFollow={clickUnFollow}
                    clickUnBlock={clickUnBlock}
                    toggleFollowingProgress={toggleFollowingProgress}
                    followingIsProgress={props.followingIsProgress}
                    followUserThunk={followUserThunk}
                    unfollowUserThunk={unfollowUserThunk}
                />)}
            </div>
        </div>
    )
}

export default UsersList;