import { Component, OnInit, ViewChild } from '@angular/core';
import { StarService } from '../star.service';
import { Star } from '../star';
import { LinkEditorComponent } from '../../link/link-editor/link-editor.component';
import { LinksService } from '../../link/link.service';

@Component({
  selector: 'app-star-editor',
  templateUrl: './star-editor.component.html',
  styleUrls: ['./star-editor.component.css']
})
export class StarEditorComponent implements OnInit {

  public star: Star;
  public stars: Star[] = [];

  @ViewChild('linksEditor')
  private linksEditor: LinkEditorComponent;

  constructor(private starService: StarService, private linksService: LinksService) {
    this.star = new Star();
  }

  ngOnInit() {
    this.showAllStars();
  }

  showAllStars = () => {
    this.starService.getAll((success) => {
      this.stars = <Star[]>success;
    });
  }

  updateStar = (id: number) => {
    this.starService.updateStar(id, this.star, (success) => {
      this.star = <Star>success;
      this.showAllStars();
    });
  }

  saveStar = () => {
    this.updateStar(this.star.id);
  }

  deleteStar = (id: number) => {
    if (!confirm('This star will be removed')) {
      return;
    }
    this.starService.deleteStar(id, (success) => {
      this.showAllStars();
    });
  }

  getStar = (id: number) => {
    this.starService.getStar(id, (success) => {
      this.star = <Star>success;
      this.showAllStars();
    });
  }
}
