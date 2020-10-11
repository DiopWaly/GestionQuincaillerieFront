import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Commande } from './../../classes/commande';
import { CrudService } from './../../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  public form: FormGroup;
  validation_messages = {
    'datecommande': [
      { type: 'required', message: 'champ est obligatoire.' }
    ],
    'designation': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'chiffre svp' }
    ],
    'montant': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisie invalide' }
    ],
    'numfacture': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisie invalide' }
    ],
    'description': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisi invalide' }
    ]
  };

  constructor(private crud : CrudService,private router : Router) {
    this.form = new FormGroup({
      datecommande: new FormControl('', Validators.compose([
        Validators.required
      ])),
      designation: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_. +-]+$')
      ])),
      montant: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      numfacture: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_. +-]+$')
      ])),
      description: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_. +-]+$')
      ]))
    });
   }

  ngOnInit(): void {
  }
  add(){
    let commande = new Commande(this.form);
    console.log(commande);
    this.crud.add("commande/add",commande)
        .subscribe(data=>{
          console.log(data);
          this.router.navigate(['listcommande']);
        },err=>{
          console.log(err);

        });
  }
}
