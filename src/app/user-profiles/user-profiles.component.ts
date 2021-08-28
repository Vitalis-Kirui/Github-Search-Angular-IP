import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserClass } from '../user-class';

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.css']
})
export class UserProfilesComponent implements OnInit {

  profiles : UserClass [] = [];

  constructor( private httpClient : HttpClient ) { };

  //function for collecting user profile data
  getUserProfileData(){

    this.httpClient.get<any>("https://api.github.com/users/octocat").subscribe
    ((response) => {

      let results1 = response;
      this.profiles = results1;

      console.log("We are picking a response" + response);
    },

    (error) => {
      console.log("We are picking an error" + error);
    })

  };

  ngOnInit(): void {

    this.getUserProfileData();

  }

}
