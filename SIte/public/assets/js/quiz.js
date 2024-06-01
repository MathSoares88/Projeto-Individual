const questions = [
  { question: "No seu primeiro ano em Hogwarts, que tipo de aluno você seria?", options: ["Não se juntaria a ninguém, pois não precisa de ninguém", "Se juntaria as pessoas que parecem ser mais inteligentes", "Aquele que se juntaria às primeiras pessoas que te acolhessem", "Aquele que se juntaria as pessoas mais populares"], points: [2, 1, 3, 4] },
  { question: "Qual qualidade é mais importante para você?", options: ["Coragem", "Inteligência", "Ambição", "Lealdade"], points: [1, 2, 3, 4] },
  { question: "Qual animal você prefere?", options: ["Leão", "Águia", "Cobra", "Texugo"], points: [1, 2, 3, 4] },
  { question: "Qual é seu hobby preferido?", options: ["Jogar quadribol", "Estudar na biblioteca", "Planejar estratégias", "Cuidar de plantas"], points: [1, 2, 3, 4] },
  { question: "Se pudesse escolher uma criatura mágica para ser seu amigo, qual seria?", options: ["Fênix", "Sereiano", "Dragão", "Hipogrifo"], points: [1, 2, 3, 4] },
  { question: "O que você mais valoriza em uma competição?", options: ["Espírito esportivo", "Estratégia", "Vitória a qualquer custo", "Trabalho em equipe"], points: [1, 2, 3, 4] },
  { question: "Qual destas características você mais valoriza em uma pessoa?", options: ["Coragem", "Criatividade", "Ambição", "Compaixão"], points: [1, 2, 3, 4] },
  { question: "Qual seria sua matéria preferida em Hogwarts?", options: ["Defesa contra as artes das trevas", "História da magia", "Poções", "Herbologia"], points: [1, 2, 3, 4] },
  { question: "Durante um torneio bruxo, qual tarefa você escolheria?", options: ["A tarefa que exige coragem e bravura", "A tarefa que exige conhecimentos e habilidades mágicas", "A tarefa que exige astúcia e estratégia", "A tarefa que envolve ajudar os outros, mesmo que seja difícil"], points: [1, 2, 3, 4] },
  { question: "Que tipo de fama você gostaria de ter?", options: ["Ser reconhecido como alguém valente e destemido", "Ser reconhecido como um gênio, alguém muito inteligente e perspicaz", "Ser reconhecido como alguém influente e poderoso", "Ser reconhecido como alguém gentil e prestativo, que sempre está lá para ajudar os outros"], points: [1, 2, 3, 4] },
  { question: "O que mais te motiva?", options: ["Aventura", "Conhecimento", "Sucesso", "Amizade"], points: [1, 2, 3, 4] }
];

const houses = ["Grifinória", "Corvinal", "Sonserina", "Lufa-Lufa"];

const houseDetails = {
  "Grifinória": {
    description: "Seja bem-vindo(a), bravo(a) Grifinório(a)! Nosso emblema é o leão, símbolo de coragem e força. As cores da nossa casa são vermelho e dourado, e nossa sala comunal está localizada na Torre da Grifinória, o ponto mais alto do castelo. De nossas janelas, você poderá contemplar a vista deslumbrante da Floresta Proibida e do campo de Quadribol. Grifinórios são conhecidos por sua bravura, cavalheirismo e espírito aventureiro. Valorizamos a honra, a lealdade e a luta pelo que é certo. Se você é um(a) Grifinório(a), se sentirá em casa entre nossos colegas corajosos e cheios de espírito.",
    dashboardDescription: "Grifinória",
    dashImg: "https://i.pinimg.com/564x/1b/c6/7d/1bc67d4972adf22dc1284c5bb836181f.jpg",
    image: "https://i.pinimg.com/564x/82/04/ea/8204ea042942521912eadc98dff6c120.jpg"
  },
  "Corvinal": {
    description: "Seja bem-vindo(a), inquisitivo(a) Corvinal! Nosso emblema é a águia, representando inteligência e sabedoria. As cores da nossa casa são azul e bronze, e nossa sala comunal está localizada na Torre da Corvinal, um lugar de contemplação tranquila e atividades acadêmicas. De nossas janelas, temos uma vista panorâmica das montanhas circundantes e do lago de Hogwarts. Corvinais são conhecidos por sua sagacidade, criatividade e sede de conhecimento. Valorizamos o aprendizado, a compreensão e a expressão de nossas perspectivas únicas. Se você é um(a) Corvinal, irá prosperar em nosso ambiente intelectualmente estimulante.",
    dashboardDescription: "Corvinal",
    dashImg: "https://i.pinimg.com/564x/0a/30/36/0a3036de15e04cf318e8d0993e2b26da.jpg",
    image: "https://i.pinimg.com/564x/32/20/5e/32205e6848ec7a1cacab0e058a51bcfe.jpg"
  },
  "Sonserina": {
    description: "Parabéns! Nosso emblema é a serpente, a mais sábia das criaturas; Nossas cores da casa são verde esmeralda e prata, e nossa sala comum fica atrás de uma entrada escondida nas masmorras. Como você verá, suas janelas têm vista para as profundezas do lago de Hogwarts. Muitas vezes vemos as lulas gigantes passando – e às vezes criaturas mais interessantes. Gostamos de sentir que o nosso ponto de encontro tem a aura de um misterioso.",
    dashboardDescription: "Sonserina",
    dashImg: "https://i.pinimg.com/564x/84/6a/82/846a824861eaeb41cf05622598381edb.jpg",
    image: "https://i.pinimg.com/564x/84/df/83/84df83df7fbb8208c82d00130956557b.jpg"
  },
  "Lufa-Lufa": {
    description: "Seja bem-vindo(a), leal Lufa-Lufa! Nosso emblema é o texugo, simbolizando trabalho duro e dedicação. As cores da nossa casa são amarelo e preto, e nossa sala comunal está localizada no aconchegante porão da Lufa-Lufa, um lugar de calor e camaradagem. De nossas janelas, podemos ver os jardins da Lufa-Lufa, um refúgio para amantes da natureza e criaturas amigáveis. Lufa-Lufanos são conhecidos por sua gentileza, lealdade e natureza trabalhadora. Valorizamos a justiça, a paciência e o auxílio aos outros. Se você é um(a) Lufa-Lufa, encontrará um lar acolhedor e solidário entre nossos colegas gentis e compassivos.",
    dashboardDescription: "Lufa-Lufa",
    dashImg: "https://i.pinimg.com/564x/67/a7/ee/67a7ee1a4397aff71069a1bb6e42669e.jpg",
    image: "https://i.pinimg.com/564x/c6/3b/c8/c63bc8095f4da9ab4d6e07ab4c6eb978.jpg"
  }
};

let currentQuestion = 0;
let answers = { "Grifinória": 0, "Corvinal": 0, "Sonserina": 0, "Lufa-Lufa": 0 };

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("nextButton");

function showQuestion() {
  const question = questions[currentQuestion];
  questionElement.textContent = question.question;

  optionsElement.innerHTML = '';
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => selectOption(option, question.points[index]));
    optionsElement.appendChild(button);
  });
}

function selectOption(option, points) {
  const question = questions[currentQuestion];
  const houseIndex = question.options.indexOf(option);
  const house = houses[houseIndex];

  answers[house] += points;
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  let maxPoints = -1;
  let winningHouse = "";

  for (const house in answers) {
    if (answers[house] > maxPoints) {
      maxPoints = answers[house];
      winningHouse = house;
    }
  }

  const houseDetail = houseDetails[winningHouse];
  resultElement.innerHTML = `
  <h2> Sua casa de Hogwarts é: ${winningHouse}!</h2>
  <p>${houseDetail.description}</p>
  <img src="${houseDetail.image}" alt="${winningHouse}" style= "width: 500px; height: 500px;">`;

  localStorage.setItem('winningHouse', JSON.stringify(winningHouse));
  localStorage.setItem('houseDetail', JSON.stringify(houseDetail));

  fetch('/quiz/saveResult', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId: sessionStorage.getItem('ID_USUARIO'),
      winningHouse: winningHouse
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log('Resultado salvo com sucesso:', data);
    })
    .catch(error => {
      console.error('Erro ao salvar resultado:', error);
    });

  nextButton.style.display = "none";
}

fetch(`/quiz/getResult?userId=${sessionStorage.getItem('ID_USUARIO')}`)
  .then(response => response.json())
  .then(data => {
    if (data && data.percentages) {
      const percentages = data.percentages;
      houseChart.data.datasets[0].data = percentages;
      houseChart.update();
    }
  })
  .catch(error => {
    console.error('Erro ao obter resultado do quiz:', error);
  });

nextButton.addEventListener("click", showQuestion);

showQuestion();

nextButton.style.display = "none";
