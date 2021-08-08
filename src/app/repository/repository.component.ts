import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { RepositoryService } from '../services/repository.service';
import { Repo } from '../models/repo';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  providers :[RepositoryService ],
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  Users!: User; 
  Repository:Repo[]=[]
  constructor(public userService:UserService) { 

  }

  ngOnInit() {
    this.searchGit("ErastusNjaramba")
  }
searchGit(searchTerm: string){
  this.userService.searchGit(searchTerm).then(
    (success)=>{
      this.Users = this.userService.Users;
    },
    (error)=>{
      console.log(error)
    })
    this.userService.searchRepository(searchTerm).then(
      (success)=>{
        this.Repository=this.userService.Repository


    })
  }
}
