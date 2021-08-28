import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserClass } from '../user-class';
import { UserprofilesService } from '../userprofiles.service';

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.css']
})
export class UserProfilesComponent implements OnInit {

  profiles : any;
  // data : UserClass | any;
  username !: string;

  // getUser() {
  //   this.profiledataservice.getProfile(this.username).subscribe(profile => {
  //     console.log(profile);
  //     return this.user = profile;
  //   });
  // }
  // getRepository() {
  //   this.profiledataservice.getRepo(this.username).subscribe(data => {
  //     console.log(data)
  //     return this.repos = data;
  //   });
  // }

  constructor(private userprofiles: UserprofilesService) { };

  getUserProfiles() {

    this.userprofiles.getProfiles(this.username).subscribe((response) => {
      console.log("We are picking up some response", response)
      return this.profiles = response;
  
    },
    (error) =>console.log("Picking and error", error)
    );

  }
  ngOnInit() : void {

    }

 }