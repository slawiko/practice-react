import { ReactNode, Component } from "react";

export interface DropdownItem {
    icon: ReactNode;
    text: string;
}

export interface DropdownMenuProps {
    isExpanded: boolean;
    items: DropdownItem[];
}

export class DropdownMenuComponent extends Component<DropdownMenuProps> {
    constructor(props: DropdownMenuProps) {
        super(props);
    }

    render() {
        if (!this.props.isExpanded) {
            return;
        }

        return (
            <div>
                <ul>
                    { this.props.items.map(this.renderLiItem) }
                </ul>
            </div>
        );
    }

    renderLiItem(item: DropdownItem, index: number): ReactNode {
        return (
            <li key={index}>
                { item.icon }
                { item.text }
            </li>
        );
    }
}
