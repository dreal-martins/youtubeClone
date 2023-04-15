import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "760cb4cdb5mshb4c49d4d3dc9a86p1d74edjsn18bc539ed746",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const axiosGetReq = async (url) => {
  const res = await axios.get(`${BASE_URL}/${url}`, options);
  return res.data;
};
