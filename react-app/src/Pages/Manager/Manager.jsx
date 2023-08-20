import React from 'react'
import AddProduct from '../Admin/AddProduct';
import ManagerTabs from './ManagerTabs'
import Products from '../Admin/Products';
import UpdateProduct from '../Admin/UpdateProduct';


const Manager = () => {
    const data = [
        {
            heading: "Add Product",
            body: <AddProduct />
        },
        {
            heading: "All Product",
            body: <Products />
        },
        {
            heading: "Update Product",
            body: <UpdateProduct />
        }
    ];
    return (
        <div className="container" style={{ minHeight: "80vh" }}>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULOtzVJNuhZz0ox-N3J46ZnnnjHYyVNNYCQ&usqp=CAU" alt="" />
                </div>

            </div>
            <div>Managerrr</div>
            <div className="row mt-5">
                <div className="col-md-8 offset-md-2">
                    <ManagerTabs data={data} />
                </div>
            </div>
        </div>
    )
}

export default Manager