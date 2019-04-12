import React from 'react'
//enzyme dependancies 
import { shallow } from 'enzyme'

//component needs 
import Band from './Band'


describe('Band component tests', ()=>{
    let mockProps = {
        id: 1,
        name: "wrm up band",
        deleteBand: jest.fn()
    }
    let wrapper = shallow(<Band {...mockProps} />);
    it('Renders correctly w snapshot', ()=>{
        expect(wrapper).toMatchSnapshot();
    } )

    it("deletes band onClick", () => {
        wrapper.find("button").simulate("click");
        expect(mockProps.deleteBand).toBeCalledWith(mockProps.id)
    })
})