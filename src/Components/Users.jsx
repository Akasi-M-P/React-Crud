/* eslint-disable react/prop-types */
import User from "./User";

const Users = (props) => {
  return (
    <>
      <div className="Container">
        <div className="Row">
          {props.usersData.map((user) => {
            return (
              <User
                userInfo={user}
                key={user.id}
                deleteUser={props.deleteUser}
                editUser={props.editUser}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Users;
