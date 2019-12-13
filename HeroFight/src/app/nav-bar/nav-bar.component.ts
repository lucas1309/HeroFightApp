import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  public GoToHome(){
    console.log("oie");
  }
  
  public GoToCredits(){
    console.log("Tchau");
  }

  ngOnInit() {
  }

}
