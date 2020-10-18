import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listgroupe',
  templateUrl: './listgroupe.component.html',
  styleUrls: ['./listgroupe.component.css']
})
export class ListgroupeComponent implements OnInit {

  public groupes; 
  constructor(private crud : CrudService, private router : Router) { }

  ngOnInit(): void {
    this.listgroupe();
  }
  listgroupe() {
    this.crud.get("groupe/all")
      .subscribe(data=>{
        this.groupes = data;
        console.log(this.groupes);
      },err=>{
        console.log(err);
        
      });
  }
  update(groupe : any){
    this.crud.setQuincaillerieServ(groupe);
    this.router.navigate(['editgroupe']);
  }
  delete(groupe : any){
    this.crud.delete("groupe/delete/"+groupe.id)
      .subscribe(data=>{
        this.listgroupe();
        console.log(data);
        
      },err=>{
        console.log(err);
        
      });
  }
  cloner(groupe){
    this.crud.cloner("groupe/clone/"+groupe.id,groupe)
      .subscribe(data=>{
        console.log(data);
        this.listgroupe();
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
    this.crud.deletes("groupe/deletes",this.articlesup)
      .subscribe(data=>{
        console.log(data);
        this.articlesup = new Array();
        this.test = false
        this.listgroupe();
      },err=>{
        console.log(err);
      });
  }
  cloneAll(){
    this.crud.cloner("groupe/clones",this.articlesup)
      .subscribe(data=>{
        console.log(data);
        this.articlesup = new Array();
        this.test = false
        this.listgroupe();
      },err=>{
        console.log(err);
        
      });
  }
}
