class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculador = new Calculadora();
    this.valorActual = "";
    this.valorAnterior = "";
    this.signos = {
      sumar: '+',
      dividir: '%',
      multiplicar: 'x',
      restar: '-', 
  }
  }

  borrar() {
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.imprimirValores();
  }

  borrarTodo() {
    this.valorActual = "";
    this.valorAnterior = "";
    this.tipoOperacion = undefined;
    this.imprimirValores();
  }

  agregarNumero(numero) {
    if (numero === "." && this.valorActual.includes(".")) return;
    this.valorActual = this.valorActual.toString() + numero.toString();
    this.imprimirValores();
  }

  imprimirValores() {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
  }

  calcular() {
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);

    if (isNaN(valorActual) || isNaN(valorAnterior)) return;
    this.valorActual = this.calculador[this.tipoOperacion](
      valorAnterior,
      valorActual
    );
  }

  computar(tipo) {
    this.tipoOperacion !== "igual" && this.calcular();
    this.tipoOperacion = tipo;
    this.valorAnterior = this.valorActual || this.valorAnterior
    this.valorActual = '';
    this.imprimirValores();
  }


  // // Agregar una condición para verificar si el valor actual es igual al valor anterior
  // if (tipo !== "igual" && valorActual !== valorAnterior) {
  //   // Realizar el cálculo solo si el valor actual es diferente del valor anterior
  //   this.calcular();
  // }

  // // Modificar el código para que el método computar se ejecute siempre que se haga clic en el botón de igual, independientemente de si el valor actual es igual al valor anterior o no
  // if (tipo === "igual") {
  //   this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
  // } else {
  //   this.tipoOperacion = tipo;
  //   this.valorAnterior = this.valorActual;
  //   this.valorActual = '';
  // }
  // this.imprimirValores();





}
