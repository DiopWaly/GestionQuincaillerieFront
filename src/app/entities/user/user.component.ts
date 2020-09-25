import { Router } from '@angular/router';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private crud : CrudService,private router : Router) { }

  ngOnInit(): void {
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

}
