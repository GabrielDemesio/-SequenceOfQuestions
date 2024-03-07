document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();
document.getElementById("resetButton").addEventListener("click", function(){
    location.reload();
});

    const brand = document.querySelector('input[name="brand"]:checked').value;
    const value = document.querySelector('input[name="value"]:checked').value;
    const size = document.querySelector('input[name="size"]:checked').value;

    // let recommendation = "";

   // Mapeamento das combinações de entrada para as recomendações
const recomendacoes = {
    "AMD_1000_pequena": "Ryzen 3 4100",
    "Intel_1000_pequena": "i3 12100f",
    "Intel_2000_media": "Intel® Core™ i5-12600K",
    "AMD_2000_media": "Ryzen 5 5600",
    "AMD_3000_grande": "Ryzen 7 7700x",
    "Intel_3000_grande": "Intel Core I7 13700k"
  };
  
  // Verifica se a combinação existe no mapeamento, caso contrário, retorna a mensagem padrão
  const key = `${brand}_${value}_${size}`;
  const recommendation = recomendacoes[key] || "Desculpe, não temos uma recomendação com base nas suas respostas.";
  


    document.getElementById("result").innerHTML = `<p>Recomendação: ${recommendation}</p>`;
});
