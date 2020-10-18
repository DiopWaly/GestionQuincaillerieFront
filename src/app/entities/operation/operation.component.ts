import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CrudService } from './../../services/crud.service';
import { Operation } from './../../classes/operation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  public typeoperations;
  public clients;
  public lignecommandes;
  public form: FormGroup;
  validation_messages = {
    'typeoperation': [
      { type: 'required', message: 'champ est obligatoire.' }
    ],
    'client': [
      { type: 'required', message: 'champ est obligatoire.' }
    ],
    'lignecommande': [
      { type: 'required', message: 'champ est obligatoire.' }
    ]
  };
  constructor(private crud : CrudService,private router : Router) { 
    this.form = new FormGroup({
      typeoperation: new FormControl('', Validators.compose([
        Validators.required
      ])),
      client: new FormControl('', Validators.compose([
        Validators.required
      ])),
      lignecommande: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  ngOnInit(): void {
    this.recupertypeOp();
    this.recuperClient();
    this.recuperligneC();
  }
  add(){
    let operation = new Operation(this.form);
    console.log(operation);
    this.crud.add("operation/add",operation)
        .subscribe(data=>{
          console.log(data);
          this.router.navigate(['listoperation']);
        },err=>{
          console.log(err);

        });
  }
  recupertypeOp(){
    this.crud.get("typeoperation/all")
      .subscribe(data=>{
          this.typeoperations = data;
      },err=>{
        console.log(err);
        
      });
  }
  recuperClient(){
    this.crud.get("client/all")
      .subscribe(data=>{
          this.clients = data;
      },err=>{
        console.log(err);
        
      });
  }
  recuperligneC(){
    this.crud.get("ligne/commande/all")
      .subscribe(data=>{
          this.lignecommandes = data;
      },err=>{
        console.log(err);
        
      });
  }

}
