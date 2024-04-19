import { useEffect } from 'react';
import '../styles.css';

function Home(props) {
    const theme = props.theme;
    
    return (
        <div className="content">
            <h1>Home</h1>
            <p>Home content...</p>
        </div>
    );
}

export default Home;
