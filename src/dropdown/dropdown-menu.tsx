import { ReactNode, Component } from "react";
import { TabComponent, TabsComponent } from "../tabs/tabs";

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

export class DropdownMenuComponent extends Component<DropdownMenuProps> {
    constructor(props: DropdownMenuProps) {
        super(props);

        this.renderTab = this.renderTab.bind(this);
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
                <ul className="dropdown-menu-list">{tab.items.map(this.renderLiItem)}</ul>
            </div>
        );
    }

    renderLiItem(item: DropdownItem, index: number): ReactNode {
        return (
            <li className="dropdown-menu-item" key={index}>
                { item.icon }
                <span className="dropdown-menu-item-text">{ item.text }</span>
            </li>
        );
    }
}
