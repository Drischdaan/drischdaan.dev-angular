import { NgtGLTFLoader } from '@angular-three/soba/loaders';
import { Component } from '@angular/core';
import { AnimationClip, Color, Group, Mesh } from 'three';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  color: Color = new Color('#0c0b0c');
  monitor$ = this.loaderService.load('assets/models/Monitor.glb');

  constructor(
    private readonly loaderService: NgtGLTFLoader,
  ) { }

  public getAge(): number {
    const today: Date = new Date();
    const birthDate: Date = new Date('2003/06/23'); // Leaked my birthday lol
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const month: number = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  onReady(model: Group) {
    model.traverse((child) => {
      if ((child as Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }

}