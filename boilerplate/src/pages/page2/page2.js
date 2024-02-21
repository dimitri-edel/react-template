import { useLocation } from "react-router-dom";

function Page2(props) {
    const location = useLocation();
    // Read sent from page1
    const { data } = location.state;
    const data_array = ["first", "second", "third"];
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div>
            <h1>Page 2</h1>
            <div>
                <p>Name: {data.name}</p>
                <p>Age: {data.age}</p>
                {data_array.map((item, index) => (
                    /* If the item is "first" then display "something", otherwise display the item */
                    <p key={index}>{(item === "first") ? "something" : item}</p>
                ))}
                {nums.filter(num => num % 3 == 0).map((num, index) => (
                    /* Display all numbers that are divisible by 3 */
                    <p key={index}>{num}</p>
                ))
                }


            </div>
        </div>

    )
}

export default Page2;