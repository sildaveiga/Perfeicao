import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Trivago",
      img: "https://media.glassdoor.com/sqll/673041/trivago-squarelogo-1606479467545.png",
      customer: "Sara Veiga",
      date: "1 Janv",
      amount: 785,
      method: "Paiement sur place",
      status: "Approuvé",
    },
    {
      id: 2235235,
      product: "Expedia",
      img: "https://mma.prnewswire.com/media/1528198/Expedia_Logo.jpg?p=twitter",
      customer: "Nuno Lopes",
      date: "6 Fev",
      amount: 900,
      method: "Paiement sur place",
      status: "En attente",
    },
    {
      id: 2342353,
      product: "Lastminute",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Logo_lastminute%3Bcom.jpg/800px-Logo_lastminute%3Bcom.jpg",
      customer: "Yasmine Pereira",
      date: "1 Jun",
      amount: 35,
      method: "Paiement sur place",
      status: "En attente",
    },
    {
      id: 2357741,
      product: "Booking",
      img: "https://content.presspage.com/clients/o_685.jpg",
      customer: "Emanuel Gomes",
      date: "1 Mai",
      amount: 920,
      method: "Paiement sur place",
      status: "Approuvé",
    },
    {
      id: 2342355,
      product: "Kayak",
      img: "https://logos-marques.com/wp-content/uploads/2021/06/Kayak-Logo-3.png",
      customer: "Maria Furtado",
      date: "1 Avril",
      amount: 2000,
      method: "Paiement sur place",
      status: "En attente",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Suivi du site ID</TableCell>
            <TableCell className="tableCell">Produit</TableCell>
            <TableCell className="tableCell">Clients</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Montant </TableCell>
            <TableCell className="tableCell">Mode de paiement</TableCell>
            <TableCell className="tableCell">Statut</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
