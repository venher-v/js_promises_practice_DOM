var e=!1,t=!1,n=new Promise(function(e,t){var n=setTimeout(function(){t(Error("First promise was rejected"))},3e3);document.addEventListener("mouseup",function(t){0===t.button&&(e("First promise was resolved"),clearTimeout(n))})}),o=new Promise(function(e){document.addEventListener("mouseup",function(t){(0===t.button||2===t.button)&&e("Second promise was resolved")})}),s=new Promise(function(n){document.addEventListener("mouseup",function(o){0===o.button&&(e=!0),2===o.button&&(t=!0),e&&t&&n("Third promise was resolved")})});function u(e,t){var n=document.createElement("div");n.classList.add(e),n.setAttribute("data-qa","notification"),n.textContent=t,document.body.append(n)}n.then(function(e){u("success",e)}).catch(function(e){u("error",e.message)}),o.then(function(e){u("success",e)}),s.then(function(e){u("success",e)});
//# sourceMappingURL=index.b91dd68a.js.map