import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>;
  constructor(private route: ActivatedRoute, private photoService: PhotoService) { }


  ngOnInit(): void {
    this.photo$ = this.photoService.findById(
      this.route.snapshot.params.photoId
    )
  }

}