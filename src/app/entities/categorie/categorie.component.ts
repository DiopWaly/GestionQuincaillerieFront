import { Router } from '@angular/router';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  constructor(private crud : CrudService,private router : Router) { }

  ngOnInit(): void {
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

}
