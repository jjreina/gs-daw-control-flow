import { Component } from '@angular/core';

@Component({
  selector: 'app-components-control-flow-if',
  standalone: false,
  templateUrl: './control-flow-if.component.html',
  styleUrl: './control-flow-if.component.css',
})
export class ControlFlowIfComponent {
  public show: boolean = true;
  public checkMail: boolean = true;
  public checkPassword: boolean = true;

  public checkBeforeSend = (mail: string, password: string): void => {
    this.checkMail = mail.includes('@');
    this.checkPassword = password.length > 5;
  };

  public showLogin = (event: Event): boolean => {
    const checkbox = event.target as HTMLInputElement;

    return (this.show = checkbox.checked);
  };
}
