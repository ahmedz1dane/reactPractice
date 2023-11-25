import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <div>User :{id}</div>;
}

export default User;

// useparms will extract the parmeter from the current
// router , the parameter in the router will be of the form
// :id or :username
// in this way it will extract these from the URL
