import { Component } from '@angular/core';
import { DeezerService } from '../service/deezer.service';
import { DataSearchArtists, Artist } from '../service/deezer.data';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  readonly TAG : string = "HomePage";

  listArtist : Artist[] = [];

  constructor(private apiDeezer : DeezerService, private route : Router) {}

  async onSearchArtist(event : any) {
    let request = event.target.value;
    console.log(`${this.TAG} onSearchArtist ${request}`);

    let response : DataSearchArtists = await this.apiDeezer.getArtists(request);
    console.log(`${this.TAG} response ` + response);

    this.listArtist = response.data;
    //console.log(`${this.TAG} listArtist ${JSON.stringify(this.listArtist)}`);
  }

  goToListAlbum(id : number){
    console.log(`${this.TAG} goToListAlbum ` + id);
    this.route.navigate(["list-album/" + id]);
  }
}
