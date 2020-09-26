import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

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
    this.quincailleries = this.recupe("quincaillerie/all");
    this.groupes = this.recupe("groupe/all");
  }
  recupe(url : string){
    this.crud.get(url)
     .subscribe(data=>{
       return data;
     },err=>{
         console.log(err);
         
     });
  }
  edit(f){
    this.crud.update("user/update/"+this.userEdit.id,f)
      .subscribe(data=>{
          this.router.navigate(['listuser']);
          console.log(data);
          
      },err=>{
        console.log(err);
      });
  }

}
