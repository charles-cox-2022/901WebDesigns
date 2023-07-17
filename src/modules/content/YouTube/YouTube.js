const YouTube = () => {
    //&list=RDMM&start_radio=1
    //https://www.youtube.com/embed/list=$v=Mvvsa5HAJiI&list=RDMM&start_radio=1
    return(
        <div>
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/7tkbzxa8MFQ" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
            >
            </iframe>
        </div>
    )
}
export default YouTube