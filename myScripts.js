function openSlideMenu(){
	document.getElementById('content').style.width = "560px";
}

function closeSlideMenu(){
	document.getElementById('content').style.width = "0px";
	document.getElementById('opener-icon').style.display = "block";
}

var a = 0;
function pop(){
	if(a == 0){
		document.getElementById('box').style.display = "block";
		a = 1;
	}
	else{
		document.getElementById('box').style.display = "none";
		a = 0;
	}
}

$(document).ready(function () {
	$('#infocontent').children().hide();
	$("#link1content").show();
	var slideIndex = 0;
	function showSlides() {
	var i;
	var slides = $(".mySlidess");
	for (i = 0; i < slides.length; i++) {
	$(slides[i]).css("display","none");  
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}  
	$(slides[slideIndex-1]).css("display","block"); 
	setTimeout(showSlides, 5000); 
	}
	showSlides();
});


$('.add-to-cart-homePage').on('click', function () {
    var cart = $('.header-icons');
    var imgtodrag = $(this).parent('.item').find("img").eq(0);
    if (imgtodrag) {
    	var imgclone = imgtodrag.clone()
        .offset({
         top: imgtodrag.offset().top,
         left: imgtodrag.offset().left
    })
    .css({
    	'opacity': '0.8',
        'position': 'absolute',
        'height': '825px',
        'width': '825px',
        'z-index': '100'
    })
    .appendTo($('body'))
    .animate({
        'top': cart.offset().top + 10,
        'left': cart.offset().left + 10,
        'width': 25,
        'height': 25
    }, 
    1000, 'easeInOutExpo');
    imgclone.animate({
        'width': 0,
        'height': 0
    }, 
    function(){
        $(this).detach()
    });
}});

$('.add-to-cart-ForMen').on('click', function () {
    var cart = $('.header-icons');
    var imgtodrag = $(this).parent('.item').find("img").eq(0);
    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
        .offset({
         top: imgtodrag.offset().top,
         left: imgtodrag.offset().left
    })
    .css({
        'opacity': '0.8',
        'position': 'absolute',
        'height': '825px',
        'width': '825px',
        'z-index': '100'
    })
    .appendTo($('body'))
    .animate({
        'top': cart.offset().top + 10,
        'left': cart.offset().left + 10,
        'width': 25,
        'height': 25
    }, 
    1000, 'easeInOutExpo');
    imgclone.animate({
        'width': 0,
        'height': 0
    }, 
    function(){
        $(this).detach()
    });
}}); 

$('.add-to-cart-ForWomen').on('click', function () {
    var cart = $('.header-icons');
    var imgtodrag = $(this).parent('.item').find("img").eq(0);
    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
        .offset({
         top: imgtodrag.offset().top,
         left: imgtodrag.offset().left
    })
    .css({
        'opacity': '0.8',
        'position': 'absolute',
        'height': '825px',
        'width': '825px',
        'z-index': '100'
    })
    .appendTo($('body'))
    .animate({
        'top': cart.offset().top + 10,
        'left': cart.offset().left + 10,
        'width': 25,
        'height': 25
    }, 
    1000, 'easeInOutExpo');
    imgclone.animate({
        'width': 0,
        'height': 0
    }, 
    function(){
        $(this).detach()
    });
}});

$('.add-to-cart-Unisex').on('click', function () {
    var cart = $('.header-icons');
    var imgtodrag = $(this).parent('.item').find("img").eq(0);
    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
        .offset({
         top: imgtodrag.offset().top,
         left: imgtodrag.offset().left
    })
    .css({
        'opacity': '0.8',
        'position': 'absolute',
        'height': '825px',
        'width': '825px',
        'z-index': '100'
    })
    .appendTo($('body'))
    .animate({
        'top': cart.offset().top + 10,
        'left': cart.offset().left + 10,
        'width': 25,
        'height': 25
    }, 
    1000, 'easeInOutExpo');
    imgclone.animate({
        'width': 0,
        'height': 0
    }, 
    function(){
        $(this).detach()
    });
}});  

$('.add-to-cart-Smart-watches').on('click', function () {
    var cart = $('.header-icons');
    var imgtodrag = $(this).parent('.item').find("img").eq(0);
    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
        .offset({
         top: imgtodrag.offset().top,
         left: imgtodrag.offset().left
    })
    .css({
        'opacity': '0.8',
        'position': 'absolute',
        'height': '825px',
        'width': '825px',
        'z-index': '100'
    })
    .appendTo($('body'))
    .animate({
        'top': cart.offset().top + 10,
        'left': cart.offset().left + 10,
        'width': 25,
        'height': 25
    }, 
    1000, 'easeInOutExpo');
    imgclone.animate({
        'width': 0,
        'height': 0
    }, 
    function(){
        $(this).detach()
    });
}});  

let cartsHomePage = document.querySelectorAll('.add-to-cart-homePage');
let productsHomePage = [
    {
        name: "Gucci G Timeless Gold Plated Leather",
        tag: "watch1",
        price: 325,
        inCart: 0
    },
    {
        name: "Loewe Gold Blue Round Sunglasses",
        tag: "watch2",
        price: 410,
        inCart: 0
    },

{
        name: "Michael Kors Dylan Rose Gold Tone Chronograph",
        tag: "watch3",
        price: 275,
        inCart: 0
    },

{
        name: "Michael Kors Access Runway Rose Gold Tone Smartwatch",
        tag: "watch4",
        price: 450,
        inCart: 0
    },
{
        name: "Gucci G Collection Diamond Gold Plated",
        tag: "watch5",
        price: 599,
        inCart: 0
    },
{
        name: "Emporio Armani Rose Gold Tone",
        tag: "watch6",
        price: 225,
        inCart: 0
    }
];
let cartsForMen = document.querySelectorAll('.add-to-cart-ForMen');
let productsForMen = [
    {
        name: "Movado Heritage Series",
        tag: "watch9",
        price: 800,
        inCart: 0
    },
    {
        name: "Grand Seiko SBGN003",
        tag: "watch8",
        price: 380,
        inCart: 0
    },
    {
        name: "Movado Series 800",
        tag: "watch7",
        price: 550,
        inCart: 0
    },

{
        name: "TAG Heuer Formula 1 Senna",
        tag: "watch10",
        price: 900,
        inCart: 0
    },
{
        name: "Emporio Armani Rose Gold Tone",
        tag: "watch6",
        price: 225,
        inCart: 0
    },
{
        name: "Loewe Gold Blue Round Sunglasses",
        tag: "watch2",
        price: 410,
        inCart: 0
    },
{
        name: "Michael Kors Dylan Rose Gold Tone Chronograph",
        tag: "watch3",
        price: 275,
        inCart: 0
    },
{
        name: "Hugo Boss Grand Prix Black Ion Plated Chronograph",
        tag: "watch19",
        price: 340,
        inCart: 0
    },
{
        name: "Breitling Navitimer World 46 Automatic Chronograph",
        tag: "watch20",
        price: 750,
        inCart: 0
    }
];

let cartsForWomen = document.querySelectorAll('.add-to-cart-ForWomen');
let productsForWomen = [
    {
        name: "Michael Kors Access Runway Rose Gold Tone Smartwatch",
        tag: "watch4",
        price: 450,
        inCart: 0
    },
    {
        name: "Gucci G Collection Diamond Gold Plated",
        tag: "watch5",
        price: 599,
        inCart: 0
    },

{
        name: "Vivienne Westwood Montagu Black And Rose Gold Tone",
        tag: "watch11",
        price: 1100,
        inCart: 0
    },
{
        name: "Michael Kors Pyper Rose Gold Tone",
        tag: "watch12",
        price: 950,
        inCart: 0
    },
{
        name: "Olivia Burton Glasshouse Rose Gold Plated Mesh",
        tag: "watch13",
        price: 650,
        inCart: 0
    },
{
        name: "Movado Connect 2.0",
        tag: "watch16",
        price: 495,
        inCart: 0
    },
{
        name: "Movado Bold Evolution",
        tag: "watch14",
        price: 650,
        inCart: 0
    }
];

let cartsForUnisex = document.querySelectorAll('.add-to-cart-Unisex');
let productsUnisex = [
    {
        name: "Tommy Hilfiger Blue Ion Plated",
        tag: "watch15",
        price: 300,
        inCart: 0
    },
    {
        name: "Movado Museum Classic",
        tag: "watch24",
        price: 995,
        inCart: 0
    },

{
        name: "Tag Heuer Formula 1 Gulf Chronograph Special Edition",
        tag: "watch17",
        price: 450,
        inCart: 0
    },
{
        name: "Omega Olympic Official Timekeeper Automatic",
        tag: "watch18",
        price: 320,
        inCart: 0
    },
{
        name: "Emporio Armani",
        tag: "Unisex-collection",
        price: 119,
        inCart: 0
    },
{
        name: "Movado 42mm Connect 2.0",
        tag: "watch21",
        price: 650,
        inCart: 0
    },
{
        name: "Movado 40mm Connect 2.0",
        tag: "watch22",
        price: 495,
        inCart: 0
    },
{
        name: "Movado Modern 47",
        tag: "watch23",
        price: 595,
        inCart: 0
    }
];

let cartsForSmartWatches = document.querySelectorAll('.add-to-cart-Smart-watches');
let productsSmartWatches = [
    {
        name: "Apple Watch Series 5",
        tag: "watch26",
        price: 500,
        inCart: 0
    },
    {
        name: "Movado 42mm Connect 2.0",
        tag: "watch25",
        price: 695,
        inCart: 0
    },
    {
        name: "ZeRound 3 Lite",
        tag: "watch27",
        price: 140,
        inCart: 0
    },
    {
        name: "Zesplash 2 Gold Tone",
        tag: "watch28",
        price: 190,
        inCart: 0
    },
    {
        name: "Kruger Matz",
        tag: "watch29",
        price: 220,
        inCart: 0
    },
    {
        name: "Kruger Matz Classic",
        tag: "watch31",
        price: 160,
        inCart: 0
    },
    {
        name: "Polar M Android Wear",
        tag: "watch30",
        price: 419,
        inCart: 0
    }
];

let cartsForMenFirstModel = document.querySelectorAll('.add-to-cart-ForMen-FirstModel');
let productsForMenFirstModel = [
    {
        name: "Movado Heritage Series",
        tag: "watch9",
        price: 800,
        inCart: 0
    }
];

for(let i = 0; i < cartsForMenFirstModel.length; i++){
    cartsForMenFirstModel[i].addEventListener('click', () => {
        cartNumbers(productsForMenFirstModel[i]);
        totalCost(productsForMenFirstModel[i]);
    })
}

let cartsForMenSecondModel = document.querySelectorAll('.add-to-cart-ForMen-SecondModel');
let productsForMenSecondModel = [
    {
        name: "Grand Seiko SBGN003",
        tag: "watch8",
        price: 380,
        inCart: 0
    }
];

for(let i = 0; i < cartsForMenSecondModel.length; i++){
    cartsForMenSecondModel[i].addEventListener('click', () => {
        cartNumbers(productsForMenSecondModel[i]);
        totalCost(productsForMenSecondModel[i]);
    })
}

let cartsForMenThirdModel = document.querySelectorAll('.add-to-cart-ForMen-ThirdModel');
let productsForMenThirdModel = [
    {
        name: "TAG Heuer Formula 1 Senna",
        tag: "watch10",
        price: 900,
        inCart: 0
    }
];

for(let i = 0; i < cartsForMenThirdModel.length; i++){
    cartsForMenThirdModel[i].addEventListener('click', () => {
        cartNumbers(productsForMenThirdModel[i]);
        totalCost(productsForMenThirdModel[i]);
    })
}

let cartsForMenForthModel = document.querySelectorAll('.add-to-cart-ForMen-ForthModel');
let productsForMenForthModel = [
    {
        name: "Emporio Armani Rose Gold Tone",
        tag: "watch6",
        price: 225,
        inCart: 0
    }
];

for(let i = 0; i < cartsForMenForthModel.length; i++){
    cartsForMenForthModel[i].addEventListener('click', () => {
        cartNumbers(productsForMenForthModel[i]);
        totalCost(productsForMenForthModel[i]);
    })
}

let cartsForMenFifthModel = document.querySelectorAll('.add-to-cart-ForMen-FifthModel');
let productsForMenFifthModel = [
    {
        name: "Movado Series 800",
        tag: "watch7",
        price: 550,
        inCart: 0
    }
];

for(let i = 0; i < cartsForMenFifthModel.length; i++){
    cartsForMenFifthModel[i].addEventListener('click', () => {
        cartNumbers(productsForMenFifthModel[i]);
        totalCost(productsForMenFifthModel[i]);
    })
}

let cartsForMenSixthModel = document.querySelectorAll('.add-to-cart-ForMen-SixthModel');
let productsForMenSixthModel = [
    {
        name: "Loewe Gold Blue Round Sunglasses",
        tag: "watch2",
        price: 410,
        inCart: 0
    }
];

for(let i = 0; i < cartsForMenSixthModel.length; i++){
    cartsForMenSixthModel[i].addEventListener('click', () => {
        cartNumbers(productsForMenSixthModel[i]);
        totalCost(productsForMenSixthModel[i]);
    })
}

let cartsForMenSeventhModel = document.querySelectorAll('.add-to-cart-ForMen-SeventhModel');
let productsForMenSeventhModel = [
    {
        name: "Michael Kors Dylan Rose Gold Tone Chronograph",
        tag: "watch3",
        price: 275,
        inCart: 0
    }
];

for(let i = 0; i < cartsForMenSeventhModel.length; i++){
    cartsForMenSeventhModel[i].addEventListener('click', () => {
        cartNumbers(productsForMenSeventhModel[i]);
        totalCost(productsForMenSeventhModel[i]);
    })
}

let cartsForMenEighthModel = document.querySelectorAll('.add-to-cart-ForMen-EighthModel');
let productsForMenEighthModel = [
    {
        name: "Hugo Boss Grand Prix Black Ion Plated Chronograph",
        tag: "watch19",
        price: 340,
        inCart: 0
    }
];

for(let i = 0; i < cartsForMenEighthModel.length; i++){
    cartsForMenEighthModel[i].addEventListener('click', () => {
        cartNumbers(productsForMenEighthModel[i]);
        totalCost(productsForMenEighthModel[i]);
    })
}

let cartsForMenNinthModel = document.querySelectorAll('.add-to-cart-ForMen-NinthModel');
let productsForMenNinthhModel = [
    {
        name: "Breitling Navitimer World 46 Automatic Chronograph",
        tag: "watch20",
        price: 750,
        inCart: 0
    }
];

for(let i = 0; i < cartsForMenNinthModel.length; i++){
    cartsForMenNinthModel[i].addEventListener('click', () => {
        cartNumbers(productsForMenNinthhModel[i]);
        totalCost(productsForMenNinthhModel[i]);
    })
}

let cartsForWomenFirstModel = document.querySelectorAll('.add-to-cart-forWomen-FirstModel');
let productsForWomenFirstModel = [
    {
        name: "Michael Kors Access Runway Rose Gold Tone Smartwatch",
        tag: "watch4",
        price: 450,
        inCart: 0
    }
];

for(let i = 0; i < cartsForWomenFirstModel.length; i++){
    cartsForWomenFirstModel[i].addEventListener('click', () => {
        cartNumbers(productsForWomenFirstModel[i]);
        totalCost(productsForWomenFirstModel[i]);
    })
}

let cartsForWomenSecondModel = document.querySelectorAll('.add-to-cart-forWomen-SecondModel');
let productsForWomenSecondModel = [
    {
        name: "Gucci G Collection Diamond Gold Plated",
        tag: "watch5",
        price: 599,
        inCart: 0
    }
];

for(let i = 0; i < cartsForWomenSecondModel.length; i++){
    cartsForWomenSecondModel[i].addEventListener('click', () => {
        cartNumbers(productsForWomenSecondModel[i]);
        totalCost(productsForWomenSecondModel[i]);
    })
}

let cartsForWomenThirdModel = document.querySelectorAll('.add-to-cart-forWomen-ThirdModel');
let productsForWomenThirdModel = [
    {
        name: "Vivienne Westwood Montagu Black And Rose Gold Tone",
        tag: "watch11",
        price: 1100,
        inCart: 0
    }
];

for(let i = 0; i < cartsForWomenThirdModel.length; i++){
    cartsForWomenThirdModel[i].addEventListener('click', () => {
        cartNumbers(productsForWomenThirdModel[i]);
        totalCost(productsForWomenThirdModel[i]);
    })
}

let cartsForWomenForthModel = document.querySelectorAll('.add-to-cart-forWomen-ForthModel');
let productsForWomenForthModel = [
    {
        name: "Michael Kors Pyper Rose Gold Tone",
        tag: "watch12",
        price: 950,
        inCart: 0
    }
];

for(let i = 0; i < cartsForWomenForthModel.length; i++){
    cartsForWomenForthModel[i].addEventListener('click', () => {
        cartNumbers(productsForWomenForthModel[i]);
        totalCost(productsForWomenForthModel[i]);
    })
}

let cartsForWomenFifthModel = document.querySelectorAll('.add-to-cart-forWomen-FifthModel');
let productsForWomenFifthModel = [
    {
        name: "Olivia Burton Glasshouse Rose Gold Plated Mesh",
        tag: "watch13",
        price: 650,
        inCart: 0
    }
];

for(let i = 0; i < cartsForWomenFifthModel.length; i++){
    cartsForWomenFifthModel[i].addEventListener('click', () => {
        cartNumbers(productsForWomenFifthModel[i]);
        totalCost(productsForWomenFifthModel[i]);
    })
}

let cartsForWomenSixthModel = document.querySelectorAll('.add-to-cart-forWomen-SixthModel');
let productsForWomenSixthModel = [
    {
        name: "Movado Connect 2.0",
        tag: "watch16",
        price: 495,
        inCart: 0
    }
];

for(let i = 0; i < cartsForWomenSixthModel.length; i++){
    cartsForWomenSixthModel[i].addEventListener('click', () => {
        cartNumbers(productsForWomenSixthModel[i]);
        totalCost(productsForWomenSixthModel[i]);
    })
}

let cartsForWomenSeventhModel = document.querySelectorAll('.add-to-cart-forWomen-SeventhModel');
let productsForWomenSeventhModel = [
    {
        name: "Movado Bold Evolution",
        tag: "watch14",
        price: 650,
        inCart: 0
    }
];

for(let i = 0; i < cartsForWomenSeventhModel.length; i++){
    cartsForWomenSeventhModel[i].addEventListener('click', () => {
        cartNumbers(productsForWomenSeventhModel[i]);
        totalCost(productsForWomenSeventhModel[i]);
    })
}

let cartsUnisexFirstModel = document.querySelectorAll('.add-to-cart-Unisex-FirstModel');
let productsUnisexFirstModel = [
    {
        name: "Tommy Hilfiger Blue Ion Plated",
        tag: "watch15",
        price: 300,
        inCart: 0
    }
];

for(let i = 0; i < cartsUnisexFirstModel.length; i++){
    cartsUnisexFirstModel[i].addEventListener('click', () => {
        cartNumbers(productsUnisexFirstModel[i]);
        totalCost(productsUnisexFirstModel[i]);
    })
}

let cartsUnisexSecondModel = document.querySelectorAll('.add-to-cart-Unisex-SecondModel');
let productsUnisexSecondModel = [
    {
        name: "Movado Museum Classic",
        tag: "watch24",
        price: 995,
        inCart: 0
    }
];

for(let i = 0; i < cartsUnisexSecondModel.length; i++){
    cartsUnisexSecondModel[i].addEventListener('click', () => {
        cartNumbers(productsUnisexSecondModel[i]);
        totalCost(productsUnisexSecondModel[i]);
    })
}

let cartsUnisexThirdModel = document.querySelectorAll('.add-to-cart-Unisex-ThirdModel');
let productsUnisexThirdModel = [
    {
        name: "Tag Heuer Formula 1 Gulf Chronograph Special Edition",
        tag: "watch17",
        price: 450,
        inCart: 0
    }
];

for(let i = 0; i < cartsUnisexThirdModel.length; i++){
    cartsUnisexThirdModel[i].addEventListener('click', () => {
        cartNumbers(productsUnisexThirdModel[i]);
        totalCost(productsUnisexThirdModel[i]);
    })
}

let cartsUnisexForthModel = document.querySelectorAll('.add-to-cart-Unisex-ForthModel');
let productsUnisexForthModel = [
    {
        name: "Omega Olympic Official Timekeeper Automatic",
        tag: "watch18",
        price: 320,
        inCart: 0
    }
];

for(let i = 0; i < cartsUnisexForthModel.length; i++){
    cartsUnisexForthModel[i].addEventListener('click', () => {
        cartNumbers(productsUnisexForthModel[i]);
        totalCost(productsUnisexForthModel[i]);
    })
}

let cartsUnisexFifthModel = document.querySelectorAll('.add-to-cart-Unisex-FifthModel');
let productsUnisexFifthModel = [
    {
        name: "Emporio Armani",
        tag: "Unisex-collection",
        price: 119,
        inCart: 0
    }
];

for(let i = 0; i < cartsUnisexFifthModel.length; i++){
    cartsUnisexFifthModel[i].addEventListener('click', () => {
        cartNumbers(productsUnisexFifthModel[i]);
        totalCost(productsUnisexFifthModel[i]);
    })
}

let cartsUnisexSixthModel = document.querySelectorAll('.add-to-cart-Unisex-SixthModel');
let productsUnisexSixthModel = [
    {
        name: "Movado 42mm Connect 2.0",
        tag: "watch21",
        price: 650,
        inCart: 0
    }
];

for(let i = 0; i < cartsUnisexSixthModel.length; i++){
    cartsUnisexSixthModel[i].addEventListener('click', () => {
        cartNumbers(productsUnisexSixthModel[i]);
        totalCost(productsUnisexSixthModel[i]);
    })
}

let cartsUnisexSeventhModel = document.querySelectorAll('.add-to-cart-Unisex-SeventhModel');
let productsUnisexSeventhModel = [
    {
        name: "Movado 40mm Connect 2.0",
        tag: "watch22",
        price: 495,
        inCart: 0
    }
];

for(let i = 0; i < cartsUnisexSeventhModel.length; i++){
    cartsUnisexSeventhModel[i].addEventListener('click', () => {
        cartNumbers(productsUnisexSeventhModel[i]);
        totalCost(productsUnisexSeventhModel[i]);
    })
}

let cartsUnisexEightModel = document.querySelectorAll('.add-to-cart-Unisex-EightModel');
let productsUnisexEightModel = [
    {
        name: "Movado Modern 47",
        tag: "watch23",
        price: 595,
        inCart: 0
    }
];

for(let i = 0; i < cartsUnisexEightModel.length; i++){
    cartsUnisexEightModel[i].addEventListener('click', () => {
        cartNumbers(productsUnisexEightModel[i]);
        totalCost(productsUnisexEightModel[i]);
    })
}

let cartsSmartWatchesFirstModel = document.querySelectorAll('.add-to-cart-SmartWatches-FirstModel');
let productsSmartWatchesFirstModel = [
    {
        name: "Apple Watch Series 5",
        tag: "watch26",
        price: 500,
        inCart: 0
    }
];

for(let i = 0; i < cartsSmartWatchesFirstModel.length; i++){
    cartsSmartWatchesFirstModel[i].addEventListener('click', () => {
        cartNumbers(productsSmartWatchesFirstModel[i]);
        totalCost(productsSmartWatchesFirstModel[i]);
    })
}

let cartsSmartWatchesSecondModel = document.querySelectorAll('.add-to-cart-SmartWatches-SecondModel');
let productsSmartWatchesSecondModel = [
    {
        name: "Movado 42mm Connect 2.0",
        tag: "watch25",
        price: 695,
        inCart: 0
    }
];

for(let i = 0; i < cartsSmartWatchesSecondModel.length; i++){
    cartsSmartWatchesSecondModel[i].addEventListener('click', () => {
        cartNumbers(productsSmartWatchesSecondModel[i]);
        totalCost(productsSmartWatchesSecondModel[i]);
    })
}

let cartsSmartWatchesThirdModel = document.querySelectorAll('.add-to-cart-SmartWatches-ThirdModel');
let productsSmartWatchesThirdModel = [
    {
        name: "ZeRound 3 Lite",
        tag: "watch27",
        price: 140,
        inCart: 0
    }
];

for(let i = 0; i < cartsSmartWatchesThirdModel.length; i++){
    cartsSmartWatchesThirdModel[i].addEventListener('click', () => {
        cartNumbers(productsSmartWatchesThirdModel[i]);
        totalCost(productsSmartWatchesThirdModel[i]);
    })
}

let cartsSmartWatchesForthModel = document.querySelectorAll('.add-to-cart-SmartWatches-ForthModel');
let productsSmartWatchesForthModel = [
    {
        name: "Zesplash 2 Gold Tone",
        tag: "watch28",
        price: 190,
        inCart: 0
    }
];

for(let i = 0; i < cartsSmartWatchesForthModel.length; i++){
    cartsSmartWatchesForthModel[i].addEventListener('click', () => {
        cartNumbers(productsSmartWatchesForthModel[i]);
        totalCost(productsSmartWatchesForthModel[i]);
    })
}

let cartsSmartWatchesFifthModel = document.querySelectorAll('.add-to-cart-SmartWatches-FifthModel');
let productsSmartWatchesFifthModel = [
    {
        name: "Kruger Matz",
        tag: "watch29",
        price: 220,
        inCart: 0
    }
];

for(let i = 0; i < cartsSmartWatchesFifthModel.length; i++){
    cartsSmartWatchesFifthModel[i].addEventListener('click', () => {
        cartNumbers(productsSmartWatchesFifthModel[i]);
        totalCost(productsSmartWatchesFifthModel[i]);
    })
}

let cartsSmartWatchesSixthModel = document.querySelectorAll('.add-to-cart-SmartWatches-SixthModel');
let productsSmartWatchesSixthModel = [
    {
        name: "Kruger Matz Classic",
        tag: "watch31",
        price: 160,
        inCart: 0
    }
];

for(let i = 0; i < cartsSmartWatchesSixthModel.length; i++){
    cartsSmartWatchesSixthModel[i].addEventListener('click', () => {
        cartNumbers(productsSmartWatchesSixthModel[i]);
        totalCost(productsSmartWatchesSixthModel[i]);
    })
}

let cartsSmartWatchesSeventhModel = document.querySelectorAll('.add-to-cart-SmartWatches-SeventhModel');
let productsSmartWatchesSeventhModel = [
    {
        name: "Polar M Android Wear",
        tag: "watch30",
        price: 419,
        inCart: 0
    }
];

for(let i = 0; i < cartsSmartWatchesSeventhModel.length; i++){
    cartsSmartWatchesSeventhModel[i].addEventListener('click', () => {
        cartNumbers(productsSmartWatchesSeventhModel[i]);
        totalCost(productsSmartWatchesSeventhModel[i]);
    })
}

for(let i = 0; i < cartsHomePage.length; i++){
    cartsHomePage[i].addEventListener('click', () => {
        cartNumbers(productsHomePage[i]);
        totalCost(productsHomePage[i]);
    })
}

for(let i = 0; i < cartsForMen.length; i++){
    cartsForMen[i].addEventListener('click', () => {
        cartNumbers(productsForMen[i]);
        totalCost(productsForMen[i]);
    })
}

for(let i = 0; i < cartsForWomen.length; i++){
    cartsForWomen[i].addEventListener('click', () => {
        cartNumbers(productsForWomen[i]);
        totalCost(productsForWomen[i]);
    })
}

for(let i = 0; i < cartsForUnisex.length; i++){
    cartsForUnisex[i].addEventListener('click', () => {
        cartNumbers(productsUnisex[i]);
        totalCost(productsUnisex[i]);
    })
}

for(let i = 0; i < cartsForSmartWatches.length; i++){
    cartsForSmartWatches[i].addEventListener('click', () => {
        cartNumbers(productsSmartWatches[i]);
        totalCost(productsSmartWatches[i]);
    })
}

function onLoadCartNumbers(){
    let productNumber = localStorage.getItem('cartNumbers');
    if(productNumber){
        document.querySelector('.header-font span').textContent = productNumber;
    }
}

function cartNumbers(product){
    let productNumber = localStorage.getItem('cartNumbers');
    productNumber = parseInt(productNumber);
    if(productNumber){
        localStorage.setItem('cartNumbers', productNumber + 1);
        document.querySelector('.header-font span').textContent = productNumber + 1;
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.header-font span').textContent = 1;
    }
    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else{
        product.inCart = 1;
        cartItems = {
            [product.tag]:product
        }
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price)
    }
    else{
        localStorage.setItem('totalCost', product.price);
    }
}

function displayCart(){
    let cartItmes = localStorage.getItem('productsInCart');
    cartItmes = JSON.parse(cartItmes);
    let productContainer = document.querySelector('.products');
    let cartCost = localStorage.getItem('totalCost');
    if(cartItmes && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItmes).map(item => {
            productContainer.innerHTML += `
            <div id='removeTest' class='product'> 
                <img src='${item.tag}.png'>
                <span class='product-name'>${item.name}</span>
                <div class='price'>$${item.price}</div>
            <div class='quantity'>
                <span>${item.inCart}</span>
            </div>
            <div class='total'>
                $${item.inCart * item.price}
            </div>
            </div>
            `;
        });
        productContainer.innerHTML += `
            <div class='basketTotalContainer'>
                <h4 class='basketTotalTitle'>Basket Total</h4>
                <h4 class='basketTotal'>$${cartCost}</h4>
                <a href='LogIn.html' class='checkout-button-a'><input class='checkout-button' type='submit' value='Checkout'></a>
            </div>
        `
    }
}

function itemsCheck(){
let noItems = document.querySelector('.product');
    if(noItems != null){
        document.querySelector('.noItemsTxt').style.display = 'none';
    }
    else{
        document.querySelector('.noItemsTxt').style.display = 'block';
    }
}

let x = 0;
function changeBox(){
    if(x == 0){
        document.getElementById('login-box').style.display = "none";
        document.getElementById('signup-box').style.display = "block";
        x = 1;
    }
    else{
        document.getElementById('signup-box').style.display = "none";
        document.getElementById('login-box').style.display = "block"; 
        x = 0;
    }
}


onLoadCartNumbers();
displayCart();
itemsCheck();









