import { Component, ReactNode } from "react";

import "./dropdown-search.css";

export interface DropdownSearchProps {
    searchPlaceholder?: string;
    onSearch: (search: string) => void;
}

export class DropdownSearch extends Component<DropdownSearchProps> {
    render(): ReactNode {
        return (
            <div className="dropdown-search">
                <svg className="dropdown-search-icon"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 1024 1024"
                >
                    <path
                        d="M1014.64 969.04L703.71 656.207c57.952-69.408 92.88-158.704 92.88-256.208 0-220.912-179.088-400-400-400s-400 179.088-400 400 179.088 400 400 400c100.368 0 192.048-37.056 262.288-98.144l310.496 312.448c12.496 12.497 32.769 12.497 45.265 0 12.48-12.496 12.48-32.752 0-45.263zM396.59 736.527c-185.856 0-336.528-150.672-336.528-336.528S210.734 63.471 396.59 63.471c185.856 0 336.528 150.672 336.528 336.528S582.446 736.527 396.59 736.527z"/>
                </svg>
                <input className="dropdown-search-input"
                       type="text"
                       placeholder={this.props.searchPlaceholder || "Search options"}
                       onChange={(e) => this.props.onSearch(e.target.value)}
                ></input>
            </div>
        );
    }
}
