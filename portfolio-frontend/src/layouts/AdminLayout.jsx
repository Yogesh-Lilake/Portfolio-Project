import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <aside style={{ width: "200px", background: "#111", color: "#fff", padding: "20px" }}>
        <h3>Admin Panel</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Dashboard</li>
          <li>Projects</li>
          <li>Messages</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>

    </div>
  );
}