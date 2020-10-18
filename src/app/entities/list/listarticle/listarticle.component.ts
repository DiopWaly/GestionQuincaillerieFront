import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarticle',
  templateUrl: './listarticle.component.html',
  styleUrls: ['./listarticle.component.css']
})
export class ListarticleComponent implements OnInit {

  public articles : any;
  public articlesup = new Array();
  public test : boolean = false;
  constructor(private crud : CrudService, private router : Router) { }

  ngOnInit(): void {
    this.listarticle();
  }

  listarticle(){
    this.crud.get("art/all")
      .subscribe(data=>{
        this.articles = data;
        console.log(this.articles);
      });
  }
  
  update(article : any){
    this.crud.setQuincaillerieServ(article);
    this.router.navigate(['editarticle']);
  }

  delete(article : any){
    this.crud.delete("art/delete/"+article.id)
      .subscribe(data=>{
        console.log(data);
        this.listarticle();
      });
  }
  newarticle(){
    this.router.navigate(['article']);
  }

  clone(article){
    this.crud.cloner("art/clone/"+article.id,article)
      .subscribe(data=>{
        console.log(data);
        this.listarticle();
      },err=>{
        console.log(err);
      });
  }
  recuper(id:number){
    let index : number = -1;
    if(this.articlesup.length > 0){
      this.test = true;
      this.articlesup.forEach(e=>{
        if(e == id){
          index = this.articlesup.indexOf(id);
        }
      });
    }else{
      this.test = false;
    }
    if(index == -1){
      this.articlesup.push(id);
      this.test = true;
    }
    else{
      this.articlesup.splice(index,1);
      console.log(index);
      if(this.articlesup.length == 0){
         this.test = false
      }
    }
    console.log(this.articlesup);
  }
  deleteAll(){
    this.crud.deletes("art/deletes",this.articlesup)
      .subscribe(data=>{
        console.log(data);
        this.articlesup = new Array();
        this.test = false
        this.listarticle();
      },err=>{
        console.log(err);
      });
  }
  cloneAll(){
    this.crud.cloner("art/clones",this.articlesup)
      .subscribe(data=>{
        console.log(data);
        this.articlesup = new Array();
        this.test = false
        this.listarticle();
      },err=>{
        console.log(err);
        
      });
  }
}
