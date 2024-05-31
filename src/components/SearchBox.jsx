import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
    const [showInput, setShowInput] = useState(false);
    const inputRef = useRef(null);

    const toggleInput = () => {
        setShowInput(!showInput);
    };

    const handleClickOutside = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setShowInput(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='searchBox flex'>
            {showInput && (
                <div className="pl-5" ref={inputRef}>
                    <input type="text" placeholder="Search..." className={`border rounded p-1 pl-2`} />
                </div>
            )}
            <div className="flex items-center" >
                <FaSearch onClick={toggleInput} className="ml-3" />
            </div>
        </div>
    );
}

export default SearchBox;
