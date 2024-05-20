import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EstimateComponent } from './estimate/estimate.component';
import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';


export const routes: Routes = [
    {
        path:'navbar',
        component:NavbarComponent
    },
    {
        path:'footerbar',
        component:FooterComponent
    },
    {
        path:'estimate',
        component:EstimateComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'contact-form',
        component:ContactFormComponent
    }

];
