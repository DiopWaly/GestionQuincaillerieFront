import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcommande',
  templateUrl: './listcommande.component.html',
  styleUrls: ['./listcommande.component.css']
})
export class ListcommandeComponent implements OnInit {

  public commandes;
  constructor(private crud : CrudService, private router : Router) { }

  ngOnInit(): void {
    this.listcommande();
  }

  listcommande(){
    this.crud.get("commande/all")
      .subscribe(data=>{
        this.commandes = data;
        console.log(this.commandes);
        
      },err=>{
        console.log(err);
        
      });
  }
  update(commande){
    console.log(commande);
    this.crud.setQuincaillerieServ(commande);
    this.router.navigate(['editcommande']);
  }
  delete(commande : any){
    this.crud.delete("commande/delete/"+commande.id)
      .subscribe(data=>{
        this.listcommande();
        console.log(data);
        
      },err=>{
        console.log(err);
        
      });
  }
  cloner(commande){
    this.crud.cloner("commande/clone/"+commande.id,commande)
      .subscribe(data=>{
         console.log(data);
         this.listcommande();
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
    this.crud.deletes("commande/deletes",this.articlesup)
      .subscribe(data=>{
        console.log(data);
        this.articlesup = new Array();
        this.test = false
        this.listcommande();
      },err=>{
        console.log(err);
      });
  }
  cloneAll(){
    this.crud.cloner("commande/clones",this.articlesup)
      .subscribe(data=>{
        console.log(data);
        this.articlesup = new Array();
        this.test = false
        this.listcommande();
      },err=>{
        console.log(err);
        
      });
  }

}
