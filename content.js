function calcMetal(refValue) {
  const totalScrap = Math.floor(refValue * 9);

  const ref = Math.floor(totalScrap / 9);
  const rec = Math.floor((totalScrap % 9) / 3);
  const scrap = totalScrap % 3;

  return { ref, rec, scrap };
}