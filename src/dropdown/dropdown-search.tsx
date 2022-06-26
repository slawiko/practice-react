import { Component, ReactNode } from "react";

import "./dropdown-search.css";

export class DropdownSearch extends Component {
    render(): ReactNode {
        return (
            <input className="dropdown-search" type="text" placeholder="Search options"></input>
        );
    }
}
