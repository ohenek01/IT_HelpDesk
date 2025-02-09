import "../styling/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Hello .....</h1>
      <p style={{marginBottom:50}}>Here's your help desk overview.</p>

      <div className="dashboard-cards">
        <div className="dashboard-activity">
          <h3>Ticket Summary</h3>
          {/*Dummy Text */}
          <p>Total Tickets: 3</p>
          <p>In progress: </p>
          <p>Resolved</p>
          <p>High Priority: 1</p>
        </div>
        </div>

      <div className="dashboard-activity">
        <h3>Recent Activity</h3>
        {/*Dummy Text */}
        <p>1. <b>Welcome to Help Desk.</b></p>
        <p>2. <b>Work together with your team.</b></p>
        <p>3. <b>Learn how to solve tickets effectively.</b></p>
      </div>

      <h2 style={{marginTop:50}}>Quick Actions:</h2>
      <button style={{background:'black'}}>New Ticket</button>
    </div>
  );
};

export default Dashboard;
