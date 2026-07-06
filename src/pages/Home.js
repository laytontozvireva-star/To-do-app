


function Home() {
  return (
    <div className="App">
      

      <main className="hero">
        <section className="hero-content">
          <h1>
            Organize Your Day,
            <br />
            One Task at a Time
          </h1>

          <p>
            Stay productive by planning and tracking your daily tasks.
          </p>

          <button className="btn">Get Started</button>
        </section>

        <section className="features">
          <div className="feature-card">
            <h4>📋 Manage Tasks</h4>
            <p>
              Add, edit, and organize
              <br />
              your tasks with ease.
            </p>
          </div>

          <hr />

          <div className="feature-card">
            <h4>📈 Track Progress</h4>
            <p>
              Monitor your progress
              <br />
              and achieve your goals.
            </p>
          </div>

          <hr />

          <div className="feature-card">
            <h4>✅ Stay Focused</h4>
            <p>
              Stay motivated and complete
              <br />
              your tasks on time.
            </p>
          </div>
        </section>

        <h3 className="footer-text">
          Your Productivity Starts Here
        </h3>
      </main>
    </div>
  );
}

export default Home;