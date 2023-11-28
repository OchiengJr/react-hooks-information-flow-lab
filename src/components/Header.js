import React from "react"
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

const Header = (props) => {
    return (
        <>
            <div className={"App " + (props.isDarkMode ? "dark" :
                "light")}>
                <header>
                    <h2>Shopster</h2>
                    <button onClick={props.onDarkModeClick}>
                        {props.isDarkMode ? "Dark" : "Light"} Mode
                    </button>
                </header>
                <ShoppingList items={itemData} />
            </div>
        </>
    )
}

export default Header