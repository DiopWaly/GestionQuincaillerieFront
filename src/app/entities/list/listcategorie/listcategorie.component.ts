import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcategorie',
  templateUrl: './listcategorie.component.html',
  styleUrls: ['./listcategorie.component.css']
})
export class ListcategorieComponent implements OnInit {
  
  public categories;
  public articlesup = new Array();
  public test : boolean = false;
  constructor(private crud : CrudService, private router : Router) { }

  ngOnInit(): void {
    this.listcategories();
  }
  listcategories(){
    this.crud.get("categorie/all")
      .subscribe(data=>{
        this.categories = data;
        console.log(this.categories);
        
      },err=>{
        console.log(err);
        
      });
  }
  update(categorie : any){
    console.log(categorie);
    this.crud.setQuincaillerieServ(categorie);
    this.router.navigate(['editcategorie']);
  }
  delete(categorie : any){
    console.log(categorie);
    this.crud.delete('categorie/delete/'+categorie.id)
      .subscribe(data=>{
        console.log(data);
        this.listcategories();
        
      },err=>{
        console.log(err);
        
      });
  }
  cloner(categorie){
    this.crud.cloner("categorie/clone/"+categorie.id,categorie)
      .subscribe(data=>{
        console.log(data);
        this.listcategories();
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
    if(confirm("voulez-vraiment !!!")){
      this.crud.deletes("categorie/deletes",this.articlesup)
      .subscribe(data=>{
        console.log(data);
        this.articlesup = new Array();
        this.test = false
        this.listcategories();
      },err=>{
        console.log(err);
      });
    }
  }
  cloneAll(){
    this.crud.cloner("categorie/clones",this.articlesup)
      .subscribe(data=>{
        console.log(data);
        this.articlesup = new Array();
        this.test = false
        this.listcategories();
      },err=>{
        console.log(err);
        
      });
  }

}
