
//   return (shop.innerHTML = shopItemsData
//     .map((x) => {
//       let { id, name, price, desc, img } = x;
//       let search = basket.find((x) => x.id === id) || [];
//       return `
//           <div class="col-lg-4 col-sm-6 dish-box-wp ${categoria} data-cat="">
//             <div id=product-id-${id} class="item">
//               <div class="dish-box text-center">
//                   <div class="dist-img">
//                       <img src=${img} alt="">
//                   </div>
//                   <div class="dish-title">
//                       <h3 class="h3-title">${name}</h3>
                  
//                   </div>
//                   <div class="dish-info">
//                       <ul>
//                           <li>
//                               <p>Quantidade</p>
                          
//                           </li>
//                           <li>
//                               <b>${quantidade}</b>

//                           </li>
//                       </ul>
//                   </div>
//                   <div class="dist-bottom-row">
//                       <ul>
//                           <li>
//                               <button class="dish-add-btn">
//                                   <i onclick="increment(${id}) class="uil uil-plus"></i>
//                                   <div id=${id} class="quantity">
//                                   ${search.item === undefined ? 0 : search.item}
//                                   </div>
//                               </button>
//                           </li>
//                           <li>
//                               <b> ${price} €</b>
//                           </li>
                          
//                           <li>
                              
//                           <a href="#" class="btn-menu">More info</a>
//                           </li>
               
//                       </ul>
//                   </div>
//               </div>
//             </div>
//           </div>

//     `;
//     })
//     .join(""));
// };



let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, categoria, img } = x;
      let search = basket.find((x) => x.id === id) || [];
     return `
    <div id=product-id-${id} class="item"> 
      <div class='${categoria}'>
    
      <div class="dish-box text-center">
          <div class="dist-img">
              <img src=${img} alt="">
          </div>
          <div class="dish-title">
              <h3 class="h3-title">${name}</h3>
          
          </div>
          
          <div class="dish-info">
              <ul>
              <li>
              <p>Preço</p>

              </li>
                  <li>
                      <b>${price} €</b>

                  </li>
              </ul>
          </div>
            <div class="dist-bottom-row">
            <ul>
            <li>
              <i onclick="decrement(${id})" class="uil uil-minus"></i>
              <div id=${id} class="quantity">
              ${search.item === undefined ? 0 : search.item}
              </div>
              <i onclick="increment(${id})" class="uil uil-plus"></i>
            </li>

            <li>
              <a href="ingr.html" class="btn-menu">+ info</a>
            </li>
            </ul>

            </div>
          </div>
          </div>
        
      </div>
    `;
    })
    .join(""));
};

generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  // console.log(basket);
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  // console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

/**filtros */

function filterObjects(c){
  var x,i;
  x = document.getElementsByClassName("box");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}














