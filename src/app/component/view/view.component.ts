import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
   firstname: '';
   surname: '';
   email: '';
   address:'';
   city:'';
   age:'';
   checkin:'';
   checkout:'';
   contact:'';
   specialrequest:'';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params =>{

      this.firstname =params['name'];
      this.surname =params['surname'];
      this.email =params['email']
      this.age =params['age'];
      this.address = params['address'];
      this.city =params['city'];
      this.checkin =params['checkin'];
      this.checkout =params['checkout'];
      this.contact =params['contact'];
      this.specialrequest =params['specialrequest'];
      
    });
    console.log(this.firstname);
    console.log(this.surname);
    console.log(this.email);
    console.log(this.age);
    console.log(this.address);
    console.log(this.city);
    console.log(this.checkin);
    console.log(this.checkout);
    console.log(this.contact);
    console.log(this.specialrequest);
  }

}
