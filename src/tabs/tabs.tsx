import { Component, ReactElement, PropsWithChildren, ReactNode } from "react";

import "./tabs.css";

export interface TabComponentProps extends PropsWithChildren {
    'data-title': string;
}

export type TabComponent = ReactElement<TabComponentProps>;

export interface TabsComponentProps extends PropsWithChildren {
    children: TabComponent|TabComponent[];
    className?: string;
}

interface TabsComponentState {
    activeTab: number;
}

const ACTIVE_CLASS = 'pr-active';

export class TabsComponent extends Component<TabsComponentProps, TabsComponentState> {
    constructor(props: TabsComponentProps) {
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

    renderTabContent(tab: TabComponent, index: number): ReactNode {
        if (this.state.activeTab === index) {
            return tab;
        }
    }

    renderTabTitle(child: TabComponent, index: number): JSX.Element {
        const className = this.state.activeTab === index ? `tab-title ${ACTIVE_CLASS}` : "tab-title";
        return (
            <button className={className} type="button" key={index} onClick={() => this.onTabClick(index)}>{child.props["data-title"]}</button>
        );
    }
}
