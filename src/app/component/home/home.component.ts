import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private routes:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit() {
  }
  navig(item:string){
    if(item === 'home'){
        this.routes.navigate(['/home']);
    }else if(item === 'about'){
        this.routes.navigate(['/about'])
    }
  }
  onLogin(){
    
    this.routes.navigate(['/contact']);
  }
}