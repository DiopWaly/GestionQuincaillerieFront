import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie-edit',
  templateUrl: './categorie-edit.component.html',
  styleUrls: ['./categorie-edit.component.css']
})
export class CategorieEditComponent implements OnInit {

  public categorieEdit;
  public categories;
  constructor(private crud : CrudService, private router : Router) { }
  ngOnInit(): void {
    this.categorieEdit = this.crud.getQuincaillerieServ();
    this.recuper();
  }

  edit(f){
    console.log(f);
    this.crud.update("categorie/update/"+this.categorieEdit.id,f)
        .subscribe(data=>{
           console.log(data);
           this.router.navigate(['listcategorie']);
        },err=>{
           console.log(err);
           
        });
  }
  recuper(){
    this.crud.get("categorie/all")
      .subscribe(data=>{
        this.categories = data;
      },err=>{
        console.log(err);
        
      });
  }

}
