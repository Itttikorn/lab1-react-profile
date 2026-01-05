import { useState } from 'react';

function ProfileCard({ name, role, bio, profilePicture }) {
    const [likes, setLikes] = useState(0);
    const [skills, setSkills] = useState(['React', 'JavaScript']);
    const [newSkill, setNewSkill] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const addSkill = () => {
        if (newSkill.trim() !== '') {
            setSkills([...skills, newSkill]);
            setNewSkill('');
        }
    };

    const filteredSkills = skills.filter(skill =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const deleteSkill = (indexToDelete) => {
        const updatedSkills = skills.filter((_, index) => index !== indexToDelete);
        setSkills(updatedSkills);
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', maxWidth: '300px' }}>
            {profilePicture && <img src={profilePicture} alt={`${name}'s profile`} style={{ maxWidth: '200px', borderRadius: '10px' }} />}
            <h2>{name}</h2>
            <p><strong>Role:</strong> {role}</p>
            <p>{bio}</p>

            <div style={{ marginTop: '30px' }}>
                <h2>Skills</h2>
                <input type="text" value={searchTerm} placeholder='Search skills' onChange={(e) => setSearchTerm(e.target.value)}></input>
                <ul>
                    {filteredSkills.map((skill, index) => (
                        <li key={index} style={{color: document.body.classList.contains('dark') ? (skill.includes('React') ? 'cyan' : 'white') : skill.includes('React') ? 'blue' : 'black'}}>
                            {skill}
                            <span className="material-symbols-outlined" onClick={() => deleteSkill(index)} style={{ cursor: 'pointer', marginLeft: '10px' }}>
                                delete
                            </span>
                            </li>
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