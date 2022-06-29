import { DropdownTab } from "practice-react";

import {
    ActiveCampaignIcon,
    GoogleAnalyticsIcon,
    WoocommerceIcon,
    UserIcon,
    InstagramIcon,
    ShopifyIcon
} from "../icons/icons";


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
                icon: <ActiveCampaignIcon/>,
                text: "ActiveCampaign",
            },
            "11": {
                id: "11",
                icon: <GoogleAnalyticsIcon/>,
                text: "Google Analytics",
            },
            "12": {
                id: "12",
                icon: <InstagramIcon/>,
                text: "Instagram",
            },
            "13": {
                id: "13",
                icon: <WoocommerceIcon/>,
                text: "Woocommerce",
            },
            "14": {
                id: "14",
                icon: <ShopifyIcon/>,
                text: "Shopify",
            },
        },
    }
];
