import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserClass } from '../user-class';
import { UserRepositoryService } from '../user-repository.service';
import { UserprofilesService } from '../userprofiles.service';

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.css']
})
export class UserProfilesComponent implements OnInit {

  profiles : any;
  repoData : any;
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

  constructor(private userprofiles: UserprofilesService, private userRepositories : UserRepositoryService) { };

  //Fetching profile data
  getUserProfiles() {

    this.userprofiles.getProfiles(this.username).subscribe((response) => {
      console.log("We are picking up some response", response)
      return this.profiles = response;
  
    },
    (error) =>console.log("Picking and error", error)
    );

  }

  //fetching repositories
  getUserRepositories(){

    this.userRepositories.getRepositories(this.username).subscribe((data) =>{
      console.log(data)
      return this.repoData = data;
    })

  };

  ngOnInit() : void {

    }

 }