import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  public name: String;
  public surname: String;
  public pesel: String;
  public money: number;

  public register: String = "";

  constructor(private http:HttpServiceService, private registerService:RegisterService) { }
  
  ngOnInit(): void {
  }

  public onSubmit(f:NgForm) {
      this.register = "";
      this.http.register({
        money: this.money,
        surname: this.surname,
        name: this.name,
        pesel: this.pesel
      })
      .subscribe(it => {
        this.register =  it.message;
        this.registerService.registerSucces();
      }, err => {
        const {error:{error}} = err;
        this.register = error;
        });
  }

}
