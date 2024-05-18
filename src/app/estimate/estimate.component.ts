import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-estimate',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './estimate.component.html',
  styleUrl: './estimate.component.scss'
})
export class EstimateComponent {

}
