import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

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
    this.router.navigate(['listlignecommande']);
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

}
