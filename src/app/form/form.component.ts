import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Repo } from '../models/repo';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  Users!: User; 
  Repos : Repo []=[]
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
      this.Repos=this.userService.Repository

    })
  }
}
