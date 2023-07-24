import Link from 'next/link';

 const Table = ({ data }) => {
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
                {data.map((city) => (
                    
                    <tr key={city}> 
                        <Link href={{
                            pathname: `/city/${city.name}`,
                            query: {latitude: city.latitude, longitude: city.longitude}}}> 
                        <td>{city.name}</td>
                        </Link>
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

