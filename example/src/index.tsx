import { createRoot } from "react-dom/client";
import { DropdownComponent, DropdownItem } from "practice-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'

function UserIcon(): JSX.Element {
    return <FontAwesomeIcon icon={faUser}/>;
}

const items: DropdownItem[] = [
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
];

function Index(): JSX.Element {
    return <DropdownComponent items={items} buttonText={"Add Filter"}/>;
}

const ID = "container";
const container = document.getElementById(ID);

if (!container) {
    const error = new Error(`#${ID} element was not found`);
    console.error(error);
    throw error;
}

const root = createRoot(container);
root.render(<Index/>);
