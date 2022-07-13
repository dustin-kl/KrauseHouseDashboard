import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
//import { DataGrid } from "@material-ui/data-grid";
//import { withStyles, makeStyles } from "@material-ui/core/styles";
import myData from '../ranking_persons.json';


// const useStyles = makeStyles({
//   root: {
//     backgroundColor: "#F4EFE9",
//   },
//   gradtext: {
//     backgroundImage: "linearGradient(to bottom, #FF005B, #FFD4A9)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//   },
// });
//jo


export default function Home() {

  // const classes = useStyles();

  const columns = [
    {
      field: "ranking",
      headerName: "Ranking",
      width: "150",
      align: "left",
    },
    {
      field: "id",
      headerName: "User ID",
      width: "250",
      align: "left",
    },
    {
      field: "name",
      headerName: "User Name",
      sortable: false,
      width: "250",
      align: "left",
    },
    {
      field: "activity",
      headerName: "Activity Score",
      sortable: false,
      width: "200",
      align: "left",
    },
    {
      field: "connotation",
      headerName: "Connotation Score",
      sortable: false,
      width: "200",
      align: "left",
    },
    {
      field: "reaction",
      headerName: "Reaction Score",
      width: "200",
      align: "left",
    },
    {
      field: "community",
      headerName: "Final Community Score",
      sortable: false,
      width: "250",
      align: "left",
    },
  ];

  const rows = Object.keys(myData).map((index) => {
    return {
      ranking: index,
      id: myData[index].id,
      name: myData[index].name,
      activity: myData[index].messages,
      connotation: myData[index].connotation_scores,
      reaction: myData[index].reactions,
      community: myData[index].community_score
    };
  });


  return (
    <div
      style={{
        backgroundColor: "#0F0F12",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginLeft: "120px",
          marginRight: "120px",
        }}
      >
        <h1
          style={{
            fontSize: "75px",
            fontFamily: "SK Cuber",
            color: "white",
            textAlign: "center",
          }}
        >
          🏀 Krause House Community Dashboard 🏀
        </h1>
      </div>

      <main className={styles.main}>
        {/* <div
          style={{
            height: "80px",
            fontSize: "10px",
            color: "white",
            width: "80%",
          }}>
          <button
            className={styles.btn}
            style={{
              height: "70px",
              width: "150px",
              fontSize: "30px",
              marginRight: "30px",
              fontFamily: "SK Cuber",
              alignContent: "left",
            }}
          //onClick={() => executeDummy()}
          >
            Refresh
          </button>
        </div> */}
        <div
          style={{
            height: "1150px",
            fontSize: "10px",
            color: "white",
            width: "80%",
          }}
        >
          {/* <DataGrid
            className={classes.root}
            rows={rows}
            columns={columns}
            pageSize={20}
            rowsPerPageOptions={[20]}
          /> */}
        </div>
      </main>

    </div>
  )
}

