import React from 'react';


function Jumbotron() {
    return (
      <section>
        <div class="wrap">
          <div class="line">
            <div class="left">
              <div class="content">
                <span class="spanSlow">Do what</span>
              </div>
            </div>

            <div class="right">
              <div class="content">
                <span class="spanSlow">Do what</span>
              </div>
            </div>
          </div>

          <div class="line">
            <div class="left">
              <div class="content">
                <span class="spanSlow">you love</span>
              </div>
            </div>
            
            <div class="right">
              <div class="content">
                <span class="spanSlow">you love</span>
              </div>
            </div>
          </div>

          <div class="line">
            <div class="left">
              <div class="content">
                <span class="spanFast">Love what</span>
              </div>
            </div>
            
            <div class="right">
              <div class="content">
                <span class="spanFast">Love what</span>
              </div>
            </div>
          </div>

          <div class="line">
            <div class="left">
              <div class="content">
                <span class="spanSlow">you do</span>
              </div>
            </div>

            <div class="right">
              <div class="content">
                <span class="spanSlow">you do</span>
              </div>
            </div>
          </div>
        </div>

        <div class="icon-scroll"></div>
      </section>
    );
}

export default Jumbotron;