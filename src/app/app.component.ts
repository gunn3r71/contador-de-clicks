import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Contador de clicks';
  clicks:number = 0;

  public AdicionarClicks():void {
      this.clicks++;
  }

  public RemoverClicks():void {
      this.clicks--;
  }
}
