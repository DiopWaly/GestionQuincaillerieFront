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

}
