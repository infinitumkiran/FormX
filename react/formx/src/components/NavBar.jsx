import {AppBar,Toolbar,Typography,IconButton,makeStyles} from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
<AppBar position="absolute" style={{backgroundColor: "black"}}>
  <Toolbar variant="dense">
    <NavLink to ="./" style= { {color:"white",
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }}>
      INFINITY  
    </NavLink>
    <NavLink to ="all" style= { {color:"white",
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }}>
      AllUsers  
    </NavLink>
    <NavLink to ="add" style= { {color:"white",
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }}  >
      AddUsers  
    </NavLink>
  </Toolbar>
</AppBar>
    )
}

export default NavBar;