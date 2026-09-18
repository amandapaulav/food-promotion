// Regras de descontos progressivos por proximidade de validade (RF06)
export function calcularDesconto(diasParaVencer) {
  if (diasParaVencer <= 1) return 0.60; // 60% com <= 1 dia
  if (diasParaVencer <= 3) return 0.40; // 40% com <= 3 dias
  if (diasParaVencer <= 5) return 0.20; // 20% com <= 5 dias
  return 0.0;
}

export function calcularPrecoFinal(precoBase, desconto) {
  return precoBase * (1 - desconto);
}