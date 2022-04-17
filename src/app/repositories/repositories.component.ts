import { Component, OnInit } from '@angular/core';
import { Userservicesevice } from '../userservices.services'
import { Repos } from ',,/Repos'
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  
  repo: Repos;
  constructor() { }

  repoSearch(searchName){
    this.repoService.getReopos(searchName).then(
      (results)=>{
        this.repo =this.repoService.allRepos
        console.log(this.repo);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.repoSearch('lu-dwig')
  }
}
