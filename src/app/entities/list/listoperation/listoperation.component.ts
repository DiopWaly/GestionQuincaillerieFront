import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listoperation',
  templateUrl: './listoperation.component.html',
  styleUrls: ['./listoperation.component.css']
})
export class ListoperationComponent implements OnInit {

  public operations;
  constructor(private crud : CrudService, private router : Router) { }

  ngOnInit(): void {
    this.listoperation();
  }
  listoperation() {
    this.crud.get("operation/all")
      .subscribe(data=>{
        this.operations = data;
        console.log(this.operations);
        
      },err=>{
        console.log(err);
      });
  }
  update(operation){
    this.crud.setQuincaillerieServ(operation);
    this.router.navigate(['editoperation']);
  }
  delete(operation){
    this.crud.delete("operation/delete/"+operation.id)
      .subscribe(data=>{
        this.listoperation();
        console.log(data);
        
      },err=>{
        console.log(err);
        
      });
  }
  cloner(operation){
    this.crud.cloner("operation/clone/"+operation.id,operation)
      .subscribe(data=>{
        console.log(data);
        this.listoperation();
      },err=>{
        console.log(err);
        
      });
  }

}
