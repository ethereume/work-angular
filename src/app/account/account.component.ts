import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Account, User } from '../models/dictionary';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private http:HttpServiceService) { }
  public users:User[] = [];
  public account: Account;
  ngOnInit(): void {
    this.http.getDist().subscribe(it => {
      this.users = [...it.users];
      console.log(this.users);
    });
  }

  public change(e){
    if(e.target.value === "") return;;
    this.http.getAccount(e.target.value).subscribe(it => this.account = it);
  }

}
