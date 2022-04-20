import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservices.services'
import { Repos } from '../repo'
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  
  repo: Repos | undefined;
  repoService: any;
  constructor() { }

  repoSearch(searchName: string){
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
    this.repoSearch('lu-dwig')
  }
}
