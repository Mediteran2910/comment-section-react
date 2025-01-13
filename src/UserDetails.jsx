export default function UserDetails({ user }) {
  return (
    <div className="user-head-details">
      <div className="picture-username-wrapp">
        <img
          src={user.user.image.png}
          alt="profile picture of the user"
          style={user.isYou && { marginRight: "10px" }}
        />

        <p>{user.user.username}</p>

        {user.isYou && (
          <div className="is-you">
            <p>{user.isYou}</p>
          </div>
        )}
      </div>
      <p> {user.createdAt}</p>
    </div>
  );
}
