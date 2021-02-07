import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../providers/services/profile-services'


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
  selectedApplicant = 'Amol Karve';
  profiles = [];

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
  ) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      givenName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      mobile: ['', Validators.required],
      title: [''],
      address: ['', Validators.required],
      hasApplied: [''],
      coApplicant: ['']
    });
    this.profiles = JSON.parse(localStorage.getItem('profileList'));
    console.log("=============38", this.profiles)
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

  resetForm() {
    this.profileForm.reset();
    this.selectedApplicant = 'Amol Karve';
    this.selectedOption = 'Yes';
    this.selectedTitle = 'Mr.';
  }

  submit() {
    this.profileService.submitProfile(this.profileForm.value);
    this.profileForm.reset();
    this.profiles = JSON.parse(localStorage.getItem('profileList'));
    console.log("========", this.profiles)
  }
}
