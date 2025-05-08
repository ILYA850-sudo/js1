<script>
let login = prompt("Введіть логін");

if (login === "Admin") {
  let password = prompt("Введіть пароль");
  if (password === "Господар") alert("Ласкаво просимо!");
  else if (!password) alert("Скасовано");
  else alert("Неправильний пароль");
} else if (!login) {
  alert("Скасовано");
} else {
  alert("Я вас не знаю");
}
</script>
