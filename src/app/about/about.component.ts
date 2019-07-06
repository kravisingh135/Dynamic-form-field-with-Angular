import { Component, OnInit } from '@angular/core';
// import { Observable, Subscriber } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  allData:any = '';
  constructor(private dataService : DataService) { }

  ngOnInit() {
    return this.dataService.getPostData().subscribe((posts) => {      
      var allPosts = <Array<any>>posts;
      var postItems = allPosts.map(element => {
        return element;
      });
      this.allData = postItems;
    })
  }

}
