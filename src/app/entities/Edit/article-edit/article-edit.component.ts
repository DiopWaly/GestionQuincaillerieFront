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
  public categories;
  public quincalleries;
  ngOnInit(): void {
    this.articleEdit = this.crud.getQuincaillerieServ();
    this.recupercategorie();
    this.recuperquincaillerie();
    console.log(this.articleEdit);
  }
  edit(f){
    this.crud.update("art/update/"+this.articleEdit.id,f)
      .subscribe(data=>{
        console.log(data);
        this.router.navigate(['listarticle']);
      },err=>{
        console.log(err);
        
      });
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

}
