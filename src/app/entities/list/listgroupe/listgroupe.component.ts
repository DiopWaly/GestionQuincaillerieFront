import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-listgroupe',
  templateUrl: './listgroupe.component.html',
  styleUrls: ['./listgroupe.component.css']
})
export class ListgroupeComponent implements OnInit {

  public groupes; 
  constructor(private crud : CrudService, private router : Router) { }

  ngOnInit(): void {
    this.listgroupe();
  }
  listgroupe() {
    this.crud.get("groupe/all")
      .subscribe(data=>{
        this.groupes = data;
        console.log(this.groupes);
      },err=>{
        console.log(err);
        
      });
  }
  update(groupe : any){
    this.crud.setQuincaillerieServ(groupe);
    this.router.navigate(['editgroupe']);
  }
  delete(groupe : any){
    this.crud.delete("groupe/delete/"+groupe.id)
      .subscribe(data=>{
        this.listgroupe();
        console.log(data);
        
      },err=>{
        console.log(err);
        
      });
  }

}
