import { Component, Input } from '@angular/core';
import { Mission } from "./mission";

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css'
})
export class MissionComponent {
  @Input() myMission:Mission;

}
