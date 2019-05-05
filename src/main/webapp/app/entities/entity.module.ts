import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#ArshamsampleRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#ArshamsampleCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#ArshamsampleLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#ArshamsampleDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#ArshamsampleTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#ArshamsampleEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#ArshamsampleJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#ArshamsampleJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ArshamsampleEntityModule {}
