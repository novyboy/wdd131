const temples = [
  {
	templeName: "Aba Nigeria",
	location: "Aba, Nigeria",
	dedicated: "2005, August, 7",
	area: 11500,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
	templeName: "Manti Utah",
	location: "Manti, Utah, United States",
	dedicated: "1888, May, 21",
	area: 74792,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
	templeName: "Payson Utah",
	location: "Payson, Utah, United States",
	dedicated: "2015, June, 7",
	area: 96630,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
	templeName: "Yigo Guam",
	location: "Yigo, Guam",
	dedicated: "2020, May, 2",
	area: 6861,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
	templeName: "Washington D.C.",
	location: "Kensington, Maryland, United States",
	dedicated: "1974, November, 19",
	area: 156558,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
	templeName: "Lima Perú",
	location: "Lima, Perú",
	dedicated: "1986, January, 10",
	area: 9600,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
	templeName: "Mexico City Mexico",
	location: "Mexico City, Mexico",
	dedicated: "1983, December, 2",
	area: 116642,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  	{
	  templeName: "Lāʻie Hawaii",
	  location: "Lāʻie, Hawaii",
	  dedicated: "1919, November, 27-30",
	  area: 42100,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-temple-775369-wallpaper.jpg"
	},
	{
	  templeName: "Tokyo Japan",
	  location: "Tokyo, Japan",
	  dedicated: "1980, October, 27-29",
	  area: 53997,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x640/tokyo_japan_temple-evening.jpeg"
	},
	{
	  templeName: "Fukuoka Japan",
	  location: "Fukuoka, Japan",
	  dedicated: "2000, June, 11",
	  area: 10700,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/400x250/fukuoka-japan-temple-lds-306863-wallpaper.jpg"
	},
];
/*<figure class="temple">
	<figcaption>
		Fukuoka Temple
		<dl class="data">
		<div>
		<dt>Area:</dt>
		<dd>10,931 sq mi (28,311 km²)</dd>
		</div>
		<div>
		<dt>Population:</dt>
		<dd>1,430,688</dd>
		</div>
		</dl>
	</figcaption>
	<img src="images/fukuoka-temple.jpg" alt="Fukuoka Temple" loading="lazy">
</figure>*/

renderTemples(temples);

document.getElementById("home").addEventListener("click", () => {
	document.getElementById("galleryTitle").textContent = "Home";
	renderTemples(temples);
});
document.getElementById("old").addEventListener("click", () => {
	document.getElementById("galleryTitle").textContent = "Old";
	const oldTemples = temples.filter((temple) => parseInt(temple.dedicated.slice(0,4)) < 1900);
	renderTemples(oldTemples);
});
document.getElementById("new").addEventListener("click", () => {
	document.getElementById("galleryTitle").textContent = "New";
	const newTemples = temples.filter((temple) => parseInt(temple.dedicated.slice(0,4)) > 2000);
	renderTemples(newTemples);
});
document.getElementById("small").addEventListener("click", () => {
	document.getElementById("galleryTitle").textContent = "Small";
	const smallTemples = temples.filter((temple) => temple.area < 10000);
	renderTemples(smallTemples);
});
document.getElementById("large").addEventListener("click", () => {
	document.getElementById("galleryTitle").textContent = "Large";
	const largeTemples = temples.filter((temple) => temple.area > 90000);
	renderTemples(largeTemples);
});

function renderTemples(temples) {
	document.getElementById("gallery").innerHTML = "";
	for (const temple of temples) {
		const figure = document.createElement("figure");
		figure.className = "temple";
		
		const figcaption = document.createElement("figcaption");
		
		const span = document.createElement("span");
		span.textContent = temple.templeName;
		figcaption.appendChild(span);
		
		const dl = document.createElement("dl");
		dl.className = "data";
		figcaption.appendChild(dl);
		
		const locationDiv = document.createElement("div");
		dl.appendChild(locationDiv);
		const dedicatedDiv = document.createElement("div");
		dl.appendChild(dedicatedDiv);
		const sizeDiv = document.createElement("div");
		dl.appendChild(sizeDiv);
		
		figure.appendChild(figcaption);
		
		const locationDt = document.createElement("dt");
		locationDt.textContent = "Location:";
		locationDiv.appendChild(locationDt);
		const dedicatedDt = document.createElement("dt"); 
		dedicatedDiv.appendChild(dedicatedDt);
		dedicatedDt.textContent = "Dedicated:";
		const sizeDt = document.createElement("dt");
		sizeDt.textContent = "Size:";
		sizeDiv.appendChild(sizeDt);
		
		const locationDd = document.createElement("dd");
		locationDd.textContent = temple.location;
		locationDiv.appendChild(locationDd);
		const dedicatedDd = document.createElement("dd"); 
		dedicatedDd.textContent = temple.dedicated;
		dedicatedDiv.appendChild(dedicatedDd);
		const sizeDd = document.createElement("dd");
		sizeDd.textContent = `${temple.area} sq ft`;
		sizeDiv.appendChild(sizeDd);
		
		const img = document.createElement("img");
		img.src = temple.imageUrl;
		img.alt = img.templeName;
		img.loading = "lazy";
		figure.appendChild(img);
		document.getElementById("gallery").appendChild(figure);
	}
};

document.getElementById("hamburger").addEventListener("click", () => {
	document.getElementById("nav").classList.toggle("open");
});