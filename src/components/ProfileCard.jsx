import { useState } from 'react';

function ProfileCard({ name, role, bio, profilePicture }) {
    const [likes, setLikes] = useState(0);

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', maxWidth: '300px' }}>
            {profilePicture && <img src={profilePicture} alt={`${name}'s profile`} style={{ maxWidth: '200px', borderRadius: '10px' }} />}
            <h2>{name}</h2>
            <p><strong>Role:</strong> {role}</p>
            <p>{bio}</p>

            <button onClick={() => setLikes(likes + 1)}>
                🩷 Like: {likes}
            </button>
        </div>
    );
}

export default ProfileCard;