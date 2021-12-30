import React, {Component } from 'react'

interface AppProps {
    socket: any
}

interface AppState {
}

export class App extends Component<AppProps, AppState> {

    constructor(props: AppProps){
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
        // Try to reconnect
        this.props.socket.on("connect", () => {
            // TODO: implement
        })
    }

    render(){
        return <app></app>
    }
}