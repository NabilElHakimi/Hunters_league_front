import { Component } from '@angular/core';
import { TopThreeComponent } from "../../components/cards/top-three/top-three.component";

@Component({
  selector: 'app-top-three-page',
  standalone: true,
  imports: [TopThreeComponent],
  templateUrl: './top-three-page.component.html',
  styleUrl: './top-three-page.component.css'
})
export class TopThreePageComponent {

}
