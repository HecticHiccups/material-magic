import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArtComponent } from "./components/art/art.component";

const routes: Routes = [
  {
    path: "",
    component: ArtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
