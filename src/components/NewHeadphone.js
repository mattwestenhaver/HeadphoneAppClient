import React from 'react'

class NewHeadphone extends React.Component {

  render() {
    return (
      <div className='newHeadphone'>
        <form>
          <h2>Add headphones:</h2>
          <div>
            <input type='text' ref='brand' placeholder='brand'></input>
          </div>
          <div>
            <input type='text' ref='model' placeholder='model'></input>
          </div>
          <div>
            <input type='number' ref='price' placeholder='price'></input>
          </div>
          <div>
            <button type='submit'>Add Headphone</button>
          </div>
        </form>
      </div>
    )
  }
  
}

export default NewHeadphone
