import { Component } from '@angular/core';
import { LoaderAdminComponent } from '../../../components/loader-admin/loader-admin.component';
import { CompetitionCardComponent } from "../../../components/cards/competition-card/competition-card.component";
import { LoaderComponent } from "../../../components/loader/loader.component";

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [LoaderAdminComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent {

}
