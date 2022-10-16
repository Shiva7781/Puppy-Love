const container = document.querySelector("#PuppyImage");

let search = localStorage.getItem("dogName");
const dogsImage = async () => {
  let res = await fetch(`https://dog.ceo/api/breed/${search}/images`);
  let data = await res.json();
  //   console.log("data:", data);
  DisplayImage(data.message);
};
dogsImage();

const DisplayImage = (ele) => {
  //   console.log("ele:", ele);

  ele.map((e) => {
    // console.log("x:", x);

    let cardsImage = document.createElement("img");
    cardsImage.src = e;
    container.append(cardsImage);
  });
};
