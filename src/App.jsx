import { useState, useEffect } from 'react'
import ProfileCard from './components/ProfileCard.jsx'

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [githubData, setGithubData] = useState(null);
  const username = "Itttikorn";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => {
        if (!res.ok) {
          return res.json().then(errData => {
            const message = errData && errData.message ? errData.message : `Request failed with status ${res.status}`;
            throw new Error(message);
          });
        }
        return res.json();
      })
      .then(data => {
        setGithubData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginTop: '50px', textAlign: 'center' }}>
      <h1>My First React App</h1>

      {loading ? (
        <p>Loading data from GitHub...</p>
      ) : error ? (
        <p>Error loading data: {error.message}</p>
      ) : (
        <ProfileCard
          name={githubData.name || githubData.login}
          role="GitHub User"
          bio={githubData.bio || "No bio available"}
          profilePicture={githubData.avatar_url}
        />
      )}
    </div>
  );
}

export default App
