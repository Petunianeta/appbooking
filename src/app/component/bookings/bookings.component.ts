import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  firstname: '';
  surname: '';
  email: '';
  address: '';
  city: '';
  age: '';
  checkin: '';
  checkout: '';
  contact: '';
  specialrequest: '';
  
  constructor(private routes:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit() {
  
  }
  onLogin(){
  
    console.log(this.firstname)
    console.log(this.surname)
    console.log(this.email)
    console.log(this.age)
    console.log(this.address)
    console.log(this.checkin)
    console.log(this.checkout)
    console.log(this.contact)
    console.log(this.specialrequest)

   this.routes.navigate(['/view'],{queryParams:{name: this.firstname, surname: this.surname, email: this.email, address: this.address, city: this.city, age: this.age,checkin: this.checkin, checkout: this.checkout, contact: this.contact, specialrequest: this.specialrequest }});


  }
}
