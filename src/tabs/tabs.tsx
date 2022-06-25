import { Component, ReactElement, PropsWithChildren, ReactNode } from "react";

export interface TabComponentProps extends PropsWithChildren {
    'data-title': string;
}

export type TabComponent = ReactElement<TabComponentProps>;

export interface TabsComponentProps extends PropsWithChildren {
    children: TabComponent|TabComponent[];
}

interface TabsComponentState {
    activeTab: number;
}

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
            <div className="tabs">
                <ul className="tabs-titles">
                    { Array.isArray(this.props.children)
                        ? this.props.children.map(this.renderTabTitle)
                        : this.renderTabTitle(this.props.children, 0)
                    }
                </ul>
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
        return (
            <li className="tab-title" key={index} onClick={() => this.onTabClick(index)}>{child.props["data-title"]}</li>
        );
    }
}
