import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../../resources/resources/images/icons/ticket.png';
const MyButton = (props) => {
    return (
        <Button 
        href="http://google.com"
        variant="contained"
        size="medium"
        style = {{
            background:'red',
            color:'white'
        }}
        >
        <img 
        src={TicketIcon}
        className="iconImage"
        alt="icon_button"
        />
        
             {props.text}
        
        </Button>
    );
};

export default MyButton;