import { Component } from '@angular/core';

@Component({
  selector: 'app-components-control-flow-for',
  standalone: false,
  templateUrl: './control-flow-for.component.html',
  styleUrl: './control-flow-for.component.css',
})
export class ControlFlowForComponent {
  public products: string[] = [
    'Apple',
    'Banana',
    'Orange',
    'Pineapple',
    'Strawberry',
  ];
}
