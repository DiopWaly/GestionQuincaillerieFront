import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listquinc',
  templateUrl: './listquinc.component.html',
  styleUrls: ['./listquinc.component.css']
})
export class ListquincComponent implements OnInit {
  public quincailleries;
  public confirm : boolean;
  constructor(private crud : CrudService, private router : Router) { }

  ngOnInit(){
    this.confirm = false;
    this.listequincaillerie();
  }

  listequincaillerie(){
    this.crud.get("quincaillerie/all")
      .subscribe(data=>{
        this.quincailleries = data;
        console.log(this.quincailleries);

      },err=>{
        console.log(err);

      });
  }
  update(quinc : any){
    this.crud.setQuincaillerieServ(quinc);
    // console.log(this.crud.getQuincaillerieServ());
    this.router.navigate(["editquincaillerie"]);
  }
  delete(quinc : any){
    console.log(quinc);
    this.confirm = confirm("Voulez-vous supprimer");
    if(this.confirm){
      this.crud.delete("quincaillerie/delete/"+quinc.id)
      .subscribe(data=>{
        console.log(data);
        this.listequincaillerie();
      },err=>{
        console.log(err);
      });
    }
  }

}
