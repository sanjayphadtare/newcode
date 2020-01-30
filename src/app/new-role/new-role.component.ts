import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { NewRoleService } from './new-role.service';
import { FormGroup, FormControl } from '@angular/forms';
import { RoleDetailsComponent } from './role-details/role-details.component';
import { AllocationComponent } from './allocation/allocation.component';

@Component({
  selector: 'pion-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewRoleComponent implements OnInit, OnDestroy {

  currentStep = {
    ROLE_DETAILS: true,
    ALLOCATION: false,
    REVIEW: false
  };
  visited = {
    ROLE_DETAILS: false,
    ALLOCATION: false,
    REVIEW: false
  }

  @ViewChild(RoleDetailsComponent, {static: false})
  private roleDetailsComponent: RoleDetailsComponent;

  @ViewChild(AllocationComponent, {static: false})
  private allocationComponent: AllocationComponent;

  constructor(
    private appService: AppService,
    private newRoleService: NewRoleService
  ) { }


  ngOnInit() {
    // Hide the menu bar when new role creation is started
    this.appService.setMenuBarVisibility(false);
  }

  ngOnDestroy() {
    // show the menu bar after role creation is done
    this.appService.setMenuBarVisibility(true);
  }

  continue() {
    if(this.currentStep.ROLE_DETAILS) {
      this.newRoleService.setWorkforceDetails(this.roleDetailsComponent.save());
      this.setCurrentStep('ALLOCATION');
      this.setStepVisited('ROLE_DETAILS');
    } else if(this.currentStep.ALLOCATION) {
      this.newRoleService.setAllocation(this.allocationComponent.save());
      this.setCurrentStep('REVIEW');
      this.setStepVisited('ALLOCATION');
    }
  }

  private setCurrentStep(step: string) {
    this.currentStep.ROLE_DETAILS = false;
    this.currentStep.ALLOCATION = false;
    this.currentStep.REVIEW = false;
    this.currentStep[step] = true;
  }

  private setStepVisited(step: string) {
    this.visited[step] = true;
  }

  back() {
    if(this.currentStep.REVIEW) {
      this.setStepVisited('REVIEW');
      this.setCurrentStep('ALLOCATION');
    } else if(this.currentStep.ALLOCATION) {
      this.setStepVisited('ALLOCATION');
      this.setCurrentStep('ROLE_DETAILS');
    }
  }

  cancel() {
    //reset form data in service
    this.appService.navigateByUrl('headcount');
  }

  saveRole() {
    // save role
    // this.appService.navigateByUrl('headcount');
  }

  edit(step: string){
    this.setCurrentStep(step);
  }

}
