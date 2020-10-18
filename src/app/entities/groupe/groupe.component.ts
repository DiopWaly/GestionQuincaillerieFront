import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CrudService } from './../../services/crud.service';
import { Groupe } from './../../classes/groupe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {
  public form: FormGroup;
  validation_messages = {
    'codegroupe': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisie invalide' }
    ],
    'libellegroupe': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisie invalide' }
    ]
  };


  constructor(private crud : CrudService,private router : Router) { 
    this.form = new FormGroup({
      codegroupe: new FormControl('', Validators.compose([
        // Validators.required,
        Validators.pattern('^[a-zA-Z0-9_. +-]+$')
      ])),
      libellegroupe: new FormControl('', Validators.compose([
        // Validators.required,
        Validators.pattern('^[a-zA-Z0-9_. +-]+$')
      ]))
    });
  }

  ngOnInit(): void {
  }
  add(){
    let groupe = new Groupe(this.form);
    console.log(groupe);
    this.crud.add("groupe/add",groupe)
        .subscribe(data=>{
          console.log(data);
          this.router.navigate(['listgroupe']);
        },err=>{
          console.log(err);

        });
  }

}
