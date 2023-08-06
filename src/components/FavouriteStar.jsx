"use client"
    // TODO: cand e in favorite sa fie checked, cand nu e sa fie unchecked
    // TODO: sa verifice in DB daca e in favorite si sa il puna automat checked sau unchecked
const FavouriteStar = ({ name, latitude, longitude }) => {
    console.log(name, latitude, longitude);

    const checkIfCityIsFavourite = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/cities/?latitude=${latitude}&longitude=${longitude}`, {
                method: "GET",
            });

            if (res.ok) {
                const data = await res.json();
                if (data.length > 0) {
                    const id = data[0]._id;                    
                    await removeCityFromFavourites(id);
                } else {
                    await addToFavourite();
                }
            } 
        } catch (error) {
            console.log(error);
        }
    }

    const toggleStar = (checkbox) => {
        checkbox.checked = !checkbox.checked;
      }

    const removeCityFromFavourites = async (id) => {
        const confirmed = confirm("Are you sure you want to remove this city from your Favourites?");
        try {
            if (confirmed) {
                const res = await fetch(`http://localhost:3000/api/cities/?id=${id}`, {
                    method: "DELETE",
                });

                if (res.ok) {
                    router.refresh();
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    const addToFavourite = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/cities', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, latitude, longitude }),
            });

            if (res.ok) {
                alert('City added to favourites');
            } else {
                throw new Error('Failed to add the city to favourites');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="star-component">
            <input id="star" className="star" type="checkbox" title="bookmark page" onClick={checkIfCityIsFavourite} />
        </div>
    )
}

export default FavouriteStar;