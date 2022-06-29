import { Component, ReactNode } from "react";

import "./dropdown-search.css";

export interface DropdownSearchProps {
    searchPlaceholder?: string;
    onSearch: (search: string) => void;
}

export class DropdownSearch extends Component<DropdownSearchProps> {
    render(): ReactNode {
        return (
            <input className="dropdown-search"
                   type="text"
                   placeholder={this.props.searchPlaceholder || "Search options"}
                   onChange={(e) => this.props.onSearch(e.target.value)}
            ></input>
        );
    }
}
