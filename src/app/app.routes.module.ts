import { Routes } from '@angular/router'
import { BookingsComponent } from './component/bookings/bookings.component';
import { HomeComponent } from './component/home/home.component';
import { ViewComponent } from './component/view/view.component';
import { EventComponent } from './component/event/event.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
export const routes:Routes = [
    {path:'',component:BookingsComponent},{path:'view',component:ViewComponent},
    {path:'home',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'about',component:AboutComponent},
    {path:'booking',component:BookingsComponent},
];