import { Component, OnInit  , inject} from '@angular/core';
import { CompetitionCardComponent } from '../../components/cards/competition-card/competition-card.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeCardComponent } from '../../components/cards/welcome-card/welcome-card.component';

interface Competition {
  id: string;
  code: string;
  location: string;
  date: string;
  speciesType: string;
  minParticipants: number;
  maxParticipants: number;
  openRegistration: boolean;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CompetitionCardComponent ,
            CommonModule ,
            HttpClientModule ,
            ReactiveFormsModule,
            FormsModule ,
            WelcomeCardComponent
    ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
