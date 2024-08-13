import React from 'react';

const Hero: React.FC = () => (
    <div style={{
        padding: '50px',
        textAlign: 'center',
        backgroundColor: '#FFF',
        color: '#000'
    }}>
        <style>
            {`
            @keyframes typing {
                0%, 100% { width: 0; }
                50% { width: 100%; }
            }
            .typing {
                display: inline-block;
                white-space: nowrap;
                overflow: hidden;
                animation: typing 6s steps(30, end) infinite;
            }
            `}
        </style>
        <h1 style={{
            fontSize: '4em',
            color: '#007BFF',
            margin: 0,
            display: 'inline-block',
            position: 'relative',
            padding: 0
        }} className="typing">
            EG.Keys
        </h1>
    </div>
);

export default Hero;
