import React from "react";
import { Link } from "react-router-dom";
import "../css/DashboardPage.css";

export default function DashboardPage() {
  const librarian = { name: "Sarah Johnson", role: "Librarian" };

  return (
    <>
      <header>
        <div className="container header-content">
          <div className="logo">Library Management System</div>
          <div className="user-info">
            <span className="user-role">{librarian.role}</span>
            <span>{librarian.name}</span>
            <Link to="/profile" className="btn">Profile</Link>
            <Link to="/login" className="btn">Sign Out</Link>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <section className="welcome-section">
            <h1>Welcome Back, {librarian.name}!</h1>
            <p>Here's your library overview for today, August 3rd, 2025</p>
          </section>

          <section className="alerts-section">
            <div className="alert alert-danger">
              <div className="alert-icon">🚨</div>
              <div><strong>Urgent:</strong> 3 books are overdue and need attention.</div>
            </div>
            <div className="alert alert-warning">
              <div className="alert-icon">⚠️</div>
              <div><strong>Notice:</strong> 5 members have unpaid fees due today.</div>
            </div>
          </section>

          <section className="stats-grid">
            {/* Use StatCard component here if modularizing */}
            <div className="stat-card">
              <div className="stat-number">247</div>
              <div className="stat-label">Total Books</div>
              <div className="stat-trend">+12 added this month</div>
            </div>
            {/* Repeat for others... */}
          </section>

          <section className="dashboard-grid">
            <div className="main-panel">
              <div className="panel">
                <h2>Quick Actions</h2>
                <div className="quick-actions">
                  <Link to="/issue-book" className="action-card">
                    <h3>Issue Book</h3><p>Issue book to member</p>
                  </Link>
                  <Link to="/return-book" className="action-card">
                    <h3>Return Book</h3><p>Process return</p>
                  </Link>
                  <Link to="/collect-payment" className="action-card">
                    <h3>Collect Payment</h3><p>Monthly fees & fines</p>
                  </Link>
                  <Link to="/add-book" className="action-card">
                    <h3>Add Book</h3><p>Register new title</p>
                  </Link>
                  <Link to="/add-member" className="action-card">
                    <h3>Add Member</h3><p>Register user</p>
                  </Link>
                  <Link to="/overdue-books" className="action-card">
                    <h3>Overdue Books</h3><p>Late returns</p>
                  </Link>
                </div>
              </div>

              <div className="panel">
                <h2>Recent Activity</h2>
                <ul className="recent-activity">
                  <li className="activity-item"><span>10:45 AM</span> Collected ₹500 from John Doe</li>
                  {/* ... */}
                </ul>
              </div>
            </div>

            <aside className="sidebar-panel">
              <div className="panel">
                <h2>Pending Tasks</h2>
                <ul className="pending-tasks">
                  <li className="task-item"><span>Collect fines</span><span className="priority-high">High</span></li>
                  {/* ... */}
                </ul>
              </div>

              <div className="panel">
                <h2>Quick Stats</h2>
                <div className="quick-stats">
                  <div><span>Books Due Today:</span><strong>7</strong></div>
                  <div><span>Payment Due:</span><strong className="warn">5 members</strong></div>
                  <div><span>Total Fines:</span><strong className="danger">₹85</strong></div>
                  <div><span>Available Books:</span><strong className="success">158</strong></div>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </main>
    </>
  );
}
