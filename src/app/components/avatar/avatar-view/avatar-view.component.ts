import { Component, OnInit, Input } from '@angular/core';
import { AvatarService } from '../avatar.service';
import { Avatar } from '../avatar';

@Component({
    selector: 'app-avatar-view',
    templateUrl: './avatar-view.component.html',
    styleUrls: ['./avatar-view.component.css']
})
export class AvatarViewComponent implements OnInit {

    private avatar:Avatar;

    @Input('avatarLink') link:string;

    constructor(private avatarService: AvatarService) { 

    }

    ngOnInit(): void { 
        this.avatarService.getAvatar(this.link, (avatar: Avatar) => {
            this.avatar = avatar;
        })
    }
}
