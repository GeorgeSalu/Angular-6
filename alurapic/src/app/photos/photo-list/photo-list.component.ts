import { PhotoService } from './../photo/photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Object[] = [];

  constructor(private photoservice: PhotoService) {
  }

  ngOnInit(): void {
    this.photoservice
          .listFromUser('flavio')
          .subscribe(photos => this.photos = photos);
  }

}
