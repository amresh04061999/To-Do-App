import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{
@Input() status:any
constructor(){

}
  ngOnInit(): void {
    console.log(this.status);
    
  }
}
