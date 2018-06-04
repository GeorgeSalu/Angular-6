import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

	/*
	constantes utilizadas para identificar as operações
	de calculo
	*/
	static readonly SOMA: string = '+';
	static readonly SUBTRACAO: string = '-';
	static readonly DIVISAO: string = '/';
	static readonly MULTIPLICACAO: string = '*';

	constructor() { }

	/**
	*metodo que calcula uma operação matematica dado dois numeros.
	*suporta operacoes de soma, subtração, divisão e multiplicação
	*@param num1 number
	*@param num2 number
	*@param operacao string, operação a ser executada
	*@return number - resultado da operacao
	*/
	calcular(num1:number, num2:number, operacao: string): number {
		let resultado: number;

		switch(operacao) {
			case CalculadoraService.SOMA:
				resultado = num1 + num2;
			break;
			case CalculadoraService.SUBTRACAO:
				resultado = num1 - num2;
			break;
			case CalculadoraService.DIVISAO:
				resultado = num1 / num2;
			break;
			case CalculadoraService.MULTIPLICACAO:
				resultado = num1 * num2;
			break;
			default:
				resultado = 0;
		}
		return resultado;
	}
}
