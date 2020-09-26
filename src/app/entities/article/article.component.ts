import { Component, OnInit } from '@angular/core';

import { CrudService } from './../../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  public categories;
  public quincalleries;
  constructor(private crud : CrudService,private router : Router) { }

  ngOnInit(): void {
    this.recupercategorie();
    this.recuperquincaillerie();
  }
  recupercategorie(){
    this.crud.get("art/all")
      .subscribe(data=>{
          this.categories = data;
          console.log(this.categories);
          
      },err=>{
        console.log(err);
        
      });
  }
  recuperquincaillerie(){
    this.crud.get("quincaillerie/all")
      .subscribe(data=>{
          this.quincalleries = data;
          console.log(this.quincalleries);
          
      },err=>{
        console.log(err);
        
      });
  }
  add(f){
    console.log(f);
    this.crud.add("art/add",f)
        .subscribe(data=>{
          console.log(data);
          this.router.navigate(['listarticle']);
        },err=>{
          console.log(err);
    });
  }
}
