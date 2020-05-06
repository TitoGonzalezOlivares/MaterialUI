import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';

const FaceIcon = (props) => {
    return(
        <a href={'https://www.facebook.com/CorsairLATAM/'} target={'blank'}>
        <FacebookIcon className={props.className}/>
        </a>
)
}
export default FaceIcon;