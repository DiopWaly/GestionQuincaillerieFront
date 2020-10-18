import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listmodifprix',
  templateUrl: './listmodifprix.component.html',
  styleUrls: ['./listmodifprix.component.css']
})
export class ListmodifprixComponent implements OnInit {

  public modifprix : any;
  constructor(private crud : CrudService,private router : Router) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.crud.get("modifprix/all")
     .subscribe(data=>{
       this.modifprix = data;
       console.log(data);
     },err=>{
       console.log(err);
       
     });
  }
  update(modp){
    this.crud.setQuincaillerieServ(modp);
    this.router.navigate(['editmodifprix']);
  }
  delete(modp){
    this.crud.delete("modifprix/delete/"+modp.id)
      .subscribe(data=>{
        console.log(data);
        this.list();
        
      },err=>{
        console.log(err);
        
      });
    
  }
  newModifprix(){
    this.router.navigate(['modifprix']);
  }
  cloner(modifprix){
    this.crud.cloner("modifprix/clone/"+modifprix.id,modifprix)
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
    this.crud.deletes("modifprix/deletes",this.articlesup)
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
    this.crud.cloner("modifprix/clones",this.articlesup)
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
