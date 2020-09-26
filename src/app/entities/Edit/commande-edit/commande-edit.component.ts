import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-commande-edit',
  templateUrl: './commande-edit.component.html',
  styleUrls: ['./commande-edit.component.css']
})
export class CommandeEditComponent implements OnInit {

  public commandeEdit;
  constructor(private crud : CrudService, private router : Router) { }

  ngOnInit(): void {
    this.commandeEdit = this.crud.getQuincaillerieServ();
  }

  edit(f){
    this.crud.update('commande/update/'+this.commandeEdit.id,f)
      .subscribe(data=>{
        console.log(data);
        this.router.navigate(['listcommande']);
      });
  }

}
