export function createTradeButton(onClick) {

    console.log("createTradeButton called");

    if (document.getElementById("load-inventory")) return;

    const btn = document.createElement("button");
    btn.id = "load-inventory";
    btn.innerText = "load inventory";

    btn.style.position = "fixed";
    btn.style.bottom = "20px";
    btn.style.right = "20px";
    btn.style.zIndex = "9999";

    btn.addEventListener("click", onClick);

    document.body.appendChild(btn);

    console.log("button appended", btn);
}
