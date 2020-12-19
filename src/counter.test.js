import React from 'react';
import Counter from './components/Counter.js';
import {shallow} from 'enzyme';

describe('testing Counter component', () => {
    test('should counter be initially 0 if no props is used', () => {
        const wrapper = shallow(<Counter />);
        const counter = wrapper.find('.counterVal');
        expect(counter.text()).toBe('0');
    });

    test('should counter be initially 10 if props.start is 10', () => {
        const wrapper = shallow(<Counter start={10}/>);
        const counter = wrapper.find('.counterVal'); 
        expect(counter.text()).toBe('10');
    });

    test('should Counter have increment and decrement buttons', () => {
        const wrapper = shallow(<Counter/>);
        const buttons = wrapper.find('button');
    
        expect(buttons.at(0).text()).toBe('-');
        expect(buttons.at(1).text()).toBe('+');
    });

    test("should counter increase by one if '+' is pressed", () => {
        const wrapper = shallow(<Counter/>);
        const buttonInc = wrapper.find('.btn-inc');
        const counterSelector = '.counterVal';
        let counter = wrapper.find(counterSelector);

        expect(counter.text()).toBe('0');

        buttonInc.simulate('click');
        counter = wrapper.find(counterSelector);
        expect(counter.text()).toBe('1');

        buttonInc.simulate('click');
        counter = wrapper.find(counterSelector);
        expect(counter.text()).toBe('2');

        buttonInc.simulate('click');
        counter = wrapper.find(counterSelector);
        expect(counter.text()).toBe('3');
    });

    test("should counter decrease by one if '-' is pressed", () => {
        const wrapper = shallow(<Counter/>);
        const buttonDec = wrapper.find('.btn-dec');
        const counterSelector = '.counterVal';
        let counter = wrapper.find(counterSelector);

        expect(counter.text()).toBe('0');

        buttonDec.simulate('click');
        counter = wrapper.find(counterSelector);
        expect(counter.text()).toBe('-1');

        buttonDec.simulate('click');
        counter = wrapper.find(counterSelector);
        expect(counter.text()).toBe('-2');
    });

    test("should counter value be set to the value from input when button 'Zmien' is pressed", () => {
        const wrapper = shallow(<Counter />);
  
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 5}});
  
        const buttonChange = wrapper.find('.btn-change');
        buttonChange.simulate('click');
  
        const counterValue = wrapper.find('.counterVal');
        expect(counterValue.text()).toBe("5");
    });

    test("should counter value be set to the value from input when button 'Zmien' is pressed and + / - buttons continue to change the calue properly", () => {
        const wrapper = shallow(<Counter />);
    
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 5}});
    
        const buttonChange = wrapper.find('.btn-change');
        buttonChange.simulate('click');
    
        let counter = wrapper.find('.counterVal');
        expect(counter.text()).toBe("5");

        const buttonDec = wrapper.find('.btn-dec');
        const buttonInc = wrapper.find('.btn-inc');

        buttonInc.simulate('click');
        counter = wrapper.find('.counterVal');
        expect(counter.text()).toBe("6");

        buttonDec.simulate('click');
        counter = wrapper.find('.counterVal');
        expect(counter.text()).toBe("5");

        
    });

    test("should Reset button reset the counter to initial state 0", () => {
        const wrapper = shallow(<Counter />);
        
        const buttonReset = wrapper.find('.btn-reset');
        buttonReset.simulate('click');
        
        const value = wrapper.find('.counterVal');
        expect(value.text()).toBe("0");
    });

    test("should Reset button reset the counter to initial state 5", () => {
        const wrapper = shallow(<Counter start="5"/>);
        
        const buttonReset = wrapper.find('.btn-reset');
        buttonReset.simulate('click');
        
        const value = wrapper.find('.counterVal');
        expect(value.text()).toBe("5");
    });
});