import { Component, OnInit } from '@angular/core';
import { RouterModule } from "@angular/router";
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent 
{
  name = 'angular';
  title = "My Page";
  //signinForm: FormGroup;
  //user: SocialUser;
  /*constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
}

signInWithFB(): void {
  this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
}
signOut(): void {
  this.authService.signOut();
}*/


}

