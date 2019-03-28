import {
  Component,
  OnInit,
  AfterContentInit,
  ViewChild,
  EventEmitter,
  Output
} from "@angular/core";
import { ImageService } from "../../services/image.service";
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { MatGridList } from "@angular/material";

@Component({
  selector: "app-art",
  templateUrl: "./art.component.html",
  styleUrls: ["./art.component.scss"]
})
export class ArtComponent implements OnInit, AfterContentInit {
  //GridList reference
  @ViewChild("grid") grid: MatGridList;

  //Images array
  public images: [];
  start: number = 30;
  end: number = 34;

  //Object determine col size.
  gridByBreakpoint = {
    xl: 8,
    lg: 6,
    md: 4,
    sm: 2,
    xs: 1
  };

  //Inject Services, & Media Observer
  constructor(
    private imageService: ImageService,
    private observableMedia: MediaObserver
  ) {
    this.images = [];
  }

  /**
   * Retrieve images from service store them in images array.
   */
  ngOnInit() {
    this.imageService.getImages().subscribe(img => {
      this.images = img;
    });
  }

  /**
   * Change the gridlist columns based on media screen size.
   */
  ngAfterContentInit() {
    this.observableMedia.media$.subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }

  /**
   * Increase the size by with only end.
   * Change the initial index range with both.
   */
  onMagic(start, end) {
    this.start = start += 4;
    this.end = end += 4;
  }
}
