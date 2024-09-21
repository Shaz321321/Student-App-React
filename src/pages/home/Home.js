// import '../../styles/style.css';
// import AddStudent from '../../components/addStudent/AddStudent';
// import {useState} from 'react';
// // import { data as constantdata} from '../../constant/data';
// import TableItem from '../../components/tableItem/TableItem';


// export default function Home() {
//     const [ data, setData] = useState([
//         {
//             id: 1,
//             name: "Shahzad",
//             email: "shahzad@gmail.com",
//             rollNo: "1234",
//             city:"Faisalabad",
//             age:"31",
//             class: "BSCS"
//         },
//         {
//             id: 2,
//             name: "Ali",
//             email: "ali@gmail.com",
//             rollNo: "1235",
//             city:"Islamabad",
//             age:"25",
//             class: "BSCS"
//         },
//         {
//             id: 3,
//             name: "Ahmed",
//             email: "ahmed@gmail.com",
//             rollNo: "1236",
//             city:"Lahore",
//             age:"27",
//             class: "BSCS"
//         },
//     ])

//     const [currentStudent, setCurrentStudent] = useState(null)

//     const onClickUpdateHandler = (student)=>{
//        console.log("student in home", student);
//        setCurrentStudent(student)
       
//     }
     
//     const onClickDeleteHanlder = (id) => {
//         console.log("id in parent home", id);
        
//        let  newdata =  data.filter(item => item.id !== id)
//          setData(newdata)
        
//     }

//     const onUpdateHandler = (student, id) => {
//         console.log("student in home", student,id);
//         let newData = data.map((item)=>{
//             if(item.id === id){
//                 return {
//                     ...item,
//                     name: student.name,
//                     email: student.email,
//                     rollNo: student.rollNo,
//                     city :student.city,
//                     age :student.age,
//                     class :student.class,

//                 }
//             }
//             return item
//         })
//         setData(newData)
//         setCurrentStudent(null)
//     }

//     const onAddHandler = (student) =>{
//         console.log("student in home", student);
//        setData([...data, {
//               id: data.length + 1,
//               name: student.name,
//               email: student.email,
//               rollNo: student.rollNo
//        }]) 


//     }

//     return (
//             <div className="container">
//                 <h1>Student Management</h1>
//                 <AddStudent onUpdateHandler={onUpdateHandler} currentStudent={currentStudent} onAddHandler={onAddHandler} />
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Roll No</th>
//                             <th>city</th>
//                             <th>age</th>
//                             <th>class</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((item) => (
//                             <TableItem 
//                                 key={item.id} 
//                                 item={item} 
//                                 onClickUpdateHandler={onClickUpdateHandler} 
//                                 onClickDeleteHanlder={onClickDeleteHanlder} 
//                             />
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         );
        
// }

import '../../styles/style.css';
import AddStudent from '../../components/addStudent/AddStudent';
import { useState } from 'react';
import TableItem from '../../components/tableItem/TableItem';

export default function Home() {
    const [data, setData] = useState([
        { id: 1, name: "Shahzad", email: "shahzad@gmail.com", rollNo: "1234", city: "Faisalabad", age: "31", class: "BSCS" },
        { id: 2, name: "Ali", email: "ali@gmail.com", rollNo: "1235", city: "Islamabad", age: "25", class: "BSCS" },
        { id: 3, name: "Ahmed", email: "ahmed@gmail.com", rollNo: "1236", city: "Lahore", age: "27", class: "BSCS" },
    ]);

    const [currentStudent, setCurrentStudent] = useState(null);

    const onClickUpdateHandler = (student) => {
        console.log("student in home", student);
        setCurrentStudent(student);
    };

    const onClickDeleteHandler = (id) => {
        console.log("id in parent home", id);
        const newData = data.filter(item => item.id !== id);
        setData(newData);
    };

    const onUpdateHandler = (student, id) => {
        console.log("student in home", student, id);
        const newData = data.map((item) => {
            if (item.id === id) {
                return { ...item, ...student }; // Update all fields using spread
            }
            return item;
        });
        setData(newData);
        setCurrentStudent(null);
    };

    const onAddHandler = (student) => {
        console.log("student in home", student);
        setData([...data, { ...student, id: data.length + 1 }]);
    };

    return (
        <div className="container">
            <h1>Student App Management System</h1>
            <AddStudent onUpdateHandler={onUpdateHandler} currentStudent={currentStudent} onAddHandler={onAddHandler} />
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Roll No</th>
                        <th>City</th>
                        <th>Age</th>
                        <th>Class</th>
                        <th>Actions</th> {/* New Actions column */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <TableItem 
                            key={item.id} 
                            item={item} 
                            onClickUpdateHandler={onClickUpdateHandler} 
                            onClickDeleteHandler={onClickDeleteHandler} 
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
