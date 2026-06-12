import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-threed',
  imports: [],
  templateUrl: './threed.html',
  styleUrl: './threed.css',
  standalone:true,
})
export class Threed {
  isBig =signal(false)
  rows=[0,1,2,3];
  cols=[0,1,2,3];
  toggle(){
    this.isBig.update((state)=>!state)
  }
}
