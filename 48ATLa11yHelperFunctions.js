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
    // selectElements is an array
    var selectElements = Array.from(
      document.querySelectorAll(`${currentValue}`)
    );
    var selectElements = Array.prototype.slice.call(
      document.querySelectorAll(`${currentValue}`)
    );
    //[...[], [1,2,3,4]] first iteration
    //[...[[1,2,3,4]], [5,6,7,8]] second iteration
    //[...[[1,2,3,4],[5,6,7,8]], [9,10,11,12]]
    //building up will be [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
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

//make above function Big(0) better than its current Big(0)

function anotherApproachSelectButtonsInputsEtc() {
  var arrOfSubarraysOfTagElements = [];

  var arrOfFocusable = ["A", "BUTTON", "INPUT", "LABEL", "VIDEO"];

  //for each
  // arrOfFocusable.forEach(function addArrOfElementsToResultArr(eachStr) {
  //   const arrOfElementsAddToResultArr = Array.from(
  //     document.querySelectorAll(`${eachStr}`)
  //   );
  //   const arrOfElementsAddToResultArr = Array.prototype.slice.call(
  //     document.querySelectorAll(`${eachStr}`)
  //   );

  //   arrOfSubarraysOfTagElements.push(arrOfElementsAddToResultArr);
  // });

  // for of
  for (let eachStr of arrOfFocusable) {
    let arrOfElementsAddToResultArr = Array.from(
      document.querySelectorAll(`${eachStr}`)
    );
    // let arrOfElementsAddToResultArr = Array.prototype.slice.call(
    //   document.querySelectorAll(`${eachStr}`)
    // );

    arrOfSubarraysOfTagElements.push(arrOfElementsAddToResultArr);
  }

  //for loop

  // for (let index = 0; index < arrOfFocusable.length; index++) {
  //   //value of array each str
  //   let element = arrOfFocusable[index];

  //   //find all element based on str in array

  //   let arrOfElementsAddToResultArr = Array.from(
  //     document.querySelectorAll(`${element}`)
  //   );
  //   let arrOfElementsAddToResultArr = Array.prototype.slice.call(
  //     document.querySelectorAll(`${element}`)
  //   );

  //   //add array to arrOfSubarraysOfTagElements
  //   arrOfSubarraysOfTagElements.push(arrOfElementsAddToResultArr);
  // }

  console.log(arrOfSubarraysOfTagElements);
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

/***** select all sections *****/

function selectAllSections() {
  var arrOfSectionsEle = Array.from(document.querySelectorAll("section"));
  // var arrOfSectionsEle = Array.prototype.slice.call(
  //   document.querySelectorAll("section")
  // );

  return arrOfSectionsEle;
}

/***** select all sections *****/

/***** select all articles *****/

function selectAllArticles() {
  var arrOfArticleEle = Array.from(document.querySelectorAll("article"));
  var arrOfArticleEle = Array.prototype.slice.call(
    document.querySelectorAll("article")
  );

  return arrOfArticleEle;
}

/***** select all articles *****/

/***** select all articles and sections *****/

function selectAllArticlesAndSectionsEle() {
  var arrOfStr = ["SELECT", "ARTICLE"];

  var arrOfSelectAndArticleEle = arrOfStr.reduce(function findArticleAndSection(
    buildingUp,
    currentValue
  ) {
    // var convertToArr = Array.from(document.querySelectorAll(`${currentValue}`));
    var convertToArr = Array.prototype.slice.call(
      document.querySelectorAll(`${currentValue}`)
    );

    buildingUp.push(convertToArr);
    // return buildingUp;
    // buildingUp = [...buildingUp, convertToArr];
    // return [...buildingUp, convertToArr];
    return buildingUp;
  },
  []);

  console.log(arrOfSelectAndArticleEle);
}

/***** select all articles and sections *****/
