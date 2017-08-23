import React from 'react';

import TitleBar from './../ui/TitleBar';
import AddPlayer from './../ui/AddPlayer';
import PlayerList from './../ui/PlayerList';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <TitleBar title={this.props.title} subtitle="Created by Nantapol Kerdsom"/>
                <div className="wrapper">
                    <PlayerList players={this.props.players}/>
                    <AddPlayer score={0}/>
                </div>
            </div>
        );
    }
};

App.propTypes = {
    title: React.PropTypes.string.isRequired,
    players: React.PropTypes.array.isRequired
};