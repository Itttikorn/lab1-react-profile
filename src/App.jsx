import ProfileCard from './components/ProfileCard.jsx'

function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginTop: '50px' }}>
      <h1>My Team Portfolio</h1>

      <ProfileCard
        name="อิทธิกร พรชัยพิมบพันธ์"
        role="Student @ CEDT"
        bio="a"
      />

      <ProfileCard
        name="John Doe"
        role="Guest Developer"
        bio="I love coding and learning new things."
      />
    </div>
  );
}

export default App
