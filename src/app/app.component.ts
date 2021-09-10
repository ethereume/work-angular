import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from './http-service.service';
import { Distionary } from './models/dictionary';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http:HttpServiceService,
    private registerService:RegisterService) {}

  public dist:Distionary;

  ngOnInit() {
      this.init();
      this.registerService.register$.subscribe(it => this.init());
  }

  private init(): void {
    this.http.getDist().subscribe(it => {
      this.dist = it;
    });
  }
}
