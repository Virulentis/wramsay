import './itemcard.css';

const item = (param) => {
    return(
        <>
            <div id="card" className={param.flip}>
                <div id="profile_div">
                    <img src = {param.src} id="profile_photo" className='d-block mx-lg-auto img-fluid rounded-circle'></img>
                </div>
                
                <div id="explanation">
                    <h1 id="title">{param.title}</h1>
                    <div id="desc">{param.desc}</div>
                </div>
                
            </div>
        </>
    )
};

export default item


// className='img-fluid img-rounded rounded-circle ratio-1x1 overflow-hidden'