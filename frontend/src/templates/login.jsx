import React,{useState} from 'react';
import '../styles/public/login.scss';
import { setToken, loginUser } from '../hooks/hookLogin.js';

export default function LoginForm() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();

        const token = await loginUser({
            username,
            password
        });

        if (token.status === 200) {
            setToken(token);
        }
    }

    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form  onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </label>
                <label>
                    <p>Password</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}