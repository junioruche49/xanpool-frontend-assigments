import React, { useState, useEffect } from "react";
import { getUserRepoFiles, getReadme } from "../clients/resource";
import { useParams } from "react-router-dom";
import base64 from "base-64";

const RepositryDetails = () => {
  const [userDatas, setUserDatas] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [readMe, setReadMe] = useState("");

  let { repo, name } = useParams();

  const getProfileDetails = async () => {
    try {
      let { tree } = await getUserRepoFiles(name, repo);
      setUserDatas(tree);
    } catch (error) {
      setErrorMsg(error.response.data.message);
    }
  };
  useEffect(() => {
    getProfileDetails();
  }, [repo, name]);
  useEffect(() => {
    getReadme();
  }, [repo, name]);

  const getRead = async (sha) => {
    try {
      let { content } = await getReadme(name, repo, sha);
      setReadMe(base64.decode(content));
    } catch (error) {
      setErrorMsg(error.response.data.message);
    }
  };
  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
        paddingTop: "20px",
      }}
    >
      <p>{errorMsg}</p>
      <ul>
        {userDatas.map((data) => {
          if (data.path == "README.md" || data.path == "readme.md") {
            {
              getRead(data.sha);
            }
          }
          return <li>{data.path}</li>;
        })}
      </ul>
      <h4>{readMe ? "README.md" : ""}</h4>
      <p
        style={{
          whiteSpace: "pre-line",
        }}
      >
        {readMe}
      </p>
      <br />
    </div>
  );
};

export default RepositryDetails;
