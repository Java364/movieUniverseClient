import { Component, OnInit, Input } from '@angular/core';
import { Links } from '../link';
import { LinksService } from '../link.service';

@Component({
  selector: 'app-link-of-star',
  templateUrl: './link-of-star.component.html',
  styleUrls: ['./link-of-star.component.css']
})
export class LinkOfStarComponent implements OnInit {

  public link: Links;
  public links: Links[] = [];
  @Input() starId: number;

  constructor(private linkService: LinksService) {
    this.link = new Links();
  }

  ngOnInit() {
    this.showAllStarsLinks(this.starId);
  }

  showAllStarsLinks = (id: number) => {
    this.linkService.showStarsLinks(id, (success) => {
      this.links = <Links[]>success;
    });
  }
}
