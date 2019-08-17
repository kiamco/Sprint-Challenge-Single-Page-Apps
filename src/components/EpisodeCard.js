import React from "react";
import {Button, Icon, Label} from "semantic-ui-react";

export default function LocationCard({name, episode, airDate, url}) {
    return (
        <div class="ui card">
            <div class="content">
                <div class="header">{name}</div>
                <div class="meta">
                    <p>{episode}
                        - {airDate}</p>
                </div>
                <div class="description">
                    <Button as='div' color='red' labelPosition='right'>
                        <Button>
                            <Icon name='heart' color='red'/>
                            Like
                        </Button>
                        <Label as='a' basic pointing='left'>
                            0
                        </Label>
                    </Button>
                </div>
            </div>
        </div>
    )
}