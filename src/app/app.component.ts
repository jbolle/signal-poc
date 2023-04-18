import { Component, OnInit, signal, computed } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user = signal({
    name: 'Bolle',
    surname: 'Julien',
    isConnected: false
  });

  fullName = computed(() => {
    return `${this.user().surname} ${this.user().name}` 
  }); 

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    // this.pokemonService.getAll().subscribe(x => {
    //   console.log(x);
    // })
  }

  connect() {
    this.user.mutate(u => {
      u.isConnected = true;
    });
  }
}
