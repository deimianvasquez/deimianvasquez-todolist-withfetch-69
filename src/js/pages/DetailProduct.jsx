import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

const urlBaseRick = "https://rickandmortyapi.com/api/character"

export const DetailProduct = () => {
    const [person, setPerson] = useState({})

    // logica acá
    const { theId } = useParams()
    const navigate = useNavigate()


    async function getPerson() {
        try {
            const response = await fetch(`${urlBaseRick}/${theId}`)
            const data = await response.json()
            if (response.ok) {
                setPerson(data)
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        getPerson()
    }, [])


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <img src={person.image} alt={person.name} className="w-100" />
                    <h1>{person.name}</h1>
                    <p>{person.gender}</p>
                    {/* <Link to="/products" className="btn btn-primary">Ir a products</Link> */}
                    <button
                        className="btn btn-primary"
                        onClick={() => navigate(-1)}
                    >Volver</button>
                </div>
            </div>
        </div>
    )
}