const apikey:string = 'ad85f38bbc6c4ecbb1979a9585410ed5';

export const GetUserSavedAlbums: string = `https://api.spotify.com/v1/me/albums?api_key=${apikey}`;
export const GetNewReleases: string = `https://api.spotify.com/v1/browse/new-releases?api_key=${apikey}`;
export const GetAvailableGenreSeeds: string = `https://api.spotify.com/v1/recommendations/available-genre-seed?api_key=${apikey}`; 
export const GetPlaybackState : string = `https://api.spotify.com/v1/me/player?api_key=${apikey}`; 
export const GetCurrentlyPlayingTrack: string = `https://api.spotify.com/v1/me/player/currently-playing?api_key=${apikey}`; 
export const StartResumePlayback: string = `https://api.spotify.com/v1/me/player/play?api_key=${apikey}`; 
export const PausePlayback: string = `https://api.spotify.com/v1/me/player/pause?api_key=${apikey}`; 
export const SkipToNext: string = `https://api.spotify.com/v1/me/player/next?api_key=${apikey}`; 
export const SkipToPrevious: string = `https://api.spotify.com/v1/me/player/previous?api_key=${apikey}`; 
export const  SeekToPosition:  string = `https://api.spotify.com/v1/me/player/seek?api_key=${apikey}`; 
export const  SetRepeatMode:  string = `https://api.spotify.com/v1/me/player/repeat?api_key=${apikey}`; 

export const  GetUserSavedTracks:  string = `https://api.spotify.com/v1/me/tracks?api_key=${apikey}`; 
export const  GetCurrentUserProfile:  string = `https://api.spotify.com/v1/me?api_key=${apikey}`; 
//export const  :  string = `  ?api_key=${apikey}`; 

export const  SearchforItem =(keyword:string) => {
    return `https://api.spotify.com/v1/search?api_key=${apikey}&query=${keyword}`
};

export const getAlbum = (id: number) => {
    return ` https://api.spotify.com/v1/albums/${id}?api_key=${apikey}`;
};

export const GetArtist = (id: number) => {
    return `https://api.spotify.com/v1/artists/${id}?api_key=${apikey}`;
};

export const GetArtistAlbums = (id: number) => {
    return `https://api.spotify.com/v1/artists/${id}/albums?api_key=${apikey}`;
};


export const GetArtistTopTracks = (id: number) => {
    return `https://api.spotify.com/v1/artists/${id}/top-tracks?api_key=${apikey}`;
};


export const getalbumtracks = (id: number) => {
    return ` https://api.spotify.com/v1/albums/${id}/tracks?api_key=${apikey}`;
};

export const GetPlaylist = (id: number) => {
    return `https://api.spotify.com/v1/playlists/${id}?api_key=${apikey}`;
};

export const UpdatePlaylistItems = (id: number) => {
    return `https://api.spotify.com/v1/playlists/${id}/tracks?api_key=${apikey}`;
};

export const AddItemstoPlaylist = (id: number) => {
    return `https://api.spotify.com/v1/playlists/${id}/tracks?api_key=${apikey}`;
};


export const GetTrack = (id: number) => {
    return `https://api.spotify.com/v1/tracks/${id}?api_key=${apikey}`;
};

export const FollowPlaylist = (id: number) => {
    return `https://api.spotify.com/v1/playlists/${id}/followers?api_key=${apikey}`;
};

export const GetPlaylistCoverImage = (id: number) => {
    return `https://api.spotify.com/v1/playlists/${id}/images?api_key=${apikey}`;
};


    
























 
  






 














 
















// export const getAlbumTracks: string = "https://api.spotify.com/v1/albums/{4aawyAB9vmqN3uQ7FjRGTy}/tracks"





// export const RemovePlaylistItems: string = "https://api.spotify.com/v1/playlists/{3cEYpjA9oz9GiPac4AsH4n}/tracks"




// export const  CreatePlaylist: string = "https://api.spotify.com/v1/users/{smedjan}/playlists"



// export const  RemoveUserSavedTracks: string = "https://api.spotify.com/v1/me/tracks"

// export const GetUsersTopItems: string = "https://api.spotify.com/v1/me/top/{type}"




// export const  GetUserProfile: string ="https://api.spotify.com/v1/users/{smedjan}"
































// const config = {
//     issuer:"https://accounts.spotify.com",
//     clientId:"ad85f38bbc6c4ecbb1979a9585410ed5",
//     scopes: [
//       "user-read-email",
//       "user-library-read",
//       "user-read-recently-played",
//       "user-top-read",
//       "playlist-read-private",
//       "playlist-read-collaborative",
//       "playlist-modify-public" // or "playlist-modify-private"
//     ],
//     redirectUrl:"https://SoundSafari.com/callback"
//   }