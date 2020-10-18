import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Client } from './../../classes/client';
import { CrudService } from './../../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  form: FormGroup;
  uploadResponse;
  public users;
  public imageSrc: string;
  submitError: string;
  validation_messages = {
    'typeclient': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'Entrer un prenom valide svp'}
    ],
    'prenom': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'Entrer un nom valide svp' }
    ],
    'nom': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'Entrer un nom valide svp' }
    ],
    'adresse': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'champ est obligatoire.' },
    ],
    'acompte': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'En valide svp' }
    ],
    'tel': [
      { type: 'required', message: 'Telephone is required.' }
    ],
    'solde': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'c\'est numerique svp'}
    ],
    'profession': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'Votre profession svp' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'user': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'photo': [
      { type: 'required', message: 'champ est obligatoire.' },
      { type: 'pattern', message: '' }
    ]
  };

  constructor(private crud : CrudService, 
              private router : Router,
              private formBuilder: FormBuilder
            )
  { 
    this.form = new FormGroup({
      'typeclient': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_. +-]+$')
      ])),
      'prenom': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9 .]+$')
      ])),
      'nom': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9 .]+$')
      ])),
      'adresse': new FormControl('', Validators.compose([
        Validators.required,
      ])),
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      'tel': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^([+]221[-. ])?(7[0678]{1})([-. ])?[0-9]{3}([-. ]?[0-9]{2}){2}$')
      ])),
      'acompte': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      'solde': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      'profession': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_. +-]+$')
      ])),
      'user': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'photo': new FormControl('', Validators.compose([
        // Validators.required,
        // Validators.pattern('^[a-zA-Z0-9_.+-]+$')
      ]))
    });
  }

  ngOnInit(): void {
    this.recupUser();
  }
  add(){
    let client = new Client(this.form);
    
    this.crud.add("client/add",client)
        .subscribe(data=>{
          console.log(data);
          this.router.navigate(['listclient']);
        },err=>{
          console.log(err);

        });
  }
  recupUser(){
    this.crud.get("user/all")
      .subscribe(data=>{
        this.users = data;
        console.log(this.users);
        
      },err=>{
        console.log(err);
      });
  }
  onFileChange(event) {

    // if (event.target.files.length > 0) {
    //   const file = event.target.files[0];
    //   console.log(file);
      
    //   this.form.get('photo').setValue(file);
    // }

    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      console.log(file);
      
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
     
        this.form.patchValue({
          fileSource: reader.result
        });
   
      };
   
    }
  }

}
