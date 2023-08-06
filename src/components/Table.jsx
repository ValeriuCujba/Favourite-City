import Link from 'next/link';

 const Table = ({ data }) => {

    console.log("data from table component: " + data);
    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Country</th>
                    <th>State</th>
                </tr>
                {data?.map((city) => (
                    
                    <tr key={city}> 
                        
                        <td> <Link href={{
                            pathname: `/city/${city.name}`,
                            query: {latitude: city.latitude, longitude: city.longitude}}}>{city.name}</Link></td>
                       
                        <td>{city.latitude}</td>
                        <td>{city.longitude}</td>
                        <td>{city.country}</td>
                        <td>{city.state}</td>
                    </tr>
                    
                ))}
            </tbody>
        </table>
    );
};

export default Table;

