import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HomeComponent } from './components/home/home.component';
import { NgtCanvasModule } from '@angular-three/core';
import { NgtMeshModule } from '@angular-three/core/meshes';
import { NgtPrimitiveModule } from '@angular-three/core/primitive';
import { NgtBoxGeometryModule } from '@angular-three/core/geometries';
import { NgtMeshStandardMaterialModule } from '@angular-three/core/materials';
import { NgtAmbientLightModule, NgtSpotLightModule } from '@angular-three/core/lights';
import { NgtSobaLoaderModule } from '@angular-three/soba/loaders';

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    NavigationBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgtCanvasModule,
    NgtMeshModule,
    NgtPrimitiveModule,
    NgtBoxGeometryModule,
    NgtMeshStandardMaterialModule,
    NgtAmbientLightModule,
    NgtSpotLightModule,
    NgtSobaLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }