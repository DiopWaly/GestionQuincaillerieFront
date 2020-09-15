import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quincaillerie-edit',
  templateUrl: './quincaillerie-edit.component.html',
  styleUrls: ['./quincaillerie-edit.component.css']
})
export class QuincaillerieEditComponent implements OnInit {

  public quicaillerie;
  constructor(private crud : CrudService,private router : Router) { }

  ngOnInit(): void {
    this.quicaillerie = this.crud.getQuincaillerieServ();
    console.log(this.quicaillerie);
  }
  edit(f){
    this.crud.update("quincaillerie/update/"+this.quicaillerie.id,f)
      .subscribe(data=>{
        console.log(data);
        this.router.navigate(['listquincaillerie']);
      },err=>{
        console.log(err);
      });
  }

}
