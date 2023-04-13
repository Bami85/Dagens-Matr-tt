import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function aboutus() {

    const router = useRouter()
    const { slug } = router.query

    const [state, setState] = useState({})
    const list = [
        {
            name: "Ali",
            slug: "ali"
        }, {
            name: "Ange",
            slug: "ange"
        }, {
            name: "Julle",
            slug: "julle"
        }
    ]

    useEffect(() => {
        list.forEach((item) => {
            if (item.slug == slug) {
                setState(item)
            }
        })

    }, [slug]);

    return (
        <div>
            <h1>Aktuellt namn och inne på produkter:</h1>
            <h2>{state ? state.name : null}</h2>
            <h1>Lista</h1>
            {list.map((item) => {
                return (
                    <div key={item.name}>{item.name}</div>
                )
            })}
        </div>

    )
}

export default aboutus
