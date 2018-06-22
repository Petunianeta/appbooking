import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookingsComponent } from './component/bookings/bookings.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { ViewComponent } from './component/view/view.component';
import { EventComponent } from './component/event/event.component';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes.module';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { DetailsComponent } from './component/details/details.component'

@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ViewComponent,
    EventComponent,
    NavBarComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
