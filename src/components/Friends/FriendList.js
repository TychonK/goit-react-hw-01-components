import FriendListItem from './FriendListItem'
function FriendsList({ friends }) {
    return (
        friends.map((friend) => {
            return (
                <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
            )
        })
    )
}

export default FriendsList;