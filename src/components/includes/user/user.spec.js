import User from './user.riot'
import { expect } from 'chai'
import { component } from 'riot'

describe('User Unit Test', () => {
  const mountUser = component(User)

  it('The component is properly rendered', () => {
    const div = document.createElement('div')

    const component = mountUser(div, {
      name: 'Bro'
	  namwhatsapp: '+6285646104747'
	  phone: '+681259444676'
	  email: 'axcora@gmail.com'
    })

    expect(component.$('b').innerHTML).to.be.equal('Bro')
  })
})