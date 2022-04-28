import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CounterApp';

  countNumber = 0;

  resetBtn()
  {
    this.countNumber = 0;
  }

  //increaceBtn
  increaseBtn()
  {
    this.countNumber = this.countNumber + 1;
  }

  //decreasingBtn
  decreaseBtn()
  {
    this.countNumber = this.countNumber - 1;
    if(this.countNumber<0){
      this.countNumber = 0;
    }
  }
}
