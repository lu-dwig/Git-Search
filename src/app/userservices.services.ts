import { Injectable } from '@angular/core';
import { User } from './user';
import { Repos } from './repo'
import { HttpClient } from '@angular/common/http';
// import { environment } from '/environments/environment.production';

import { environment } from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  foundUser: User;
  allRepos: Repos;
 

  constructor(private http: HttpClient) {
    this.foundUser = new User("","","","",0,0,0,"",new Date);
    this.allRepos = new Repos("","","",new Date,0,0,"");
  }

  searchUSer(_searchName: string) {
   
    interface Responce {
      url:string,
      login: string;
      html_url:string;
      location:string
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;
    }

    return new Promise<void>((resolve, reject) => {
      this.http.get<Responce |any>(`https://api.github.com/users/lu-dwig/repos`).toPromise().then(
        (result) => {
          this.foundUser = result;
          console.log(this.foundUser);
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
  getRepos(searchName: string){
    interface Repos{
      name:string;
      html_url:string;
      description:string;
      forks:number;
      watchers_count:number;
      language:string;
      created_at:Date;
    }
    return new Promise<void>((resolve,reject)=>{
      this.http.get<Repos |any>(`https://api.github.com/users/${searchName}/repos`).toPromise().then(
        (results) => {
          this.allRepos = results;
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
}

