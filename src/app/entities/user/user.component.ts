import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CrudService } from './../../services/crud.service';
import { Router } from '@angular/router';
import { User } from './../../classes/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public quincailleries;
  public groupes;
  public form: FormGroup;
  validation_messages = {
    'user': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisie invalide' }
    ],
    'email': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'chiffre svp' }
    ],
    'tel': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisie invalide' }
    ],
    'quincaillerie': [
      { type: 'required', message: 'champ est obligatoire.' }
    ],
    'groupe': [
      { type: 'required', message: 'champ est obligatoire.' }
    ]
  };
  constructor(private crud : CrudService,private router : Router) { 
    this.form = new FormGroup({
      user: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_. +-]+$')
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      tel: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^([+]221[-. ])?(7[0678]{1})([-. ])?[0-9]{3}([-. ]?[0-9]{2}){2}$')
      ])),
      quincaillerie: new FormControl('', Validators.compose([
        Validators.required
      ])),
      groupe: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  ngOnInit(): void {
    this.quincailleries = this.recupe("quincaillerie/all");
    this.groupes = this.recupe("groupe/all");
  }
  add(){
    let user = new User(this.form);
    console.log(user);
    this.crud.add("user/add",user)
        .subscribe(data=>{
          console.log(data);
          this.router.navigate(['listuser']);
        },err=>{
          console.log(err);

        });
  }
  recupe(url : string){
     this.crud.get(url)
      .subscribe(data=>{
        return data;
      },err=>{
          console.log(err);
          
      });
  }

}
