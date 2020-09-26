import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  public clientEdit;

  constructor(private crud : CrudService, private router : Router) { }

  ngOnInit(): void {
    this.clientEdit = this.crud.getQuincaillerieServ();
  }

  edit(f){
    this.crud.update('client/update/'+this.clientEdit.id,f)
      .subscribe(data=>{
        console.log(data);
        this.router.navigate(['listclient']);
      },err=>{
        console.log(err);
        
      });
  }

}
