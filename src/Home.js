//import React,{useContext} from 'react';
import Movies from './Movies';
//import { AppContext } from "./contex";
//import { useGlobalContext } from "./contex";
import Search  from "./Search";

const Home = () => {
  //const name = useContext(AppContext);
  //const name = useGlobalContext();
  return (
  <>
  <Search />
  <Movies />
  </>
  );
};

export default Home