import { UserService } from './../../services/user-service/user.service';
import { Component, OnInit } from '@angular/core';
import { LoaderAdminComponent } from '../../../components/loader-admin/loader-admin.component';
import { CompetitionCardComponent } from "../../../components/cards/competition-card/competition-card.component";
import { LoaderComponent } from "../../../components/loader/loader.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [LoaderAdminComponent , CommonModule],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent implements OnInit {
  isLoading: boolean = false;
  data : any = [];
  constructor(private userService : UserService) {}
  ngOnInit(): void {
    this.getUsers();
    this.isLoading = false;
  }





  getUsers() {
    this.userService.getUsers(0).subscribe((res: any) => {
      console.log(res);
      this.data = res.content;
      console.log(this.data);
      });
  }

}
