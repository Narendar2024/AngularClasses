import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RegistrationApp';

  regForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.regForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    }, {
      Validators: this.passwordMatchValidation
    });
  }

  passwordMatchValidation(form: FormGroup) {
    const password = form.get('password');
    const cpassword = form.get('confirmPassword');
    if (password && cpassword && password.value !== cpassword.value) {
      return {
        mismatch: true
      }
    } else {
      return null
    }
  }

  ngOnInit(): void {

  }
  submit() {
    console.log(this.regForm.value);
    this.submitted = true;
  }

  reset() {
    this.submitted = false;
    this.regForm.reset();
  }

}




