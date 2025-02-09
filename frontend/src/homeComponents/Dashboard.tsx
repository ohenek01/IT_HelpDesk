import "../styling/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Users</h3>
        </div>
        <div className="card">
          <h3>Active Tickets</h3>
         
        </div>
        <div className="card">
          <h3>Live Chats</h3>
          
        </div>
      </div>
      <div className="dashboard-activity">
        <h3>Recent Activity</h3>
        
      </div>
    </div>
  );
};

export default Dashboard;
