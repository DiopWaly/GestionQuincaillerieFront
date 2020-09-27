import { Component, OnInit } from '@angular/core';

import { CrudService } from './../../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  public categories;
  constructor(private crud : CrudService,private router : Router) { }

  ngOnInit(): void {
    this.recuper();
  }
  add(f){
    console.log(f);
    this.crud.add("categorie/add",f)
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
