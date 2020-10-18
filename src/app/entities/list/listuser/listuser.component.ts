import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  public users;
  constructor(private crud : CrudService, private router : Router) { }

  ngOnInit(): void {
    this.listuser();
  }
  listuser() {
    this.crud.get("user/all")
      .subscribe(data=>{
         this.users = data;
         console.log(this.users);   
      },err=>{
        console.log(err);
        
      });
  }
  delete(user){
    this.crud.delete("user/delete/"+user.id)
      .subscribe(data=>{
        this.listuser();
        console.log(data);
        
      },err=>{
        console.log(err);
        
      });
  }
  update(user){
    this.crud.setQuincaillerieServ(user);
    this.router.navigate(['edituser']);
  }
  cloner(user){
    this.crud.cloner("user/clone/"+user.id,user)
      .subscribe(data=>{
        console.log(data);
        this.listuser();
      },err=>{
        console.log(err);
        
      });
  }
  public articlesup = new Array();
  public test : boolean = false;
  recuper(id:number){
    let index : number = -1;
    if(this.articlesup.length > 0){
      this.test = true;
      this.articlesup.forEach(e=>{
        if(e == id){
          index = this.articlesup.indexOf(id);
        }
      });
    }else{
      this.test = false;
    }
    if(index == -1){
      this.articlesup.push(id);
      this.test = true;
    }
    else{
      this.articlesup.splice(index,1);
      console.log(index);
      if(this.articlesup.length == 0){
         this.test = false
      }
    }
    console.log(this.articlesup);
  }
  deleteAll(){
    this.crud.deletes("user/deletes",this.articlesup)
      .subscribe(data=>{
        console.log(data);
        this.articlesup = new Array();
        this.test = false
        this.listuser();
      },err=>{
        console.log(err);
      });
  }
  cloneAll(){
    this.crud.cloner("user/clones",this.articlesup)
      .subscribe(data=>{
        console.log(data);
        this.articlesup = new Array();
        this.test = false
        this.listuser();
      },err=>{
        console.log(err);
        
      });
  }

}
