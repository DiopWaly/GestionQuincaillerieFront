import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operation-edit',
  templateUrl: './operation-edit.component.html',
  styleUrls: ['./operation-edit.component.css']
})
export class OperationEditComponent implements OnInit {
  public operation;
  public typeoperations;
  public clients;
  public lignecommandes;
  constructor(private crud : CrudService, private router : Router) { }

  ngOnInit(): void {
    this.operation = this.crud.getQuincaillerieServ();
    this.recupertypeOp();
    this.recuperClient();
    this.recuperligneC();
  }
  recupertypeOp(){
    this.crud.get("typeoperation/all")
      .subscribe(data=>{
          this.typeoperations = data;
          console.log(this.typeoperations);
      },err=>{
        console.log(err);
        
      });
  }
  recuperClient(){
    this.crud.get("client/all")
      .subscribe(data=>{
          this.clients = data;
          console.log(this.clients);
          
      },err=>{
        console.log(err);
        
      });
  }
  recuperligneC(){
    this.crud.get("ligne/commande/all")
      .subscribe(data=>{
          this.lignecommandes = data;
          console.log(this.lignecommandes);
          
      },err=>{
        console.log(err);
        
      });
  }
  edit(f){
    this.crud.update("operation/update/"+this.operation.id,f)
      .subscribe(data=>{
        this.router.navigate(['listoperation']);
        console.log(data);
        
      },err=>{
        console.log(err);
      });
  }

}
