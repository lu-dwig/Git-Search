import { Component, OnInit } from '@angular/core';
import { UserserviceService} from '../userservices.services';
import {User} from '../user';
import { Repos } from '../repo';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user!: User ;
  repo!: Repos;
  constructor(public myService: UserserviceService, private repoService: UserserviceService) { }

  searchs(searchName: any) {
    this.myService.searchUSer(searchName).then(
      (success: any)=>{
        this.user = this.myService.foundUser;
      },
      (error: any)=>{
        console.log(error)
      }
    );
      this.repoService.getReopos(searchName).then(
        (results: any)=>{
          this.repo =this.repoService.allRepos
          console.log(this.repo);
        },
        (error: any)=>{
          console.log(error);
        }
      );
  }


  ngOnInit() {
  }

}
