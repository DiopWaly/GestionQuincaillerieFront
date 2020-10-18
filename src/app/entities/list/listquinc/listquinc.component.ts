import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listquinc',
  templateUrl: './listquinc.component.html',
  styleUrls: ['./listquinc.component.css']
})
export class ListquincComponent implements OnInit {
  public quincailleries;
  public confirm : boolean;
  constructor(private crud : CrudService, private router : Router) { }

  ngOnInit(){
    this.confirm = false;
    this.listequincaillerie();
  }

  listequincaillerie(){
    this.crud.get("quincaillerie/all")
      .subscribe(data=>{
        this.quincailleries = data;
        console.log(this.quincailleries);

      },err=>{
        console.log(err);

      });
  }
  update(quinc : any){
    this.crud.setQuincaillerieServ(quinc);
    // console.log(this.crud.getQuincaillerieServ());
    this.router.navigate(["editquincaillerie"]);
  }
  delete(quinc : any){
    console.log(quinc);
    this.confirm = confirm("Voulez-vous supprimer");
    if(this.confirm){
      this.crud.delete("quincaillerie/delete/"+quinc.id)
      .subscribe(data=>{
        console.log(data);
        this.listequincaillerie();
      },err=>{
        console.log(err);
      });
    }
  }
  cloner(quinc){
    this.crud.cloner("quincaillerie/clone/"+quinc.id, quinc)
      .subscribe(data=>{
        console.log(data);
        this.listequincaillerie();
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
    this.crud.deletes("quincaillerie/deletes",this.articlesup)
      .subscribe(data=>{
        console.log(data);
        this.articlesup = new Array();
        this.test = false
        this.listequincaillerie();
      },err=>{
        console.log(err);
      });
  }
  cloneAll(){
    this.crud.cloner("quincaillerie/clones",this.articlesup)
      .subscribe(data=>{
        console.log(data);
        this.articlesup = new Array();
        this.test = false
        this.listequincaillerie();
      },err=>{
        console.log(err);
        
      });
  }

}
