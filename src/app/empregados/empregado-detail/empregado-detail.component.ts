import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { EmpregadoService } from '../../empregado.service';
import { Empregado } from '../../empregado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empregado-detail',
  templateUrl: './empregado-detail.component.html',
  styleUrls: ['./empregado-detail.component.css']
})
export class EmpregadoDetailComponent implements OnInit {


  empFormLabel  = 'Novo Empregado';
  btnVisibility = true;

  @Input()
  empregado: Empregado;

  @Output()
  emissor: EventEmitter<Empregado> = new EventEmitter<Empregado>();

  constructor(private empService: EmpregadoService, private router: Router) {
  }

  ngOnInit() {
    if (this.empregado === null) {
      console.log('Novo Empregado');
      this.empregado = new Empregado();
      this.empFormLabel  = 'Novo Empregado';
      this.btnVisibility = true;
    } else {
      this.empFormLabel  = 'Alterar Empregado';
      this.btnVisibility = false;
    }
  }

  onSubmit() {
    this.empService.createEmpregado(this.empregado).subscribe(
      emp => this.emissor.emit(this.empregado)
    );
  }

  onUpdate() {
    this.empService.updateEmpregado(this.empregado).subscribe(
      emp => this.emissor.emit()
    );
  }


}
