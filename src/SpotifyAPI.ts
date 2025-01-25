import axios from "axios";
import queryString from "query-string";

export const getAuthToken = async () => {
  const client_id: string = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const client_secret: string = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
  const redirect_uri: string = import.meta.env.VITE_REDIRECT_URI;
  const scopes = 'user-read-private user-read-email';

  const apiURL = 'https://accounts.spotify.com/api/token';

  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    auth: {
      username: client_id,
      password: client_secret
    },
  };

  const data = {
    grant_type: 'client_credentials'
  };

  try {
    const response = await axios.post(apiURL, queryString.stringify(data), headers);
    localStorage.setItem("access_token",response.data.access_token);
    console.log(response);
  } catch(err) {
    console.log(err);
  }
};

export const getSong = async () => {
  getAuthToken();
}

