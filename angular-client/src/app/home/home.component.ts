import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  authForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  email = this.authForm.controls.email;
  password = this.authForm.controls.password;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.auth(this.authForm.value);
  }
}
