import { Component } from '@angular/core';
import { Mission } from "./mission/mission";
import { MissionsService } from "../services/mission.service";

@Component({
  selector: 'app-list-missions',
  templateUrl: './list-missions.component.html',
  styleUrl: './list-missions.component.css'
})
export class ListMissionsComponent {

  mission:Mission[];
  constructor(private missionsService : MissionsService){

  }

  ngOnInit():void{
    this.mission= this.missionsService.getMissions();
  }

}
