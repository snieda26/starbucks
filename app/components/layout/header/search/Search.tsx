import styles from './Search.module.scss'


type Props = {}

const Search = (props: Props) => {
    return (
        <div className={styles.search}>
            <input type="text" placeholder='type here....' />
        </div>
    )
}

export default Search