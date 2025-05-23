
// const Docs = async ({params} : {params: Promise<{slug : string[]}>}) => {
//     const {slug} = await params
//     if(slug?.length === 2) {
//         return (
//             <h1>Viewing docs for feature {slug[0]} and concept {slug[1]}</h1>
//         )
//     }
    
//     else if(slug?.length === 1) {
//         return (
//             <h1>Viewing docs for feature {slug[0]}</h1>
//         )
//     }
// };

// export default Docs;


interface slugDetails {
    params : {
        slug : string[]
    }
}

const Docs = async ({params} : slugDetails) => {
    const realParams = await params 
    const {slug} = realParams
    
    if(slug?.length === 2) {
        return (
            <h1>Gets params from url one: {slug[0]} and also two: {slug[1]}</h1>
        )
    }
    else if(slug?.length === 1) {
        return (
            <h1>Gets params from url just one: {slug[0]}</h1>
        )
    }
    return (
        <h1>Docs home page</h1>
    )
};

export default Docs;