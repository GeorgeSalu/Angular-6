import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

	readonly dados = [
		['Janeiro', 33],
		['Fevereiro', 68],
		['Marco', 49],
		['Abril', 15],
		['Maio', 80],
		['Junho', 37]
	]

	constructor() { }

	obterDados(): Observable<any> {
		return new Observable(observable => {
			observable.next(this.dados);
			observable.complete();
		});
	}
}
