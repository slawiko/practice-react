import { createRoot } from "react-dom/client";
import { DropdownComponent, DropdownTab } from "practice-react";
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


function Index(): JSX.Element {
    return (
        <div id="dropdown">
            <DropdownComponent tabs={tabs} buttonText={"Add Filter"}/>
        </div>
    );
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
