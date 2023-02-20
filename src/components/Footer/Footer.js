import { useState, useEffect } from 'react'




function Footer({ situation, setSituation, todolist, setTodolist }) {
    const [itemCount, setItemCount] = useState(0)
    /*todolistte değişen eleman olduğu anda toplam elemanların
     aktiflik durumu hesaplanıyor ve itemCount yeniden hesaplanıyor*/
    useEffect(() => {
        let count = 0
        const newArray = [...todolist]
        newArray.map((item) => {
            if (item.state === "active") {
                count += 1
            }
            setItemCount(count)
        })
    }, [todolist])
    const onClickAvailable = (e) => {
        setSituation(e.target.name)
    }
    const activeButton = () => {
        const newArray = todolist.filter(item => item.state === "active")
        setTodolist(newArray)
    }

    return (
        <>
            <footer className="footer">
                <span className="todo-count">
                    {/* Hesaplanan item count değeri ...items left yazan yere geliyor */}
                    <strong>{itemCount} </strong>
                    items left
                </span>

                <ul className="filters">
                    {/* Linklerin seçilip seçilmeme durumu kontrol ettirilip css class belirleniyor */}
                    <li>
                        <a name="All" href="#/" onClick={onClickAvailable} className={situation === "All" ? "selected" : ""}>All</a>
                    </li>
                    <li>
                        <a name="Active" href="#/" onClick={onClickAvailable} className={situation === "Active" ? "selected" : ""}>Active</a>
                    </li>
                    <li>
                        <a name="Completed" href="#/" onClick={onClickAvailable} className={situation === "Completed" ? "selected" : ""}>Completed</a>
                    </li>
                </ul>

                <button className="clear-completed" onClick={activeButton}>
                    Clear completed
                </button>
            </footer>
        </>

    )
}

export default Footer