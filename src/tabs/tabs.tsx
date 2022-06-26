import { Component, ReactElement, PropsWithChildren, ReactNode } from "react";

import "./tabs.css";

export interface TabProps extends PropsWithChildren {
    'data-title': string;
}

export type Tab = ReactElement<TabProps>;

export interface TabsProps extends PropsWithChildren {
    children: Tab|Tab[];
    className?: string;
}

interface TabsState {
    activeTab: number;
}

const ACTIVE_CLASS = 'pr-active';

export class Tabs extends Component<TabsProps, TabsState> {
    constructor(props: TabsProps) {
        super(props);

        this.state = {
            activeTab: 0,
        }

        this.renderTabTitle = this.renderTabTitle.bind(this);
        this.renderTabContent = this.renderTabContent.bind(this);
    }

    render(): JSX.Element {
        return (
            <div className={`tabs ${this.props.className || ''}`}>
                <div className="tabs-titles">
                    { Array.isArray(this.props.children)
                        ? this.props.children.map(this.renderTabTitle)
                        : this.renderTabTitle(this.props.children, 0)
                    }
                </div>
                <div className="tabs-content">
                    { Array.isArray(this.props.children)
                        ? this.props.children.map(this.renderTabContent)
                        : this.props.children
                    }
                </div>
            </div>
        );
    }

    onTabClick(index: number): void {
        this.setState(() => ({ activeTab: index }));
    }

    renderTabContent(tab: Tab, index: number): ReactNode {
        if (this.state.activeTab === index) {
            return tab;
        }
    }

    renderTabTitle(child: Tab, index: number): JSX.Element {
        const className = this.state.activeTab === index ? `tab-title ${ACTIVE_CLASS}` : "tab-title";
        const title = child.props["data-title"];
        return (
            <button data-title={title} className={className} type="button" key={index} onClick={() => this.onTabClick(index)}>{title}</button>
        );
    }
}
