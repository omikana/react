import { useEffect, useState } from "react";
import {instance}  from "../libs/axios";
import styles from './Row.module.css'

type Movie = {
    id: string;
    name: string;
    title: string;
    original_name: string;
    poster_path: string;
    backdrop_path: string;
};

type Props = {
    isLargeRow?:boolean;
    title:string;
    fetchUrl: string;
    // fetchUrl: keyof typeof requests;
}

export const Row =(props:Props)=>{
    console.log(props.fetchUrl);
    const [moveis,setMoveis] =useState<Movie[]>([])
    console.log(moveis);
    useEffect(()=>{
        (async()=>{
            const res = await instance.get<{results:Movie[]}>
                (
                    props.fetchUrl
                )
            setMoveis(res.data.results)
        })()
    },[props.fetchUrl,setMoveis])
        return(
            <div className={'Row'}>
                <h2>{props.title}</h2>
                <div className={styles.list}>
                {moveis.map((movie)=>{
        return (
        <div key="movie.id" className={styles.item}>
            <div>{movie.title}</div>
            <img className={styles.image} style={{aspectRatio: props.isLargeRow ? '9/18' : '16/9'}} src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} alt="" />

        </div>
        )
    })}
            </div>

        </div>
    )
}


        {/* <div className={styles.imageWrpper} style={{paddingTop:`${(9 / 16) * 100}%`}}> */}
        {/* </div> */}