import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  userForm!: FormGroup;

  constructor(){}
  
  ngOnInit(): void {
      this.userForm = new FormGroup({
        'employeeId' : new FormControl(null, Validators.required),
        'employeeName' : new FormControl(null, Validators.required),
        'email' : new FormControl(null, [Validators.required, Validators.email]),
        'mobile' : new FormControl(null, Validators.required),
        'project' : new FormControl(null, Validators.required),
        'age' : new FormControl(null, Validators.required),
        'joigningDate' : new FormControl(null, Validators.required),
      });
  }
  get form() {
    return this.userForm.controls;
  }

  onSubmit(){
    console.log(this.userForm);
  }
}
