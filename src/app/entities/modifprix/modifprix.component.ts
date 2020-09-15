import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifprix',
  templateUrl: './modifprix.component.html',
  styleUrls: ['./modifprix.component.css']
})
export class ModifprixComponent implements OnInit {

  public articles : any;
  constructor(private crud : CrudService,
    private router: Router) { }

  ngOnInit(): void {
    this.articlemodif();
  }

  add(f){
    console.log(f);
    this.crud.add("modifprix/add",f)
        .subscribe(data=>{
          console.log(data);
          
        },err=>{
          console.log(err);
          
        });
  }
  articlemodif(){
    this.crud.get("article/all")
      .subscribe(data=>{
        this.articles = data;
        console.log(this.articles);
        
      },err=>{
        console.log(err);
        
      })
  }

}
