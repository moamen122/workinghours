import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login(props) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const userNameRef = useRef();
    const navigate = useNavigate()


    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        userNameRef.current.focus();
    })
    const handleLogin = (e) => {
        //
        signIn(e)
        // isSignIn(e)
        // navigate("/dashboard")
    }
    function signIn(e) {
        e.preventDefault();

        let request = {
            username: document.getElementById('account').value,
            password: document.getElementById('accountPassword').value
        }
        axios.post('http://localhost:3001/login', request)
            .then(resp => {
                if (resp.data.message == "successful login!") {
                    alert(resp.data.message)
                    navigate('/dashboard');
                } else {
                    alert(resp.data.message)

                }
            })
            .catch(err => {
                console.log(err);
            })

    }



    return (
        <form onSubmit={handleLogin}>
            Login <br /><br />
            <div>
                Username <br />
                <input ref={userNameRef} type="text" id="account" value={userName} onChange={e => setUserName(e.target.value)} />
            </div>
            <div>
                Password <br />
                <input type="password" id="accountPassword" value={password} onChange={e => setPassword(e.target.value)} />
            </div> <br />
            {error && <div className="error" >{error}</div>}
            <input type="submit" value={loading ? "loading..." : "login"} disabled={loading} onSubmit={handleLogin} />

        </form>

    )

}
// function isSignIn(e) {
//     e.preventDefault();

//     axios.post('http://localhost:3001/login')
//         .then(resp => {
//             alert(resp.data.message);
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }


export default Login;