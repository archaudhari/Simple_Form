import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';

function Create() {

	// Making usestate for setting and
	// fetching a value in jsx
	const [name, setname] = useState('');
	const [age, setage] = useState('');
    const [DOB, setDOB] = useState('');
    const [Gender, setGender] = useState('');

	// Using useNavigation for redirecting to pages
	let history = useNavigate();

	// Function for creating a post/entry
	const handelSubmit = (e) =>{
		e.preventDefault(); // Prevent reload

		const ids = uuid() // Creating unique id
		let uni = ids.slice(0,8) // Slicing unique id

		// Fetching a value from usestate and
		// pushing to javascript object
		let a = name, b=age,c=DOB, d=Gender
		array.push({id:uni,Name:a,Age:b, DOB:c, Gender:d})


	// Redirecting to home page after creation done
	history('/')
		
	}

return (
	<div >
		<Form className="d-grid gap-2" style={{margin:'15rem'}}>

{/* Fetching a value from input textfield
in a setname using useState*/}
<Form.Group className="mb-3" controlId="formBasicName">
	<Form.Control onChange={e => setname(e.target.value)}
				type="text"
				placeholder="Enter Name" required/>
</Form.Group>


	{/* Fetching a value from input textfield in
	a setage using useState*/}
<Form.Group className="mb-3" controlId="formBasicAge">
	<Form.Control onChange={e => setage(e.target.value)}
				type="text"
				placeholder="Age" required/>
</Form.Group>


<Form.Group className="mb-3" controlId="formBasicName">
	<Form.Control onChange={e => setname(e.target.value)}
				type="date"
				placeholder="Enter Name" required/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicName">
<select name="gender" id="gender" class="form-control" placeholder='Gender'>
            <option Selected value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
    </select></Form.Group>

{/* <Form.Group className="mb-3" controlId="formBasicName">
	<Form.Control onChange={e => setname(e.target.value)}
				<select name="gender" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>

        </select> required 
</Form.Group> */}

{/* <div class="dropdown show">
  <a class="btn btn-secondary dropdown-toggle" 
  href="#" 
  role="button" 
  id="actions" 
  data-toggle="dropdown" 
  aria-haspopup="Male" 
  aria-expanded="Female">
    Gender
  </a>
  <div class="dropdown-menu" aria-labelledby="actions">
    <a class="dropdown-item" href="#">Male</a>
    <a class="dropdown-item" href="#">Female</a>
    <a class="dropdown-item" href="#">Other</a>
  </div>
</div> */}

{/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div> */}


      {/* <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
      </form>
   */}



	{/* handing a onclick event in button for
	firing a function */}
<Button
onClick={e => handelSubmit(e)}
	variant="primary" type="submit">
	Submit
</Button>

{/* Redirecting back to home page */}
<Link className="d-grid gap-2" to='/'>
	<Button variant="info" size="lg">
	Home
	</Button>
</Link>

</Form>
	</div>
)
}

export default Create
