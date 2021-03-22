import React, { useState } from "react";
import { getProfile, getUserRepo, getUserRepoFiles } from "../clients/resource";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

const Home = (props) => {
  const [username, setUserName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const changeUserName = (e) => {
    setUserName(e.target.value);
  };
  const submitData = async (e) => {
    e.preventDefault();
    try {
      await getProfile(username);
      props.history.push(`/profile/${username}`);
    } catch (error) {
      setErrorMsg(error.response.data.message);
    }
  };
  return (
    <>
      <div
        style={{
          width: "50%",
          margin: "0 auto",
          textAlign: "center",
          paddingTop: "20px",
        }}
      >
        <p style={{ color: "red" }}>{errorMsg}</p>
        <form
          onSubmit={(e) => {
            submitData(e);
          }}
        >
          <input
            type="text"
            style={{ width: 250, padding: 15 }}
            value={username}
            onChange={(e) => changeUserName(e)}
            placeholder="Enter Github's Username"
          />
          <button
            style={{
              background: "green",
              color: "white",
              paddingTop: 16,
              paddingBottom: 16,
              paddingLeft: 10,
              paddingRight: 10,
              border: 0,
              fontSize: 16,
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default withRouter(Home);
