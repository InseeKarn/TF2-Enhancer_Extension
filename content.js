const REF_CLASS_ID = 2674
const REC_CLASS_ID = 5564
const SCRAP_CLASS_ID = 2675

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