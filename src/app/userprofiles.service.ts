import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserprofilesService {

  username! : string;

  constructor( private http : HttpClient ) {};

  getProfiles(username : string){

    return this.http.get("https://api.github.com/users/" + username+"?access_token="+environment.apiKey)
      .pipe(((response: any) => response));

  };

}
