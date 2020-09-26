import { Router } from '@angular/router';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';

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
    this.typeoperations=this.recuper("typeoperation/all");
    this.clients=this.recuper("client/all");
    this.lignecommandes=this.recuper("ligne/commande/all");
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
  recuper(url : string){
    this.crud.get(url)
      .subscribe(data=>{
          return data;
      },err=>{
        console.log(err);
        
      });
  }

}
