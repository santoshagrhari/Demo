// import React, { Component } from 'react';
// import { Link } from "react-router-dom";


// export class Profile extends Component {
//   render() {
//     //const [page, setPage] = useState();
//     const page = 1;
//     const deviceInfo = getDeviceLists({
//             page
//         });
        
//     console.log(deviceInfo);

//     return (
//       <div style={{paddingTop:"40px"}}>
//         <div className="container-fluid">
//         <div className="row pb-4">
//                 <div className='col-md-12 float-right'>

//                 <Link class="float-right btn btn-primary" title="Logout" to="/"><i class="fa fa-sign-out" aria-hidden="true"></i></Link>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className='col-md-3'>
//                     <div className="input-group">            
//                         <input type="hidden" name="search_param" value="all" id="search_param" />         
//                         <input type="text" className="form-control" name="x" placeholder="Search term..." />
//                         <span className="">
//                             <button className="btn btn-default bg-light" type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
//                         </span>
//                     </div>
//                 </div>   
//                 <div className='col-md-9'>
//                 <div class="dropdown float-right">
//                     <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
//                         ADDFILTER
//                     </button>
//                     <div class="dropdown-menu">
//                         <Link class="dropdown-item" to="#">Link 1</Link>
//                         <Link class="dropdown-item" to="#">Link 2</Link>
//                         <Link class="dropdown-item" to="#">Link 3</Link>
//                     </div>
//                     </div>
//                 </div>          
//             </div>
//             <div className="row">
//                 <div className='col-md-12'>
//                     <table id="example" className="table table-striped table-bordered w-100" >
//                         <thead>
//                             <tr>
//                                 <th><input type="checkbox" onclick="checkAll(this)" /></th>
//                                 <th>Mac Id</th>
//                                 <th>Type</th>
//                                 <th>Info</th>
//                                 <th>created at</th>
//                                 <th>tds</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                         {deviceInfo.devices.map(device => (  
//                             <tr>
//                             <td><input type="checkbox" name="" /></td>
//                             <td>{device.device.macid}</td>
//                             <td>{device.device.type}</td>
//                             <td>{device.device.info}</td>
//                             <td>{device.created_at}</td>
//                             <td>{device.desc}</td>
//                         </tr>  
//                         ))}
                            
//                         </tbody>
                    
//                     </table>
//                     <ul class="pagination float-right">
//                         <li class="page-item"><Link class="page-link" to="#">Previous</Link></li>
//                         <li class="page-item"><Link class="page-link" to="#">1</Link></li>
//                         <li class="page-item"><Link class="page-link" to="#">2</Link></li>
//                         <li class="page-item"><Link class="page-link" to="#">3</Link></li>
//                         <li class="page-item"><Link class="page-link" to="#">Next</Link></li>
//                     </ul>
//                     </div>
//             </div>
            
//         </div>   
//     </div>
//     )
//   }
// }

// export default Profile


// export async function getDeviceLists(page) {

//     try{
//         const response = await fetch('http://localhost:8080/api/rest/device-telemetry?page='+page);
//         return await response.json();
//     }catch(error) {
//         return [];
//     }
    
// }

import React from 'react';
import { Link } from "react-router-dom";
 import axios from 'axios';
 import { useEffect, useState } from 'react';

function Profile() {
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  const [posts, setAllPosts] = useState([]);

  const getAllPosts = async () => {
    const res = await axios.get('http://localhost:8080/api/rest/device-telemetry?page=');
    
    const data = res.data;
    console.log(data);
    const postData = getPostData(data.devices)
    setAllPosts(postData)

  }

  useEffect(() => {
    getAllPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


   const getPostData = (data) => {
    return (
      <>
        <h1>API test</h1>

        <div className="container-fluid">
            <div className="row pb-2">
                
                <div className="col-md-6 pb-2"></div>
                <div className="col-md-3 pb-2">
                  <div className="input-group">       
                  <input type="text" class="form-control" placeholder="Search term..." />
                  <span class="input-group-btn">
                      <button class="btn btn-info" type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
                  </span>
              </div>
              
            </div>
            <div className='col-md-1 float-right'>
                    <Link class="float-right btn btn-primary" title="Logout" to="/"><i class="fa fa-sign-out" aria-hidden="true"></i></Link>
                </div>
                <div className='col-md-1 float-right'>
                    <Link class="float-right btn btn-primary" title="Logout" to="/Graph">Graph</Link>
                </div>
                <div className='col-md-1 float-right'>
                    <Link class="float-right btn btn-primary" title="Logout" to="/CSV">CSV</Link>
                </div>
            </div>
           
		         
       
            <div className='col-md-12'>
                <table id="example" className="table table-striped table-bordered">
                        <thead>
                            <tr>
                            <th><input type="checkbox" onclick="checkAll(this)" /></th>
                                <th>Mac Id</th>
                                 <th>Type</th>
                                 <th>Info</th>
                                 <th>created at</th>
                                 <th>tds</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        {data.deviceTelemetry.map(device => (  
                            <tr>
                            <td><input type="checkbox" name="" /></td>
                            <td>{device.device.macid}</td>
                            <td>{device.device.type}</td>
                            <td>{device.device.info}</td>
                            <td>{ new Date(device.created_at).toLocaleString("en-US", {timeZone: timeZone})}</td>
                           
                            <td>{device.desc.tds}</td>
                        </tr>  
                        ))}
                        </tbody>
                    
                    </table>
                    
            </div>
        </div>

      </>

    )



  }

  return (
    <>
      {posts}

    </>
  )

}



export default Profile;