document.querySelector(".newsletter-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = this.querySelector("input").value;
  if (email) {
    alert(`${email} 주소로 구독이 시작되었습니다! 🎉`);
    this.reset();
  }
});
