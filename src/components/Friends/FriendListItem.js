function FriendListItem({avatar, name, isOnline, id}) {
    function online(value) {
        if (value) {
            return (
                <span className="online"></span>
            )
        } else {
            return (
                <span className="ofline"></span>
            )
        }
    }
    const onlineSpan = online(isOnline);
    return (
        <li className="item" key={id}>
            {onlineSpan}
            <img className="avatar" src={avatar} alt="Avatar" width="48" />
            <p className="name">{ name }</p>
        </li>
    )
}

export default FriendListItem;