import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

//remove expense test 
test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

//Setup test case, call editExpense then make an assertion 
test('set up edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note'
        }
    });
});

//addExpense test case
test('should set up add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        note: 'This was last month rent',
        amount: 109500, 
        createdAt: 1000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});
