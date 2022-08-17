import styles from "./MovieCard.module.css"
export function MovieCard({movie}){
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return <li width={230} height={345} className={styles.movieCard}>
        <img className={styles.movieImage} src={imageUrl} alt={movie.title}></img>
        {movie.title}
        <br></br>
        </li>
}