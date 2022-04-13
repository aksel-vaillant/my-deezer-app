import { Component, OnInit } from '@angular/core';
import { DeezerService } from '../service/deezer.service';
import { Album, DataSearchAlbums } from '../service/deezer.data';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-album',
  templateUrl: './list-album.page.html',
  styleUrls: ['./list-album.page.scss'],
})
export class ListAlbumPage implements OnInit {
  constructor(private apiDeezer : DeezerService, private activatedRoute: ActivatedRoute, private route: Router) {}

  readonly TAG : string = "ListAlbum";

  listAlbum : Album[] = [];

  async ngOnInit() {
    let request = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(`${this.TAG} ngOnInit request ${request}`);
    
    let response : DataSearchAlbums = await this.apiDeezer.getAlbums(request);
    console.log(`${this.TAG} response ` + response);

    this.listAlbum = response.data;    
    //console.log(`${this.TAG} listAlbum ` + JSON.stringify(this.listAlbum));
  }

  goToListTracks(id : number){
    console.log(`${this.TAG} goToListTracks ` + id);
    this.route.navigate(["list-track/" + id]);
  }
}
