import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Article } from 'src/app/classes/article';
import { CrudService } from './../../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  public categories;
  public quincalleries;
  public form: FormGroup;
  validation_messages = {
    'libelle': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisi invalide' }
    ],
    'prixencours': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'nombre positif' }
    ],
    'unite': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisie invalide' }
    ],
    'codearticle': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisie invalide' },
    ],
    'description': [
      { type: 'required', message: 'champ est obligatoire.'},
      { type: 'pattern', message: 'saisi invalide' }
    ],
    'categorie': [
      { type: 'required', message: 'champ is required.' },
      { type: 'pattern', message: 'c\'est numerique svp'}
    ],
    'quincaillerie': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'c\'est numerique svp'}
    ]
  };

  constructor(private crud : CrudService,private router : Router) {
      this.form = new FormGroup({
        libelle: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_. +-]+$')
        ])),
        prixencours: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]+$')
        ])),
        unite: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_. +-]+$')
        ])),
        codearticle: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_. +-]+$')
        ])),
        description: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_. +-]+$')
        ])),
        categorie: new FormControl('', Validators.compose([
          Validators.required
        ])),
        quincaillerie: new FormControl('', Validators.compose([
          Validators.required
        ]))

      });
   }

  ngOnInit(): void {
    this.recupercategorie();
    this.recuperquincaillerie();
  }
  recupercategorie(){
    this.crud.get("art/all")
      .subscribe(data=>{
          this.categories = data;
          console.log(this.categories);
          
      },err=>{
        console.log(err);
        
      });
  }
  recuperquincaillerie(){
    this.crud.get("quincaillerie/all")
      .subscribe(data=>{
          this.quincalleries = data;
          console.log(this.quincalleries);
          
      },err=>{
        console.log(err);
        
      });
  }
  add(){
    let article = new Article(this.form);
    console.log(article);
    this.crud.add("art/add",article)
        .subscribe(data=>{
          console.log(data);
          this.router.navigate(['listarticle']);
        },err=>{
          console.log(err);
    });
  }
}
