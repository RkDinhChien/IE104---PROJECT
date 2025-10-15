document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const primaryNav = document.getElementById("primary-navigation");
  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", function () {
      const expanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", String(!expanded));
      primaryNav.classList.toggle("show");
      this.setAttribute("aria-label", expanded ? "Mở menu" : "Đóng menu");
    });
  }
  // Newsletter form (main)
  const form = document.getElementById("newsletter-form");
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (!input.checkValidity()) {
        input.reportValidity();
        return;
      }
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.innerText = "Đang gửi...";
      try {
        const res = await fetch("/api/newsletter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: input.value }),
        });
        if (!res.ok) throw new Error("network");
        btn.innerText = "Đã đăng ký";
        input.value = "";
        const msg = document.createElement("div");
        msg.className = "small-muted";
        msg.innerText = "Cảm ơn! Bạn đã đăng ký nhận tin.";
        form.parentElement.appendChild(msg);
        setTimeout(() => msg.remove(), 3500);
      } catch (err) {
        alert("Xin lỗi, không thể gửi. Thử lại sau.");
      } finally {
        btn.disabled = false;
      }
    });
  }

  // Footer newsletter
  const fform = document.getElementById("footer-newsletter");
  if (fform) {
    fform.addEventListener("submit", async function (e) {
      e.preventDefault();
      const input = fform.querySelector('input[type="email"]');
      if (!input.checkValidity()) {
        input.reportValidity();
        return;
      }
      const btn = fform.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.innerText = "Đang gửi...";
      try {
        const res = await fetch("/api/newsletter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: input.value }),
        });
        if (!res.ok) throw new Error("network");
        btn.innerText = "Đã gửi";
        input.value = "";
        const msg = document.createElement("div");
        msg.className = "small-muted";
        msg.innerText = "Cảm ơn!";
        fform.appendChild(msg);
        setTimeout(() => msg.remove(), 3000);
      } catch (err) {
        alert("Lỗi gửi.");
      } finally {
        btn.disabled = false;
      }
    });
  }
});
