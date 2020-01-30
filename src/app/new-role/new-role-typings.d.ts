declare namespace role {

  interface WorkforceDetails {
    hireType: app.MenuItem;
    numberOfRoles: number;
    roleActionType: app.MenuItem;
    linkedCToolId: string;
    employeeClass: app.MenuItem;
    roleStartDate: string;
    roleEndDate: string;
  }

  interface RoleDetails {
    workforceDetails: WorkforceDetails;
  }

  interface AllocationDetails {
    projectName: string;
    year: number;
    defaultAllocation: app.MenuItem;
  }
  interface FormData {
    roleDetails: RoleDetails;
    allocation: AllocationDetails;
  }
}