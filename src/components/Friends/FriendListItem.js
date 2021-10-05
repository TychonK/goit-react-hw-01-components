function FriendListItem({avatar, name, isOnline}) {
    function online(value) {
        if (value) {
            return (
                <span class="online"></span>
            )
        } else {
            return (
                <span class="ofline"></span>
            )
        }
    }
    const onlineSpan = online(isOnline);
    return (
        <li class="item">
            { onlineSpan }
            <img class="avatar" src={avatar} alt="Avatar" width="48" />
            <p class="name">{ name }</p>
        </li>
    )
}

export default FriendListItem;