# Jammming

Jammming is a React web application that allows users to search for songs on Spotify, create custom playlists, and save them directly to their Spotify account. This project was built using **React** and **Vite**, with full integration of the Spotify Web API using the **Authorization Code with PKCE** flow.

---

## Features

- Search Spotify for tracks by artist, song name, or album
- Add tracks to a custom playlist
- Remove tracks from the playlist
- Rename playlists
- Save playlists to your Spotify account
- Full authentication with Spotify using PKCE flow
- Responsive, component-based UI

---

## Live Demo Netlify

https://jammmingrb.netlify.app/

---

## Project Structure

```
src/
├── assets/
├── components/
│ ├── Playlist/
│ ├── SearchBar/
│ ├── SearchResults/
│ ├── Track/
│ └── Tracklist/
├── App.jsx
├── App.module.css
├── index.css
├── index.jsx
├── Spotify.js
```

Build & config files:

index.html

vite.config.js

package.json

.eslint.config.js

README.md

---

## Installation & Setup

1. **Clone the repository**  
    git clone <your-repo-url>  
    cd Jammming

2. **Install dependencies**  
    npm install

3. **Run the app locally**  
    npm run dev

4. **Access the app**  
    Open your browser at `http://localhost:5173` (or the address provided by Vite).

> The app will prompt you to log in to Spotify the first time you search or save a playlist.


---

## How It Works

1. **Authentication**  
   The app uses Spotify’s Authorization Code with PKCE flow to securely access a user’s account. Tokens are stored in localStorage and automatically refreshed when expired.

2. **Searching Tracks**  
   Enter a search term in the search bar. The app queries Spotify’s `/v1/search?type=track` endpoint and displays results including song name, artist, album, and a “+” button to add tracks.

3. **Creating a Playlist**  
   - Add tracks from the search results.
   - Enter a playlist name.
   - Click “Save to Spotify” to create the playlist in your Spotify account.

4. **Managing Tracks**  
   - Tracks can be removed using the “-” button.
   - Playlists can be renamed by typing directly into the playlist name field.

---

## Component Overview

- **SearchBar** — Search input + button  
- **SearchResults** — Displays list of search results  
- **Tracklist** — Reusable list container  
- **Track** — Displays track info, album art, and buttons  
- **Playlist** — Editable playlist + track list  

---

## Technologies Used

### Frontend
- React (Functional Components + Hooks)
- Vite
- CSS Modules

### Spotify Integration
- Spotify Web API
- OAuth 2.0 PKCE Flow
- Fetch API

### Other
- LocalStorage for token persistence
- Netlify Deployment

---

## Contributing

If you want to contribute to Jammming:

1. Fork the repository  
2. Create a new branch for your feature or bugfix  
3. Commit changes with meaningful messages  
4. Push your branch and open a Pull Request

---

## License

This project is for educational use and follows Spotify API’s terms.