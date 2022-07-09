import React from "react";

function UserItem(props) {
  return (
    <tr>
      <td>{props.user.id}</td>
      <td>{props.user.name}</td>
      <td>{props.user.location}</td>
      <td>{props.user.email}</td>
      <td>
        <img
          src={props.user.profilepicture}
          alt={props.user.name}
          height="50px"
        />
      </td>
    </tr>
  );
  //return props.user.name;
}

export default UserItem;
