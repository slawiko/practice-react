import { ReactNode, Component } from "react";
import { TabComponent, TabsComponent } from "../tabs/tabs";
import { DropdownSearchComponent } from "./dropdown-search";

import "./dropdown-menu.css";

export interface DropdownItem {
    icon: ReactNode;
    text: string;
}

export interface DropdownTab {
    title: string;
    items: DropdownItem[];
}

export interface DropdownMenuProps {
    isExpanded: boolean;
    tabs: DropdownTab[];
}

interface DropdownMenuState {
    activeItem?: number;
}

const ACTIVE_CLASS = "pr-active";

export class DropdownMenuComponent extends Component<DropdownMenuProps, DropdownMenuState> {
    constructor(props: DropdownMenuProps) {
        super(props);

        this.state = {};

        this.renderTab = this.renderTab.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    render() {
        if (!this.props.isExpanded) {
            return;
        }

        return (
            <TabsComponent className="dropdown-tab">
                { this.props.tabs.map(this.renderTab) }
            </TabsComponent>
        );
    }

    renderTab(tab: DropdownTab, index: number): TabComponent {
        return (
            <div className="dropdown-menu" key={index} data-title={tab.title}>
                <DropdownSearchComponent/>
                <ul className="dropdown-menu-list">{tab.items.map(this.renderItem)}</ul>
            </div>
        );
    }

    renderItem(item: DropdownItem, index: number): ReactNode {
        const className = this.state.activeItem === index ? `dropdown-menu-item ${ACTIVE_CLASS}` : "dropdown-menu-item";
        return (
            <li className={className} key={index} onClick={() => this.onItemClick(index)}>
                { item.icon }
                <span className="dropdown-menu-item-text">{ item.text }</span>
            </li>
        );
    }

    onItemClick(index: number): void {
        this.setState(() => ({ activeItem: index }));
    }
}
