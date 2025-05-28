const products = [
  { name: "FRUIT BIS 400GM", newprice: 200.00 , oldprice: 200.00, description: "A delicious biscuit packed with real fruit chunks for a wholesome snack.",image:"./Item/fruit_bis.jpg" },
  { name: "KHARA BIS 500GM", newprice: 200.00 , oldprice: 200.00, description:"Crunchy and spicy savory biscuits perfect with tea or coffee.", image:"./Item/KHARA_BIS.JPG"},
  { name: "CHAND BIS 400GM", newprice: 200.00 , oldprice: 200.00, description:"Moon-shaped buttery biscuits with a melt-in-the-mouth texture.", image:"./Item/chandbis.JPG"},,
  { name: "OATS BIS 400GM", newprice: 200.00 , oldprice: 200.00, description: "Healthy oat-based biscuits perfect for guilt-free snacking.", image:"./Item/oatsbis.JPG"},
  { name: "FRUITS CAKE RUSK 400/200GM", newprice: 200.00, oldprice:200.00, description:"Double-baked fruit cake rusks, rich in flavor and crispiness.", image:"./Item/fruitcakerusk.JPG" },
  { name: "KAJU 400GM", newprice: 200.00, oldprice: 200.00, description: "Premium quality roasted cashew biscuits with a rich taste.", image:"./Item/kaju.JPG" },
  { name: "CHOCOLATE KAJU 400/200GM", newprice: 200.00, oldprice:200.00, description:"A rich fusion of chocolate and cashew in every crunchy bite.", image:"./Item/choclatekaju.JPG" },
  { name: "DRY FRUIT 400/200GM", newprice: 200.00, oldprice: 200.00, description: "A wholesome biscuit filled with assorted dry fruits for energy.", image:"./Item/dryfruits.JPG" },
  { name: "CASHEW NUTS 400GM", newprice: 200.00, oldprice: 200.00, description: "Classic buttery cashew nut biscuits for every snack lover.", image:"./Item/kajunuts.JPG" },
  { name: "MILK RUSK [TOAST]: 500GM", newprice: 200.00, oldprice:200.00, description: "Sealed pack crispy milk rusks for your perfect tea-time companion.", image:"./Item/milkrusk.JPG" },
  { name: "ROAT 500GM", newprice: 200.00, oldprice:200.00, description:"Traditional baked sweet treat, crunchy and rich in flavor, perfect with tea.", image:"./Item/oatsbis.JPG" },
  { name: "STRAWBERRY 400GM", newprice: 200.00, oldprice:200.00, description:"Sweet strawberry flavored biscuits that melt in your mouth.", image:"./Item/straberry.jpg" }, 
  { name: "WALNUTS 400GM", newprice: 200.00, oldprice:200.00, description:"Premium quality walnuts packed with nutrition and crunch.", image:"./Item/walnuts.JPG" },
  { name: "COCONUT MACAROONS 400GM", newprice: 200.00, oldprice:200.00, description:"Delicious coconut treats with a chewy center and golden crust.", image:"./Item/Coconut_Macaroons.jpg" },
  { name: "PLUM CAKE 380/500GM", newprice: 200.00, oldprice:200.00,description:"Rich and moist plum cake loaded with dried fruits and festive flavor.", image:"./Item/plum.jpeg" },
  { name: "JAM KAJU 400GM", newprice: 200.00, oldprice:200.00, description:"Crunchy cashew cookies topped with a sweet jam center.", image:"./Item/kajunuts.JPG" },
  { name: "ASSORTED COOKIES – BIG", newprice: 200.00, oldprice:200.00, description:"A variety of rich and flavorful cookies in one large pack.",image:"./Item/AssortedCookie.jpg" },
  { name: "ASSORTED COOKIES DRY", newprice: 200.00, oldprice:200.00, description:"Mix of dry, crisp cookies perfect for sharing or gifting." ,image:"./Item/AssortedCookie.jpg"},
  { name: "MILK BREAD", newprice: 200.00, oldprice: 200.00, description: "Soft and creamy bread made with milk, perfect for a healthy breakfast." , image:"./Item/milkbread.jpg"},
  { name: "PLAIN SANDWICH BREAD", newprice: 200.00, oldprice: 200.00, description:"Classic sandwich bread ideal for daily use with any filling or spread.", image:"./Item/plainsandwishbread.jpg"},
  { name: "FRUIT BREAD", newprice: 200.00, oldprice: 200.00, description:"Sweet and colorful bread with bits of dried fruits — a delightful treat.", image:"./Item/fruitbread.jpg" },
  { name: "DOUBLE KA MEETHA BREAD", newprice: 200.00, oldprice:200.00, description:"Special bread made for Hyderabadi dessert, perfect for sweet dishes.", image:"./item/doublekamitha.png" },
  { name: "POORI", newprice: 200.00, oldprice: 200.00, description:"Golden fried Indian bread, soft inside and crispy outside.", image:"./Item/poori.jpeg" },
  { name: "VICTORIAN RICH PLAIN CAKE", newprice: 200.00, oldprice:200.00, description:"Rich, buttery plain cake perfect for tea-time or light desserts.", image:"./Item/victoriaplaincake.jpg" },
  { name: "MUFFINS 6 CUPS", newprice: 200.00, oldprice:200.00, description:"Pack of six soft and spongy muffins to enjoy with family and friends.", image:"./Item/MUFFINS.jpg" },
  { name: "SWEET PUFF", newprice: 200.00, oldprice:200.00, description:"Flaky puff pastry filled with sweet coconut mixture — a bakery favorite.", image:"./Item/sweetpuf.jpg" },
  { name: "PLAIN SPONGE CAKE", newprice: 200.00, oldprice:200.00, description:"Light and fluffy cake that melts in your mouth — simple and delicious.", image:"./Item/plainsandwishbread.jpg" },
  { name: "DONUT", newprice: 200.00, oldprice:200.00, description:"Classic donut with a soft center and sugar glaze — a sweet indulgence.", image:"./Item/donuts.jpg" },
  { name: "RED VELVET CUPCAKE", newprice: 200.00, oldprice:200.00, description:"Moist and rich red velvet cupcake topped with creamy frosting.", image:"./Item/redvelvetcake.jpg"},
  { name: "BROWNIE CUPCAKE", newprice: 200.00, oldprice:200.00, description:"Deliciously fudgy chocolate brownie in a cupcake form — rich & satisfying.", image:"./item/browni.png" },
  { name: "DINNER ROLL", newprice: 200.00, oldprice:200.00, description:"Soft, buttery rolls — perfect to pair with soups, curries or as sliders.", image:"./Item/dinnerroll.jpg" },
  { name: "SHEERMOL", newprice: 200.00, oldprice:200.00, description:"Traditional rich and soft bread, mildly sweet, perfect for festive meals.", image:"./Item/Sheermol.jpg" },
  { name: "DILKHUSHH", newprice: 200.00, oldprice:200.00, description:"Sweet coconut-filled puff pastry that brings joy with every bite.", image:"./Item/dilkhush.jpg" },
  {name:"OSMANIA BISCUIT 500/250GM", newprice:200.00, oldprice:200.00, description:"Hyderabad’s iconic buttery biscuit with a slightly sweet and salty flavor — perfect with tea.", image:"./Item/osmania.jpg"}

];

const queryString = window.location.search;

// Parse the query string
const urlParams = new URLSearchParams(queryString);

// Get individual parameters

const data = urlParams.get('data'); 
let figureTag = document.getElementById('figureTag');
let imageTag = document.getElementById('imageTag');
let newprice = document.getElementById("newprice");
let oldprice = document.getElementById('oldprice');
let productName = document.getElementById("productName");
let desc = document.getElementById("desc");
let title = document.querySelectorAll('.title')


const filterProduct = (data) =>{
    newprice.textContent = `₹ ${products[data].newprice}`;
    oldprice.textContent = `₹ ${products[data].oldprice}`;
    productName.textContent = products[data].name;
    desc.textContent = products[data].description;

    title.forEach(element => {
        element.textContent = products[data].name;
    });

    figureTag.setAttribute('style',`background-image: url(${products[data].image})`)
    imageTag.setAttribute('src',`${products[data].image}`)
}

filterProduct(parseInt(data));
