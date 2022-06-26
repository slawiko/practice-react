import { createRoot } from "react-dom/client";
import { Component, ReactNode } from "react";
import { Dropdown, DropdownTab, Tag } from "practice-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faShopify } from "@fortawesome/free-brands-svg-icons";

import "./index.css";

function UserIcon(): JSX.Element {
    return <FontAwesomeIcon icon={faUser}/>;
}

function InstagramIcon(): JSX.Element {
    return <FontAwesomeIcon icon={faInstagram} />;
}

function ShopifyIcon(): JSX.Element {
    return <FontAwesomeIcon icon={faShopify} />;
}

const tabs: DropdownTab[] = [
    {
        title: 'Users',
        items: [
            {
                icon: <UserIcon/>,
                text: "Louie Popp",
            },
            {
                icon: <UserIcon/>,
                text: "Jonas Rafn",
            },
            {
                icon: <UserIcon/>,
                text: "Fiona Rakipi",
            },
            {
                icon: <UserIcon/>,
                text: "Martin Navne",
            },
            {
                icon: <UserIcon/>,
                text: "Kristoffer Degn",
            },
        ],
    },
    {
        title: 'Integrations',
        items: [
            {
                icon: <InstagramIcon/>,
                text: "Instagram",
            },
            {
                icon: <ShopifyIcon/>,
                text: "Shopify",
            },
        ],
    }
];

interface Filter {
    index: [number, number];
    value: string;
}

interface AppState {
    filters: Filter[];
}

function mapItemToFilter(tabIndex: number, itemIndex: number): Filter {
    const filterValue = `${tabs[tabIndex].title}: ${tabs[tabIndex].items[itemIndex].text}`;
    return {
        index: [tabIndex, itemIndex],
        value: filterValue,
    };
}

class Index extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            filters: []
        };

        this.onItemClick = this.onItemClick.bind(this);
        this.renderTag = this.renderTag.bind(this);
    }

    onItemClick(tabIndex: number, itemIndex: number): void {
        this.setState((state) => ({
            filters: [...state.filters, mapItemToFilter(tabIndex, itemIndex)]
        }));
    }

    renderTag(filter: Filter): ReactNode {
        const index = `${filter.index[0]}:${filter.index[1]}`;
        return <Tag key={index} text={filter.value}/>
    }

    render() {
        return (
            <div id="container">
                <div id="dropdown">
                    <Dropdown onItemClick={this.onItemClick} tabs={tabs} buttonText={"Add Filter"}/>
                </div>
                <div id="tags">
                    { this.state.filters.map(this.renderTag) }
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
