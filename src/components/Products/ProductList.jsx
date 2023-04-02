import React from "react";
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProductCard from './ProductCard';
import proteinData from '../../data/protein.json'
import preworkoutData from '../../data/preworkout.json'
import creatineData from '../../data/creatine.json'

const theme = createTheme(); 

export default function ProductList({ inputText, setSupplementDetail}) {

    return (
        <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
      </AppBar>
      <main>
          <ProductCard productType={'Protein Powders'} data={proteinData} inputText={inputText} setSupplementDetail={setSupplementDetail}/>
          <ProductCard productType={'Pre-workout Supplements'} data={preworkoutData} inputText={inputText} setSupplementDetail={setSupplementDetail}/>
          <ProductCard productType={'Creatine Powders'} data={creatineData} inputText={inputText} setSupplementDetail={setSupplementDetail}/>

      </main>
    </ThemeProvider>
    )
}