
const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

export const ComponentApp = () => {
    return (
        <>
            <h1>GifExpert</h1>
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

