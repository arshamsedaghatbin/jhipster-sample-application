import { NgModule } from '@angular/core';

import { ArshamsampleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ArshamsampleSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ArshamsampleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ArshamsampleSharedCommonModule {}
