import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    startBackground : {
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        backgroundColor: "#7F56DA",
        margin:"0px",
        padding:"0px",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
}))