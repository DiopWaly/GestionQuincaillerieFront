import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Categorie } from './../../classes/categorie';
import { CrudService } from './../../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  public categories;
  public form: FormGroup;
  validation_messages = {
    'categorie': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisi invalide' }
    ],
    'codecategorie': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisi invalide' }
    ],
    'libelle': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisie invalide' }
    ],
    'description': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisie invalide' },
    ]
  };
  constructor(private crud : CrudService,private router : Router) {
      this.form = new FormGroup({
        categorie: new FormControl('', Validators.compose([
          Validators.required
        ])),
        codecategorie: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_. +-]+$')
        ])),
        libelle: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_. +-]+$')
        ])),
        description: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_. +-]+$')
        ])),
      });
   }

  ngOnInit(): void {
    this.recuper();
  }
  add(){
    let categorie = new Categorie(this.form);
    console.log(categorie);
    this.crud.add("categorie/add",categorie)
        .subscribe(data=>{
          console.log(data);
          this.router.navigate(['listcategorie']);
        },err=>{
          console.log(err);

        });
  }
  recuper(){
    this.crud.get("categorie/all")
      .subscribe(data=>{
        this.categories = data;
      },err=>{
        console.log(err);
        
      });
  }

}
