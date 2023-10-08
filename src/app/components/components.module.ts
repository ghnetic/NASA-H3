import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { IonicModule } from '@ionic/angular';
import { StoryAvatarComponent } from './story-avatar/story-avatar.component';
import { StoryCardComponent } from './story-card/story-card.component';
import { MessageListItemComponent } from './message-list-item/message-list-item.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { NotificationItemComponent } from './notification-item/notification-item.component';
import { GroupCardComponent } from './group-card/group-card.component';
import { EventCardComponent } from './event-card/event-card.component';
import { FollowCardComponent } from './follow-card/follow-card.component';

@NgModule({
  declarations: [
    FeedCardComponent,
    StoryAvatarComponent,
    StoryCardComponent,
    MessageListItemComponent,
    ContactCardComponent,
    NotificationItemComponent,
    GroupCardComponent,
    EventCardComponent,
    FollowCardComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [CommonModule, IonicModule.forRoot()],
  exports: [
    FeedCardComponent,
    StoryAvatarComponent,
    StoryCardComponent,
    MessageListItemComponent,
    ContactCardComponent,
    NotificationItemComponent,
    GroupCardComponent,
    EventCardComponent,
    FollowCardComponent
  ],
})
export class ComponentsModule {}
