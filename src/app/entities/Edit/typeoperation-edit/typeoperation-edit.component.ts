import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-typeoperation-edit',
  templateUrl: './typeoperation-edit.component.html',
  styleUrls: ['./typeoperation-edit.component.css']
})
export class TypeoperationEditComponent implements OnInit {

  public typeOp;
  constructor(private crud : CrudService, private router : Router) { }

  ngOnInit(): void {
    this.typeOp = this.crud.getQuincaillerieServ();
    console.log(this.typeOp);
  }
  edit(f){
    this.crud.update('typeoperation/update/'+this.typeOp.id,f)
      .subscribe(date=>{
        this.router.navigate(['listtypeoperation']);
      },err=>{
        console.log(err);
      });
  }

}
