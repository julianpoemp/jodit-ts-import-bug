import {Component, OnInit} from '@angular/core';
import * as joditESM from 'jodit';
import {Config} from 'jodit/esm/config';

declare const Jodit: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(){
    joditESM.Jodit.make('#editor', {
      width: 600,
      height: 400,
      buttons: ["bold", "underline"],
      textIcons: false
    } as Config);

    Jodit.make('#editor2', {
      width: 600,
      height: 400,
      buttons: ["bold", "underline"],
      textIcons: false
    } as Config);
  }
}
