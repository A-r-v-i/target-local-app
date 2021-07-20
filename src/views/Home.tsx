import React, { Fragment, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps {}

const Home: React.FC<Props> = ({ history }) => {
  const [user, setUser] = useState("");

  const handleChange = (event: any) => {
    setUser(event.target.value);
  };

  const handleClick = () => {
    history.push(`/user/${user}`, {
      user: user,
    });
  };
  return (
    <Fragment>
      <p> Welcome</p>
      <input
        type="text"
        value={user}
        name="username"
        id="username"
        onChange={(e) => handleChange(e)}
      />
      <button type="submit" onClick={() => handleClick()}>
        Profile
      </button>
    </Fragment>
  );
};

export default withRouter(Home);
