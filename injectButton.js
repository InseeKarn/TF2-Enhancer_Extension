window.createTradeButton = function (onClick, container) {
  if (container.querySelector("#test-btn")) return;

  const btn = document.createElement("button");
  btn.id = "test-btn";
  btn.innerText = "TEST BUTTON";
  btn.onclick = onClick;

  container.prepend(btn);
};
