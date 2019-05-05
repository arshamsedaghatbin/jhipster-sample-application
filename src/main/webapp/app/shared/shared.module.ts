import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ArshamsampleSharedLibsModule, ArshamsampleSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ArshamsampleSharedLibsModule, ArshamsampleSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ArshamsampleSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ArshamsampleSharedModule {
  static forRoot() {
    return {
      ngModule: ArshamsampleSharedModule
    };
  }
}
