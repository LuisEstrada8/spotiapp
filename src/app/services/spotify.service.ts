import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('prueba');
   }

  getQuery( query:string ){

  const url = `https://api.spotify.com/v1/${query}`;

  const headers = new HttpHeaders({
    'Authorization': 'Bearer BQCruMZz18ssXEOX4UkjoVw1ktlYigzuu4lVOjl3vq5rS3XFuEsCV36FYN4iQ-bNIGmEkhyIkSAXY7ZfYrQ'
  });

  return this.http.get(url, {headers});

  }

   getNewReleases(){

    return this.getQuery('browse/new-releases')
    .pipe(map( data => data['albums'].items));
            }

   getArtistas(termino: string){

      return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map( data => data['artists'].items));
            }

    getArtista(id: string){
    return this.getQuery(`artists/${id}`);
     //.pipe(map( data => data['artists'].items));
                    }

                    getToptracks(id: string){
                      return this.getQuery(`artists/${id}/top-tracks?country=us`)
                       .pipe(map( data => data['tracks']));
                                      }
                

   }
  

