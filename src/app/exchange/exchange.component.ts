import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';
import { ExchangeResponse, User } from '../models/dictionary';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  
  public exchange:ExchangeResponse;
  public currencyFrom: String;
  public currencyTo: String;
  public pesel: String;
  public money: number;
  public currency: String[] = [];
  public users: User[] = [];
  public info: String = ""
  constructor(private http:HttpServiceService) { }

  ngOnInit(): void {
      this.http.getDist().subscribe(it => {
        this.currency = [...it.currency];
        this.users = [...it.users];
      });
  }
  public changeFrom(event):void {
    this.currencyFrom = event.target.value;
  }
  public changeTo(event):void {
    this.currencyTo = event.target.value;
  }
  public changePesel(event):void {
    this.pesel = event.target.value;
  }
  public onSubmit(form:NgForm) {
    this.info = ""
    this.exchange = null;
    this.http.exchange({
        currencyFrom: this.currencyFrom,
        currencyTo: this.currencyTo,
        pesel: this.pesel,
        money: this.money
    }).subscribe(it => this.exchange = it,
      err => {
      const {error:{error}} = err;
      this.info = error;
    });
  }

}
