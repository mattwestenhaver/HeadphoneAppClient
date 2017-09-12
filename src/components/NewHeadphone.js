import React from 'react'
import axios from 'axios'

class NewHeadphone extends React.Component {

  newHeadphone(evt) {
    evt.preventDefault()
    console.log('in the function')
    const formData = {
      brand: this.refs.brand,
      model: this.refs.model,
      price: this.refs.price
    }
    axios({
      method: "POST",
      url: 'http://localhost:3001/headphones',
      data: formData
    }).then((response) => {
      console.log(response)
    })
  }

  render() {
    return (
      <div className='newHeadphone'>
        <form onSubmit={this.newHeadphone.bind(this)}>
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
