import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { githubStatusServiceInstance } from "../../services/http/github-status/GithubStatusService";
import { PageStatus } from "../../services/http/github-status/models/incidents";

function App() {
  const [status, setStatus] = useState<PageStatus | undefined>(undefined);
  useEffect(() => {
    async function getStatus() {
      const status = await githubStatusServiceInstance.getStatus();
      setStatus(status);
    }
    getStatus();
  }, [setStatus]);

  return (
    <section>
      {status ? (
        <>
          <img src="/images/vite.svg" alt="Vite Logo"></img>
          <h2>Current Status</h2>
          <div className={styles.statusContainer}>
            <div className={styles.field}>
              <label>Indicator:</label>
              <span>{status?.status?.indicator ?? "Unknown"}</span>
            </div>
            <div className={styles.field}>
              <label>Status:</label>
              <span>{status?.status?.description ?? "Unknown"}</span>
            </div>
          </div>
        </>
      ) : (
        <span>Loading...</span>
      )}
    </section>
  );
}

export default App;
