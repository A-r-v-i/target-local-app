import React, { Fragment } from "react";

const User = ({ ...props }) => {
  console.log("User", props);
  return (
    <Fragment>
      <p> Welcome {props?.location?.state?.user}</p>
    </Fragment>
  );
};

export default User;
