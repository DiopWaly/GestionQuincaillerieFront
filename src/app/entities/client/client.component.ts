import { Component, OnInit } from '@angular/core';

import { CrudService } from './../../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public users;
  constructor(private crud : CrudService,private router : Router) { }

  ngOnInit(): void {
    this.recupUser();
  }
  add(f){
    console.log(f);
    this.crud.add("client/add",f)
        .subscribe(data=>{
          console.log(data);
          this.router.navigate(['listclient']);
        },err=>{
          console.log(err);

        });
  }
  recupUser(){
    this.crud.get("user/all")
      .subscribe(data=>{
        this.users = data;
        console.log(this.users);
        
      },err=>{
        console.log(err);
      });
  }

}
