import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from './data.service';
import { Media } from './media';


@Component ({
  selector: 'media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
})


export class MediaComponent {

  constructor(
    private router: Router,
    private DS: DataService) { }

  media: Media[];
  selectedMedia: Media;

  ngOnInit(): void {
    this.getAllMedia();
  }

  // get selected media
  getSelectedMedia(): void {
    let id: Number;
    this.DS.getSelectedMedia(id).then(media => this.selectedMedia = media);
  }

  //get all the media
  getAllMedia(): void {
    this.DS.getAll().then(media => this.media = media);
  }

  //navigate to the selected meia detail element
  gotoDetail(media: Media): void {
    this.router.navigate(['/detail', media.id]);
  }

}//end class Media Component
