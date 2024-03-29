import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoryViewerPageRoutingModule } from './story-viewer-routing.module';

import { StoryViewerPage } from './story-viewer.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    StoryViewerPageRoutingModule,
    ComponentsModule,
    FormsModule
  ],
  exports: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [StoryViewerPage]
})
export class StoryViewerPageModule {}
