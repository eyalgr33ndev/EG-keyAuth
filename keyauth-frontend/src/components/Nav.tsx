import React from 'react';

const Nav: React.FC = () => {
    return (
        <nav style={{ 
            padding: '10px', 
            backgroundColor: '#FFFFFF', 
            color: '#000000', 
            textAlign: 'center', 
            borderBottom: '2px solid #CCCCCC'
        }}>
            <h2>
                <a
                    href="https://github.com/eyalgr33ndev/EG-keyAuth"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        textDecoration: 'none',
                        color: '#000000',
                        transition: 'color 0.3s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#007BFF'}
                    onMouseOut={(e) => e.currentTarget.style.color = '#000000'}
                >
                    EG.Keys
                </a>
            </h2>
        </nav>
    )
}

export default Nav;
