import { Component, OnInit } from '@angular/core';
import { User } from './../models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  users: User[];

  constructor() {
    this.users = [];
   }

  ngOnInit(): void {
  }

  guardar(name: string, email: string, phone: number): boolean {
    this.users.push(new User(name, email, phone));
    return false;
  }

  onSubmit(){
    console.log(this.users);
  }
}
