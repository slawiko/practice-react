import { ReactNode, Component } from "react";
import { Tab, Tabs } from "../tabs/tabs";
import { DropdownSearch } from "./dropdown-search";

import "./dropdown-menu.css";

export type DropdownItemId = string;

export interface DropdownItem {
    id: DropdownItemId;
    icon: ReactNode;
    text: string;
}

export type DropdownItemClickHandler = (tab: number, item: DropdownItem) => void;

export interface DropdownTab {
    title: string;
    items: {
        [key: DropdownItemId]: DropdownItem
    };
}

export interface DropdownMenuProps {
    isExpanded: boolean;
    tabs: DropdownTab[];
    onItemActivate: DropdownItemClickHandler;
    onItemDeactivate: DropdownItemClickHandler;
    activeItems?: DropdownItemId[];
}

interface DropdownMenuState {
    searchValue: string;
}

const ACTIVE_CLASS = "pr-active";

export class DropdownMenu extends Component<DropdownMenuProps, DropdownMenuState> {
    constructor(props: DropdownMenuProps) {
        super(props);

        this.state = {
            searchValue: "",
        };

        this.renderTab = this.renderTab.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    filterItems(tabIndex: number, search: string): void {
        this.setState(() => ({ searchValue: search.toLowerCase() }));
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
        const filteredItems = Object.values(tab.items).filter(item => item.text.toLowerCase().includes(this.state.searchValue));
        return (
            <div className="dropdown-menu" key={tabIndex} data-title={tab.title}>
                <DropdownSearch onSearch={this.filterItems.bind(this, tabIndex)}/>
                <ul className="dropdown-menu-list">{filteredItems.map(item => this.renderItem(tabIndex, item))}</ul>
            </div>
        );
    }

    isItemActivated(item: DropdownItem): boolean {
        if (!this.props.activeItems) {
            return false;
        }

        return this.props.activeItems.some(id => id === item.id);
    }

    renderItem(tabIndex: number, item: DropdownItem): ReactNode {
        const className = this.isItemActivated(item) ? `dropdown-menu-item ${ACTIVE_CLASS}` : "dropdown-menu-item";
        return (
            <li className={className} key={item.id} onClick={() => this.onItemClick(tabIndex, item)}>
                { item.icon }
                <span className="dropdown-menu-item-text">{ item.text }</span>
            </li>
        );
    }

    onItemClick(tabIndex: number, item: DropdownItem): void {
        if (!this.props.activeItems) {
            this.props.onItemActivate(tabIndex, item);
            return;
        }

        if (this.isItemActivated(item)) {
            this.props.onItemDeactivate(tabIndex, item);
        } else {
            this.props.onItemActivate(tabIndex, item);
        }
    }
}
