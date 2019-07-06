import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  city = [
    {'name' : 'mumbai', 'country' : 'india'},
    {'name' : 'delhi', 'country' : 'india'},
    {'name' : 'London', 'country' : 'England'},
    {'name' : 'Beijing', 'country' : 'China'},
    {'name' : 'Singapore', 'country' : 'Malaysia'},
    {'name' : 'Tokyo', 'country' : 'Japan'},
    {'name' : 'Paris', 'country' : 'France'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
