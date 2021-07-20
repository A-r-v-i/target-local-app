import React, { Fragment } from "react";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}

const RegPortal: React.FC<Props> = ({ history, match }) => {
  console.log(history);
  console.log(match);
  return (
    <Fragment>
      <p>Register yourself</p>
      <button onClick={() => history.push("/")}>Back to /</button>
    </Fragment>
  );
};

export default RegPortal;
