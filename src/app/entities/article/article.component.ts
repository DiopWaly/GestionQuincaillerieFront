import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private crud : CrudService, private router : Router) { }

  ngOnInit(): void {
  }

  add(f){
    this.crud.add("article/add",f)
     .subscribe(data =>{
        console.log(f);
        this.router.navigate(['listarticle']);
     },err=>{
       console.log(err);
     });
  }

}
