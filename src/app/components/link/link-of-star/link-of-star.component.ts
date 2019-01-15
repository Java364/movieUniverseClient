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

  updatePut(id: number) {
    this.linkService.updateLinks(id, this.link, (success) => {
      this.link = <Links>success;
      this.showAllStarsLinks(this.starId);
    });
  }

  linkGet(id: number) {
    this.linkService.getLink(id, (success) => {
      this.link = <Links>success;
    });
  }

  linkDelete(id: number) {
    this.linkService.deleteLinks(id, (success) => {
      this.showAllStarsLinks(this.starId);
    });
  }
}
