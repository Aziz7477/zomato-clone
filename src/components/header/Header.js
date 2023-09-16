import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';

import { Outlet } from "react-router-dom"


const Header = () => {
    return (
        <>
            <div className="max-width header">
                <img className="header-logo" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" />
                <div className="header-right">
                    <div className="location-search-container">
                        <div className='location-wrapper'>
                            <div className="location-icon-name">
                                <FmdGoodIcon className='location-icon' />
                                <div style={{display:"flex",alignItems:"center"}}>Kolkata</div>
                            </div>
                            <ArrowDropDownIcon />
                        </div>
                        <div className='location-search-separator'></div>
                        <div className='header-searchbar'>
                            <SearchIcon className='search-icon' style={{display:"flex",justifyContent:"center",alignItems:"center"}}/>
                            <input className='search-input' type="text" placeholder='Search for restaurant, cuisine or a dish'/>
                        </div>
                    </div>
                    <div className='profile'>
                        Aziz
                    </div>
                </div>
            </div>
            <Outlet />
        </>

    )
}

export default Header