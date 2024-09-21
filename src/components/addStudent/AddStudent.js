import {useState, useEffect} from 'react';
import * as yup from "yup";

export default function AddStudent(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [city, setCity] = useState(''); // Add state for city
    const [age, setAge] = useState(''); // Add state for age
    const [studentClass, setStudentClass] = useState(''); // Rename class to studentClass
    const [error, setError] = useState('');
  
    useEffect(() => {
      if (props.currentStudent) {
        setName(props.currentStudent.name);
            setEmail(props.currentStudent.email);
            setRollNo(props.currentStudent.rollNo);
            setCity(props.currentStudent.city || ''); // Set city if exists
            setAge(props.currentStudent.age || ''); // Set age if exists
            setStudentClass(props.currentStudent.class || ''); // Set class if exists
      }
    }, [props.currentStudent])
  
    console.log("props.currentStudent ==>>>", props.currentStudent);
  
  
    let schema = yup.object().shape({
        name: yup.string().max(10).min(3).required(),
        email: yup.string().email().required(),
        rollNo: yup.number().required().typeError("Must be a number"),
        city: yup.string().required(), // Change to string
        age: yup.number().required().typeError("Must be a number"), // Change to number
        class: yup.string().required(), // Change to string and renamed variable
    })
  
    const onClickHandler = async () => {
      // console.log("name", name);
      // console.log("email", email);
      // console.log("rollNo", rollNo);
  
  
  
      let data = {
        name: name,
        email: email,
        rollNo: rollNo,
        city:city,
        age:age,
        class:studentClass,
      }
      try {
        let result = await schema.validate(data)
        console.log("result", result);
        setError('')
        props.currentStudent ? props.onUpdateHandler(data, props.currentStudent.id) :
          props.onAddHandler(data)
          setEmail('');
          setName('');
          setRollNo('');
          setCity('');
          setAge('');
          setStudentClass('');
  
      } catch (error) {
        console.log("error", error.toString());
        setError(error.toString())
  
      }
  
  
  
    }
  
    return (
        <div>
            <span className="error-message">{error}</span>
            <div className="input-group">
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email" />
                <input value={rollNo} onChange={(e) => setRollNo(e.target.value)} type="text" placeholder="Enter Roll No" />
                <input value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="Enter Your City" />
                <input value={age} onChange={(e) => setAge(e.target.value)} type="text" placeholder="Enter Your age" />
                <input value={studentClass} onChange={(e) => setStudentClass(e.target.value)} type="text" placeholder="Enter Your class" />
                <button onClick={onClickHandler} className="button">{props.currentStudent ? "Update" : "Add"} Student</button>
            </div>
        </div>
    );
    
  }