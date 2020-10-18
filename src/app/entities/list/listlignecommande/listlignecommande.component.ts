import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listlignecommande',
  templateUrl: './listlignecommande.component.html',
  styleUrls: ['./listlignecommande.component.css']
})
export class ListlignecommandeComponent implements OnInit {

  public lignecommandes;
  constructor(private crud : CrudService, private router : Router) { }

  ngOnInit(): void {
    this.listlignecommande();
  }
  listlignecommande() {
    this.crud.get("ligne/commande/all")
      .subscribe(data=>{
        this.lignecommandes = data;
        console.log(this.lignecommandes);
        
      },err=>{
        console.log(err);
      });
  }
  update(lignec : any){
    this.crud.setQuincaillerieServ(lignec);
    this.router.navigate(['editlignecommande']);
  }
  delete(lignec : any){
    this.crud.delete("ligne/commande/delete/"+lignec.id)
      .subscribe(data=>{
        console.log(data);
        this.listlignecommande();
        
      },err=>{
        console.log(err);
        
      });
  }
  cloner(lignecom){
    this.crud.cloner("ligne/commande/clone/"+lignecom.id,lignecom)
      .subscribe(data=>{
        console.log(data);
        this.listlignecommande();
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
    this.crud.deletes("ligne/commande/deletes",this.articlesup)
      .subscribe(data=>{
        console.log(data);
        this.articlesup = new Array();
        this.test = false
        this.listlignecommande();
      },err=>{
        console.log(err);
      });
  }
  cloneAll(){
    this.crud.cloner("ligne/commande/clones",this.articlesup)
      .subscribe(data=>{
        console.log(data);
        this.articlesup = new Array();
        this.test = false
        this.listlignecommande();
      },err=>{
        console.log(err);
        
      });
  }

}
