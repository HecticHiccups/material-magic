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

  /** GET request to picsum API
   * @Return Observable List
   *
   */
  getImages(): Observable<[]> {
    return this.http.get<[]>(`${this.imgUrl}`);
  }
}
