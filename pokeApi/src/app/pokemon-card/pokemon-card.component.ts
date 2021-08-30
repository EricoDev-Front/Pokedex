import { Component, Input } from '@angular/core';
import { getPokemonImage, getPokemonNumber, Pokemon } from 'src/_Model/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.less']
})
export class PokemonCardComponent {
@Input('pokemon')
public pokemon!: Pokemon;

public getPokemonNumber = getPokemonNumber;
public getPokemonImage = getPokemonImage;
}

