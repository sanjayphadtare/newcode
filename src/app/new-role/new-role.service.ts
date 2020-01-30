import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewRoleService {

  private newRoleFormData: role.FormData = {
    roleDetails: {
      workforceDetails: {
        hireType: null,
        numberOfRoles: 0,
        roleActionType: null,
        linkedCToolId: null,
        employeeClass: null,
        roleStartDate: null,
        roleEndDate: null
      }
    },
    allocation: {
      projectName: null,
      year: null,
      defaultAllocation: null
    }
  }

  setWorkforceDetails(details: role.WorkforceDetails) {
    const roleDetails = { ...this.newRoleFormData.roleDetails, workforceDetails: details };
    this.newRoleFormData.roleDetails = roleDetails;
  }

  setAllocation(allocation: role.AllocationDetails) {
    this.newRoleFormData.allocation = allocation;
  }

  getWorkforceDetails(){
    return {...this.newRoleFormData.roleDetails.workforceDetails};
  }

  getAllocation() {
    return {...this.newRoleFormData.allocation};
  }

  getRoleDetails() {
    return {...this.newRoleFormData.roleDetails};
  }

  constructor() { }
}
