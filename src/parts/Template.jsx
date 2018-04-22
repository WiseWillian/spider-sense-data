/* React imports */
import React, { Component } from 'react';
/* Material imports */
import AppBar from 'material-ui/AppBar';
import header from '../img/Header.png';

class Template extends Component
{
    render()
    {
        return(
            <div>
                <AppBar
                    title={<img src={header} height={44} style={{marginTop:10}}/>}
                    onLeftIconButtonClick={this.handleToggle}
                    showMenuIconButton={false}
                    style={{backgroundColor:"#040B3B"}}
                />
            </div>
        );
    }
}

export default Template;