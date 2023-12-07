import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from '../services/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  public registrationForm! : FormGroup;
  
  constructor(
    private route: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.registrationForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    this.authenticationService.register(
      this.registrationForm.get('name')!.value,
      this.registrationForm.get('username')!.value,
      this.registrationForm!.get('password')!.value,
      this.registrationForm.get('role')!.value,
      this.registrationForm!.get('emall_id')!.value
    );
  }

  public checkPassword(){

  }

  goToLogin() {
    this.route.navigate(["/login"]);
  }
}
