import { Router } from '@angular/router';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public quincailleries;
  public groupes;
  constructor(private crud : CrudService,private router : Router) { }

  ngOnInit(): void {
    this.quincailleries = this.recupe("quincaillerie/all");
    this.groupes = this.recupe("groupe/all");
  }
  add(f){
    console.log(f);
    this.crud.add("user/add",f)
        .subscribe(data=>{
          console.log(data);
          this.router.navigate(['listuser']);
        },err=>{
          console.log(err);

        });
  }
  recupe(url : string){
     this.crud.get(url)
      .subscribe(data=>{
        return data;
      },err=>{
          console.log(err);
          
      });
  }

}
