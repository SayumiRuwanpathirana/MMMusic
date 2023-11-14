const apikey:string = 'ad85f38bbc6c4ecbb1979a9585410ed5';






export const getAlbum: string = "https://api.spotify.com/v1/albums/{4aawyAB9vmqN3uQ7FjRGTy}"

export const getAlbumTracks: string = "https://api.spotify.com/v1/albums/{4aawyAB9vmqN3uQ7FjRGTy}/tracks"

export const GetUserSavedAlbums: string = "https://api.spotify.com/v1/me/albums" 

export const GetNewReleases: string = "https://api.spotify.com/v1/browse/new-releases"

export const GetArtist: string = "https://api.spotify.com/v1/artists/{0TnOYISbd1XYRBk9myaseg}"

export const GetArtistAlbums: string = "https://api.spotify.com/v1/artists/{0TnOYISbd1XYRBk9myaseg}/albums"


export const GetArtistTopTracks: string = "https://api.spotify.com/v1/artists/{0TnOYISbd1XYRBk9myaseg}/top-tracks"


export const GetAvailableGenreSeeds: string = "https://api.spotify.com/v1/recommendations/available-genre-seed "


export const  GetPlaybackState: string = "https://api.spotify.com/v1/me/player "


export const   GetCurrentlyPlayingTrack: string = "https://api.spotify.com/v1/me/player/currently-playing"


export const StartResumePlayback: string = "https://api.spotify.com/v1/me/player/play"

//device_id: -

export const  PausePlayback: string = "https://api.spotify.com/v1/me/player/pause "


export const SkipToNext: string = "https://api.spotify.com/v1/me/player/next "


export const  SkipToPrevious: string = "https://api.spotify.com/v1/me/player/previous "


export const SetRepeatMode: string = "https://api.spotify.com/v1/me/player/repeat"

 

export const GetPlaylist:string = "https://api.spotify.com/v1/playlists/{3cEYpjA9oz9GiPac4AsH4n}"




export const UpdatePlaylistItems:string = "https://api.spotify.com/v1/playlists/{3cEYpjA9oz9GiPac4AsH4n}/tracks"



export const AddItemstoPlaylist: string = "https://api.spotify.com/v1/playlists/{3cEYpjA9oz9GiPac4AsH4n}/tracks"




export const RemovePlaylistItems: string = "https://api.spotify.com/v1/playlists/{3cEYpjA9oz9GiPac4AsH4n}/tracks"




export const  CreatePlaylist: string = "https://api.spotify.com/v1/users/{smedjan}/playlists"





export const  SearchforItem: string = "https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=album"



export const GetTrack: string = "https://api.spotify.com/v1/tracks/{11dFghVXANMlKmJXsNCbNl}"


export const GetUserSavedTracks: string = "https://api.spotify.com/v1/me/tracks"
 

export const  RemoveUserSavedTracks: string = "https://api.spotify.com/v1/me/tracks"

export const  GetCurrentUserProfile: string =    "https://api.spotify.com/v1/me"

export const GetUsersTopItems: string = "https://api.spotify.com/v1/me/top/{type}"




export const  GetUserProfile: string ="https://api.spotify.com/v1/users/{smedjan}"


export const PlaylistCoverImage: string = "https://api.spotify.com/v1/playlists/{3cEYpjA9oz9GiPac4AsH4n}/images"





























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