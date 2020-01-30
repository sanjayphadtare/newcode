import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NewRoleService } from '../new-role.service';

@Component({
  selector: 'pion-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.scss']
})
export class AllocationComponent implements OnInit {

  allocation: FormGroup;

  constructor(private newRoleService: NewRoleService) { }

  ngOnInit() {
    const allocation = this.newRoleService.getAllocation();
    this.allocation = new FormGroup({
      projectName: new FormControl(allocation.projectName || 'Project 1'),
      year: new FormControl(allocation.year || '2020'),
      defaultAllocation: new FormControl(allocation.defaultAllocation || 'Lorem Ipsum')
    });
  }

  save() {
    console.log(this.allocation.value);
    return this.allocation.value;
  }

}
