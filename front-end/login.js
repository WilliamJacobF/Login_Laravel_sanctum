console.log("login.js carregou");

const form = document.getElementById("loginForm");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  console.log("FORMULÁRIO FOI ENVIADO!");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("Email:", email);
  console.log("Senha:", password);

  const response = await fetch("http://localhost:8000/api/login", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  console.log("Resposta recebida:", response.status);

  const data = await response.json();

  console.log(data);
});
