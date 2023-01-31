import styles from "../styles/PizzaList.module.css"
import PizzaCard from "./PizzaCard.jsx"
const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae pariatur temporibus quis architecto, et minima eligendi distinctio numquam esse quo doloremque tempore qui?
      </p>
      <div className={styles.wrapper}>

        {
          pizzaList.map((pizza) => (
            <PizzaCard key={pizza._id} pizza={pizza} />
          ))
        }
      </div>
    </div>
  )
}

export default PizzaList