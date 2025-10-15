import React, { useState } from "react";
import axios from "axios";

function Logo() {
  return (
    <div className="logo" aria-hidden>
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="6" fill="#00BCD4" />
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill="#fff"
        >
          M*
        </text>
      </svg>
    </div>
  );
}

export default function App() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    try {
      setStatus("loading");
      await axios.post("/api/newsletter", { email });
      setStatus("ok");
      setEmail("");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="app-root">
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav aria-label="Primary navigation" className="main-nav">
            <a href="#">Trang chủ</a>
            <a href="#features">Tính năng</a>
            <a href="#about">Về chúng tôi</a>
            <a href="#stats">Thống kê</a>
          </nav>
          <div className="actions">
            <button className="btn btn-outline">Đăng ký</button>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">Kết nối tài năng</p>
            <h1>Kết nối tài năng IT với cơ hội nghề nghiệp</h1>
            <p className="lead">
              Moon* giúp sinh viên IT và doanh nghiệp gặp gỡ dễ dàng — nơi tài
              năng được kết nối với cơ hội.
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary">Khám phá</button>
              <button className="btn btn-outline">Đăng ký</button>
            </div>
          </div>
          <div className="hero-media">
            <img src="/public/hero.jpg" alt="Illustration" />
          </div>
        </section>

        <section id="features" className="container feature-split">
          <div className="feature-media">
            <img src="/public/feature-1.jpg" alt="Feature" />
          </div>
          <div className="feature-copy">
            <p className="eyebrow">Nền tảng</p>
            <h2>Tính năng nổi bật của chúng tôi</h2>
            <p>
              Chúng tôi cung cấp công cụ để kết nối sinh viên IT và doanh nghiệp
              chuyên nghiệp và thuận tiện.
            </p>
            <div className="feature-actions">
              <button className="btn btn-outline">Tìm hiểu thêm</button>
            </div>
          </div>
        </section>

        <section className="cards container">
          <h3 className="section-title">Những tính năng độc đáo</h3>
          <div className="card-grid">
            <article className="card">
              <img src="/public/card-1.jpg" alt="tiemn" />
              <div className="card-body">
                <h4>Tìm kiếm nhanh</h4>
                <p>Kết nối nhanh giữa sinh viên và nhà tuyển dụng.</p>
              </div>
            </article>
            <article className="card">
              <img src="/public/card-2.jpg" alt="gợi ý" />
              <div className="card-body">
                <h4>Gợi ý phù hợp</h4>
                <p>AI đề xuất việc làm phù hợp nhất cho bạn.</p>
              </div>
            </article>
            <article className="card">
              <img src="/public/card-3.jpg" alt="an toàn" />
              <div className="card-body">
                <h4>An toàn & minh bạch</h4>
                <p>Bảo vệ thông tin cá nhân của người dùng.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="newsletter container">
          <div className="newsletter-inner">
            <div>
              <h3>Tham gia ngay</h3>
              <p>
                Đăng ký để nhận thông tin mới nhất và cơ hội việc làm hấp dẫn.
              </p>
              <form
                onSubmit={submit}
                className="newsletter-form"
                aria-label="Form đăng ký nhận tin"
              >
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email"
                />
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={status === "loading"}
                >
                  Gửi
                </button>
              </form>
              {status === "ok" && (
                <p className="small-muted">Cảm ơn! Đã đăng ký.</p>
              )}
              {status === "error" && (
                <p className="small-muted">Có lỗi xảy ra. Thử lại sau.</p>
              )}
            </div>
            <div className="newsletter-media">
              <img src="/public/newsletter.jpg" alt="newsletter" />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" role="contentinfo">
        <div className="container footer-inner">
          <div>© 2025 Moon*. Bản quyền đã được bảo hộ.</div>
          <div className="footer-links">
            <a href="#">Chính sách</a>
            <a href="#">Liên hệ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
