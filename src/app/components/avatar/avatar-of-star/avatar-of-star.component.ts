import { Component, OnInit, Input } from '@angular/core';
import { Avatar } from '../avatar';
import { AvatarService } from '../avatar.service';

@Component({
  selector: 'app-avatar-of-star',
  templateUrl: './avatar-of-star.component.html',
  styleUrls: ['./avatar-of-star.component.css']
})
export class AvatarOfStarComponent implements OnInit {

  public avatar: Avatar;
  @Input() avatarLink: string;

  constructor(private avatarService: AvatarService) {
    this.avatar = new Avatar();
  }

  ngOnInit() {
    this.showStarsAvatar(this.avatarLink);
  }

  showStarsAvatar = (link: string) => {
    this.avatarService.showStarsAvatar(link, (success) => {
      this.avatar = <Avatar>success;
    });
  }

}
