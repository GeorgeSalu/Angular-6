import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { PhotoComment } from '../../photo/photo-comment';
import { PhotoService } from '../../photo/photo.service';

import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'ap-photo-comments',
  templateUrl: './photo.comments.component.html',
  styleUrls: ['photo.comments.css']
})
export class PhotoCommentsComponent implements OnInit{

  @Input() photoId: number;
  commentForm: FormGroup;

  comments$: Observable<PhotoComment[]>;

  constructor(private photoService: PhotoService,
              private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.comments$ = this.photoService.getComment(this.photoId);
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(40)]
    })
  }

  save() {
    const comment = this.commentForm.get('comment').value as string;
    this.comments$ = this.photoService
        .addComment(this.photoId, comment)
        .pipe(switchMap(() => this.photoService.getComment(this.photoId)))
        .pipe(tap(() => {
          this.commentForm.reset();
        } ))
  }

}
