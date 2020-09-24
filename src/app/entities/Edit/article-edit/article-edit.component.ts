import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  constructor(private crud : CrudService, private router : Router) { }
  public articleEdit;
  ngOnInit(): void {
    this.articleEdit = this.crud.getQuincaillerieServ();
    console.log(this.articleEdit);
  }
  edit(f){
    this.crud.update("article/update/"+this.articleEdit.id,f)
      .subscribe(data=>{
        console.log(data);
        this.router.navigate(['listarticle']);
      },err=>{
        console.log(err);
        
      });
  }

}
