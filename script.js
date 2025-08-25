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
        console.log("vip");
        break;
    default:
        console.log("Tariff not found");
}
