const wait = setInterval(() => {
  const main = document.querySelector("#nonresponsivetrade_itemfilters");
  if (!main) return;

  clearInterval(wait);

  window.createTradeButton(() => loadInventory(), main);
}, 300);



function waitForTF2Inventory() {
  return new Promise(resolve => {
    const timer = setInterval(() => {
      if (
        window.UserYou &&
        UserYou.rgInventory &&
        UserYou.rgInventory["440"] &&
        UserYou.rgInventory["440"]["2"]
      ) {
        clearInterval(timer);
        resolve(UserYou.getInventory(440, 2));
      }
    }, 300);
  });
}

function parseMetals(inventory) {
  const REF_CLASS_ID = 2674;
  const REC_CLASS_ID = 5564;
  const SCRAP_CLASS_ID = 2675;

  const metals = {
    refineds: [],
    reclaimeds: [],
    scraps: [],
  };

  Object.values(inventory).forEach(item => {
    if (item.classid == REF_CLASS_ID) metals.refineds.push(item);
    if (item.classid == REC_CLASS_ID) metals.reclaimeds.push(item);
    if (item.classid == SCRAP_CLASS_ID) metals.scraps.push(item);
  });

  return metals;
}

let METAL_STATE = null;

async function loadInventory() {
  console.log("Loading inventory...");
  const inventory = await waitForTF2Inventory();
  METAL_STATE = parseMetals(inventory);

  console.log("Loaded metals:", {
    ref: METAL_STATE.refineds.length,
    rec: METAL_STATE.reclaimeds.length,
    scrap: METAL_STATE.scraps.length
  });
}
