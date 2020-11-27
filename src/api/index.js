// proxy to cors fix
const proxy = "https://cors-anywhere.herokuapp.com/";
// jobs api
const api_url = "https://jobs.github.com/positions.json";

export const getJobs = async (page, location, title, fullTime) => {
  // api params
  const complete_api =
    proxy +
    api_url +
    `?page=${page}&location=${location}&description=${title.toLowerCase()}&full_time=${fullTime}`;

  const res = await fetch(complete_api);

  const data = await res.json();

  return data;
};
