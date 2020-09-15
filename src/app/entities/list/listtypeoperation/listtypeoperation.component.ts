import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listtypeoperation',
  templateUrl: './listtypeoperation.component.html',
  styleUrls: ['./listtypeoperation.component.css']
})
export class ListtypeoperationComponent implements OnInit {

  public typeOp : any;
  constructor(private crud : CrudService,private router : Router) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.crud.get("typeoperation/all")
      .subscribe(data=>{
        this.typeOp = data;
        console.log(this.typeOp);
        
      },err=>{
        console.log(err);
        
      })
  }
  delete(tp : any){
    console.log(tp);
    this.crud.delete('typeoperation/delete/'+tp.id)
      .subscribe(data=>{
        this.list();
      },err=>{
        console.log(err);
        
      });
  }
  update(tp : any){
    console.log(tp);
    this.crud.setQuincaillerieServ(tp);
    this.router.navigate(['edittypeoperation']);
    
  }
  newtypeoperation(){
    this.router.navigate(['typeoperation']);
  }

}
