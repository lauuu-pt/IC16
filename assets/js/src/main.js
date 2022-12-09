
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
      let {
        id,
        name,
        price,
        categoria,
        img,
        ingredientes,
        calorias1,
        calorias2,
        carboidratos1,
        carboidratos2,
        proteinas1,
        proteinas2,
        gordurast1,
        gordurast2,
        gordurass1,
        gordurass2,
        sodio1,
        sodio2,
        colestrol1,
        colestrol2,
        fibra1,
        fibra2,
        calcio1,
        calcio2,
        ferro1,
        ferro2,
      } = x;
      let search = basket.find((x) => x.id === id) || [];
     return `
    <div id=product-id-${id} class="item"> 
    
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
              <a href="#popup1" class="btn-menu">+ info</a>
            </li>
            </ul>

            </div>
          </div>
          
        
      </div>
      <div id="popup1" class="overlay1" style="z-index:100;">
      <div class="popup1">
         <h2>${name}</h2>
         <h2>Informação Nutricional</h2>
         <a class="close1" href="#">&times;</a>
         <div class="content1">
            </br>
            <a class="textt" href="assets\js\src\Data.js"></a>Ingredientes: ${ingredientes}
            </br>
            </br>
            <table class="table table-bordered">
               <thead>
                  <tr>
                     <th></th>
                     <th class="text-center">Quantidade por porção</th>
                     <th class="text-center">%VD</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Calorias</td>
                     <td class="text-center">${calorias1} kcal</td>
                     <td class="text-center">${calorias2}</td>
                  </tr>
                  <tr>
                     <td>Carboidratos</td>
                     <td class="text-center">${carboidratos1}</td>
                     <td class="text-center">${carboidratos2}</td>
                  </tr>
                  <tr>
                     <td>Proteínas</td>
                     <td class="text-center">${proteinas1}</td>
                     <td class="text-center">${proteinas2}</td>
                  </tr>
                  <tr>
                     <td>Gorduras Totais</td>
                     <td class="text-center">${gordurast1}</td>
                     <td class="text-center">${gordurast2}</td>
                  </tr>
                  <tr>
                     <td>Gorduras Saturadas</td>
                     <td class="text-center">${gordurass1}</td>
                     <td class="text-center">${gordurass2}</td>
                  </tr>
                  <tr>
                     <td>Sódio</td>
                     <td class="text-center">${sodio1}</td>
                     <td class="text-center">${sodio2}</td>
                  </tr>
                  <tr>
                     <td>Colesterol</td>
                     <td class="text-center">${colestrol1}</td>
                     <td class="text-center">${colestrol2}</td>
                  </tr>
                  <tr>
                     <td>Fibra alimentar</td>
                     <td class="text-center">${fibra1}</td>
                     <td class="text-center">${fibra2}</td>
                  </tr>
                  <tr>
                     <td>Cálcio</td>
                     <td class="text-center">${calcio1}</td>
                     <td class="text-center">${calcio2}</td>
                  </tr>
                  <tr>
                     <td>Ferro</td>
                     <td class="text-center">${ferro1}</td>
                     <td class="text-center">${ferro2}</td>
                  </tr>
               </tbody>
            </table>
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














