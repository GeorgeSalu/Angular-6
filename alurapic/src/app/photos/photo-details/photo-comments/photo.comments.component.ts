import { Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { PhotoComment } from '../../photo/photo-comment';
import { PhotoService } from '../../photo/photo.service';

@Component({
  selector: 'ap-photo-comments',
  templateUrl: './photo.comments.component.html'
})
export class PhotoCommentsComponent implements OnInit{

  @Input() photoId: number;

  comments$: Observable<PhotoComment[]>;

  constructor(private photoService: PhotoService){}

  ngOnInit(): void {
    this.comments$ = this.photoService.getComment(this.photoId);
  }

}
