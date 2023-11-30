import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'poc-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private route: Router
  ) {}

  goToRegistration() {
    this.route.navigate(["/registration"]);
  }

}
