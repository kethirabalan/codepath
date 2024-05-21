import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FooterComponent,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
