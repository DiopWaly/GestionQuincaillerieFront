import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CrudService } from 'src/app/services/crud.service';
import { Quincaillerie } from './../../classes/quincaillerie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quincaillerie',
  templateUrl: './quincaillerie.component.html',
  styleUrls: ['./quincaillerie.component.css']
})
export class QuincaillerieComponent implements OnInit {

  public form: FormGroup;
  validation_messages = {
    'libellequic': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'chiffre svp' }
    ],
    'codequinc': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'chiffre svp' }
    ],
    'tel': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisie invalide' }
    ],
    'email': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisie invalide' }
    ],
    'adresse': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisi invalide' }
    ],
    'ville': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisi invalide' }
    ],
    'region': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisi invalide' }
    ],
    'long': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisi invalide' }
    ],
    'lat': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisi invalide' }
    ]
  };
  constructor(private crud : CrudService,private router : Router) { 
    this.form = new FormGroup({
      libellequic: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_. +-]+$')
      ])),
      codequinc: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_. +-]+$')
      ])),
      tel: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^([+]221[-. ])?(7[0678]{1})([-. ])?[0-9]{3}([-. ]?[0-9]{2}){2}$')
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      adresse: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_. +-]+$')
      ])),
      ville: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_. +-]+$')
      ])),
      region: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_. +-]+$')
      ])),
      long: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9. +-]+$')
      ])),
      lat: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9. +-]+$')
      ]))
    });
  }

  ngOnInit() {
  }

  add(){
    let quinc = new Quincaillerie(this.form);
    console.log(quinc);
    this.crud.add("quincaillerie/add",quinc)
        .subscribe(data=>{
          console.log(data);
          this.router.navigate(['listquincaillerie']);
        },err=>{
          console.log(err);
        });
  }

}
