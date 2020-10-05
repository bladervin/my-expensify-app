import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />)
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with empty message', () => {
    //see what happens when you pass an empty array in expenses
    const wrapper = shallow(<ExpenseList expenses={[]} />) 
    expect(wrapper).toMatchSnapshot();
})
