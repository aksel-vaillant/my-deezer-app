import { Component, OnInit } from '@angular/core';
import { DeezerService } from '../service/deezer.service';
import { Album, DataSearchAlbums } from '../service/deezer.data';

@Component({
  selector: 'app-list-album',
  templateUrl: './list-album.page.html',
  styleUrls: ['./list-album.page.scss'],
})
export class ListAlbumPage implements OnInit {
  constructor(private apiDeezer : DeezerService) {}

  ngOnInit() {}

  readonly TAG : string = "ListAlbum";

  listAlbum : Album[] = [];

  async onSearchAlbum(event : any) {
    let request = event.target.value;
    console.log(`${this.TAG} onSearchAlbum ${request}`);

    let response : DataSearchAlbums = await this.apiDeezer.getAlbums(request);
    console.log(`${this.TAG} response ` + response);

    this.listAlbum = response.data;
    console.log(`${this.TAG} listAlbum ${JSON.stringify(this.listAlbum)}`);
  }
}
