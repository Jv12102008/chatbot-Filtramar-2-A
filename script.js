const chatBox = document.getElementById("chat-box");

// Base de respostas do chatbot
const respostas = {
    // O projeto
  "filtramar": "O FiltraMar é um sistema de filtragem que impede que resíduos sólidos cheguem ao mar. Ele usa peneiras, areia e cascalho para reter o lixo.",
  // como ele funciona
  "funciona": "O sistema é composto por 3 peneiras de diferentes espessuras, intercaladas com areia e cascalho. Além disso, possui sensores de peso que avisam quando a peneira precisa ser trocada.",
  "função": "O sistema é composto por 3 peneiras de diferentes espessuras, intercaladas com areia e cascalho. Além disso, possui sensores de peso que avisam quando a peneira precisa ser trocada.",
  // os materiais necessarios
  " materiais ": "As peneiras são feitas de aço inox ou liga de estanho (pois não oxidam). Entre elas, há camadas de cascalho e areia.",
  // objetivo do projeto
  "objetivo": "O objetivo do FiltraMar é reduzir a poluição marinha causada pelo lixo que vem dos esgotos e rios.",
  "serve": "O objetivo do FiltraMar é reduzir a poluição marinha causada pelo lixo que vem dos esgotos e rios.",
  // o alerta que sera emitido para o site
  "alerta": "Quando o peso máximo de resíduos é atingido, o sistema envia um alerta para a Limpurb trocar as peneiras.",
  // dicas
  "dica": "Use garrafas reutilizáveis! Cada uma pode evitar até 1.000 plásticos no mar.",
};

function sendMessage() {
  const input = document.getElementById("user-input");
  const userText = input.value.trim().toLowerCase();
  if (userText === "") return;

  // Exibir mensagem do usuário
  addMessage(userText, "user");

  // Procurar resposta
  let resposta = "Desculpe, não entendi. Tente perguntar de outra forma sobre o FiltraMar.";
  for (let key in respostas) {
    if (userText.includes(key)) {
      resposta = respostas[key];
      break;
    }
  }

  // Resposta do bot
  setTimeout(() => {
    addMessage(resposta, "bot");
  }, 500);

  input.value = "";
}

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}