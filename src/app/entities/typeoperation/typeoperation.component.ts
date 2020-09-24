import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-typeoperation',
  templateUrl: './typeoperation.component.html',
  styleUrls: ['./typeoperation.component.css']
})
export class TypeoperationComponent implements OnInit {

  constructor(private crud : CrudService,private router : Router) { }

  ngOnInit(): void {
  }

  add(f){
    console.log(f);
    this.crud.add("typeoperation/add",f)
      .subscribe(data=>{
          console.log(data);
          this.router.navigate(['listtypeoperation']);
          
      },err=>{
        console.log(err);
      });
  }
  
}
