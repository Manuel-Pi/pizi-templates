
import "./main.less"
import * as React from "react";
import * as ReactDOM from "react-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { App } from "./components/App/App"
import {} from '@fortawesome/free-solid-svg-icons'

// Add custom icon to Font Awesome
library.add()

declare global {
        interface Window { initChat: any, PiziChat: any}
        const io: any
}

ReactDOM.render(<App socket={io('/pizi-server')}/>, document.getElementsByTagName("app")[0])