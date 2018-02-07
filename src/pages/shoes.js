import React from 'react'

const url = 'http://shoescraper.herokuapp.com/scrape/release-dateg'

const shoeContainerStyle = {
    width: '45%',
    display: 'inline-block',
    margin: '0 1rem'
} 

class ShoePage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            shoes: [],
        }

    }

    populateShoes() {
        let self = this
        fetch(url).then(function(response) {
            return response.json()
        }).then(function(res) {
            self.setState({shoes: res.shoes})
        })
    }

    componentDidMount() {
        this.populateShoes()
    }

    render() {
        if (this.state.shoes.length !== 0) {
            return (
                <div>
                    <h3>Here are some hot shoes. These come straight from the StockX featured page.</h3>
                    
                    {this.state.shoes.map(shoe => {
                        console.log(shoe)
                        return (
                            <div style={shoeContainerStyle}>
                                <img src={shoe.src} />
                                <h6>{shoe.name}</h6>
                            </div>
                        )
                    })}
                </div>
            )
        } 

        return <h3>Loading...</h3>
    }
}

export default ShoePage
