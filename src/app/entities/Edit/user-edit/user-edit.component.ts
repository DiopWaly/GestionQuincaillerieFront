import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  public userEdit;
  public quincailleries;
  public groupes;
  constructor(private crud: CrudService, private router : Router) { }

  ngOnInit(): void {
    this.userEdit = this.crud.getQuincaillerieServ();
    console.log(this.userEdit);
    
    this.recupeQuinc();
    this.recupeGroup();
  }
  recupeQuinc(){
    this.crud.get("quincaillerie/all")
     .subscribe(data=>{
       this.quincailleries = data;
       console.log(this.quincailleries);
       
     },err=>{
         console.log(err);
         
     });
  }
  recupeGroup(){
    this.crud.get("groupe/all")
     .subscribe(data=>{
      this.groupes = data;
      console.log(this.groupes);
      
     },err=>{
         console.log(err);
         
     });
  }
  edit(f){
    console.log(f);
    this.crud.update("user/update/"+this.userEdit.id,f)
      .subscribe(data=>{
          this.router.navigate(['listuser']);
          console.log(data);
          
      },err=>{
        console.log(err);
      });
  }

}
