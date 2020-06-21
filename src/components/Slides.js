import React from 'react';

class Slides extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        counter: 0
      }
  this.handleNext = this.handleNext.bind(this);
  this.handlePrev = this.handlePrev.bind(this);
  this.handleReset =this.handleReset.bind(this);
  };

   handleReset(){
    this.setState({
      counter : 0
    })
  }

  handleNext(){
    if(this.state.counter < 4){
      this.setState({
        counter : this.state.counter +1
      })
    }
  };

  handlePrev(){
    if(this.state.counter > 0){
      this.setState({
        counter : this.state.counter -1
      })
    }
  };

  render() {
    const { slides } = this.props;
    let reset;
    let next; 
    let prev;
    if(this.state.counter !==0){
     reset =  <button data-testid="button-restart" onClick = { this.handleReset }>Restart</button>
    }else{
      reset =  <button data-testid="button-restart" onClick = { this.handleReset } disabled>Restart</button>
    };
    if(this.state.counter !==4){
      next =  <button data-testid="button-restart" onClick = { this.handleNext }>Next</button>
     }else{
       next =  <button data-testid="button-restart" onClick = { this.handleNext } disabled>Next</button>
     };
     if(this.state.counter !==0){
      prev =  <button data-testid="button-restart" onClick = { this.handlePrev }>Prev</button>
     }else{
       prev =  <button data-testid="button-restart" onClick = { this.handlePrev } disabled>Prev</button>
     }
    let slide = slides.map((slide)=>{
      return(
        <div id="slide">
          <h1 data-testid="title">{ slide.title}</h1>
          <p data-testid="text">{slide.text}</p>
        </div>
      )
    })
  
    return (
      <div>
        <div id="navigation">
          {reset}
          {prev}
          {next}
        </div>
        {slide[this.state.counter]}
      </div>
    );
  }
}

export default Slides;
