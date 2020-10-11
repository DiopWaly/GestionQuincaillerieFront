import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CrudService } from './../../services/crud.service';
import { Lignecommande } from './../../classes/lignecommande';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lignecommande',
  templateUrl: './lignecommande.component.html',
  styleUrls: ['./lignecommande.component.css']
})
export class LignecommandeComponent implements OnInit {

  public commandes;
  public articles;
  public form: FormGroup;
  validation_messages = {
    'pu': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'chiffre svp' }
    ],
    'qte': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisie invalide' }
    ],
    'unite': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisie invalide' }
    ],
    'commande': [
      { type: 'required', message: 'champ est obligatoire.' }
    ],
    'article': [
      { type: 'required', message: 'champ est obligatoire.' }
    ]
  };
  constructor(private crud : CrudService,private router : Router) { 
    this.form = new FormGroup({
      pu: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      qte: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      unite: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_. +-]+$')
      ])),
      commande: new FormControl('', Validators.compose([
        Validators.required
      ])),
      article: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  ngOnInit(): void {
    this.recuperart();
    this.recupercom();
  }
  add(){
    let lignecom = new Lignecommande(this.form);
    console.log(lignecom);
    this.crud.add("ligne/commande/add",lignecom)
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
