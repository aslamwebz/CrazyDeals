import React from 'react'

const Details = ({ item }) => {

    const data = () => {
        if (item.category === "electronics") {
            return <div className="row">
                <div className="col-md-4">Brand: {item.brand}</div>
                <div className="col-md-4">Model: {item.model}</div>
                <div className="col-md-4">Condition: {item.condition}</div>
                <div className="col-md-4">Year: {item.year}</div>
                <div className="col-md-4">Processor: {item.processor}</div>
                <div className="col-md-4">Speed: {item.speed} GHz</div>
                <div className="col-md-4">Memory: {item.memory} Gb</div>
                <div className="col-md-4">Storage: {item.storage} GB</div>
                <div className="col-md-4">Storage Type: {item.storage_type}</div>
                <div className="col-md-4">Graphics: {item.graphics}</div>
                <div className="col-md-4">Operating System: {item.os}</div>
                <div className="col-md-4">Screen: {item.screen}</div>
                <div className="col-md-4">Color: {item.color}</div>
            </div>
        }

        if (item.category === "mobile") {
            return <div className="row">
                <div className="col-md-4">Brand: {item.brand}</div>
                <div className="col-md-4">Model: {item.model}</div>
                <div className="col-md-4">Condition: {item.condition}</div>
                <div className="col-md-4">Year: {item.year}</div>
                <div className="col-md-4">Processor: {item.processor}</div>
                <div className="col-md-4">Memory: {item.memory} Gb</div>
                <div className="col-md-4">Storage: {item.storage} GB</div>
                <div className="col-md-4">Operating System: {item.os}</div>
                <div className="col-md-4">Display: {item.display}</div>
                <div className="col-md-4">Camera: {item.camera}</div>
                <div className="col-md-4">Color: {item.color}</div>
            </div>
        }
        if (item.category === "fashion") {
            return <div className="row">
                <div className="col-md-4">Brand: {item.brand}</div>
                <div className="col-md-4">Condition: {item.condition}</div>
                <div className="col-md-4">Colors: {item.colors.map(color => { return " - " + color })}</div>
                <div className="col-md-4">Sizes: {item.sizes.map(size => { return " - " + size })}</div>
                <div className="col-md-4">Department: {item.sub_category}</div>
            </div>
        }
    }

    return (
        <div>
            {data()}
        </div>
    )
}

export default Details
