import { Component, OnInit } from '@angular/core';

import { CrudService } from './../../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lignecommande',
  templateUrl: './lignecommande.component.html',
  styleUrls: ['./lignecommande.component.css']
})
export class LignecommandeComponent implements OnInit {

  public commandes;
  public articles;
  constructor(private crud : CrudService,private router : Router) { }

  ngOnInit(): void {
    this.recuperart();
    this.recupercom();
  }
  add(f){
    console.log(f);
    this.crud.add("ligne/commande/add",f)
        .subscribe(data=>{
          console.log(data);
          this.router.navigate(['listlignecommande']);
        },err=>{
          console.log(err);

        });
  }
  recuperart(){
    this.crud.get("art/all")
      .subscribe(data=>{
       this.articles = data;
       console.log(this.articles);
      },err=>{
        console.log(err);
      });
  }
  recupercom(){
    this.crud.get("commande/all")
      .subscribe(data=>{
       this.commandes = data;
       console.log(this.commandes);
      },err=>{
        console.log(err);
      });
  }

}
