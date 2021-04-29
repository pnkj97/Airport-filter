const Filters = ({handleSearch}) => {
    return ( 
        <div className="filters-wrapper">
            <div className="container">
                <div className="main-wrapper">
                    <div className="type-filters">
                        <h1>Type</h1>
                        <ul>
                            <li><input type="checkbox"/><label>Small</label></li>
                            <li><input type="checkbox"/><label>Medium</label></li>
                            <li><input type="checkbox"/><label>Large</label></li>
                            <li><input type="checkbox"/><label>Heliport</label></li>
                            <li><input type="checkbox"/><label>Closed</label></li>
                            <li><input type="checkbox"/><label>In your favourites</label></li>
                        </ul>
                    </div>
                    <div className="search-filters">
                        <h1>Filter by search</h1>
                        <input type="text" onChange={(e) => handleSearch(e.target.value)}/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Filters;