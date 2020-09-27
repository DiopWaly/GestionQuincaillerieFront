import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  public clientEdit;
  public users;

  constructor(private crud : CrudService, private router : Router) { }

  ngOnInit(): void {
    this.clientEdit = this.crud.getQuincaillerieServ();
    this.recuper();
  }

  edit(f){
    this.crud.update('client/update/'+this.clientEdit.id,f)
      .subscribe(data=>{
        console.log(data);
        this.router.navigate(['listclient']);
      },err=>{
        console.log(err);
        
      });
  }
  recuper(){
    this.crud.get("user/all")
      .subscribe(data=>{
        this.users = data;
      },err=>{
        console.log(err);
        
      });
  }

}
