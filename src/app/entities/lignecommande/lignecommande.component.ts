import { Router } from '@angular/router';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lignecommande',
  templateUrl: './lignecommande.component.html',
  styleUrls: ['./lignecommande.component.css']
})
export class LignecommandeComponent implements OnInit {

  constructor(private crud : CrudService,private router : Router) { }

  ngOnInit(): void {
  }
  add(f){
    console.log(f);
    this.crud.add("lignecommande/add",f)
        .subscribe(data=>{
          console.log(data);
          this.router.navigate(['listlignecommande']);
        },err=>{
          console.log(err);

        });
  }

}
