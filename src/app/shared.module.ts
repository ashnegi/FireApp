import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './pipe/limit.pipe';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  imports: [CommonModule, FlashMessagesModule.forRoot()],
  declarations: [TruncatePipe],
  exports: [TruncatePipe, FlashMessagesModule]
})
export class SharedModule {}
