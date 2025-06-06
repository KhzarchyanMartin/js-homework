function Objects() {
  let bigArray = [];

  
  for (let i = 0; i < 100000; i++) {
    bigArray.push({ index: i, data: new Array(100).fill(i) });
  }

  console.log("Steghcvec:", bigArray.length);

  
  bigArray = null;

  
  console.log("hishoghutyuny aztman ketum  e:");
}

Objects();