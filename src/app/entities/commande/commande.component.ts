import { Router } from '@angular/router';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  constructor(private crud : CrudService,private router : Router) { }

  ngOnInit(): void {
  }
  add(f){
    console.log(f);
    this.crud.add("commande/add",f)
        .subscribe(data=>{
          console.log(data);
          this.router.navigate(['listcommande']);
        },err=>{
          console.log(err);

        });
  }
}
