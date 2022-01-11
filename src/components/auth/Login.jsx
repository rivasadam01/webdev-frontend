const Login=()=>{
    return <>
    <h2>Welcome back</h2>
    <div>
        <div id='form-card'>
            <form action="">
                <div id='form-input'>
                    <input type="text" 
                        name="username" 
                        id="username"
                        placeholder="Username"
                        required 
                        />
                </div>
                <div id='form-input'>
                    <input type="password" 
                        name="password" 
                        id="username"
                        placeholder="Password" 
                        required
                        />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
    </>
}

export default Login;