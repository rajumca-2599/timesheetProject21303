import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private rote:Router) { }

  ngOnInit(): void {
  }
  loginform = new FormGroup({
    EmployeeName: new FormControl('',[Validators.required]),
    employeeid: new FormControl('',[Validators.required]),
    
  });
   submited(){
    
    console.log(this.loginform.value)
    alert("Thankyou for submit the timesheet");
  this.rote.navigate(['/fileupload'])
    
    this.loginform.reset();
  }

}
