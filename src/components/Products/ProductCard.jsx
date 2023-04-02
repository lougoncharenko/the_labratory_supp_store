import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

export default function SupplementCard({data, type, inputText, setSupplementDetail}){
    const filteredData = data.filter((d) => {
        if (inputText === '') {
            return d;
        }
        else if (type === data.type) {
          return  d.type.toLowerCase().includes(type)
        }
        else {
            return d.product_name.toLowerCase().includes(inputText) && d.type.toLowerCase().includes(type)
        }
    })

    return (
        <Container sx={{ py: 4 }} maxWidth="lg">
          <Grid container spacing={4}>
            {filteredData.map((data) => (

              <Grid item key={data.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      pt: '5.25%',
                    }}
                    image={data.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                     {data.product_name}
                    </Typography>
                    <Typography>
                    {data.company}
                    </Typography>
                    <Typography>
                    {data.formed}
                    </Typography>
                    <Typography>
                      ${data.cost}
                    </Typography>
                    <div className='button-container'>
                    <Link to={`/shop/${data.id}`}>
                        <motion.button 
                        whileHover={{scale: 1.2}}
                        id = {data.ID}
                        onClick={() => {
                            setSupplementDetail(data);
                          }}
                        > Click to view details
                        </motion.button>
                    </Link>
                </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    )
}
