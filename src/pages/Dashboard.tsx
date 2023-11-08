import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                <h2>Recent Activity</h2>
                <ul>
                    <li>User A completed task X</li>
                    <li>User B updated project Y</li>
                    <li>User C created new task Z</li>
                </ul>
            </div>
            <div>
                <h2>Tasks</h2>
                <ul>
                    <li>Task X</li>
                    <li>Task Y</li>
                    <li>Task Z</li>
                </ul>
            </div>
            <div>
                <h2>Projects</h2>
                <ul>
                    <li>Project A</li>
                    <li>Project B</li>
                    <li>Project C</li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
