import { createRoot } from "react-dom/client";
import { Component, ReactNode } from "react";
import { Dropdown, Tag } from "practice-react";

import { DropdownItem, DropdownItemId } from "../../src/dropdown/dropdown-menu";
import { tabs } from "./data";

import "./index.css";

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
    lsKey = 'react-practice-app';

    constructor(props: {}) {
        super(props);

        try {
            const storedState = localStorage.getItem(this.lsKey);
            if (storedState) {
                this.state = JSON.parse(storedState);
            } else {
                this.state = {
                    filters: []
                };
            }
        } catch (e) {
            this.state = {
                filters: []
            };
        }

        this.onAddFilter = this.onAddFilter.bind(this);
        this.onRemoveFilter = this.onRemoveFilter.bind(this);
        this.renderTag = this.renderTag.bind(this);
        this.onCloseTag = this.onCloseTag.bind(this);
    }

    setState(setter: (prevState: AppState) => AppState): void {
        const newState = setter(this.state);
        super.setState(setter);
        localStorage.setItem(this.lsKey, JSON.stringify(newState));
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
        return <Tag onCloseTag={this.onCloseTag} id={filter.itemId} key={filter.itemId} text={filter.value}/>;
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
