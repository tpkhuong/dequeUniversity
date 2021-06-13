/***** check img alt text *****/
/***** 2A,2B,2C *****/
var imgArr = Array.from(document.querySelectorAll("img"));
console.log(imgArr);
console.log(`this is the array of imgs: ${imgArr}`);
imgArr.forEach(function printAltText(eachImg) {
  // console.dir(eachImg);
  console.log(`this is img attr:`);
  console.log(eachImg.attributes);
  if (eachImg.alt === "") {
    console.log(`this is empty alt text: ${eachImg}`);
    console.log(eachImg);
  } else {
    console.log(`this has alt text: ${eachImg.alt}`);
    console.log(eachImg);
  }
});

/***** check img alt text *****/

/***** select all element in the body to check fontsize *****/
/***** 3C *****/
function findParaElements(classOrIdOfMainElement) {
  var allParagraph = Array.from(
    document.querySelectorAll(`#${classOrIdOfMainElement} p`)
  );
  allParagraph.forEach(function printFont(eachElement) {
    console.log(getComputedStyle(eachElement).fontSize);
  });
  console.log(allParagraph);
  console.log(`#${classOrIdOfMainElement} p`);
}

/***** get headings *****/
/***** 4A,4B,4C *****/
function getAllHeadings() {
  var resultArr = [];

  for (let i = 1; i < 7; i++) {
    let arrOfHeadings = Array.from(document.querySelectorAll(`h${i}`));
    resultArr = [...resultArr, arrOfHeadings];
  }
  console.log(resultArr);
  /***** first approach *****/
  // var headingH1 = document.querySelectorAll("h1");
  // var headingH2 = document.querySelectorAll("h2");
  // var headingH3 = document.querySelectorAll("h3");
  // var headingH4 = document.querySelectorAll("h4");
  // var headingH5 = document.querySelectorAll("h5");
  // var headingH6 = document.querySelectorAll("h6");

  // var printHeadings = [
  //   headingH1,
  //   headingH2,
  //   headingH3,
  //   headingH4,
  //   headingH5,
  //   headingH6,
  // ];
  // printHeadings.forEach(function consoleHeadings(eachHeading) {
  //   console.log(eachHeading);
  // });
  /***** first approach *****/
}

/***** get headingss *****/

var allELementsOfBodyEle = Array.from(document.querySelectorAll("body *"));

allELementsOfBodyEle.forEach(function findFontSize(eachElement) {
  console.log(getComputedStyle(eachElement).fontSize);
  var fontSizeOfElement = Number(
    getComputedStyle(eachElement).fontSize.split("p")[0]
  );

  if (fontSizeOfElement < 16) {
    console.log(fontSizeOfElement);
  }
});

var allParagraphs = Array.from(document.querySelectorAll("body p"));

allParagraphs.forEach(function printFont(eachPara) {
  console.log(getComputedStyle(eachPara).fontSize);
});

/***** select all element in the body to check fontsize *****/

/***** select button, inputs, <a> tags *****/
/***** 3B,4F,6A,6B *****/
/***** when we call selectButtonInputsEtc pass in one of these str: "link","btn","input","label" *****/
function selectButtonsInputsEtc(strInput) {
  var arrOfFocusable = ["A", "BUTTON", "INPUT", "LABEL", "VIDEO"];

  var arrOfElements = arrOfFocusable.reduce(function findElements(
    buildingUp,
    currentValue
  ) {
    var selectElements = Array.from(
      document.querySelectorAll(`${currentValue}`)
    );
    return [...buildingUp, selectElements];
  },
  []);
  console.log("Array of anchor, button and input elements");
  console.log(arrOfElements);
  // var anchorElements = arrOfElements[0];
  // anchorElements.forEach(function printInnerText(eachLink) {
  //   console.dir(eachLink);
  //   console.log(`this is the element innerText: ${eachLink.innerText}`);
  //   console.log(`this is the element href:`, eachLink.attributes["href"]);
  // });
  switch (strInput) {
    case "link":
      anchorTagAttributes(arrOfElements);
      break;
    case "btn":
      buttonTagAttributes(arrOfElements);
      break;
    case "input":
      inputTagAttributes(arrOfElements);
      break;
    case "label":
      labelTagAttributes(arrOfElements);
      break;
  }
}

function anchorTagAttributes(arrInput) {
  var anchorArr = arrInput[0];
  for (let element of anchorArr) {
    console.log(`element attributes`);
    console.log(element.attributes);
  }
  var anchorElements = arrInput[0];
  anchorElements.forEach(function printInnerText(eachLink) {
    console.dir(eachLink);
    console.log(`this is the element innerText: ${eachLink.innerText}`);
    console.log(`this is the element href:`, eachLink.attributes["href"]);
  });
}
function buttonTagAttributes(arrInput) {
  var btnArr = arrInput[1];
  for (let index = 0; index < btnArr.length; index++) {
    let element = btnArr[index];
    console.log(`element attributes`);
    console.log(element.attributes);
  }
}
function inputTagAttributes(arrInput) {
  var inputArr = arrInput[2];
  inputArr.forEach(function printAttr(element) {
    console.log(`element attributes`);
    console.log(element.attributes);
  });
}
function labelTagAttributes(arrInput) {
  var labelArr = arrInput[3];
  for (let element of labelArr) {
    console.log(`element attributes`);
    console.log(element.attributes);
  }
}

/***** select button, inputs, <a> tags *****/
