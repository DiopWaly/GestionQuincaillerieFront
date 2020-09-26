import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

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
        
      })
  }

}
