

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
        resolve(UserYou.rgInventory["440"]["2"].rgInventory);
      }
    }, 300);
  });
}

function parseMetals(inventory){

    const REF_CLASS_ID = 2674
    const REC_CLASS_ID = 5564
    const SCRAP_CLASS_ID = 2675

    const metals = {
        refineds: [],
        reclaimeds: [],
        scraps: [],
    }

    object.values(inventory).forEach(item => {
        if (item.classid == REF_CLASS_ID) {
            metals.refineds.push(item);
        }
        if (item.classid == REC_CLASS_ID) {
            metals.reclaimeds.push(item);
        }
        if (item.classid == SCRAP_CLASS_ID) {
            metals.scraps.push(item);
        }
    });

    return metals;
}

function check_current_metals() {

    while (pageTotal != 0) {

    }

}

function calcMetal(refValue) {
  const totalScrap = Math.floor(refValue * 9);

  const ref = Math.floor(totalScrap / 9);
  const rec = Math.floor((totalScrap % 9) / 3);
  const scrap = totalScrap % 3;

  return { ref, rec, scrap };
}