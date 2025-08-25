let role = "admin";
let subscription = "free";
let productStatus = "available";

if (role === "admin") {
    console.log("Access granted");
} else if (role === "user") {
    console.log("Access restricted");
} else if (role === "guest") {
    console.log("Only view");
} else {
    console.log("unknown user");  
  }


switch (subscription) {
    case "free":
        console.log("minimal functionality");
        break;
    case "pro":
        console.log("all access ");
        break;
    case "enterprise":
        console.log("vip-support");
        break;
    default:
        console.log("Tariff not found");
}

if (productStatus === "available" && (subscription === "pro" || subscription === "enterprise")) {
    console.log("product is available");
} else if (productStatus === "sale" && (subscription === "user" || subscription === "guest")) {
    console.log("product is unavailable");
}else if (productStatus === "out-of-stock");
console.log("Good is not available");

