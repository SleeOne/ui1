import React from 'react';

import './App.css'

import * as theme from './theme'
import Block from './hoc/Block'


const App = () => {

  return (
    <div className={'container'}>
      <header>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <Block middle flex={2.5} className="logo">Landie</Block>
        <Block right>
          <button className={'colored'}>Buy Now</button>
        </Block>
      </header>
      <main>
        <section className={'section1'}>
          <Block column flex={0.4} style={{marginTop: 200}}>
            <h1>Introduce Your Product Quickly & Effectively</h1>
            <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
              eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus

              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
              enim.
            </h3>
            <Block top style={{marginTop: 70}}>
              <button className={'colored large'}>Purchase UI Kit</button>
              <button className={'light large'} style={{marginLeft: 30}}>Learn More</button>
            </Block>
          </Block>
        </section>
        <section className="section2">
          <Block column flex={0.4}>
            <h1>Light, Fast & Powerful</h1>
            <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
              massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </h3>

            <Block style={{marginTop: 80}}>
              <Block column top>
                <img src={require("./assets/img/e.svg")}/>
                <h2>Title Goes Here</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
              </Block>
              <Block column top>
                <img src={require("./assets/img/e.svg")}/>
                <h2>Title Goes Here</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
              </Block>

            </Block>
          </Block>
        </section>
        <section className="section3">
          <Block column flex={0.4}>
            <h1>Light, Fast & Powerful</h1>
            <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
              massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </h3>
          </Block>
        </section>
        <section className="section4">
          <Block column flex={0.4}>
            <h1>Light, Fast & Powerful</h1>
            <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
              massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </h3>
          </Block>
        </section>
      </main>
    </div>
  );
}


export default App;
