/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";

const User = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.userInfo.id);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm
            userInfo={props.userInfo}
            editUser={props.editUser}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>

      <div className="Single-User">
        <figure className="snip1336">
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
            <a href="#" className="follow" onClick={handleShow}>
              Edit
            </a>
            <a href="#" className="info" onClick={handleDelete}>
              Delete
            </a>
          </figcaption>
        </figure>
      </div>
    </>
  );
};
export default User;
