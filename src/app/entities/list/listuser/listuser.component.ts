import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

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
    this.router.navigate(['listuser']);
  }

}
