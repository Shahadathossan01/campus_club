import { Box, Button, Grid } from '@mui/material';
import CardItem from '../CardItem/CardItem';
import { Link } from 'react-router-dom';
const ClubDetailLayout = ({item}) => {
    return (
        <div style={{border:'1px solid gray',marginBottom:'50px',padding:'30px'}}>
            <Box sx={{ flexGrow: 1}}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <CardItem precident={true} item={item}></CardItem>
                    </Grid>
                    <Grid item xs={6}>
                        <img style={{width:'80%',height:'60%',margin:'auto'}} src={`http://localhost:1337${item.attributes.banner.data.attributes.url}`} alt="" />
                    </Grid>
                    <Grid item xs>
                        <CardItem item={item}></CardItem>
                    </Grid>
                </Grid>
            </Box>
            <h1>{item.attributes.title}</h1>
            <p>{item.attributes.description}</p>
            <div>
            <div>
                <h1>participants: </h1>
                <div>
                    <Button>Name:topu||Dept.cse</Button>
                    <Button>Name:topu||Dept.cse</Button>
                    <Button>Name:topu||Dept.cse</Button>
                    <Button>Name:topu||Dept.cse</Button>
                    <Button>Name:topu||Dept.cse</Button>
                    <Button>Name:topu||Dept.cse</Button>
                    <Button>Name:topu||Dept.cse</Button>
                    <Button>Name:topu||Dept.cse</Button>
                    <Button>Name:topu||Dept.cse</Button>
                    <Button>Name:topu||Dept.cse</Button>
                    <Button>Name:topu||Dept.cse</Button>
                </div>
            </div>
                <div style={{textAlign:'center',marginTop:'30px'}}>
                <Link to={`/participant_form/${item.id}`}><Button variant="contained" color="success">
                    Apply to participants
                </Button></Link>
                </div>
            </div>
        </div>
    );
};

export default ClubDetailLayout;