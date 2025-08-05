import React from 'react'
import { Link } from 'react-router-dom'
import '../css/HomePage.css'

function HomePage() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">Library Management System</div>
            <div className="nav-buttons">
              <Link to="/login" className="btn">Sign In</Link>
              <Link to="/register" className="btn btn-primary">Join Library</Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Welcome to Our Library</h1>
            <p>
              A comprehensive digital solution for managing library operations,
              book circulation, and member services with ease and efficiency.
            </p>
            <Link to="/login" className="btn btn-primary">Get Started</Link>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h2 className="features-title">System Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>For Members</h3>
                <p>
                  Search and discover books, check availability, manage borrowed
                  items, and track your reading history.
                </p>
              </div>
              <div className="feature-card">
                <h3>For Librarians</h3>
                <p>
                  Complete library operations including book management, member
                  services, payment collection, and circulation control.
                </p>
              </div>
              <div className="feature-card">
                <h3>For Owners</h3>
                <p>
                  Business oversight with financial reports, asset tracking, and
                  comprehensive analytics for informed decision making.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <h2>Ready to Get Started?</h2>
            <p>
              Join our library community and experience seamless book management
            </p>
            <Link to="/register" className="btn">Create Account</Link>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2025 Library Management System. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default HomePage
