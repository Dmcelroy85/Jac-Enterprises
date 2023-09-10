import React from "react"

function Home() {
    return (
    <div className="container">
    <div className="d-flex flex-row justify-content-evenly mt-5 gap-4">
        <div className="flex-fill p-4 rounded-5 border border-3 border-danger shadow-lg">Flex item 1<br/>Flex item 1<br/>Flex item 1<br/>Flex item 1<br/></div>
        <div className="flex-fill p-4 rounded-5 border border-3 border-danger shadow-lg">Flex item 2<br/>Flex item 2<br/>Flex item 2<br/>Flex item 2<br/>Flex item 2<br/>Flex item 2</div>
        <div className="flex-fill p-4 rounded-5 border border-3 border-danger shadow-lg">Flex item 3</div>
    </div>
    </div>
    )
}

export default Home