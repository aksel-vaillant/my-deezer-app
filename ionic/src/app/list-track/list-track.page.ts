import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSearchTracks, Track, Tracks } from '../service/deezer.data';
import { DeezerService } from '../service/deezer.service';
import { ListenerPlayingTracks } from 'src/app/list-track/list-track-player';

@Component({
  selector: 'app-list-track',
  templateUrl: './list-track.page.html',
  styleUrls: ['./list-track.page.scss'],
})

export class ListTrackPage implements OnInit {

  constructor(private apiDeezer : DeezerService, private activatedRoute: ActivatedRoute, private route: Router) { 
  }

  readonly TAG : string = "ListTracks";

  listTrack : Track[] = [];

  async ngOnInit() {
    let request = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(`${this.TAG} ngOnInit request ${request}`);
    
    let response : DataSearchTracks = await this.apiDeezer.getTracks(request);
    console.log(`${this.TAG} response ` + response);

    this.listTrack = response.tracks.data;    
    //console.log(`${this.TAG} listAlbum ` + JSON.stringify(this.listAlbum));

    // Adding a listener... 
    // It will pause all other players when the current player is playing
    new ListenerPlayingTracks;

    // Lucas aurait pu le faire en quelques minutes et recherches.... xD
  }
}

