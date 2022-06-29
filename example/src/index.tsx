import { createRoot } from "react-dom/client";
import { Component, ReactNode } from "react";
import { Dropdown, DropdownTab, Tag } from "practice-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faShopify } from "@fortawesome/free-brands-svg-icons";

import { DropdownItem, DropdownItemId } from "../../src/dropdown/dropdown-menu";
import "./index.css";

function UserIcon(): JSX.Element {
    return <FontAwesomeIcon icon={faUser}/>;
}

function InstagramIcon(): JSX.Element {
    return <FontAwesomeIcon icon={faInstagram}/>;
}

function ShopifyIcon(): JSX.Element {
    return <FontAwesomeIcon icon={faShopify}/>;
}

const tabs: DropdownTab[] = [
    {
        title: "Users",
        items: {
            "00": {
                id: "00",
                icon: <UserIcon/>,
                text: "Louie Popp",
            },
            "01": {
                id: "01",
                icon: <UserIcon/>,
                text: "Jonas Rafn",
            },
            "02": {
                id: "02",
                icon: <UserIcon/>,
                text: "Fiona Rakipi",
            },
            "03": {
                id: "03",
                icon: <UserIcon/>,
                text: "Martin Navne",
            },
            "04": {
                id: "04",
                icon: <UserIcon/>,
                text: "Kristoffer Degn",
            },
        },
    },
    {
        title: "Integrations",
        items: {
            "10": {
                id: "10",
                icon: <InstagramIcon/>,
                text: "Instagram",
            },
            "11": {
                id: "11",
                icon: <ShopifyIcon/>,
                text: "Shopify",
            },
        },
    }
];

interface Filter {
    itemId: DropdownItemId;
    value: string;
}

interface AppState {
    filters: Filter[];
}

function mapItemToFilter(tabIndex: number, item: DropdownItem): Filter {
    const filterValue = `${tabs[tabIndex].title}: ${item.text}`;
    return {
        itemId: item.id,
        value: filterValue,
    };
}

function findTabIndexById(id: DropdownItemId): number {
    for (let i = 0; i < tabs.length; i++) {
        const tab = tabs[i];
        if (tab.items[id]) {
            return i;
        }
    }
    return -1;
}

class Index extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            filters: []
        };

        this.onAddFilter = this.onAddFilter.bind(this);
        this.onRemoveFilter = this.onRemoveFilter.bind(this);
        this.renderTag = this.renderTag.bind(this);
        this.onCloseTag = this.onCloseTag.bind(this);
    }

    onAddFilter(tabIndex: number, item: DropdownItem): void {
        this.setState((state) => ({
            filters: [...state.filters, mapItemToFilter(tabIndex, item)]
        }));
    }

    onRemoveFilter(tabIndex: number, item: DropdownItem): void {
        this.setState((state) => ({
            filters: state.filters.filter((filter) => filter.itemId !== item.id)
        }));
    }

    onCloseTag(id: DropdownItemId): void {
        const tabIndex = findTabIndexById(id);
        if (tabIndex === -1) {
            return;
        }

        this.onRemoveFilter(tabIndex, tabs[tabIndex].items[id]);
    }

    renderTag(filter: Filter): ReactNode {
        return <Tag className="custom-tag" onCloseTag={this.onCloseTag} id={filter.itemId} key={filter.itemId} text={filter.value}/>;
    }

    render() {
        return (
            <div id="container">
                <div id="dropdown">
                    <Dropdown activeItems={this.state.filters.map(filter => filter.itemId)}
                              onItemActivate={this.onAddFilter}
                              onItemDeactivate={this.onRemoveFilter}
                              tabs={tabs}
                              buttonText={"Add Filter"}
                    />
                </div>
                <div id="tags">
                    {this.state.filters.map(this.renderTag)}
                </div>
            </div>
        );
    }
}

const ID = "app";
const container = document.getElementById(ID);

if (!container) {
    const error = new Error(`#${ID} element was not found`);
    console.error(error);
    throw error;
}

const root = createRoot(container);
root.render(<Index/>);
