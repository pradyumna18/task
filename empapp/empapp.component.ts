import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeModel } from './emp.modal';
import { ApiService } from '../shared/api.service';
declare var $:any;
@Component({
  selector: 'app-empapp',
  templateUrl: './empapp.component.html',
  styleUrls: ['./empapp.component.css']
})
export class EmpappComponent implements OnInit{


  empForm:any;
  users: any;
  constructor(public fb:FormBuilder,private service:ApiService){
    this.empForm=this.fb.group({
      fname:[""],
      lname:[""],
      email:[""],
      mob:[""],
      team:[""],
      cnt:[""]
    })
  }
  ngOnInit(): void {
   this.GetEmp();
  }
  

  submitForm(){
    // console.log(this.empForm.value);
    this.service.AddEmp(this.empForm.value).subscribe(data=>{
      alert("Added");
      // console.log(data);
      this.GetEmp();
      this.empForm.reset();
    })
  }

  GetEmp(){
    this.service.GetEmp().subscribe(data=>{
      console.log('EMP',data);
      this.users=data;
    })
  }
  DeleteEmpByID(id:any){
    this.service.DeleteEmpByID(id).subscribe(data=>{
      alert("Crickter Deleted");
      this.GetEmp();
    })
  }
  GetEmpByID(id:any){
    this.service.GetEmpByID(id).subscribe(data=>{
    console.log("Emp details",data);
    alert("get emp");
    this.empForm.patchValue({
      fname:data.fname,
      lname:data.lname,
      email:data.email,
      mob:data.mob,
      team:data.team,
      cnt:data.cnt
    })
    })
  }
}
