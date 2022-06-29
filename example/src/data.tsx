import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faShopify } from "@fortawesome/free-brands-svg-icons";

import { DropdownTab } from "../../src/dropdown/dropdown-menu";


function UserIcon(): JSX.Element {
    return <FontAwesomeIcon icon={faUser}/>;
}

function InstagramIcon(): JSX.Element {
    return <FontAwesomeIcon icon={faInstagram}/>;
}

function ShopifyIcon(): JSX.Element {
    return <FontAwesomeIcon icon={faShopify}/>;
}

export const tabs: DropdownTab[] = [
    {
        title: "Users",
        items: {
            "00": {
                id: "00",
                icon: <UserIcon/>,
                text: "Louie Popp",
            },
            "01": {
                id: "01",
                icon: <UserIcon/>,
                text: "Jonas Rafn",
            },
            "02": {
                id: "02",
                icon: <UserIcon/>,
                text: "Fiona Rakipi",
            },
            "03": {
                id: "03",
                icon: <UserIcon/>,
                text: "Martin Navne",
            },
            "04": {
                id: "04",
                icon: <UserIcon/>,
                text: "Kristoffer Degn",
            },
        },
    },
    {
        title: "Integrations",
        items: {
            "10": {
                id: "10",
                icon: <InstagramIcon/>,
                text: "Instagram",
            },
            "11": {
                id: "11",
                icon: <ShopifyIcon/>,
                text: "Shopify",
            },
        },
    }
];
