/***** check img alt text *****/
var imgArr = Array.from(document.querySelectorAll("img"));
console.log(imgArr);
console.log(`this is the array of imgs: ${imgArr}`);
imgArr.forEach(function printAltText(eachImg) {
  // console.dir(eachImg);
  if (eachImg.alt === "") {
    console.dir(`this is empty alt text: ${eachImg}`);
  } else {
    console.log(`this has alt text: ${eachImg.alt}`);
    console.dir(eachImg);
  }
});

/***** check img alt text *****/

/***** select all element in the body to check fontsize *****/

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

/***** get headingss *****/

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
    console.dir(fontSizeOfElement);
  }
});

var allParagraphs = Array.from(document.querySelectorAll("body p"));

allParagraphs.forEach(function printFont(eachPara) {
  console.log(getComputedStyle(eachPara).fontSize);
});

/***** select all element in the body to check fontsize *****/

/***** select button, inputs, <a> tags *****/

function selectButtonsInputsEtc() {
  var arrOfFocusable = ["A", "BUTTON", "INPUT"];

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
}

/***** select button, inputs, <a> tags *****/
