let isActive = false
function List({ todolist, setTodolist, situation }) {
    return (
        <>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                {/* Aşağıdaki kodda ilk defa v tuşuna basıldığında tüm listedeki elemanları 
                inaktif hale getiriyor ikinci kez basıldığında ise tüm elemanları aktif hale getiriyor.*/}
                <label htmlFor="toggle-all" onClick={() => {
                    if (!isActive) {
                        const newArray = [...todolist]
                        newArray.map((item) => {
                            item.state = "inactive"
                        })
                        setTodolist([...newArray])
                        isActive = true
                    } else {
                        const newArray = [...todolist]
                        newArray.map((item) => {
                            item.state = "active"
                        })
                        setTodolist([...newArray])
                        isActive = false
                    }

                }}>

                </label>

                <ul className="todo-list">
                    {
                        todolist.map((item, index) => {
                            /*eğer All seçeneği seçildiyse aktif veya inaktif olan bütün elemanlar getirilecek*/
                            if (situation === "All") {
                                if (item.state === "active") {
                                    return (
                                        <li key={index}>
                                            <div className="view">
                                                <input className="toggle" type="checkbox" checked={false} onChange={() => {
                                                    const newArray = [...todolist]
                                                    newArray[index].state = "inactive"
                                                    setTodolist([...newArray])
                                                }} />
                                                <label>{item.text}</label>
                                                <button className="destroy" onClick={() => {
                                                    const newArray = [...todolist]
                                                    newArray.splice(index, 1)
                                                    setTodolist([...newArray])
                                                }}></button>
                                            </div>
                                        </li>)
                                }
                                else {
                                    return (
                                        <li className="completed" key={index}>
                                            <div className="view">
                                                <input className="toggle" type="checkbox" checked={true} onChange={() => {
                                                    const newArray = [...todolist]
                                                    newArray[index].state = "active"
                                                    setTodolist([...newArray])
                                                }} />
                                                <label>{item.text}</label>
                                                <button className="destroy" onClick={() => {
                                                    const newArray = [...todolist]
                                                    newArray.splice(index, 1)
                                                    setTodolist([...newArray])
                                                }}></button>
                                            </div>
                                        </li>)
                                }
                            }
                            /*eğer Active seçeneği seçildiyse aktif olan bütün elemanlar getirilecek*/
                            else if (situation === "Active") {
                                if (item.state === "active") {
                                    return (
                                        <li key={index}>
                                            <div className="view">
                                                <input className="toggle" type="checkbox" checked={false} onChange={() => {
                                                    const newArray = [...todolist]
                                                    newArray[index].state = "inactive"
                                                    setTodolist([...newArray])
                                                }} />
                                                <label>{item.text}</label>
                                                <button className="destroy" onClick={() => {
                                                    const newArray = [...todolist]
                                                    newArray.splice(index, 1)
                                                    setTodolist([...newArray])
                                                }}></button>
                                            </div>
                                        </li>)
                                }
                            }
                            /*eğer inaktif seçeneği seçildiyse inaktif olan bütün elemanlar getirilecek*/
                            else {
                                if (item.state === "inactive") {
                                    return (
                                        <li className="completed" key={index}>
                                            <div className="view">
                                                <input className="toggle" type="checkbox" checked={true} onChange={() => {
                                                    const newArray = [...todolist]
                                                    newArray[index].state = "active"
                                                    setTodolist([...newArray])
                                                }} />
                                                <label>{item.text}</label>
                                                <button className="destroy" onClick={() => {
                                                    const newArray = [...todolist]
                                                    newArray.splice(index, 1)
                                                    setTodolist([...newArray])
                                                }}></button>
                                            </div>
                                        </li>)
                                }
                            }
                        })
                    }
                </ul>
            </section>
        </>
    )
}
export default List