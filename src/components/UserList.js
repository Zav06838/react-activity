import { users } from "./users";
import User from "./User";

const UserList = () => {
  return (
    <div>
      {users.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </div>
  );
};
export default UserList;
