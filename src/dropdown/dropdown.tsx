import { Component } from "react";
import { DropdownTab, DropdownMenu, DropdownItemClickHandler, ActiveItem } from "./dropdown-menu";

import "./dropdown.css";

export interface DropdownProps {
    tabs: DropdownTab[];
    onItemActivate: DropdownItemClickHandler;
    onItemDeactivate: DropdownItemClickHandler;
    buttonText?: string;
    activeItems?: ActiveItem[];
}

export interface DropdownState {
    expanded: boolean;
}

export class Dropdown extends Component<DropdownProps, DropdownState> {
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
                <DropdownMenu tabs={this.props.tabs}
                              activeItems={this.props.activeItems}
                              isExpanded={this.state.expanded}
                              onItemActivate={this.props.onItemActivate}
                              onItemDeactivate={this.props.onItemDeactivate}
                />
            </div>
        );
    }
}
