// Небольшой скрипт для демонстрации: данные товара и сообщения об отправке форм.
// Основная работа интерфейса выполняется компонентами Bootstrap.

const PRODUCTS = {
  1: {
    name: "Ferrari SF90 Stradale",
    image: "images/car-ferrari.png",
    badge: ["Новинка", "bg-success"],
    desc: "Гибридный суперкар с полным приводом и суммарной мощностью 1000 л.с.",
    price: "60 000 000 руб.",
    power: "1000 л.с.",
    accel: "2,5 с",
    speed: "340 км/ч",
  },
  2: {
    name: "Lamborghini Huracán EVO",
    image: "images/car-lamborghini.png",
    badge: ["Хит", "bg-warning text-dark"],
    desc: "Атмосферный V10, яркий дизайн и характер настоящего итальянца.",
    price: "40 000 000 руб.",
    power: "640 л.с.",
    accel: "2,9 с",
    speed: "325 км/ч",
  },
  3: {
    name: "McLaren 720S",
    image: "images/car-mclaren.png",
    badge: ["Скидка", "bg-danger"],
    desc: "Лёгкий карбоновый монокок и впечатляющая динамика разгона.",
    price: "38 000 000 руб.",
    power: "720 л.с.",
    accel: "2,9 с",
    speed: "341 км/ч",
  },
};

const params = new URLSearchParams(window.location.search);

// ---- Страница товара (product.html?id=1..3) ----
const productName = document.getElementById("productName");
if (productName) {
  const id = params.get("id");
  const p = PRODUCTS[id] || PRODUCTS[1];
  const pid = PRODUCTS[id] ? id : 1;

  document.title = p.name + " — Supercar Shop";
  productName.textContent = p.name;
  document.getElementById("crumbName").textContent = p.name;
  document.getElementById("productDesc").textContent = p.desc;
  document.getElementById("productPrice").textContent = p.price;
  document.getElementById("specPrice").textContent = p.price;
  document.getElementById("specPower").textContent = p.power;
  document.getElementById("specAccel").textContent = p.accel;
  document.getElementById("specSpeed").textContent = p.speed;

  const img = document.getElementById("productImage");
  img.src = p.image;
  img.alt = p.name;

  const badge = document.getElementById("productBadge");
  badge.textContent = p.badge[0];
  badge.className = "badge mb-3 " + p.badge[1];

  document.getElementById("productOrderLink").href = "order.html?product=" + pid;
}

// ---- Страница заявки: предварительный выбор товара ----
const productSelect = document.getElementById("order-product");
if (productSelect && params.get("product")) {
  productSelect.value = params.get("product");
}

// ---- Отправка форм: проверка и сообщение alert ----
function handleForm(formId, alertId) {
  const form = document.getElementById(formId);
  const alertBox = document.getElementById(alertId);
  if (!form || !alertBox) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      alertBox.classList.add("d-none");
      return;
    }
    form.reset();
    form.classList.remove("was-validated");
    alertBox.classList.remove("d-none");
  });

  form.addEventListener("reset", function () {
    form.classList.remove("was-validated");
    alertBox.classList.add("d-none");
  });
}

handleForm("orderForm", "orderSuccess");
handleForm("modalForm", "modalSuccess");

// При закрытии модального окна скрываем сообщение об успехе
const orderModal = document.getElementById("orderModal");
if (orderModal) {
  orderModal.addEventListener("hidden.bs.modal", function () {
    document.getElementById("modalSuccess").classList.add("d-none");
    document.getElementById("modalForm").classList.remove("was-validated");
  });
}
