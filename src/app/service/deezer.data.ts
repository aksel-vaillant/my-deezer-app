/**
 * PART 1 - Avec l'artiste et le search
 */

export class Artist {
    id: number;
    name: string;
    link: string;
    picture: string; 
    picture_small: string; 
    picture_medium: string; 
    picture_big: string; 
    picture_xl: string; 
    nb_album: number; 
    nb_fan: number;
    radio: boolean; 
    tracklist: string; 
    type: string;
}

export class DataSearchArtists {
    data: Artist[]; 
    total: number;
    next:string
}

/**
 * PART 2 - Avec l'album et le search
 */

export class Album {
    id: number;
    title: string;
    link: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    md5_image: string;
    genre_id: number;
    fans: number;
    release_date: string;
    record_type: string;
    tracklist: string;
    explicit_lyrics: boolean;
    type: string;
}

export class DataSearchAlbums {
    data: Album[];
    total: number;
    next: string;
}

/**
 * PART 3 - Avec les tracks et le search
 */

export class DataSearchTracks {
    id: number;
    title: string;
    upc: string;
    link: string;
    share: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    md5_image: string;
    genre_id: number;
    genres: Genres;
    label: string;
    nb_tracks: number;
    duration: number;
    fans: number;
    release_date: string;
    record_type: string;
    available: boolean;
    tracklist: string;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    contributors: Contributor[];
    artist: ArtistTrack;
    type: string;
    tracks: Tracks;
  }
  export class Genre {
    id: number;
    name: string;
    picture: string;
    type: string;
  }
  
  export class Genres {
    data: Genre[];
  }
  
  export class Contributor {
    id: number;
    name: string;
    link: string;
    share: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    radio: boolean;
    tracklist: string;
    type: string;
    role: string;
  }
  
  export class ArtistTrack {
    id: number;
    name: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    tracklist: string;
    type: string;
  }
  
  export class Artist2 {
    id: number;
    name: string;
    tracklist: string;
    type: string;
  }
  
  export class Track {
    id: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    link: string;
    duration: number;
    rank: number;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    preview: string;
    md5_image: string;
    artist: Artist2;
    type: string;
  }
  
  export class Tracks {
    data: Track[];
  }