import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifprix-edit',
  templateUrl: './modifprix-edit.component.html',
  styleUrls: ['./modifprix-edit.component.css']
})
export class ModifprixEditComponent implements OnInit {

  public modifprix : any;
  public articles;
  constructor(private crud : CrudService, private router : Router) { }

  ngOnInit(): void {
    this.modifprix = this.crud.getQuincaillerieServ();
    this.recuper();
  }

  edit(f){
    this.crud.update("modifprix/update/"+this.modifprix.id,f)
      .subscribe(data=>{
        console.log(data);
        this.router.navigate(['listmodifprix']);
      },err=>{
        console.log(err);
        
      });
  }
  recuper(){
    this.crud.get("art/all")
      .subscribe(data=>{
        this.articles = data;
      },err=>{
        console.log(err);
        
      });
  }

}
