import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  constructor() {
    console.log("me estoy haciendo");
   }

  ngOnInit() {
    console.log("ya me hice");
  }

  ngOnDestroy(): void {
    console.log("loco te fuiste");
  }

}
