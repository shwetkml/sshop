(this.webpackJsonpeshop=this.webpackJsonpeshop||[]).push([[0],{48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},53:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},63:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var s=c(3),a=c.n(s),n=c(25),i=c.n(n),r=(c(48),c(49),c(50),c(13)),o=(c(51),c(2)),l=Object(s.createContext)(),j=function(e){var t=e.reducer,c=e.initialState,a=e.children;return Object(o.jsx)(l.Provider,{value:Object(s.useReducer)(t,c),children:a})},d=function(){return Object(s.useContext)(l)};var h=function(e){var t=e.id,c=e.title,s=e.image,a=e.price,n=e.rating,i=d(),l=Object(r.a)(i,2),j=(l[0],l[1]);return Object(o.jsxs)("div",{className:"product",children:[Object(o.jsxs)("div",{className:"product__info",children:[Object(o.jsx)("p",{children:c}),Object(o.jsxs)("p",{className:"product__price",children:[Object(o.jsx)("small",{children:"$"}),Object(o.jsx)("strong",{children:a})]}),Object(o.jsx)("div",{className:"product__rating",children:Array(n).fill().map((function(e,t){return Object(o.jsx)("p",{children:"\u2b50"})}))})]}),Object(o.jsx)("img",{src:s}),Object(o.jsx)("button",{onClick:function(){j({type:"ADD_TO_BASKET",item:{id:t,image:s,price:a,rating:n}})},children:"Add to Basket"})]})};var b=function(){return Object(o.jsx)("div",{className:"home",children:Object(o.jsxs)("div",{className:"home__container",children:[Object(o.jsx)("img",{src:"https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg",alt:"",className:"home__image"}),Object(o.jsxs)("div",{className:"home__row",children:[Object(o.jsx)(h,{id:"12321341",title:"Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"}),Object(o.jsx)(h,{id:"49538094",title:"IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)",price:239,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"})]}),Object(o.jsxs)("div",{className:"home__row",children:[Object(o.jsx)(h,{id:"4903850",title:"All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback",price:199.99,rating:3,image:"https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"}),Object(o.jsx)(h,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),Object(o.jsx)(h,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})]}),Object(o.jsx)("div",{className:"home__row",children:Object(o.jsx)(h,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})})]})})},m=(c(53),c(41)),u=c.n(m),O=c(28),p=c.n(O),x=c(40),_=c.n(x),g=c(20);var v=function(){var e=d(),t=Object(r.a)(e,2),c=t[0].basket;return t[1],Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)(g.b,{to:"/",style:{textDecoration:"none"},children:Object(o.jsxs)("div",{className:"header__logo",children:[Object(o.jsx)(p.a,{className:"header__logoImage",fontSize:"large"}),Object(o.jsx)("h2",{className:"header__logoTitle",children:"sShop"})]})}),Object(o.jsxs)("div",{className:"header__search",children:[Object(o.jsx)("input",{type:"text",className:"header__searchInput"}),Object(o.jsx)(_.a,{className:"header__searchIcon"})]}),Object(o.jsxs)("div",{className:"header__nav",children:[Object(o.jsx)(g.b,{to:"/login",style:{textDecoration:"none"},children:Object(o.jsxs)("div",{className:"nav__item",children:[Object(o.jsx)("span",{className:"nav__itemLineOne",children:"Hello Guest"}),Object(o.jsx)("span",{className:"nav__itemLineTwo",children:"Sign In"})]})}),Object(o.jsxs)("div",{className:"nav__item",children:[Object(o.jsx)("span",{className:"nav__itemLineOne",children:"Your"}),Object(o.jsx)("span",{className:"nav__itemLineTwo",children:"Shop"})]}),Object(o.jsx)(g.b,{to:"/checkout",style:{textDecoration:"none"},children:Object(o.jsxs)("div",{className:"nav__itemBasket",children:[Object(o.jsx)(u.a,{}),Object(o.jsx)("span",{className:"nav__itemLineTwo nav__basketCount",children:c.length})]})})]})]})};c(59),c(60);var f=function(e){var t=e.id,c=e.image,s=e.title,a=e.price,n=e.rating,i=d(),l=Object(r.a)(i,2),j=(l[0].basket,l[1]);return Object(o.jsxs)("div",{className:"checkoutProduct",children:[Object(o.jsx)("img",{src:c,alt:"",className:"checkoutProduct__image"}),Object(o.jsxs)("div",{className:"checkoutProduct__info",children:[Object(o.jsx)("p",{className:"checkoutProduct__title",children:s}),Object(o.jsxs)("p",{className:"checkoutProduct__price",children:[Object(o.jsx)("small",{children:"$"}),Object(o.jsx)("strong",{children:a})]}),Object(o.jsx)("div",{className:"checkoutProduct__rating",children:Array(n).fill().map((function(e,t){return Object(o.jsx)("p",{children:"\u2b50"})}))}),Object(o.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})},N=(c(61),c(42)),k=c.n(N),S=c(37),C=c(23),y=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},w=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(C.a)(Object(C.a)({},e),{},{basket:[].concat(Object(S.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),s=Object(S.a)(e.basket);return c>=0?s.splice(c,1):console.warn("Can't remove product(id: ".concat(t.id,") as its not in the basket!")),Object(C.a)(Object(C.a)({},e),{},{basket:s});default:return e}};var B=function(){var e=d(),t=Object(r.a)(e,2),c=t[0].basket;return t[1],Object(o.jsxs)("div",{className:"subtotal",children:[Object(o.jsx)(k.a,{renderText:function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("p",{children:["Subtotal (",c.length," items): ",Object(o.jsxs)("strong",{children:["$",e]})]}),Object(o.jsxs)("small",{className:"subtotal__gift",children:[Object(o.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:y(c),displayType:"text",thousandSeparator:!0}),Object(o.jsx)("button",{children:"Proceed to Checkout"})]})};var A=function(){var e=d(),t=Object(r.a)(e,2),c=t[0].basket;return t[1],Object(o.jsxs)("div",{className:"checkout",children:[Object(o.jsxs)("div",{className:"checkout__left",children:[Object(o.jsx)("img",{src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:"",className:"checkout__ad"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"checkout__title",children:"Your Shopping Basket"}),c.map((function(e){return Object(o.jsx)(f,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(o.jsx)("div",{className:"checkout__right",children:Object(o.jsx)(B,{})})]})},I=(c(63),c(10)),L=c(36),P=(L.a.initializeApp({apiKey:"AIzaSyDLPIsrT10wfSMmqwGvIVSP6Xs33zrmNXI",authDomain:"sshop-81a84.firebaseapp.com",projectId:"sshop-81a84",storageBucket:"sshop-81a84.appspot.com",messagingSenderId:"1014506383926",appId:"1:1014506383926:web:94103e66596e5f90bb4697",measurementId:"G-X4JEWX3B1E"}).firestore(),L.a.auth());var E=function(){var e=Object(I.f)(),t=Object(s.useState)(""),c=Object(r.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(""),l=Object(r.a)(i,2),j=l[0],d=l[1];return Object(o.jsxs)("div",{className:"login",children:[Object(o.jsx)(g.b,{to:"/",style:{textDecoration:"none"},children:Object(o.jsxs)("div",{className:"login__logo",children:[Object(o.jsx)(p.a,{className:"login__logoImage",fontSize:"large"}),Object(o.jsx)("h2",{className:"login__logoTitle",children:"eSHOP"})]})}),Object(o.jsxs)("div",{className:"login__container",children:[Object(o.jsx)("h1",{children:"Sign-in"}),Object(o.jsxs)("form",{children:[Object(o.jsx)("h5",{children:"E-mail"}),Object(o.jsx)("input",{type:"text",value:a,onChange:function(e){return n(e.target.value)}}),Object(o.jsx)("h5",{children:"Password"}),Object(o.jsx)("input",{type:"password",value:j,onChange:function(e){return d(e.target.value)}}),Object(o.jsx)("button",{type:"submit",className:"login__signInButton",onClick:function(t){t.preventDefault(),P.signInWithEmailAndPassword(a,j).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Sign In"})]}),Object(o.jsx)("p",{children:"By signing-in you agree to the eShop Website Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(o.jsx)("button",{className:"login__registerButton",onClick:function(t){t.preventDefault(),P.createUserWithEmailAndPassword(a,j).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Create your eShop Account"})]})]})};var T=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(g.a,{children:Object(o.jsxs)(I.c,{children:[Object(o.jsx)(I.a,{path:"/login",children:Object(o.jsx)(E,{})}),Object(o.jsxs)(I.a,{path:"/checkout",children:[Object(o.jsx)(v,{}),Object(o.jsx)(A,{})]}),Object(o.jsxs)(I.a,{path:"/",children:[Object(o.jsx)(v,{}),Object(o.jsx)(b,{})]})]})})})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(j,{initialState:{basket:[]},reducer:w,children:Object(o.jsx)(T,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.74e50ab0.chunk.js.map