import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listtypeoperation',
  templateUrl: './listtypeoperation.component.html',
  styleUrls: ['./listtypeoperation.component.css']
})
export class ListtypeoperationComponent implements OnInit {

  public typeOp : any;
  constructor(private crud : CrudService,private router : Router) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.crud.get("typeoperation/all")
      .subscribe(data=>{
        this.typeOp = data;
        console.log(this.typeOp);
        
      },err=>{
        console.log(err);
        
      })
  }
  delete(tp : any){
    console.log(tp);
    this.crud.delete('typeoperation/delete/'+tp.id)
      .subscribe(data=>{
        this.list();
      },err=>{
        console.log(err);
        
      });
  }
  update(tp : any){
    console.log(tp);
    this.crud.setQuincaillerieServ(tp);
    this.router.navigate(['edittypeoperation']);
    
  }
  newtypeoperation(){
    this.router.navigate(['typeoperation']);
  }
  cloner(typeOp){
    this.crud.cloner("typeoperation/clone/"+typeOp.id, typeOp)
      .subscribe(data=>{
        console.log(data);
        this.list();
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
    this.crud.deletes("typeoperation/deletes",this.articlesup)
      .subscribe(data=>{
        console.log(data);
        this.articlesup = new Array();
        this.test = false
        this.list();
      },err=>{
        console.log(err);
      });
  }
  cloneAll(){
    this.crud.cloner("typeoeration/clones",this.articlesup)
      .subscribe(data=>{
        console.log(data);
        this.articlesup = new Array();
        this.test = false
        this.list();
      },err=>{
        console.log(err);
        
      });
  }

}
