import React, { useState }  from 'react';
import swal from 'sweetalert';

export default function Login() {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
  
    const handleSubmit = async e => {
      e.preventDefault();
      const response = await loginUser({
        username,
        password
      });
      if ('token' in response) {
        swal("Success", response.message, "success", {
          buttons: false,
          timer: 2000,
        })
        .then((value) => {
          localStorage.setItem('accessToken', response['token']);
          window.location.href = "/profile";
        });
      } else {
        swal("Failed", response.message, "error");
      }
    }

  return (
    <div>
<div className="container h-100">
	<div className="d-flex justify-content-center">
		<div className="card mt-5 col-lg-5 col-md-4 animated bounceInDown myForm">
			<div className="card-header text-center">
				<h4>Logo</h4>
			</div>
			<div className="card-body">
				<form onSubmit={handleSubmit}>
					<div id="dynamic_container">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text br-15"><i className="fa fa-user"></i></span>
							</div>
							<input onChange={e => setUserName(e.target.value)} type="text" placeholder="User" className="form-control" required />
						</div>
						<div className="input-group mt-3">
							<div className="input-group-prepend">
								<span className="input-group-text br-15"><i className="fa fa-key" ></i></span>
							</div>
							<input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="form-control" required />
						</div>
						
					</div>
					<div className="row mt-3">
						<div className="col-xs-6 col-sm-6 col-md-6">
						<div className="form-group ">
							 <input type="checkbox" name="check" className="check-box-s" /> <span className='rem-c'>Remember Me</span>
						</div>
						</div>

						<div className="col-xs-6 col-sm-6 col-md-6 t_right">
						<div className="form-group">
							<a href="#forgot" className="text-white" data-toggle="modal" data-target="#myModal"> Forgot Password? </a>
						</div>
						</div>
						
					</div>

                    <div className="card-footer text-center">
				
				        <button type="submit" className="btn btn-success submit_btn">Submit</button>
			        </div>
				</form>

			</div>
		</div>
	</div>
	</div>


	  


    </div>
  )
}

async function loginUser(credentials) {
    return fetch('http://localhost:8080/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
