import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cars from '../components/Cars'
import { DataContext } from '../contexts/DataProvider'

export default function CarSingle(props) {
    const [post, setPost] = useState({})
    const { id, uid } = useParams()
    const { loadPost } = useContext(DataContext)

    console.log(id)

    useEffect(() => {
        async function handleSingleCar() {
            const response = await fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
            const data = await response.json()
            setPost(data)
        }

        handleSingleCar()
    }, [id])



return (
    <div>
        <p>Car ID: { post.id }</p>
       <p>Name: { post.name }</p>
        <p>Year: { post.year }</p>
        <p>Selling Price: { post.selling_price }</p>
    </div>
)


}
