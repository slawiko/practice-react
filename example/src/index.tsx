import { createRoot } from "react-dom/client";
import { DropdownComponent } from "practice-react";

function Index(): JSX.Element {
    return <p>
        <DropdownComponent/>
    </p>;
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
