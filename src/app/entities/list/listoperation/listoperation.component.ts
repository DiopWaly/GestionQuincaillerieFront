import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listoperation',
  templateUrl: './listoperation.component.html',
  styleUrls: ['./listoperation.component.css']
})
export class ListoperationComponent implements OnInit {

  public operations;
  constructor(private crud : CrudService, private router : Router) { }

  ngOnInit(): void {
    this.listoperation();
  }
  listoperation() {
    this.crud.get("operation/all")
      .subscribe(data=>{
        this.operations = data;
        console.log(this.operations);
        
      },err=>{
        console.log(err);
      });
  }
  update(operation){
    this.crud.setQuincaillerieServ(operation);
    this.router.navigate(['editoperation']);
  }
  delete(operation){
    this.crud.delete("operation/delete/"+operation.id)
      .subscribe(data=>{
        this.listoperation();
        console.log(data);
        
      },err=>{
        console.log(err);
        
      });
  }
  cloner(operation){
    this.crud.cloner("operation/clone/"+operation.id,operation)
      .subscribe(data=>{
        console.log(data);
        this.listoperation();
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
    this.crud.deletes("operation/deletes",this.articlesup)
      .subscribe(data=>{
        console.log(data);
        this.articlesup = new Array();
        this.test = false
        this.listoperation();
      },err=>{
        console.log(err);
      });
  }
  cloneAll(){
    this.crud.cloner("operation/clones",this.articlesup)
      .subscribe(data=>{
        console.log(data);
        this.articlesup = new Array();
        this.test = false
        this.listoperation();
      },err=>{
        console.log(err);
        
      });
  }

}
