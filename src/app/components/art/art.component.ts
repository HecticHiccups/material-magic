import { Component, OnInit } from "@angular/core";
import { ImageService } from "../../services/image.service";

@Component({
  selector: "app-art",
  templateUrl: "./art.component.html",
  styleUrls: ["./art.component.scss"]
})
export class ArtComponent implements OnInit {
  public images: [];
  breakpoint: number;

  //When the screen resizes, I want the columns to adjust.

  constructor(private imageService: ImageService) {
    this.images = [];
  }

  /**
   * !Retrieve images from service store them in images array.
   */
  ngOnInit() {
    this.imageService.getImages().subscribe(img => {
      this.images = img;
    });

    this.breakpoint = window.innerWidth <= 400 ? 1 : 6;
  }

  // onResize(event) {
  //   this.breakpoint = event.target.innerWidth <= 400 ? 1 : 6;
  // }

  // setCol() {
  //   let imgList = this.images.slice(0, 4);
  //   return imgList.length <= 12 ? 12 : imgList.length;
  // }
  /**
  tiles: Tile[] = [
    { text: "One", cols: 1, rows: 2, color: "lightblue" },
    { text: "Two", cols: 1, rows: 2, color: "lightgreen" },
    { text: "Three", cols: 1, rows: 2, color: "lightpink" },
    { text: "Four", cols: 1, rows: 2, color: "#DDBDF1" }
  ];
*/
}
