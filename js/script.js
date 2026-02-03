document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio đã load xong! Sẵn sàng phục vụ bro.");

  alert("Chào mừng bạn đến với portfolio thật trên Internet của mình!");

  const currentPage = window.location.pathname.split("/").pop();
  console.log("Mày đang ở trang: " + (currentPage || "index.html"));
});
