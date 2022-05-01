import {  render } from "react-dom"
import h from "components/htm_create_element"

import Example from "components/example"


render(
    h`
        <${Example}/>
    `,
    document.getElementById("root")
)