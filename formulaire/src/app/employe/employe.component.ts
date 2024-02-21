import { Component, OnInit } from '@angular/core';
import { Employe } from './employe';
import { EmployeService } from '../service/employe.service'; 

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  employes: Employe[] = [];
  
  constructor(private employeService: EmployeService) {}

  ngOnInit() {
    this.employes = this.employeService.getEmployes();
  }

  
}