import axios from "axios";
import { API_BASE_ADDRESS } from "../../../configuration/api/apiConfiguration";

export function getAllProjects() {
  const URL = mountURLgetAllProjects();

  axios.get(URL).then((res) => {
    const projects = res.data;
    alert(JSON.stringify(projects));
  });
}

const mountURLgetAllProjects = (): string => API_BASE_ADDRESS + "/Project";
