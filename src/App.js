import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header";
import Home from "./pages/Home";
import { data, category } from './Data'
import { useState } from 'react';


function App() {

  const [filtereData, setFiltereData] = useState(data);
  const [record,setRecord] = useState(data);

  let allData = filtereData.length > 0 ? filtereData : record

  const filterButton = (cat) => {
    const alldata = data.filter(movie => movie.category === cat);
    setFiltereData(alldata);
  };

  const searchName = (value) => {
    let s = data.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    })
    setFiltereData(s)
  }

  return (
    <>
      <Header category={category} filterdata={filterButton} searchName={searchName} />
      <Home allData={allData}  />
    </>
  );
}

export default App;
