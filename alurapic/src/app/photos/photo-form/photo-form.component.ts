import { Component, OnInit } from "@angular/core";

import { AuthService } from "../../core/auth/auth.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
    selector: 'ap-photo-form',
    templateUrl: './photo-form.component.html',
})
export class PhotoFormComponent implements OnInit {

    photoForm: FormGroup;
    file: File;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {

        this.photoForm = this.formBuilder.group({
            file: ['', Validators.required],
            description: ['', Validators.maxLength(300)],
            allowComments: [true]
        });
    }

    upload() {
      const description = this.photoForm.get('description').value;
      const allowComments = this.photoForm.get('allowComments').value;
    }
}
