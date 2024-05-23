import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EstimateComponent } from './estimate/estimate.component';
import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ServicesComponent } from './services/services.component';
import { IndustriesComponent } from './industries/industries.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ClientsComponent } from './clients/clients.component';
import { CareersComponent } from './careers/careers.component';


export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
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
        path:'contact-form',
        component:ContactFormComponent
    },
    {
        path:'Services',
        component:ServicesComponent
    },
    {
        path:'Industries',
        component:IndustriesComponent
    },
    {
        path:'Clients',
        component:ClientsComponent
    },
    {
        path:'About-Us',
        component:AboutUsComponent
    },
    {
        path:'Careers',
        component:CareersComponent
    }

];
