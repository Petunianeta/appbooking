import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  firstame = '';
  surname = '';
  age = '';
  address = '';
    constructor(private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.route.queryParams.subscribe(params =>{
        this.firstame =params['name'];
        this.surname =params['surname'];
        this.age =params['age'];
        this.address = params['address'];
        console.log(this.firstame);
        console.log(this.surname)
        console.log(this.age)
        console.log(this.address)
      });
  
    
    }
  }
  
    
  
