import React, { Component } from 'react';
// import {Router} from "@reach/router";

class Slideoutcomp extends Component {
  
  render() {
    return (
      <div>
          <nav id="menu" class="menu">
            <a href="https://github.com/mango/slideout" target="_blank">
                <header class="menu-header">
                <span class="menu-header-title">Tests</span>
                </header>
            </a>

            <section class="menu-section">
                <h3 class="menu-section-title">Docs</h3>
                <ul class="menu-section-list">
                <li><a href="https://github.com/mango/slideout#installation" target="_blank">Installation</a></li>
                <li><a href="https://github.com/mango/slideout#usage" target="_blank">Usage</a></li>
                <li><a href="https://github.com/mango/slideout#api" target="_blank">API</a></li>
                <li><a href="https://github.com/mango/slideout#npm-scripts" target="_blank">npm-scripts</a></li>
                </ul>
            </section>

            <section class="menu-section">
                <h3 class="menu-section-title">Docs</h3>
                <ul class="menu-section-list">
                <li><a href="https://github.com/mango/slideout#installation" target="_blank">Installation</a></li>
                <li><a href="https://github.com/mango/slideout#usage" target="_blank">Usage</a></li>
                <li><a href="https://github.com/mango/slideout#api" target="_blank">API</a></li>
                <li><a href="https://github.com/mango/slideout#npm-scripts" target="_blank">npm-scripts</a></li>
                </ul>
            </section>

            <section class="menu-section">
                <h3 class="menu-section-title">Docs</h3>
                <ul class="menu-section-list">
                <li><a href="https://github.com/mango/slideout#installation" target="_blank">Installation</a></li>
                <li><a href="https://github.com/mango/slideout#usage" target="_blank">Usage</a></li>
                <li><a href="https://github.com/mango/slideout#api" target="_blank">API</a></li>
                <li><a href="https://github.com/mango/slideout#npm-scripts" target="_blank">npm-scripts</a></li>
                </ul>
            </section>

            <section class="menu-section">
                <h3 class="menu-section-title">Docs</h3>
                <ul class="menu-section-list">
                <li><a href="https://github.com/mango/slideout#installation" target="_blank">Installation</a></li>
                <li><a href="https://github.com/mango/slideout#usage" target="_blank">Usage</a></li>
                <li><a href="https://github.com/mango/slideout#api" target="_blank">API</a></li>
                <li><a href="https://github.com/mango/slideout#npm-scripts" target="_blank">npm-scripts</a></li>
                </ul>
            </section>
            </nav>

            <main id="panel" class="panel">
            <header class="panel-header">
                <button class="btn-hamburger js-slideout-toggle"></button>
                <h1 class="title">Slideout.js</h1>
            </header>

            <section class="box">
                <h2 class="box-title">Test</h2>
                <div id="mocha" class="box-content"></div>
            </section>

            <footer class="panel-footer">
                <p>with <span class="heart">❤</span> by <a href="https://getmango.com/en" target="_blank">Mango</a></p>
            </footer>
            </main>
      </div>
    );
  }
}

export default Slideoutcomp;
