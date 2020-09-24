import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quincaillerie',
  templateUrl: './quincaillerie.component.html',
  styleUrls: ['./quincaillerie.component.css']
})
export class QuincaillerieComponent implements OnInit {

  constructor(private crud : CrudService,private router : Router) { }

  ngOnInit() {
  }

  add(f){
    console.log(f);
    this.crud.add("quincaillerie/add",f)
        .subscribe(data=>{
          console.log(data);
          this.router.navigate(['listquincaillerie']);
        },err=>{
          console.log(err);

        });
  }

}
