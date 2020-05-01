// funcion que obtiene la diferencia en años
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

//Calcula el total a pagar de acuerdo a la marca

export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;
    case "americano":
      incremento = 1.15;
      break;
    case "asiatico":
      incremento = 1.05;
      break;
    default:
      break;
  }

  return incremento;
}

//Calcula el tipo de seguro

export function calcularPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}
