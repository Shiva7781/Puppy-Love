const container = document.querySelector("#PuppyName");

const dogsName = async () => {
  let res = await fetch("https://dog.ceo/api/breeds/list/all");
  let data = await res.json();
  //   console.log("data:", data);
  Display(data.message);
};
dogsName();

const Display = (ele) => {
  //   console.log("ele:", ele);

  for (let x in ele) {
    // console.log("x:", x);

    let Cards = document.createElement("p");
    Cards.innerHTML = x;
    container.append(Cards);

    const PuppyButton = () => {
      console.log(x);

      window.location.href = "puppy.html";
    };
    Cards.addEventListener("click", PuppyButton);
  }
};
