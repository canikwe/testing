import React from 'react'
import { shallow } from 'enzyme'
//import components
import Bands from './Bands'
import Band from './Band'



describe('Testing Bands Component', ()=>{
    let mockProps = {
        bands: [{ id: 1, name: "Sinatra and the Railers"}, {id: 2, name: "warm up band"}]
    }

    let wrapper = shallow(<Bands {...mockProps}/>)

    it('Does it render Bands', ()=>{
        expect(wrapper.find(Band).length).toBe(mockProps.bands.length)
    })

})