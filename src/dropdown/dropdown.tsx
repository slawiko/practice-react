import React from "react";
import {DropdownItem, DropdownMenuComponent} from "./dropdown-menu";

export interface DropdownProps {
    items: DropdownItem[];
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
            <div>
                <button type="button" className="dropdown-button" onClick={this.onClick}>
                    {this.props.buttonText || "Add"}
                </button>
                <DropdownMenuComponent items={this.props.items} isExpanded={this.state.expanded}/>
            </div>
        );
    }
}
