import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  firstname : '';
  surname  : '';
  age  : '';
  address  : '';
  
  pages=[

    {name: 'events', page: 'events'},
    {name:'view', page: 'view'},
  
  ]
  constructor(private route: ActivatedRoute) {
  }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params =>{

      this.firstname =params['name'];
      this.surname =params['surname'];
      this.age =params['age'];
      this.address = params['date'];

      
    });
    console.log(this.firstname)
      console.log(this.surname)
      console.log(this.age)
      console.log(this.address)
      console.log("****************")
  }
}

