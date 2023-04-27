/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
const User = (props) => {
  return (
    <div className="Single-User">
      <figure className="snip1336">
        <h2 className="User-head">Codetrain Users</h2>
        <img
          src="https://www.inductiveautomation.com/blog/sites/default/files/inline-images/PLC-Programming-Languages-Go-Beyond-Ladder-Logic-Feature_0.jpg"
          alt="sample87"
        />
        <figcaption>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg"
            alt="profile-sample4"
            className="profile"
          />
          <h2>
            {props.userInfo.name}
            <span>{props.userInfo.role}</span>
          </h2>
          <p>
            Email : {props.userInfo.email}
            <br />
            Gen : {props.userInfo.gen}
          </p>
          <a href="#" className="follow">
            Edit
          </a>
          <a href="#" className="info">
            Delete
          </a>
        </figcaption>
      </figure>
    </div>
  );
};
export default User;
