// Função de máscara
function mask(element, pattern) {
  element.addEventListener("input", () => {
    let i = 0;
    const value = element.value.replace(/\D/g, "");
    element.value = pattern.replace(/#/g, (_) => value[i++] || "");
  });
}

// Máscaras
mask(document.querySelector("#cpf"), "###.###.###-##");
mask(document.querySelector("#telefone"), "(##) #####-####");
mask(document.querySelector("#cep"), "#####-###");

// Validação
document.querySelector("#cadastroForm").addEventListener("submit", (e) => {
  if (!e.target.checkValidity()) {
    e.preventDefault();
    alert("Por favor, preencha corretamente todos os campos obrigatórios.");
  }
});
