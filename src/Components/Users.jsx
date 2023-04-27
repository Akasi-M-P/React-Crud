/* eslint-disable react/prop-types */
import User from "./User";

const Users = (props) => {
  return (
    <>
      <div className="Container">
        <div className="Row">
          {props.usersData.map((user, index) => {
            return <User userInfo={user} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Users;
