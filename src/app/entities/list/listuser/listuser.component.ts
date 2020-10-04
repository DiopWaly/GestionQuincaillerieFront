import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  public users;
  constructor(private crud : CrudService, private router : Router) { }

  ngOnInit(): void {
    this.listuser();
  }
  listuser() {
    this.crud.get("user/all")
      .subscribe(data=>{
         this.users = data;
         console.log(this.users);   
      },err=>{
        console.log(err);
        
      });
  }
  delete(user){
    this.crud.delete("user/delete/"+user.id)
      .subscribe(data=>{
        this.listuser();
        console.log(data);
        
      },err=>{
        console.log(err);
        
      });
  }
  update(user){
    this.crud.setQuincaillerieServ(user);
    this.router.navigate(['edituser']);
  }
  cloner(user){
    this.crud.cloner("user/clone/"+user.id,user)
      .subscribe(data=>{
        console.log(data);
        this.listuser();
      },err=>{
        console.log(err);
        
      });
  }

}
