import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  };
  
  public error = [];

  constructor(private Jarwis:JarwisService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.Jarwis.signup(this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    )
  }

  handleError(error) {
    this.error = error.error.errors;
    console.log(this.error)
  }

}
