import { ReactNode, Component } from "react";
import { Tab, Tabs } from "../tabs/tabs";
import { DropdownSearch } from "./dropdown-search";

import "./dropdown-menu.css";

export interface DropdownItem {
    icon: ReactNode;
    text: string;
}

export type DropdownItemClickHandler = (tabIndex: number, itemIndex: number) => void;

export interface DropdownTab {
    title: string;
    items: DropdownItem[];
}

export interface DropdownMenuProps {
    isExpanded: boolean;
    tabs: DropdownTab[];
    onItemActivate: DropdownItemClickHandler;
    onItemDeactivate: DropdownItemClickHandler;
    activeItems?: ActiveItem[];
}

export type ActiveItem = [tabIndex: number, itemIndex: number];

const ACTIVE_CLASS = "pr-active";

export class DropdownMenu extends Component<DropdownMenuProps> {
    constructor(props: DropdownMenuProps) {
        super(props);

        this.renderTab = this.renderTab.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    render() {
        if (!this.props.isExpanded) {
            return;
        }

        return (
            <Tabs className="dropdown-tab">
                { this.props.tabs.map(this.renderTab) }
            </Tabs>
        );
    }

    renderTab(tab: DropdownTab, tabIndex: number): Tab {
        return (
            <div className="dropdown-menu" key={tabIndex} data-title={tab.title}>
                <DropdownSearch/>
                <ul className="dropdown-menu-list">{tab.items.map((item, itemIndex) => this.renderItem(item, tabIndex, itemIndex))}</ul>
            </div>
        );
    }

    isItemActivated(tabIndex: number, itemIndex: number): boolean {
        if (!this.props.activeItems) {
            return false;
        }

        return this.props.activeItems.some(([ti, ii]) => ti === tabIndex && ii === itemIndex);
    }

    renderItem(item: DropdownItem, tabIndex: number, itemIndex: number): ReactNode {
        const className = this.isItemActivated(tabIndex, itemIndex) ? `dropdown-menu-item ${ACTIVE_CLASS}` : "dropdown-menu-item";
        return (
            <li className={className} key={itemIndex} onClick={() => this.onItemClick(tabIndex, itemIndex)}>
                { item.icon }
                <span className="dropdown-menu-item-text">{ item.text }</span>
            </li>
        );
    }

    onItemClick(tabIndex: number, itemIndex: number): void {
        if (!this.props.activeItems) {
            this.props.onItemActivate(tabIndex, itemIndex);
            return;
        }

        if (this.isItemActivated(tabIndex, itemIndex)) {
            this.props.onItemDeactivate(tabIndex, itemIndex);
        } else {
            this.props.onItemActivate(tabIndex, itemIndex);
        }
    }
}
