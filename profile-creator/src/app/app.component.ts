import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  profileForm: FormGroup;
  titles = ['Mr.', 'Ms.', 'Mrs.', 'Miss.', 'Dr.', 'Other'];
  options = ['Yes', 'No'];
  applicants = ['Amol Karve', 'Priyanka Ravi', 'James Cazalet'];
  selectedTitle = 'Mr.'
  selectedOption = 'Yes'
  selectedApplicant = 'Amol Karve'

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      givenName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      mobile: ['', Validators.required],
      title: ['', Validators.required],
      address: ['', Validators.required],
      hasApplied: ['', Validators.required],
      coApplicant: ['', Validators.required]
    });
  }



  setTitle (title:string) {
    this.selectedTitle = title;
  }

  setOption (option:string) {
    this.selectedOption = option;
  }

  setApplicant (applicant:string) {
    this.selectedApplicant = applicant;
  }
}
