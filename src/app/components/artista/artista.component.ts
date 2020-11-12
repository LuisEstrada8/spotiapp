import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  loading: boolean;

  artista: any = {};

  topTrack: any[] =[];

  constructor(private router:ActivatedRoute, private spotify:SpotifyService) { 

    this.loading = true;

  this.router.params.subscribe(params =>{
  this.getArtista(params['id']);
  this.getTopTracks(params['id']);
  });

  }

  getArtista(id: string){
  this.spotify.getArtista (id).subscribe(artista=>{
    console.log(artista);
    this.artista = artista;
    this.loading = false;
  });

  }

  getTopTracks( id:string){

  this.spotify.getToptracks(id).subscribe(toptrack =>{
  console.log(toptrack);
  this.topTrack=toptrack;
  });
  }
}
