import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lignecommande-edit',
  templateUrl: './lignecommande-edit.component.html',
  styleUrls: ['./lignecommande-edit.component.css']
})
export class LignecommandeEditComponent implements OnInit {

  public lignecomEdit;
  public articles;
  public commandes;
  private donnees;
  constructor(private crud : CrudService, private router : Router) { }

  ngOnInit(): void {
    this.lignecomEdit = this.crud.getQuincaillerieServ();
    this.recuperart();
    this.recupercom();
    console.log(this.commandes);
  }
  edit(f){
    this.crud.update("ligne/commande/update/"+this.lignecomEdit.id,f)
      .subscribe(data=>{
          this.router.navigate(['listlignecommande']);
          console.log(data);
          
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
