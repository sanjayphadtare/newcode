import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NewRoleService } from '../new-role.service';

@Component({
  selector: 'pion-role-details',
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.scss']
})
export class RoleDetailsComponent implements OnInit {

  workforceDetails: FormGroup;

  hireTypes: Array<app.MenuItem> = [
    { label: 'Insource', value: 'Insource' },
    { label: 'Insource1', value: 'Insource1' },
    { label: 'Insource2', value: 'Insource2' },
    { label: 'Insource3', value: 'Insource3' },
  ];

  roleActionTypes: Array<app.MenuItem> = [
    { label: 'Incremental', value: 'Incremental' },
    { label: 'Conversion', value: 'Conversion' },
    { label: 'Migration', value: 'Migration' },
    { label: 'Replacement', value: 'Replacement' },
  ];

  empClasses: Array<app.MenuItem> = [
    { label: 'Incremental', value: 'Incremental' },
    { label: 'Conversion', value: 'Conversion' },
    { label: 'Migration', value: 'Migration' },
    { label: 'Replacement', value: 'Replacement' },
  ];

  cities: Array<app.MenuItem> = [
    { label: 'Pune', value: 'Pune' },
    { label: 'Bangaluru', value: 'Bangaluru' },
    { label: 'Mumbai', value: 'Mumbai' },
    { label: 'Delhi', value: 'Delhi' },
  ];

  countries: Array<app.MenuItem> = [
    { label: 'India', value: 'India' },
    { label: 'USA', value: 'USA' },
    { label: 'UK', value: 'UK' },
    { label: 'Canada', value: 'Canada' },
  ];

  constructor(private newRoleService: NewRoleService) { }

  ngOnInit() {
    const workforceDetails = this.newRoleService.getWorkforceDetails();
    this.workforceDetails = new FormGroup({
      hireType: new FormControl(workforceDetails.hireType || this.hireTypes[0]),
      numberOfRoles: new FormControl(workforceDetails.numberOfRoles),
      roleActionType: new FormControl(workforceDetails.roleActionType || this.roleActionTypes[0]),
      linkedCToolId: new FormControl(workforceDetails.linkedCToolId),
      employeeClass: new FormControl(workforceDetails.employeeClass || this.empClasses[0]),
      roleStartDate: new FormControl(workforceDetails.roleStartDate || new Date()),
      roleEndDate: new FormControl(workforceDetails.roleEndDate || new Date()),
    });
  }

  save() {
    console.log(this.workforceDetails.value);
    return this.workforceDetails.value;
  }

}
