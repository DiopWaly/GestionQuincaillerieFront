import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-lignecommande-edit',
  templateUrl: './lignecommande-edit.component.html',
  styleUrls: ['./lignecommande-edit.component.css']
})
export class LignecommandeEditComponent implements OnInit {

  public lignecomEdit;
  public articles;
  public commandes;
  constructor(private crud : CrudService, private router : Router) { }

  ngOnInit(): void {
    this.lignecomEdit = this.crud.getQuincaillerieServ();
    this.articles = this.recuper("art/all");
    this.commandes = this.recuper("commande/all");
  }
  edit(f){
    this.crud.update("ligne/commande/update"+this.lignecomEdit.id,f)
      .subscribe(data=>{
          this.router.navigate(['listlignecommande']);
          console.log(data);
          
      },err=>{
        console.log(err);
      });
  }
  recuper(url : string){
    this.crud.get(url)
      .subscribe(data=>{
        return data;
      },err=>{
        console.log(err);
        
      });
  }

}
