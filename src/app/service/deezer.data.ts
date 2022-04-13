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

