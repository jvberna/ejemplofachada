import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FacadeMotorService } from 'src/app/services/facade-motor.service';

@Component({
  selector: 'app-otro-con-facade',
  templateUrl: './otro-con-facade.component.html',
  styleUrls: ['./otro-con-facade.component.css']
})
export class OtroConFacadeComponent implements OnInit {

  @ViewChild('lienzo', {static: true}) lienzoRef!: ElementRef<HTMLCanvasElement>;

  constructor(private facadeMotor: FacadeMotorService) { }

  ngOnInit(): void {
    this.facadeMotor.crearEscena(this.lienzoRef);
    this.facadeMotor.animar();
  }

  ngOnDestroy() {
    this.facadeMotor.pararAnimacion()
  }

}
