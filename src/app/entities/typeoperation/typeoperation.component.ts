import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';
import { Typeoperation } from './../../classes/typeoperation';

@Component({
  selector: 'app-typeoperation',
  templateUrl: './typeoperation.component.html',
  styleUrls: ['./typeoperation.component.css']
})
export class TypeoperationComponent implements OnInit {

  public form: FormGroup;
  validation_messages = {
    'typeoperation': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'saisie invalide' }
    ]
  };
  constructor(private crud : CrudService,private router : Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      typeoperation: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_. +-]+$')
      ]))
    });
  }

  add(){
    let typeop = new Typeoperation(this.form);
    console.log(typeop);
    this.crud.add("typeoperation/add",typeop)
      .subscribe(data=>{
          console.log(data);
          this.router.navigate(['listtypeoperation']);
          
      },err=>{
        console.log(err);
      });
  }
  
}
