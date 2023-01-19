import { Link } from 'react-router-dom'
import { DataContext } from '../contexts/DataProvider'
import { useState, useEffect, useContext } from "react";





export default function Cars(props) {
    const[cars, setCar] = useState({})
    const [loadState, setLoadState] = useState("LOADING")
    const {fetchCar, addCarsFromAPI} = useContext(DataContext)


    async function handleFetchCars() {
        const data = await fetchCar()
        setCar(data)
        setLoadState("LOADED")

        
    }
  
    useEffect(() => {
        
        console.log("Cars")
        console.log('im',cars)
        handleFetchCars()
    }, [])
    console.log(cars)

   
    function CarDisplay({item}) {
        console.log ('hello world')
        
        
        function handleClick(event){
            addCarsFromAPI()
        }


        return(
            
           

            
            <div className="carDisplay">
                <h2><Link to={ `/cars/${item.id}` }>{ item.name }</Link></h2>
               
                { item.name }
                
                <button onClick={handleClick}> Bulk Firebase </button>

                {/* <p>{ props.post.body }</p>
                <p className="author">Posted By: { props.post.username }</p> */}
            </div>
        )
    }



   let temp = ""
    if (loadState === "LOADING") {
        temp = "loading..." 
    }
    else {
       // temp = cars.map(car => <CarDisplay key={car.id} item={car} />)


    }

    
    return (
        <div className="cars">
           <h1> Cars</h1>

            
           {temp}

           {/* { posts.map(post => <Post key={post.id} post={post} showLink={true} />) } */}
        </div>
    )
}
