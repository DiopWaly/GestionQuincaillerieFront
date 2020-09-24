import { Router } from '@angular/router';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private crud : CrudService,private router : Router) { }

  ngOnInit(): void {
  }
  add(f){
    console.log(f);
    this.crud.add("article/add",f)
        .subscribe(data=>{
          console.log(data);
          this.router.navigate(['listquincaillerie']);
        },err=>{
          console.log(err);

        });
  }
}
