
const Table = ({AirPortData, headings}) => {
    return ( 
        <div className="results-wrapper">
        <div className="container">
            <div className="main-wrapper">
            <table>
                <tr>
                    {headings.map((head) => (
                        <th>{head}</th>
                    ))}
                </tr>
                {AirPortData.map((data) => (
                    <tr>
                        <td>{ data.name }</td>
                        <td>{ data.icao }</td>
                        <td>{ data.iata }</td>
                        <td>{ data.elevation }</td>
                        <td>{ data.latitude }</td>
                        <td>{ data.longitude }</td>
                        <td>{ data.country }</td>
                    </tr>
                ))}
                </table>
            </div>
        </div>
    </div>
     );
}
 
export default Table;