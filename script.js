const callFunction = () => {
  console.log("function call");
}

const expandPriceDetails = (unitNumber) => {
    console.log('-unitNumber',unitNumber)
    const doc = window.document.getElementById(unitNumber)
    console.log("function call",doc);

}

