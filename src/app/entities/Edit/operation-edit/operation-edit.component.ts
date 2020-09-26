import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

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
    this.typeoperations=this.recuper("typeoperation/all");
    this.clients=this.recuper("client/all");
    this.lignecommandes=this.recuper("ligne/commande/all");
  }
  recuper(url : string){
    this.crud.get(url)
      .subscribe(data=>{
        return data;
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
