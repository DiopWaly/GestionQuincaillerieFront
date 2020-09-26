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


}
