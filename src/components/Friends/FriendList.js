import FriendListItem from './FriendListItem'
import './Friends.scss'
function FriendsList({ friends }) {
    const list = friends.map((friend) => {
            return (
                    <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} id={friend.id} />
            )
        })
    return (
        <ul className="friend-list">
            {list}
        </ul>
    )
}

export default FriendsList;