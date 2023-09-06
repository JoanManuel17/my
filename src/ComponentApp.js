
const categories = ['first category'];

export const ComponentApp = () => {
    return (
        <>
            <h1>ComponentApp</h1>
            <ol>
                {
                    categories.map(
                        (category, key) => 
                        {
                            return <li key={key}>{category}</li>
                        }
                    )
                }
            </ol>
        </>
    )
}

