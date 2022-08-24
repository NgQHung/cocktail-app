import React from "react";
import Button from "../UI/Button";

const Header = () => {
    return (
        <div className="flex items-center justify-around bg-gray-200 h-20 ">
            <Button>Filter</Button>
            <div className="flex ">Cocktail</div>
            <div>Search Icon</div>
        </div>
    );
};

export default Header;
