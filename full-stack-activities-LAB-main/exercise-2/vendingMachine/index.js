const stationary_items = {
  0: {
    name: "Four-line notebook",
    stock: "10",
    link: "https://m.media-amazon.com/images/I/91fi3mmsUjL._SL1500_.jpg",
  },
  1: {
    name: "Two-line notebook",
    stock: "10",
    link: "https://5.imimg.com/data5/SELLER/Default/2022/4/HA/AL/DS/140325831/classmate-four-lines-notebook-1000x1000.jpg",
  },
  2: {
    name: "HB pencil",
    stock: "10",
    link: "https://m.media-amazon.com/images/I/61jnkIUiCRL._SY355_.jpg",
  },
  3: {
    name: "Eraser",
    stock: "10",
    link: "https://m.media-amazon.com/images/I/51vAN6zX72L._SY355_.jpg",
  },
  4: {
    name: "Drawing Notebook",
    stock: "10",
    link: "https://rukminim1.flixcart.com/image/416/416/kbmjssw0/diary-notebook/t/5/g/hawamahal-hwspsk5004-original-imafsxvpffykfs89.jpeg?q=70",
  },
};

function checkStock() {
  document.write(JSON.stringify(stationary_items));
}

function handleSelection(evt) {
  stationary_items[evt.target.className].stock -= 1;
}

function handlebuy() {
  handleRender(stationary_items);
}

function handleRender() {
  for (let i = 0; i < Object.keys(stationary_items).length; i++) {
    document.getElementById(
      i
    ).innerHTML = `<button onclick="handleSelection(event)" class=${i} id=button${i}>+</button>`;
  }
  for (let i = 0; i < Object.keys(stationary_items).length; i++) {
    const imageDiv = document.createElement("div");
    const avl = document.createElement("p");
    avl.innerText = `Available stock ${stationary_items[i].stock}`;
    document.getElementById(i).prepend(avl);
    for (let l = 0; l < stationary_items[i].stock; l++) {
      const prod = document.createElement("img");
      prod.src = stationary_items[i].link;
      imageDiv.appendChild(prod);
    }
    document.getElementById(i).prepend(imageDiv);
    const productName = document.createElement("p");
    productName.innerText = stationary_items[i].name;
    productName.className = "name";
    document.getElementById(i).prepend(productName);
  }
}
