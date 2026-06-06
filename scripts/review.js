const count = Number(localStorage.getItem("reviewCount")) || 0;
localStorage.setItem("reviewCount", count + 1);

console.log("Review Count:", count);
