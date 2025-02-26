const expandPriceDetails = (unitNumber) => {
  selectRadioButton(unitNumber);
  collapseOtherDetails(unitNumber);
  const details = document.getElementById(`details-${unitNumber}`);

  if (!details.innerHTML) {
    details.innerHTML = generateDropdowns(unitNumber);
    details.classList.add("expanded");
  } else {
    details.innerHTML = "";
    details.classList.remove("expanded");
  }
};

const selectRadioButton = (unitNumber) => {
  document.getElementById(`unit${unitNumber}`).checked = true;
};

const collapseOtherDetails = (unitNumber) => {
  document.querySelectorAll(".details").forEach((detail) => {
    if (detail.id !== `details-${unitNumber}`) {
      detail.innerHTML = "";
      detail.classList.remove("expanded");
    }
  });
};

const generateDropdowns = (unitNumber) => {
  let dropDownHTML = "";
  for (let i = 1; i <= unitNumber; i++) {
    dropDownHTML += `
            <div class='dropdown-container'>
              <label style="font-weight: 400;font-size: 10px;${
                i === 1 ? "margin-top: 16px;" : ""
              }"> #${i}  </label>
              <div style="display: flex; flex-direction: column">
                  ${
                    i === 1
                      ? '<label style="font-size: 10px; font-weight: 400; margin-bottom: 5px">Size</label>'
                      : ""
                  }
                  <select style="border-color: #D9D9D9">
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                  </select>
              </div>
              <div style="display: flex; flex-direction: column;">
                  ${
                    i === 1
                      ? '<label style="font-size: 10px; font-weight: 400; margin-bottom: 5px">Color</label>'
                      : ""
                  }
                  <select>
                      <option>Black</option>
                      <option>Blue</option>
                      <option>Green</option>
                  </select>
              </div>
            </div>
          `;
  }
  return dropDownHTML;
};
