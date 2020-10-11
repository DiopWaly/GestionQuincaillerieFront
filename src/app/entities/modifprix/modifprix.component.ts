import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CrudService } from 'src/app/services/crud.service';
import { Modifprix } from './../../classes/modifprix';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifprix',
  templateUrl: './modifprix.component.html',
  styleUrls: ['./modifprix.component.css']
})
export class ModifprixComponent implements OnInit {

  public articles : any;
  public form: FormGroup;
  validation_messages = {
    'prix': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'chiffre svp' }
    ],
    'remarque': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'chiffre svp' }
    ],
    'ancienprix': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisie invalide' }
    ],
    'article': [
      { type: 'required', message: 'champ est obligatoire.' }
    ]
  };
  constructor(private crud : CrudService,
    private router: Router) {
      this.form = new FormGroup({
        prix: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]+$')
        ])),
        remarque: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_. +-]+$')
        ])),
        ancienprix: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]+$')
        ])),
        article: new FormControl('', Validators.compose([
          Validators.required
        ]))
      });
  }

  ngOnInit(): void {
    this.articlemodif();
  }

  add(){
    let modifprix = new Modifprix(this.form);
    console.log(modifprix);
    this.crud.add("modifprix/add",modifprix)
        .subscribe(data=>{
          console.log(data);
          
        },err=>{
          console.log(err);
          
        });
  }
  articlemodif(){
    this.crud.get("article/all")
      .subscribe(data=>{
        this.articles = data;
        console.log(this.articles);
        
      },err=>{
        console.log(err);
        
      })
  }

}
