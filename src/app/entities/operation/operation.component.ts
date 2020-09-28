import { Component, OnInit } from '@angular/core';

import { CrudService } from './../../services/crud.service';
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
  constructor(private crud : CrudService,private router : Router) { }

  ngOnInit(): void {
    this.recupertypeOp();
    this.recuperClient();
    this.recuperligneC();
  }
  add(f){
    console.log(f);
    this.crud.add("operation/add",f)
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
