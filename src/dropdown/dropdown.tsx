import React from "react";
import { DropdownTab, DropdownMenuComponent } from "./dropdown-menu";

import "./dropdown.css";

export interface DropdownProps {
    tabs: DropdownTab[];
    buttonText?: string;
}

export interface DropdownState {
    expanded: boolean;
}

export class DropdownComponent extends React.Component<DropdownProps, DropdownState> {
    constructor(props: DropdownProps) {
        super(props);

        this.state = {
            expanded: false,
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(): void {
        this.setState((state) => ({ expanded: !state.expanded }));
    }

    render() {
        return (
            <div className="dropdown">
                <button className="dropdown-toggle-button" type="button" onClick={this.onClick}>
                    {this.props.buttonText || "Add"}
                </button>
                <DropdownMenuComponent tabs={this.props.tabs} isExpanded={this.state.expanded}/>
            </div>
        );
    }
}
