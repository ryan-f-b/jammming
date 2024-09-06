let accessToken;
const clientID = '0b4ea255545345cbbb084c75b373a93d';
const redirectURL = 'http://localhost:3000';

const Spotify = {

    // Function to get access token which will allow us to access Spotify API
    getAccessToken() {

        // Returning the access token if the accessToken variable is already declared.
        if (accessToken) {
            return accessToken;
        }


        const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

        // Setting the access token and expiry time if user is already signed into Spotify
        if (tokenInURL && expiryTime) {
            accessToken = tokenInURL[1];
            const expiresIn = Number(expiryTime[1]);
            window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
            window.history.pushState('Access token', null, "/");
            return accessToken;
        }

        // Redirecting user to Spotify to sign in if no access token has been declared in previous steps.
        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURL}`;
        window.location = redirect;
    },

    // Function to populate the search field based on the term that was passed into the search field.
    search(term) {
        accessToken = Spotify.getAccessToken();
        
        // Doing a fetch request to search the Spotify tracks API using the passed in search term.
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${accessToken}` },
        })

        // Converting the response to JSON.
        .then(response => response.json())
        .then(jsonResponse => {

            // Logging an error to the console if there was no JSON response.
            if (!jsonResponse) {
                console.error('Response error');
            }

            // Returning the track details as an object
            return jsonResponse.tracks.items.map(t => ({
                id: t.id,
                name: t.name,
                artist: t.artists[0].name,
                album: t.album.name,
                uri: t.uri,
            }))
        })
    },

    // Function to handle saving the created playlist to a users Spotify account.
    savePlaylist(name, trackURIs) {

        // Returning nothing is the playlistName and trackURIs parameters are not populated.
        if (!name || !trackURIs) {
            return;
        }
        
        const aToken = Spotify.getAccessToken();
        const header = { Authorization: `Bearer ${aToken}` };
        let userId;
        
        // Fetching the users Spotify account with a GET request
        return fetch(`https://api.spotify.com/v1/me`, {
            method: 'GET',
            headers: header
        })
        .then(response => response.json())
        .then(jsonResponse => {
            userId = jsonResponse.id;

            let playlistId;

            // Making a POST request to send the playlistName to the users Spotify account.
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                method: 'POST',
                headers: header,
                body: JSON.stringify({name: name}),
            })
            .then(response => response.json())
            .then(jsonResponse => {
                playlistId = jsonResponse.id;

                // Making a POST request to send the playlist tracks to the users Spotify account.
                return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                    method: 'POST',
                    headers: header,
                    body: JSON.stringify({uris: trackURIs}),
                })
            })
        });
    },
}

export { Spotify };