import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getAllProductBySeller, deleteProductById, editProductById } from '../../api/authenticationService'
const Products_helper = () => {
    
    return (
        <>
            <h1>Products</h1>
            <table style={{ border: '1px solid white', marginLeft: '10%', marginRight: '50%', width: '1000px' }}>
                <thead className="table-dark">
                <tr>
                            <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>#</th>
                            <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>User Name</th>
                            <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>First Name</th>
                            <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Last Name</th>
                            <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Email</th>
                            <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Mobile no</th>
                            
                        </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '30px' }}>1</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>admin</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Sai Charan</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Nagalla</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>nagallacharan@gmail.com</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>9392886595</td>
                    </tr>
                    <tr>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '30px' }}>2</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>bangi</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Bangi</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Karthik</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>bangi@gmail.com</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>9000055555</td>
                    </tr>
                    <tr>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '30px' }}>3</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>pvr</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>PV</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Rohith</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>rohithpamarti@gmail.com</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>97283739923</td>
                    </tr>
                    <tr>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '30px' }}>4</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>guru</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>HarshaVardhan</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Saladi</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>guru@gmail.com</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>73823377380</td>
                    </tr>
                    <tr>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '30px' }}>5</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>alex</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Alex</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Hales</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>alexdf@gmail.com</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>9873238932</td>
                    </tr>
                    <tr>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '30px' }}>6</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>ava</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Ana</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>De Arams</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>ruchk@gmail.com</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>93727832983</td>
                    </tr>
                    <tr>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '30px' }}>7</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>seshu</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>DV</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Sasanka</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>seshu@gmail.com</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>9896733298</td>
                    </tr>
                    <tr>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '30px' }}>8</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>kiara</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>P Kiara</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Advani</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>aliaadvani@gmail.com</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>97627839329</td>
                    </tr>
                    <tr>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '30px' }}>9</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>VK</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Virat</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Kohli</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>rohithkp@gmail.com</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>9827389328</td>
                    </tr>
                    <tr>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '30px' }}>10</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>cheeku</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Rohith</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Sharma</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>rohithsharma@gmail.com</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>9874385845</td>
                    </tr>
                    <tr>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '30px' }}>11</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>ramesh</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Ramesh</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Sureneedy</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>sunipopp@gmail.com</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>7823889323</td>
                    </tr>
                    <tr>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '30px' }}>12</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>rej</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Vikram</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Rolex</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>ricksorkin@gmail.com</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>737832980</td>
                    </tr>
                    <tr>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '30px' }}>13</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>revi</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Kalyan</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Sharma</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>ridjkn@gmail.com</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>7327983209</td>
                    </tr>
                    <tr>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '30px' }}>14</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>tony</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Tony</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Stark</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>ricksorkin@gmail.com</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>737832980</td>
                    </tr>
                    <tr>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '30px' }}>15</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Hardik</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Hardik</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Pandya</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>hardiknatsha@gmail.com</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>9383232881</td>
                    </tr>
                    <tr>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '30px' }}>16</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>kp</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Kevin</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Peterson</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>cricket6748@gmail.com</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>932898932890</td>
                    </tr>
                    <tr>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '30px' }}>17</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Nani</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Ganta</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Naveen</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>kioplgolf@gmail.com</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>7832932329</td>
                    </tr>
                    <tr>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '30px' }}>18</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>krunal</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Krunal</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Pandya</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>ricksorkin@gmail.com</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>737832980</td>
                    </tr>
                    <tr>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '30px' }}>19</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Rick</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Sokrin</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Rick</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>ricksorkin2345@gmail.com</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>9636278322</td>
                    </tr>
                    <tr>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '30px' }}>20</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Ginna</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>Jagadesh</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>P</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>jaga@gmail.com</td>
                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>737832980</td>
                    </tr>
 
                    
 
                    
 
                    
 
 
                </tbody>
            </table>
        </>
    )
}
 
export default Products_helper