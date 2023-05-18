let image;
let imageBinary;
let products = {};
let obj;
function handleImage(evt) {
  const inputImage = evt.target.files[0];
  new Promise(() => {
    const reader = new FileReader();
    reader.readAsDataURL(inputImage);
    reader.onload = () => {
      imageUpload(reader.result);
    };
  });
}

function imageUpload(result) {
  imageBinary = result;
  document.getElementById("preview").src = result;
}

document.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const productName = Object.keys(products);
  productName.includes(document.getElementById("name").value)
    ? alert("Product already exists")
    : (obj = {});
  obj["name"] = `${document.getElementById("name").value}`;
  obj["desc"] = `${document.getElementById("desc").value}`;
  obj["price"] = `${document.getElementById("price").value}`;
  obj["image"] = imageBinary;
  products[`${document.getElementById("name").value}`] = obj;
  document.getElementById("form").reset();
  addProduct();
});

function handleDelete(evt) {
  delete products[`${evt.target.id}`];
  addProduct();
}

function addProduct() {
  document.getElementById("products").innerHTML = "";
  const productName = Object.keys(products);
  productName.forEach((k) => {
    const div = document.createElement("div");
    div.setAttribute("id", "display");
    const name = document.createElement("p");
    name.innerText = `Name:${k}`;
    const desc = document.createElement("p");
    desc.innerText = products[k].desc;
    const price = document.createElement("p");
    price.innerText = `$${products[k].price}`;
    const m = document.createElement("img");
    m.src = products[k].image;
    const button = document.createElement("button");
    button.setAttribute("id", k);
    button.innerText = "delete";
    button.setAttribute("onclick", "handleDelete(event)");
    div.append(m);
    div.append(name);
    div.append(desc);
    div.append(price);
    div.append(button);
    document.getElementById("products").append(div);
  });
}
