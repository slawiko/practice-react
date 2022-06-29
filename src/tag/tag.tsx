import { Component } from "react";

import "./tag.css";

export interface TagProps {
    id: string;
    text: string;
    onCloseTag: (id: string) => void;
}

export class Tag extends Component<TagProps> {
    render() {
        return (
            <div className="tag">
                <span className="tag-text">{this.props.text}</span>
                <button className="tag-close-button"
                        onClick={() => this.props.onCloseTag(this.props.id)}
                        type="button"
                ></button>
            </div>
        );
    }
}
