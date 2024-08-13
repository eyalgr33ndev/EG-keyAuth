import React, { useState, useEffect } from 'react';
import { getKeys, addKey, removeKey } from '../services/keyAuthService';

const Main: React.FC = () => {
    const [keys, setKeys] = useState<any[]>([]);
    const [key, setKey] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        const fetchKeys = async () => {
            const { data } = await getKeys();
            setKeys(data);
        };
        fetchKeys();
    }, []);

    const AddKey = async () => {
        await addKey(key, user);
        setKeys([...keys, { key, user }]);
        setKey('');
        setUser('');
    };

    const RemoveKey = async (key: string) => {
        await removeKey(key);
        setKeys(keys.filter(k => k.key !== key));
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h3>Add a new key</h3>
            <input
                type="text"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder='Key'
                style={{
                    padding: '10px',
                    margin: '10px',
                    border: '1px solid #CCCCCC',
                    borderRadius: '5px',
                    width: '200px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                    outline: 'none'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#007BFF'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#CCCCCC'}
            />
            <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder='User'
                style={{
                    padding: '10px',
                    margin: '10px',
                    border: '1px solid #CCCCCC',
                    borderRadius: '5px',
                    width: '200px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                    outline: 'none'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#007BFF'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#CCCCCC'}
            />
            <button
                onClick={AddKey}
                style={{
                    backgroundColor: '#007BFF',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '10px 20px',
                    margin: '10px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s, transform 0.2s'
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007BFF')}
                onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.98)')}
                onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
                Add Key
            </button>
            <h3>Keys</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {keys.map((keyObj, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        {keyObj.key} - {keyObj.user}
                        <button
                            onClick={() => RemoveKey(keyObj.key)}
                            style={{
                                backgroundColor: '#DC3545',
                                color: '#FFFFFF',
                                border: 'none',
                                padding: '10px 20px',
                                marginLeft: '10px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s, transform 0.2s'
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#c82333')}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#DC3545')}
                            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.98)')}
                            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Main;
