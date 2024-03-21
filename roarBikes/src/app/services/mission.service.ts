import { HttpClient, withFetch } from "@angular/common/http";
import { Mission } from "../list-missions/mission/mission";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class MissionsService{

    missions : Mission[]=[
        new Mission("Book Online ", " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo cumque odit. Nostrum, et ducimus?", "../../assets/images/carte.svg",),
        new Mission("Service Types", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo cumque odit. Nostrum, et ducimus?", "../../assets/images/carte.svg"),
        new Mission("Call for Advice", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo cumque odit. Nostrum, et ducimus?", "../../assets/images/carte.svg")
    ]

    getMissions(){
        return this.missions;
    }

}