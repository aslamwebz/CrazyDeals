import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const index = (props) => {
    const [search, setSearch] = useState([])
    const [result, setResult] = useState([])
    const [fashion, setfashion] = useState(true)
    const [elec, setelec] = useState(true)
    const [mobile, setmobile] = useState(true)

    useEffect(() => {
        setSearch(props.match.params.query);
        getData(props.match.params.query)
    }, [])

    const getData = (query) => {
        Axios.get(`/api/search/${query}`)
            .then(res => {
                console.log(res.data)
                setResult(res.data)
            }
            )
            .catch(err => console.log(err.data))
    }

    const submitHandle = (e) => {
        e.preventDefault()
        getData(search)
    }

    const selectHandle = async (e) => {
        if (e.target.name === "fashion") {
            let checked = !fashion
            setfashion(checked)
            getDataByCategory(checked, elec, mobile)

        }
        if (e.target.name === "elec") {
            let checked = !elec
            setelec(checked)
            getDataByCategory(fashion, checked, mobile)

        }
        if (e.target.name === "mobile") {
            let checked = !mobile
            setmobile(checked)
            getDataByCategory(fashion, elec, checked)

        }
    }

    const getDataByCategory = (f, e, m) => {
        console.log(f, e, m)


        Axios.post('/api/search', {
            f,
            e,
            m,
            search
        })
            .then(res => console.log(res))
    }

    return (
        <div>
            <form onSubmit={(e) => submitHandle(e)}>
                <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)} autoComplete="false" />
                <button>Submit</button>
            </form>
            <input type="checkbox" name="fashion" onChange={(e) => selectHandle(e)} checked={fashion} />Fashion
            <input type="checkbox" name="elec" onChange={(e) => selectHandle(e)} checked={elec} />Electronics
            <input type="checkbox" name="mobile" onChange={(e) => selectHandle(e)} checked={mobile} />Mobile
            <textarea name="" id="" cols="30" rows="10" value={result} disabled></textarea>
        </div>
    )
}

export default index
