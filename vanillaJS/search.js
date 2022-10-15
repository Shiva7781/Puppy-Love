const debounce = (fn, delay) => {
  let timeoutID;
  return function (...args) {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

document.getElementById("Mybtn").addEventListener(
  "click",
  debounce((e) => {
    console.log("Done");
  }, 1000)
);

document.getElementById("Myinput").addEventListener(
  "keyup",
  debounce((e) => {
    var breedname = document.getElementById("Myinput").value;
    // console.log("breedname:", breedname);

    dogsImage(breedname);
  }, 333)
);

const dogsImage = async (breedname) => {
  console.log("breedname:", breedname);

  let res = await fetch(`https://dog.ceo/api/breed/${breedname}/images`);
  let data = await res.json();

  //   console.log("data:", data);
  DisplayImage(data.message);
};
// dogsImage();

const DisplayImage = (ele) => {
  //   console.log("ele:", ele);
  document.querySelector("#searchPuppy").innerHTML = "";

  ele.map((e) => {
    // console.log("x:", x);
    let cardsImage = document.createElement("img");
    cardsImage.src = e;
    document.querySelector("#searchPuppy").append(cardsImage);
  });
};
