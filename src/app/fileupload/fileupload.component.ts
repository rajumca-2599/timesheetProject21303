import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginform = new FormGroup({
    EmployeeName: new FormControl('',[Validators.required]),
    employeeid: new FormControl('',[Validators.required]),
    clientName: new FormControl("",[Validators.required]),
    startDate: new FormControl("",[Validators.required]),
    endDate: new FormControl("",[Validators.required]),
    FileName: new FormControl("",[Validators.required])
  });
  submited(){
    console.log(this.loginform.value)
   
    alert("Thankyou for submit the timesheet");
    this.loginform.reset();
  }
  

}
