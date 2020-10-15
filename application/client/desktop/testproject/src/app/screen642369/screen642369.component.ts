import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-screen642369',
  templateUrl: './screen642369.component.html',
  styleUrls: ['./screen642369.component.scss'],
})
export class Screen642369Component implements OnInit {

queryId: string;

  constructor(
private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute
 .queryParams
 .subscribe(params => {
 this.queryId = params.id;
 this.GpUpdate();
});
this.GpGetNounById();
  }



}