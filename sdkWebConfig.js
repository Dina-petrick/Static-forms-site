document.addEventListener("DOMContentLoaded", () => {
	console.log("Resulconfig Loaded SuccessFully",window.location.pathname)
	let ele = document.querySelectorAll("script[src$=sdk]");
	if (ele.length) {
	  ele.forEach((item) => {
		item.remove();
	  });
	}
	let script = document.createElement("script");
	script.setAttribute("defer", "defer");
	script.setAttribute("fcm_service_path", "firebase-messaging-sw.js?v=1.2");
	script.src =  "https://sdk.resu.team/handlers/2f533ec9fd6348ae874877a03f155409.sdk";
	// script.setAttribute("resulconfig","resulconfig.json");
	document.head.appendChild(script);
  });
