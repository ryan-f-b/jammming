const clientId = 'c058f286c1a24a4eba5891acd176cf68';
const redirectUri = 'http://127.0.0.1:5173/';

let accessToken;

const Spotify = {
  getAccessToken() {
    // If we already have it, return it
    if (accessToken) return accessToken;

    // Check if access token is in the URL
    const tokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiryMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (tokenMatch && expiryMatch) {
      accessToken = tokenMatch[1];
      const expiresIn = Number(expiryMatch[1]);

      // Clear token after it expires
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);

      // Clean the URL so it doesn’t show the token
      window.history.pushState("Access Token", null, redirectUri);

      return accessToken;
    } else {
      // Redirect user to Spotify authorization
      const endpoint = "https://accounts.spotify.com/authorize";
      const scope = "playlist-modify-public";
      const url = `${endpoint}?client_id=${clientId}&response_type=token&scope=${scope}&redirect_uri=${encodeURIComponent(
        redirectUri
      )}`;

      window.location = url;
    }
  }
};

export default Spotify;