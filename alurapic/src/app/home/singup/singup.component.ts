import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './singup.component.html'
})
export class SingUpComponent implements OnInit{

	signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userNotTokenValidatorService: UserNotTakenValidatorService) {}

	ngOnInit(): void {
		this.signupForm = this.formBuilder.group({
			email: ['',
				[
					Validators.required,
					Validators.email,
				]
			],
			fullName: ['',
				[
					Validators.required,
					Validators.minLength(2),
					Validators.maxLength(40)
				]
			],
			userName: ['',
				[
					Validators.required,
					Validators.pattern(/^[a-z0-9_\-]+$/),
					Validators.minLength(2),
					Validators.maxLength(30)
        ],
        this.userNotTokenValidatorService.checkUserNameTaken()
			],
			password: ['',
				[
					Validators.required,
					Validators.minLength(8),
					Validators.maxLength(14)
				]
			]
		})
	}

}
