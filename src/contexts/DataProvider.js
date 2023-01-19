import { useState, useEffect, createContext, useContext, useTransition } from "react";
import { getFirestore, collectionGroup, getDocs, collection, doc, getDoc, Timestamp, addDoc, orderBy, query, setDoc } from '@firebase/firestore';
import { AuthContext } from "./AuthProvider";


export const DataContext = createContext()

export const DataProvider = function (props) {
    const db = getFirestore()

    const [posts, setPosts] = useState([])

    const { user } = useContext(AuthContext)

    useEffect(() => {
        async function getPosts() {
            /* const response = await fetch(`https://chief-flat-goose.glitch.me/api/posts
             `)
             const data = await response.json()
             setPosts(data)*/
            // const q = query(collectionGroup(db, 'posts'), orderBy('date_created', "desc"))
            const q = query(collectionGroup(db, 'posts'))


            const querySnapshot = await getDocs(q)

            const postDocs = []

            querySnapshot.forEach(async (doc) => {

                const userData = await getDoc(doc.ref.parent.parent)
                const username = userData.data().username


                postDocs.push({
                    id: doc.id,
                    uid: userData.id,
                    username: username,
                    ...doc.data()
                })
                setPosts(postDocs)
            })


        }

        getPosts()
    }, [])

    async function loadPost(uid, id) {
        /* const response = await fetch(`https://chief-flat-goose.glitch.me/api/post/${id}
             `)
         const data = await response.json()
         return data */
        const docRef = doc(db, 'users', uid, 'posts', id)
        const docSnap = await getDoc(docRef)

        const userData = await getDoc(docSnap.ref.parent.parent)
        const username = userData.data().username

        if (docSnap.exists()) {
            return {
                id: docSnap.id,
                uid: uid,
                username: username,
                ...docSnap.data()
            }
        } else (
            console.log(`Post with id ${id} does not exist`)
        )
    }

    async function addPost(title, body) {
        const newPost = {
            title: title,
            body: body,
            date_created: Timestamp.now()

        }

        const userdoc = await setDoc(doc(db, 'user', user.uid), {
            username: user.username
        })

        const postDoc = await addDoc(collection(db, 'users', user.uid, 'posts'), newPost)

        newPost.id = doc.id

        setPosts([newPost, ...posts])
    }

    async function addCarsFromAPI() {
        let cars = await fetchCar()
        console.log(cars)
        for (let car of cars) {
        const newCar = {
            id: car.id,
            name: car.name,
            year: car.year,
            selling_price: car.selling_price,
            km_driven: car.km_driven,
            fuel: car.fuel,
            seller_type: car.seller_type,
            transmission: car.transmission,
            owner: car.owner,
            mileage: car.mileage,
            engine: car.engine,
            max_power: car.max_power,
            torque: car.torque,
            seats: car.seats
        }
        

        const doc = await addDoc(collection(db, 'Cars'), newCar)
        }
    }

    


    async function fetchPokemon(parameter) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${parameter}`)
        const data = await response.json()
        return data
    }

    async function fetchCar() {
        
        const docRef = collection(db, 'Cars')
        console.log(docRef,'this one')
       
        // const docSnap = await getDocs(docRef)

        const snapshot = await docRef.get();
        console.log('this two', snapshot)

        // snapshot.forEach(doc => {
        //     console.log(doc.id, '=>', doc.data());
        // });
        
        
        // getDoc(doc(db, 'Cars')).then(docSnap => {
        //     if (docSnap.exists()){
        //         console.log("Document data:", docSnap.data());
        //     } 
        //     else {
        //         console.log("no Such Document");
        //     }
        // })
    }
        // const response = await fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars`)
        // const data = await response.json()

//         if (docSnap.exists())  {
//             // use the docsnap data to set cars

//             console.log(docSnap.data())

//             return {
//                 // docSnap.data()
//                 // id: docSnap.id,
//                 // : uid,
//                 // username: username,
//                 // ...docSnap.data()
//             }
//         } else {
//             console.log(`Post with id  does not exist`)

       
//     }
// }

    const value = {
        posts,
        loadPost,
        fetchPokemon,
        addPost,
        fetchCar,
        addCarsFromAPI
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}