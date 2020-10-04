import { Component, OnInit } from '@angular/core';

import { CrudService } from './../../../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listclient',
  templateUrl: './listclient.component.html',
  styleUrls: ['./listclient.component.css']
})
export class ListclientComponent implements OnInit {

  public clients;
  constructor(private crud :CrudService, private router : Router) { }

  ngOnInit(): void {
    this.listclient();
  }

  listclient(){
    this.crud.get("client/all")
      .subscribe(data=>{
        this.clients = data;
      },err=>{
        console.log(err);
      });
  }
  update(client : any){
    console.log(client);
    this.crud.setQuincaillerieServ(client);
    this.router.navigate(['editclient']);
  }
  delete(client : any){
    this.crud.delete("client/delete/"+client.id)
      .subscribe(data=>{
        console.log(data);
        this.listclient();
      },err=>{
        console.log(err);
        
      })
  }
  cloner(client){
    this.crud.cloner("client/clone/"+client.id,client)
      .subscribe(data=>{
        console.log(data);
        this.listclient();
      },err=>{
        console.log(err);
      });
  }

}
