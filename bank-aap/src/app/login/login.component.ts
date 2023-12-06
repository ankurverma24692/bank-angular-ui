import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public loginForm! : FormGroup;
  
  constructor(
    private route: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    this.authenticationService.login(
      this.loginForm.get('username')!.value,
      this.loginForm!.get('password')!.value
    );
  }


goToRegistration() {
  this.route.navigate(["/registration"]);
}
}
