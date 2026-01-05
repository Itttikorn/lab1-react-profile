import { useState, useEffect } from 'react'
import ProfileCard from './components/ProfileCard.jsx'

function App() {
  const [githubData, setGithubData] = useState(null);
    const username = "Itttikorn";

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => {
            setGithubData(data);
        })
        .catch(err => console.error(err));
    }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginTop: '50px', textAlign: 'center' }}>
      <h1>My First React App</h1>

      {githubData ? (
        <ProfileCard 
          name={githubData.name || githubData.login}
          role="GitHub User"
          bio={githubData.bio || "No bio available"}
          profilePicture={githubData.avatar_url}
        />
      ) : (
        <p>Loading data from GitHub...</p>
      )}
    </div>
  );
}

export default App
