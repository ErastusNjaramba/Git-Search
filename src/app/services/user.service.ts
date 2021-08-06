import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Repo } from '../models/repo';
import { resolve } from 'dns';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  searchUsers(searchTerm: string){
    throw new Error('Method not implemented.');

  }

  Users!: User; 
  Repo : Repo []=[]
  constructor(private http:HttpClient) { }
  searchUser(searchTerm: string){
  interface userInterface{
    login:string,
    avatar_url:any,
    followers:any,
    following:any,
    public_repos:any,
    location:any,

  }
  let userUrl = "https://api.github.com/users/"+searchTerm;

  let promise = new Promise((resolve,reject))=>{
    this.http.get<userInterface>(userUrl).toPromise().then(
      (result)=>{
        
        this.Users=result
        console.log(this.Users);

        resolve(result)
      },
      (error)=>{
        console.log()
        reject()
      }
    )
  }
  return promise
}
searchRepos(searchTerm:string){
  interface repoInterface{
    name:string,
    description:string,
    created_at:Date,
  }
  var userUrl = "https://api.github.com/users/"+ searchTerm +"/repos";

  let promise = new Promise((resolve,reject)=>{
    this.http.get<repoInterface[]>(userUrl).toPromise().then(
      (results)=>{

        this.Repo= [];
        for (let i=0; i<results.length;i++){
          let repo = new Repo(results[i].name,results[i].description,results[i].created_at,)
          this.Repo.push(repo);
        }
        console.log(results);
        resolve(results)
      },
      (error)=>{
        console.log()
        reject()
      }
    )
  })
  return promise
}
}

