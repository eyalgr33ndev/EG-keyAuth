import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{
            padding: '10px',
            backgroundColor: '#FFFFFF',
            color: '#000000',
            textAlign: 'center',
            borderTop: '2px solid #CCCCCC',
            position: 'fixed',
            bottom: '0',
            width: '100%',
            boxSizing: 'border-box'
        }}>
            <p style={{ margin: 0 }}>
                Created by 
                <a
                    href="https://github.com/eyalgr33ndev"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: '#007BFF',
                        textDecoration: 'none',
                        marginLeft: '5px',
                        fontWeight: 'bold'
                    }}
                >
                    eyalgreen
                </a>
            </p>
        </footer>
    );
}

export default Footer;
