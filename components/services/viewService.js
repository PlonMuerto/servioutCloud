import React from 'react';
import Link from 'next/link';

import Image from 'next/image';

import {CardContent,Card,Typography,CardActionArea } from '@material-ui/core';

export default function ViewService ({title,desc,link,alt,type}){
    

    return(
        <Link href={{pathname:"/servicios/[...name]",query:{name:[title,type]}}}>
        <div className="Service">
            <Card style={{ borderRadius: 20}}>
                <CardActionArea>

                    <Image src={link} alt={alt} layout="responsive" width={700} height={475} />

                    <CardContent style={{backgroundColor:"#222"}}>
                        <Typography gutterBottom variant="h5" style={{color:"whitesmoke",textAlign:"center"}} component="div">
                            {title}
                        </Typography>
                    </CardContent>

                </CardActionArea>
            </Card>
            <style jsx>
                {
                    `
                        .Service{
                            margin:30px 3px;
                            padding:0;
                            box-sizing:border-box;
                            min-width:220px;
                            max.width:480px;
                            width:25%;
                            border-radius:50px;
                        }
                    `
                }
            </style>
        </div>
        </Link>
    )
}