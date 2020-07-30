const paintings = [
  {
    artist: "Van Gogh",
    imgUrl:
      "https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg",
    name: "Starry Night",
  },
  {
    artist: "Monet",
    imgUrl:
      "https://www.christies.com/img/LotImages/2019/NYR/2019_NYR_17658_0012A_000(claude_monet_le_train_a_jeufosse).jpg",
    name: "Le train à Jeufosse",
  },
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId)
    selectedDiv.innerHTML = textToPrint;
}


let makePainting = (paintBooty) => {
    let domString = '';

    for(i = 0; i < paintBooty.length; i++) {

        const painting = paintBooty[i];
        domString += `<div class="card" style="width: 18rem;">
        <img src="${painting.imgUrl}" class="card-img-top" alt="Artist painting">
        <div class="card-body">
        <p class="card-text">Artist: ${painting.artist}</p>
        <p class="card-text">Painting Name: ${painting.name}</p>
        </div>
    </div>`
    }
    printToDom('paintings', domString)
}

const buttonHandle = (e) => {
    const buttonId = e.target.id;

    selectedPaintings = [];

    for(i = 0; i < paintings.length; i++) {
        if(paintings[i].artist === buttonId) {
            selectedPaintings.push(paintings[i])
        }
    }
    makePainting(selectedPaintings)
}


document.querySelector("#ptn-btn").addEventListener("click", buttonHandle);


makePainting(paintings)

