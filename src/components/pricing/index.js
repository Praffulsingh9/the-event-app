import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
   state ={
       prices:[100,200,300],
       position:['Balcony','Medium','Star'],
       desc:['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor tellus libero, at viverra tortor lacinia nec. Mauris risus augue, vehicula quis nulla at, dignissim accumsan arcu.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor tellus libero, at viverra tortor lacinia nec. Mauris risus augue, vehicula quis nulla at, dignissim accumsan arcu.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor tellus libero, at viverra tortor lacinia nec. Mauris risus augue, vehicula quis nulla at, dignissim accumsan arcu.'],
    linkto : ['http://sales/b','http://sales/m','http://sales/s'],
    delay:[500,0,500]
   }

   showBoxes = () => (
       this.state.prices.map((box,i)=>(
           <Zoom key={i} delay={this.state.delay[i]}>
          <div className='pricing_item'>
          <div className="pricing_inner_wrapper">
          <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.position[i]}</span>
           </div>
           <div className="pricing_description">
               {this.state.desc[i]}
           </div>

           <div className="pricing_buttons">
               <MyButton 
               text="Purchase"
               bck="#ffa800"
               color="#fffff"
               link={this.state.linkto[i]}/>
           </div>
        </div>
    </div>


           </Zoom>
        
       ))
   )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section" >
                <h2>Pricing</h2>
                </div>
                           
                <div className="pricing_wrapper">
                {this.showBoxes()}
                
                </div>           

            </div>
        );
    }
    
}

export default Pricing;