import { Component, OnInit} from '@angular/core';
import { Empregado } from '../empregado';
import { EmpregadoService } from '../empregado.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-empregados',
  templateUrl: './empregados.component.html',
  styleUrls: ['./empregados.component.css']
})
export class EmpregadosComponent implements OnInit {

  empregados: Empregado[];
  empregadoAtual: Empregado;
  showForm = false;

  constructor(private empregadoService: EmpregadoService, private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.getEmpregados();
  }


private getEmpregados(): void {
    this.empregadoService.getEmpregados().
    subscribe(empregados => {
        this.empregados = empregados;
     }
   );


 }

 deleteEmpregado(empregado: Empregado): void {
  this.empregados = this.empregados.filter( emp => emp !== empregado );
  this.empregadoService.deleteEmpregado(empregado.id).subscribe();
}

  // Mostra o formulario de cadastro ou alteracao de empregado
  novoEmpregado() {
    this.showForm = true;
    this.empregadoAtual = null;
  }


  // Recebe um evento de confirmacao do filho de um novo empregado
  empregadoEvent(empregado) {
     this.showForm = false;
     if (empregado != null) {
        this.empregados.push(empregado);
     }

  }

  editEmpregado(empregado: Empregado) {
    this.empregadoAtual = empregado;
    this.showForm = true;

  }


}
