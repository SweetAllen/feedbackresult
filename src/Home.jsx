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
import { getDocs, doc, collection,query, onSnapshot } from 'firebase/firestore';
function createData(name, calories, fat, carbs, protein, market) {
  return { name, calories, fat, carbs, protein, market };
}

const rows = [
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3,'bb'),
//   createData('Eclair', 262, 16.0, 24, 6.0,'bb'),
//   createData('Cupcake', 305, 3.7, 67, 4.3,'bb'),
//   createData('Gingerbread', 356, 16.0, 49, 3.9,'bb'),
];


export default function Home() {
  const [data, setData] = useState([])
  const [branch, setBranch] = useState('');
  const [serviceRating, setServiceRating] = useState(0);
  const [servicemessage, setServicemessage] = useState([]);
  const [counterRating, setCounterRating] = useState(0);
  const [countermessage, setCountermessage] = useState([]);
  const [userSurvey, setUserSurvey] = useState([]);

  useEffect(() => {
    const colRef = query(collection(db, "rating"))
    const   getData = async () => {
      const data = await onSnapshot(colRef,(querySnapshot)=>{
        let array = [];
        querySnapshot.forEach(doc=>{
          array.push({...doc.data()})
        })
        setData(array)
      });
    }
    getData();
  }, []);
console.log(data);



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <h3>
              Branch
              </h3>
            </TableCell>
            <TableCell align="center">
            <h3>

              Service Rating
              </h3>
              </TableCell>
            <TableCell align="center">
              <h3>
              Message
              </h3>
            </TableCell>
            <TableCell align="center">
              <h3>
              Counter Rating
              </h3>
            </TableCell>
            <TableCell align="center">
              <h3>
              Message
              </h3>
            </TableCell>
            <TableCell align="center">
              <h3>
              User Survey
              </h3>
            </TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          
            {
              data.map(d=>{
                console.log(d)
                return (
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center">{d.loginbranch.replace('@gmail.com', '').toUpperCase()}</TableCell>
                    <TableCell align="center">{d.reratingcount}</TableCell>
                    <TableCell align="center" >
                      {/* {d.reratingdata.map(d=>d.name)} */}
                        {
                          d.reratingdata.map((d)=>(
                              <div>
                               {d.name}
                               </div>
                          )
                               
                          )
                      
                        }
                    </TableCell>
                    <TableCell align="center">{d.counterratingcount}</TableCell>
                    <TableCell align="center">
                    {
                          d.counterratingdata.map((d)=>(
                              <div>
                               {d.name}
                               </div>
                          )
                               
                          )
                      
                        }
                      {/* {d.counterratingdata.map(d=>d.name)} */}
                    
                    </TableCell>
                    <TableCell align="center">
                         <div>
                         {d.cusph}

                         </div>
                         <div>
                         {d.surveydata}

                          </div>                      
                      </TableCell>

                  </TableRow>
                )
              })
            }
          
        </TableBody>
      </Table>
    </TableContainer>
   
  );
}