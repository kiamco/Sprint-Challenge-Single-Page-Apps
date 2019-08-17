import React from "react";
import {Tab, Menu, Icon, Divider} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {
    return (
        <div class="ui menu">
            <a class="item">
                <NavLink exact activeClassName="active" to={'/'}>
                    <Icon name='home' size='large' color='black'/>
                    Homepage
                </NavLink>
            </a>
            <a class="item">
                <NavLink exact activeClassName="active" to={'/characters'}>
                    <Icon name='users' size='large' color='black'/>
                    Characters
                </NavLink>
            </a>
            <a class="item">
                <NavLink exact activeClassName="active" to={'/locations'}>
                    <Icon name='map' size='large' color='black'/>
                    Location
                </NavLink>
            </a>
            <a class="item">
                <NavLink exact activeClassName="active"to={'/episodes'}>
                    <Icon name='video camera' size='large' color='black'/>
                    Episode
                </NavLink>
            </a>
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
