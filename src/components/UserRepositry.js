import React, { useState, useEffect } from "react";
import { getUserRepo } from "../clients/resource";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";

const UserRepositry = () => {
  const [userDatas, setUserDatas] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  let { name } = useParams();

  const getProfileDetails = async () => {
    try {
      let data = await getUserRepo(name);
      setUserDatas(data);
    } catch (error) {
      setErrorMsg(error.response.data.message);
    }
  };
  useEffect(() => {
    getProfileDetails();
  }, [name]);

  return (
    <div>
      {userDatas.map((data) => {
        return (
          <div
            style={{
              width: "90%",
              margin: "0 auto",
              paddingTop: "20px",
            }}
          >
            <p style={{ color: "red" }}>{errorMsg}</p>
            <Link to={`/repo/${data.owner.login}/${data.name}`}>
              {data.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default UserRepositry;
