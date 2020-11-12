import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  
})
export class SearchComponent  {

  artistas: any[] = [];

  constructor(private spotify: SpotifyService) { 

  }

  Buscar( termino:string ){
    console.log(termino);
    this.spotify.getArtistas(termino)
    .subscribe( (data: any) =>{
      this.artistas = data ;
    });
  }

}
