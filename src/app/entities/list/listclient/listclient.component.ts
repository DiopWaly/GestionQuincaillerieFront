import { Component, OnInit } from '@angular/core';

import { CrudService } from './../../../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listclient',
  templateUrl: './listclient.component.html',
  styleUrls: ['./listclient.component.css']
})
export class ListclientComponent implements OnInit {

  public clients;
  public articlesup = new Array();
  public test : boolean = false;
  constructor(private crud :CrudService, private router : Router) { }

  ngOnInit(): void {
    this.listclient();
  }

  listclient(){
    this.crud.get("client/all")
      .subscribe(data=>{
        this.clients = data;
      },err=>{
        console.log(err);
      });
  }
  update(client : any){
    console.log(client);
    this.crud.setQuincaillerieServ(client);
    this.router.navigate(['editclient']);
  }
  delete(client : any){
    this.crud.delete("client/delete/"+client.id)
      .subscribe(data=>{
        console.log(data);
        this.listclient();
      },err=>{
        console.log(err);
        
      })
  }
  cloner(client){
    this.crud.cloner("client/clone/"+client.id,client)
      .subscribe(data=>{
        console.log(data);
        this.listclient();
      },err=>{
        console.log(err);
      });
  }
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
    this.crud.deletes("client/deletes",this.articlesup)
      .subscribe(data=>{
        console.log(data);
        this.articlesup = new Array();
        this.test = false
        this.listclient();
      },err=>{
        console.log(err);
      });
  }
  cloneAll(){
    this.crud.cloner("client/clones",this.articlesup)
      .subscribe(data=>{
        console.log(data);
        this.articlesup = new Array();
        this.test = false
        this.listclient();
      },err=>{
        console.log(err);
        
      });
  }

}
