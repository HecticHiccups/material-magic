import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  imgUrl: string = "https://picsum.photos/list";
  tasks: [];
  constructor(private http: HttpClient) {}

  //GET List of Images
  // async getImages() {
  //   const response = await fetch("https://picsum.photos/list");
  //   const data = await response.json();
  //   return data;
  // }

  getImages(): Observable<[]> {
    return this.http.get<[]>(`${this.imgUrl}`);
  }
}
