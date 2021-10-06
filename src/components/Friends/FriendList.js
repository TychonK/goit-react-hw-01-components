import FriendListItem from './FriendListItem'
function FriendsList({ friends }) {
    return (
        friends.map((friend) => {
            return (
                <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} id={friend.id} />
            )
        })
    )
}

export default FriendsList;