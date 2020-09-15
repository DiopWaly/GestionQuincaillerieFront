import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listmodifprix',
  templateUrl: './listmodifprix.component.html',
  styleUrls: ['./listmodifprix.component.css']
})
export class ListmodifprixComponent implements OnInit {

  public modifprix : any;
  constructor(private crud : CrudService,private router : Router) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.crud.get("modifprix/all")
     .subscribe(data=>{
       this.modifprix = data;
       console.log(data);
     },err=>{
       console.log(err);
       
     });
  }
  update(modp){
    this.crud.setQuincaillerieServ(modp);
    this.router.navigate(['editmodifprix']);
  }
  delete(modp){
    this.crud.delete("modifprix/delete/"+modp.id)
      .subscribe(data=>{
        console.log(data);
        this.list();
        
      },err=>{
        console.log(err);
        
      });
    
  }
  newModifprix(){
    this.router.navigate(['modifprix']);
  }

}
