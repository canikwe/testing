import React from 'react'
//import anything we are testing
import manageBand from './manageBand'



describe( 'Manage Band Reducer: ', () =>{



// does it initalize correctly?
    const mockInitAction = { type: '@@init'}
    const mockAddBand = { type: 'ADD_BAND', name: 'Ruby and the Railers' }

it('Init correctly', () =>{
    expect(manageBand(undefined, mockInitAction)).toEqual( { bands: [] })
}) 


it('Adds Bands correctly: ', ()=>{
    expect(manageBand({ bands: [] } , mockAddBand)).toEqual( { bands: [{id: 1, name: 'Ruby and the Railers'}]})
})

})