import { UserService } from './../user/user.service';
import { User } from './../user/user';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

	user$: Observable<User>;


	constructor(userService: UserService) {
		this.user$ = userService.getUser();

	}


}
