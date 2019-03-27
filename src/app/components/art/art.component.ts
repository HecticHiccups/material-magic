import { Component, OnInit } from "@angular/core";

//Goes in models folder/Tile
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: "app-art",
  templateUrl: "./art.component.html",
  styleUrls: ["./art.component.scss"]
})
export class ArtComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  tiles: Tile[] = [
    { text: "One", cols: 1, rows: 2, color: "lightblue" },
    { text: "Two", cols: 1, rows: 2, color: "lightgreen" },
    { text: "Three", cols: 1, rows: 2, color: "lightpink" },
    { text: "Four", cols: 1, rows: 2, color: "#DDBDF1" }
  ];
}
