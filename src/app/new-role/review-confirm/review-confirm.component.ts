import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewRoleService } from '../new-role.service';

@Component({
  selector: 'pion-review-confirm',
  templateUrl: './review-confirm.component.html',
  styleUrls: ['./review-confirm.component.scss']
})
export class ReviewConfirmComponent implements OnInit {

  roleDetails: role.RoleDetails;
  allocation: role.AllocationDetails;

  @Output('editStep')
  editStep = new EventEmitter<string>();

  constructor(private roleService: NewRoleService) { }

  ngOnInit() {
    console.log(this.roleService.getRoleDetails());
    this.roleDetails = this.roleService.getRoleDetails();
    this.allocation = this.roleService.getAllocation();
  }

  edit($event: MouseEvent, step: string){
    $event.stopPropagation();
    this.editStep.emit(step);
  }


}
