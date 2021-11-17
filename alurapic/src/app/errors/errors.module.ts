import { GlobalErrorComponent } from './global-error/global-error.component';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler';
import { NotFoundComponent } from './not-found/not-found.component';

import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NotFoundComponent, GlobalErrorComponent],
  providers: [{
    provide: ErrorHandler,
    useClass: GlobalErrorHandler

  }]
})
export class ErrorsModule { }
