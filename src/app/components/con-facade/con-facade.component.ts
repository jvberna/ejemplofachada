import { Component, OnInit, ElementRef, ViewChild, OnDestroy} from '@angular/core';
import { FacadeMotorTagService } from 'src/app/services/facade-motor-tag.service';
import { FacadeMotorService } from 'src/app/services/facade-motor.service';

@Component({
  selector: 'app-con-facade',
  templateUrl: './con-facade.component.html',
  styleUrls: ['./con-facade.component.css']
})
export class ConFacadeComponent implements OnInit, OnDestroy {

  // creamos una referencia al Canvas Lienzo que será utilizado después
  @ViewChild('lienzo', {static: true}) lienzoRef!: ElementRef<HTMLCanvasElement>;

  constructor(private facadeMotor: FacadeMotorTagService) { }

  ngOnInit(): void {
    this.facadeMotor.crearEscena(this.lienzoRef);
    this.facadeMotor.animar();
  }

  ngOnDestroy() {
    this.facadeMotor.pararAnimacion()
  }

}
