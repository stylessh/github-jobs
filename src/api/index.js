const proxy = "https://cors-anywhere.herokuapp.com/";
const api_url = "https://jobs.github.com/positions.json";

export const getJobs = async (page, location) => {
  const res = await fetch(
    proxy + api_url + `?page=${page}&location=${location}`
  );
  const data = await res.json();

  return data;
};
