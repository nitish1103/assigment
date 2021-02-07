
import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {

  profiles = [];
  constructor(
  ) { }

  submitProfile(data: FormData) {
    this.profiles.push(data);
    localStorage.setItem('profileList', JSON.stringify(this.profiles));
  }
}
