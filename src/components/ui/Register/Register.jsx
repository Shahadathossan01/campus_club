import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div style={{width:'50%',margin:'auto',marginTop:'80px'}}>
            <h1 style={{textAlign:'center',marginBottom:'40px'}}>Signup</h1>
            <div style={{textAlign:'center'}}>
                <form action="">
                    <input style={{width:'50%',fontSize:'105%',marginBottom:'20px'}} type="email" name="email" placeholder="Enter your email"/><br />
                    <input style={{width:'50%',fontSize:'105%',marginBottom:'20px'}} type="password" name="password" placeholder="Enter your password" /><br />
                    <Button sx={{width:'50%'}} variant="contained" color="info">
                        Signup
                    </Button>
                </form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;