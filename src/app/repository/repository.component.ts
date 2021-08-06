import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
import { RepositoryService } from '../services/repository.service';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Repo } from '../models/repo';




@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  providers :[RepositoryService ],
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {


  Users!: User; 
  Repo : Repo []=[]

  constructor(   public userHttpService:UserService) { 

  }

  ngOnInit(): {
    this.searchUser("ErastusNjaramba")
  }
searchUser(searchTerm: string){
  this.userHttpService.searchUser(searchTerm).then(
    (success)=>{
      this.Users = this.userHttpService.Users;
    },
    (error)=>{
      console.log(error)
    })
    this.userHttpService.searchRepo(searchTerm).then(
            (success)=>{
            this.Repo=this.userHttpService.Repos



    })
  }
}
