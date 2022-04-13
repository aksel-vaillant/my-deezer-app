import { Injectable } from '@angular/core';
import { DataSearchArtists, DataSearchAlbums, DataSearchTracks} from './deezer.data';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DeezerService {

  readonly TAG : string = "DeezerService";

  constructor(private http: HttpClient) {}

  getArtists(artist:string):Promise<DataSearchArtists> { 
    console.log(`${this.TAG} getArtists ${artist}`);
    const url:string = `https://api.deezer.com/search/artist?q=artist:"${encodeURI(artist)}"`;
    console.log(`${this.TAG} url: ${url}`);
    return new Promise(resolve => { 
      this.http.get(url).subscribe(data => {
      let json: DataSearchArtists = data as DataSearchArtists ;
      resolve(json); }, err => {
        console.log(err); 
      });
    }); 
  }

  getAlbums(artistID:string):Promise<DataSearchAlbums> { 
    console.log(`${this.TAG} getAlbums ${artistID}`);
    const url:string = "https://api.deezer.com/artist/" + artistID + "/albums";
    console.log(`${this.TAG} url: ${url}`);
    return new Promise(resolve => { 
      this.http.get(url).subscribe(data => {
      let json: DataSearchAlbums = data as DataSearchAlbums ;
      resolve(json); }, err => {
        console.log(err); 
      });
    }); 
  }

  getTracks(albumID:string):Promise<DataSearchTracks> { 
    console.log(`${this.TAG} getTracks ${albumID}`);
    const url:string = "https://api.deezer.com/album/" + albumID;
    console.log(`${this.TAG} url: ${url}`);
    return new Promise(resolve => { 
      this.http.get(url).subscribe(data => {
      let json: DataSearchTracks = data as DataSearchTracks ;
      resolve(json); }, err => {
        console.log(err); 
      });
    }); 
  }



}

