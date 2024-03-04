import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "../../features/auth/authSlice";

const Dashboard = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const welcome = user ? `Welcome ${user}` : `Welcome!`;
  const tokenAbbr = `${token.slice(0, 9)}...`;

  const content = (
    <section className="welcome">
      <h1>{welcome}</h1>
      <p> Token: {tokenAbbr}</p>
      <p>
        <Link to="/userlist">Go to the user list</Link>
      </p>
    </section>
  );

  return content;
};

export default Dashboard;
