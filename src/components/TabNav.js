import React from "react";
import {Tab, Menu, Icon, Divider} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {
    return (
        <div class="ui menu">
            <NavLink exact activeClassName="active" to={'/'}>
                <a class="item">
                    <Icon name='home' size='large' color='black'/>
                    Homepage
                </a>
            </NavLink>
            <NavLink exact activeClassName="active" to={'/characters'}>
                <a class="item">
                    <Icon name='users' size='large' color='black'/>
                    Characters
                </a>
            </NavLink>
            <NavLink exact activeClassName="active" to={'/locations'}>
                <a class="item">
                    <Icon name='map' size='large' color='black'/>
                    Location
                </a>
            </NavLink>
            <NavLink exact activeClassName="active" to={'/episodes'}>
                <a class="item">
                    <Icon name='video camera' size='large' color='black'/>
                    Episode
                </a>
            </NavLink>

            <div class="right menu">
                <div class="item">
                    <div class="ui icon input">
                        <input type="text" placeholder="Search..."/>
                        <i aria-hidden="true" class="search icon"></i>
                    </div>
                </div>
            </div>
        </div>
    )
};
