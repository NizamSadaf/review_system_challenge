import React,{useState} from 'react'
import './style.css'
const StarRating = ({handleChange}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const handleRating=(num)=>{
        setRating(num)
        handleChange(num)
    }
        return (
            <div>
              <div>
                <p className={'rating'}>Rating</p>{
                  [1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      onClick={()=>handleRating(num)}
                      onMouseOver={() => setHover(num)}
                      onMouseLeave={() => setHover(rating)}
                    >
                      <span
                        className={//5<=5
                          `star ${num <= (rating || hover)
                            ? 'on' : 'off'
                          }`
                        }
                      >&#9733;</span>
                    </button>
                  ))
                }
              </div>
            </div >
          );
}

export default StarRating