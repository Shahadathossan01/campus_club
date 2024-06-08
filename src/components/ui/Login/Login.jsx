import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div style={{width:'50%',margin:'auto',marginTop:'80px'}}>
            <h1 style={{textAlign:'center',marginBottom:'40px'}}>Login</h1>
            <div style={{textAlign:'center'}}>
                <form action="">
                    <input style={{width:'50%',fontSize:'105%',marginBottom:'20px'}} type="email" name="email" placeholder="Enter your email"/><br />
                    <input style={{width:'50%',fontSize:'105%',marginBottom:'20px'}} type="password" name="password" placeholder="Enter your password" /><br />
                    {/* <Button color="info">forgot password</Button><br /> */}
                    <Button sx={{width:'50%'}} variant="contained" color="info">
                        login
                    </Button>
                </form>
                <p>Do not have an account? <Link to='/register'>Signup</Link></p>
            </div>
        </div>
    );
};

export default Login;