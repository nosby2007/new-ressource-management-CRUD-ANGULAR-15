import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAllocationComponent } from './add-allocation/add-allocation.component';
import { AllAllocationsComponent } from './all-allocations/all-allocations.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogComponent } from './dialog/dialog.component';
import { ManageItemComponent } from './manage-item/manage-item.component';
import { ManageProjectComponent } from './manage-project/manage-project.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { NarvbarComponent } from './narvbar/narvbar.component';
import { NewItemComponent } from './new-item/new-item.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  {path:"", component:DashboardComponent},
  {path:"allallocation", component:AllAllocationsComponent},
  {path:"addallocation", component:AddAllocationComponent},
  {path:"manageitem", component:ManageItemComponent},
  {path:"manageproject", component:ManageProjectComponent},
  {path:"manageuser", component:ManageUsersComponent},
  {path:"newitem", component:NewItemComponent},
  {path:"newuser", component:NewUserComponent},
  {path:"newproject", component:NewProjectComponent},
  {path:"naw", component:NarvbarComponent},
  {path:"dialog", component:DialogComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
