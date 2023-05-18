import React, { useEffect, useState } from 'react';

function TrelloIntegration() {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        // Fetch boards from Trello API
        fetch('https://api.trello.com/1/members/me/boards?key=YOUR_API_KEY&token=YOUR_TOKEN')
            .then(response => response.json())
            .then(data => {
                setBoards(data);
            })
            .catch(error => {
                console.error('Error fetching boards:', error);
            });
    }, []);

    return (
        <div>
            <h1>Trello Integration</h1>
            <ul>
                {boards.map(board => (
                    <li key={board.id}>
                        <h3>{board.name}</h3>
                        <p>{board.desc}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TrelloIntegration;
