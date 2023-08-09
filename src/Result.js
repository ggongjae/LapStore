import React from 'react';


const Result = () =>{
    return(
        <div>
             <body>
      <header>
      <h2>고객님이 원하시는</h2>
      <input type="text" className="text"placeholder="금액" size={10} maxLength={5}></input>
      <a className='recommend'> 만원에서  &nbsp;  </a>
      <input type="text" className="text"placeholder="금액" size={10} maxLength={5}/>
       <a className='recommend'> 사이, </a>

     <button className="search_brand"> #삼성 </button>
     <button className="search_brand"> #LG </button>
     <button className="search_brand"> #애플 </button>
     <button className="search_brand"> #LENOVO </button>
     <button className="search_brand"h> #ASUS </button>

     <br></br> <br></br>
     <div>
      <button className="purpose"> #문서 정리·강의 시청 </button>
      <button className="purpose"> #그래픽 작업 </button>
      <button className="purpose"> #간단한 영상 작업 </button>
      <button className="purpose"> #3D 작업 </button>
      <button className="purpose"> #영상 작업 </button>
      </div>

      <br></br>
     <div>
      <button className="purpose"> #문서 정리·강의 시청 </button>
      <button className="purpose"> #그래픽 작업 </button>
      <button className="purpose"> #간단한 영상 작업 </button>
      <button className="purpose"> #3D 작업 </button>
      <button className="purpose"> #영상 작업 </button>
      </div>

      <br></br>

      <div>
      <a>OS &nbsp; &nbsp; Window 10 &nbsp; &nbsp; &nbsp; </a>
      <a>CPU &nbsp; &nbsp; i7-13650HX{'('}2.6GHz{')'} &nbsp; &nbsp;&nbsp; </a>
      <a>RAM &nbsp; &nbsp; DDR5 8GB*2 </a>
      </div>
      <br></br>
      <div>
      <a>HDD &nbsp; &nbsp; SSD M.2{'('}NVMe{')'} &nbsp; &nbsp;&nbsp; </a>
      <a>VGA &nbsp; &nbsp; GeForce RTX 4060  &nbsp; &nbsp; </a>

      <a className='recommend'>이상의 노트북을 추천합니다</a>
      </div>
    </header>
    

    <section>
      <div>
      <div className='product'>

        <h3>ASUS ROG STRIX G18 G814JV-N500</h3>
      </div>
      <div className='product'></div>
      </div>
      <div>
      <div className='product'></div>
      <div className='product'></div>
      </div>
      <div>
      <div className='product'></div>
      <div className='product'></div>
      </div>



    </section>

    </body>
        </div>
    )
}

export default Result;