import { Router } from '@angular/router';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';

@Component({
  templateUrl: './singup.component.html'
})
export class SingUpComponent implements OnInit{

	signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userNotTokenValidatorService: UserNotTakenValidatorService,
              private signupService: SignUpService,
              private router: Router) {}

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
		});
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signupService
        .signup(newUser)
        .subscribe(() => this.router.navigate(['']) );
  }

}
