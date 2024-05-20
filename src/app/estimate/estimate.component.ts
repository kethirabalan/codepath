import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-estimate',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule,ContactFormComponent],
  templateUrl: './estimate.component.html',
  styleUrl: './estimate.component.scss'
})
export class EstimateComponent {

}
