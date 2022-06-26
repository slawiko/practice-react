import { Component } from "react";

export interface TagProps {
    text: string;
}

export class Tag extends Component<TagProps> {
    render() {
        return (
            <button type="button">{this.props.text}</button>
        );
    }
}
