function hideCookiesSection() {
    document.getElementById("cookiesSection").style.display = "none";
    localStorage.setItem("cookiesAccepted", "true");
  }
  
  if (localStorage.getItem("cookiesAccepted")) {
    document.getElementById("cookiesSection").style.display = "none";
  }
  
  document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
  });
  