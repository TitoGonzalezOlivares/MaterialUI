import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';


const InstaIcon = (props) => {
    return(
        <a href={'https://www.instagram.com/corsairlatam/'} target={'blank'}>
            <InstaIcon className={props.className}/>
        </a>
    )
}
export default InstaIcon;