// proxy to cors fix
const proxy = "https://cors-anywhere.herokuapp.com/";
// jobs api
const baseApiURL = "https://jobs.github.com/";

export const getJobs = async (page, location, title, fullTime) => {
  // api params
  const complete_api =
    proxy +
    baseApiURL +
    `positions.json?page=${page}&location=${location}&description=${title.toLowerCase()}&full_time=${fullTime}`;

  const res = await fetch(complete_api);

  const data = await res.json();

  return data;
};

export const getJob = async (id) => {
  const complete_api = proxy + baseApiURL + `positions/${id}.json`;

  const res = await fetch(complete_api);
  const data = await res.json();

  console.log(data);

  return data;
};
