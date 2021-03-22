import apiHandler from "./base";

export async function getProfile(name) {
  const { data } = await apiHandler().get("/users/" + name);
  return data;
}

export async function getUserRepo(name) {
  const { data } = await apiHandler().get("/users/" + name + "/repos");
  return data;
}

export async function getReadme(name, repo, sha) {
  const { data } = await apiHandler().get(
    "/repos/" + name + "/" + repo + "/git/blobs/" + sha
  );
  return data;
}

export async function getUserRepoFiles(name, repo) {
  const { data } = await apiHandler().get(
    "/repos/" + name + "/" + repo + "/git/trees/master"
  );
  return data;
}
