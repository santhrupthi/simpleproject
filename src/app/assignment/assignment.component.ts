import { Component, OnInit } from '@angular/core';

import { FormGroup ,FormBuilder,Validators  } from '@angular/forms';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  registerForm : FormGroup;
  submitted = false;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fname :['', Validators.required],
      lname :['', Validators.required],
      email :['', [Validators.required , Validators.email]],
      phone :['', Validators.required],
      address :['', Validators.required],
      dob :['',Validators.required]

    })
  }

  get f() { return this.registerForm.controls; }

 
 
  employee_dtl  ;
  rows=[{fname:'thrupthi',lname:"shetty",email:"trupthii@gmail.com",phone:"8976876899",address:"adress thevalu of "},
  {fname:'thrupthi',lname:"shetty",email:"trupthii@gmail.com",phone:"8976876899",address:"adress thevalu of "},
  {fname:'preethi',lname:"shetty",email:"preethi@gmail.com",phone:"8768097878",address:"adress comming of "},];

  collect = {
    fname: '',
    lname: '',
    phone: '',
    email:'',
    dob: '',
    address:'',
  };
  onUpdate(formObj) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    let values = formObj.value;
    console.log(values);
    let obj: any = {
      fname: values.fname,
      lname: values.lname,
      email: values.email,
      phone: values.phone,
    };

   this.rows.push(obj);

   // formObj.reset();

  }

}
