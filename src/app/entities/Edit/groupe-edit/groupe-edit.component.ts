import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-groupe-edit',
  templateUrl: './groupe-edit.component.html',
  styleUrls: ['./groupe-edit.component.css']
})
export class GroupeEditComponent implements OnInit {

  public groupeEdit;
  constructor(private crud : CrudService, private router : Router) { }

  ngOnInit(): void {
    this.groupeEdit = this.crud.getQuincaillerieServ();
  }
  edit(f){
    this.crud.update("groupe/update/"+this.groupeEdit.id,f)
      .subscribe(data=>{
          console.log(data);
          this.router.navigate(['listgroupe']);
      },err=>{
        console.log(err);
        
      });
  }

}
