import './itemcard.css';

const item = (param) => {
    return(
        <>
            <div id="card" className={param.flip}>
                {/* {param.link} */}
                    {/* <a href="https://github.com/Virulentis" className={param.isLink}> */}
                    
                    <img src = {param.src} id="profile_photo"></img>



                        {/* <span id="project_link">Github</span> */}


                   {/* </a> */}

                
                
                
                <div id="explanation">
                    <h1 id="title">{param.title}</h1>
                    <div id="desc">{param.desc}</div>
                </div>
                
            </div>
        </>
    )
};

export default item


