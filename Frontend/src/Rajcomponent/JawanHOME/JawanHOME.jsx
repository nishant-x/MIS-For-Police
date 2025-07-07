import React, { useState, useEffect } from 'react';
// import '';
// import Navbar from './components/Navbar';
import UserProfile from './components/UserProfile';
import AchievementSection from './components/AchievementSection';
import CaseSection from './components/CaseSection';
import ActiveStatus from './components/ActiveStatus';
import OrderPanel from './components/OrderPanel';
import LeaveApplication from './components/LeaveApplication';
// import Footer from './components/Footer';

function App() {
    const [userDetails, setUserDetails] = useState({});
    const [status, setStatus] = useState('');
    const [achievements, setAchievements] = useState([]);
    const [cases, setCases] = useState({ total: 0, completed: 0, incomplete: 0 });

    useEffect(() => {
        // Fetch user data from an API or a database
        // Placeholder data for now
        setUserDetails({
            jawaan_name: 'Rajkumar Lodhi',
            jawaan_id: '12345',
            jawaan_reg: '54321',
            jawaan_post: 'Police Officer',
            jawaan_img: 'path_to_image',
        });

        setStatus('active'); // Example status

        // Example of achievements data
        setAchievements([
            { title: 'Best Jawan', date: '2024-04-12', file: 'cert1.pdf' },
            { title: 'Hero of the Month', date: '2024-03-20', file: 'cert2.pdf' },
        ]);

        // Example of case data
        setCases({ total: 10, completed: 7, incomplete: 3 });
    }, []);

    return (
        <div className="App">
            <Navbar />
            <div className="main_container">
                <UserProfile userDetails={userDetails} />
                <AchievementSection achievements={achievements} />
                <CaseSection cases={cases} />
                <ActiveStatus status={status} setStatus={setStatus} />
                <OrderPanel />
                <LeaveApplication />
            </div>
            <Footer />
        </div>
    );
}

export default App;
