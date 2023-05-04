// import React,{useEffect,useState} from 'react';
// import { db } from './firebase';
// import { getDocs, doc, collection,query } from 'firebase/firestore';
// import { useAuth } from './context/AuthContext';
// import Table from 'react-bootstrap/Table';
// import DataTable from 'react-data-table-component';
// var arr=[]
//  const Home = () => {
//     const { logIn } = useAuth();
//     const [result,setResult] =useState([])
//     const column =[
//         {
//             name:'Branch',
//             selector:row =>  row.branch
//         },
//         {
//             name:'Service Rating',
//             selector:row =>  row.servicerating

//         },
//         {
//             name:'Service Rating Message',
//             selector:row =>  row.servicemessage

//         },
//         {
//             name:'Counter Rating',
//             selector:row =>  row.counterrating

//         },


//         {
//             name:'Counter Rating Message',
//             selector:row =>  row.countermessage

//         },
//         {
//             name:'Customer Survey',
//             selector:row =>  row.customersurvey

//         },
//         {
//             name:'Customer Phone',
//             selector:row =>  row.customerphone

//         }
//     ]
//     useEffect(() => {
//   getData();
// }, []);


// const   getData = async () => {
  
// //     const citiesRef = collection(db, "rating");

// //     const docRef = doc(db, "rating","OJ8nlNCLKeXxJRLGgICj");
// // const docSnap = await getDoc(citiesRef);
// const querySnapshot = await getDocs(collection(db, "rating"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
//   arr.push(doc.data())
// });

// console.log(JSON.stringify(arr))

//     }

//     return (
//         <div>
       

     
 
   

  

   
    
    
   
    
         
     
         
     
//         </div>
//     );
// }

// export default Home;

// import MaterialTable from "material-table";
import React,{useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { db } from './firebase';
import { getDocs, doc, collection,query } from 'firebase/firestore';
function createData(name, calories, fat, carbs, protein, market) {
  return { name, calories, fat, carbs, protein, market };
}

const rows = [
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3,'bb'),
//   createData('Eclair', 262, 16.0, 24, 6.0,'bb'),
//   createData('Cupcake', 305, 3.7, 67, 4.3,'bb'),
//   createData('Gingerbread', 356, 16.0, 49, 3.9,'bb'),
];
var arr=[]

export default function Home() {
  const [data, setData] = useState([]);
  const [branch, setBranch] = useState('');
  const [serviceRating, setServiceRating] = useState(0);
  const [servicemessage, setServicemessage] = useState([]);
  const [counterRating, setCounterRating] = useState(0);
  const [countermessage, setCountermessage] = useState([]);
  const [userSurvey, setUserSurvey] = useState([]);
  useEffect(() => {
    getData();
  }, []);


const   getData = async () => {
const querySnapshot = await getDocs(collection(db, "rating"));
  querySnapshot.forEach((doc) => {
    arr = (doc.data()); 
    console.log(arr)
    setBranch(arr.loginbranch)
    setServiceRating(arr.reratingcount)
    setServicemessage(arr.reratingdata)
    setCounterRating(arr.counterratingcount)
    setCountermessage(arr.counterratingdata)
    setUserSurvey(arr.surveydata)
    
  });

  console.log('branch', branch);
  console.log('service rating', serviceRating);
  console.log('service message', servicemessage);
  console.log('counter rating', counterRating);
  console.log('counter message', countermessage);
  console.log('user survey', userSurvey);



    }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Branch</TableCell>
            <TableCell align="right">Service Rating</TableCell>
            <TableCell align="right">Message</TableCell>
            <TableCell align="right">Counter Rating</TableCell>
            <TableCell align="right">Message</TableCell>
            <TableCell align="right">User Survey</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {branch}
              </TableCell>
              <TableCell align="right">{serviceRating}</TableCell>
              <TableCell align="right">
                {servicemessage.map(m=> <span>{m.name}</span>)}
              </TableCell>
              <TableCell align="right">{counterRating}</TableCell>
              <TableCell align="right">{countermessage.map(m=> <span>{m.name}</span>)}</TableCell>
              <TableCell align="right">{userSurvey}</TableCell>

            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
