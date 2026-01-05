import { useState } from 'react';

function ProfileCard({ name, role, bio, profilePicture }) {
    const [likes, setLikes] = useState(0);
    const [skills, setSkills] = useState(['React', 'JavaScript']);
    const [newSkill, setNewSkill] = useState('');

    const addSkill = () => {
        if (newSkill.trim() !== '') {
            setSkills([...skills, newSkill]);
            setNewSkill('');
        }
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', maxWidth: '300px' }}>
            {profilePicture && <img src={profilePicture} alt={`${name}'s profile`} style={{ maxWidth: '200px', borderRadius: '10px' }} />}
            <h2>{name}</h2>
            <p><strong>Role:</strong> {role}</p>
            <p>{bio}</p>

            <div style={{ marginTop: '30px' }}>
                <h2>Skills</h2>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a skill"
                />
                <button onClick={addSkill}>Add</button>
            </div>

            <button onClick={() => setLikes(likes + 1)}>
                🩷 Like: {likes}
            </button>
        </div>
    );
}

export default ProfileCard;