import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from './data.service';
import { Media } from './media';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private DS: DataService) { }

  media: Media[];
  selectedMedia: Media;

  ngOnInit(): void {
  }

  

}//end class app Component
