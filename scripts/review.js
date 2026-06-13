const count = Number(localStorage.getItem("reviewCount")) || 0;
localStorage.setItem("reviewCount", count + 1);

document.getElementById("reviewCount").innerHTML = `${count} Reviews Submitted`;