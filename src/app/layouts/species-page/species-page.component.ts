import { Component } from '@angular/core';
import { SpecieCardComponent } from '../../components/cards/specie-card/specie-card.component';
import { CompetitionCardComponent } from "../../components/cards/competition-card/competition-card.component";

@Component({
  selector: 'app-species-page',
  standalone: true,
  imports: [SpecieCardComponent],
  templateUrl: './species-page.component.html',
  styleUrl: './species-page.component.css'
})
export class SpeciesPageComponent {

}
