import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { DataService } from './data.service';
import { Media } from './media';

@Component({
  selector: 'media-detial',
  templateUrl: './media-detial.component.html',
  styleUrls: ['./media-detial.component.css'],
})

export class MediaDetialComponent implements OnInit {
  constructor(
    private DS: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  media: Media;

  selectedMedia: Media;

  ngOnInit(): void {
    this.route.params.subscribe(params => console.log(params));

    this.route.paramMap
      .switchMap((params: ParamMap) => this.DS.getSelectedMedia(+params.get('id')))
      .subscribe(media => this.selectedMedia = media);
  }
  
  //go back
  goBack(): void {
    this.location.back();
  }//end go back


} //end class MediaDetialComponent

