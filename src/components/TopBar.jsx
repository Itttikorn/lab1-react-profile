import { useState, useEffect } from 'react';

function TopBar() {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme'));

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        localStorage.setItem('theme', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div style={{ width: '100%', padding: '10px 20px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <span className="material-symbols-outlined" style={{ cursor: 'pointer' }} onClick={toggleDarkMode}>
                brightness_4
            </span>
        </div>
    )
}

export default TopBar;