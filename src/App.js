import logo from './logo.svg';
import React, { Component } from 'react';
import { CopyBlock, github } from 'react-code-blocks';
import './App.scss';
import './App.css';


const ids = {
  mainbutton: "algoswap-btn"
}
const myObject = {
  assetid: 0,
  assetid2: 137594422,
  pool: "F5YT2BPHPNCLHR44ZKWJOE6Z7RMVAZSX4KIWMEBYSKGBFEF7KJJ742QYT4",
  input: false
}

var mods = ""

const snippetA = '<noscript>AlgoSwap</noscript><script>window.swapDetails = '

const snippetB = '</script><link href="https://unpkg.com/algoswap@1.1.0/dist/index.css" rel="stylesheet"><div id="swap-root"></div><script src="https://unpkg.com/algoswap@1.1.0/dist/src.a2b27638.js"></script>'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      assetName: "Algo",
      assetName2: "HDL",
      factor: 1000000,
      code: "",
      index: 0,
    };
  }

  generate = async () => {
    mods = "";
    let mbcolor = document.getElementById("mbcolor").value;
    let mbwidth = document.getElementById("mbwidth").value;
    let mbtextcolor = document.getElementById("mbtextcolor").value;
    if (mbcolor !== "") { mods += 'document.getElementById("' + ids.mainbutton + '").style.backgroundColor = "' + mbcolor + '";' }
    if (mbwidth !== "") { mods += 'document.getElementById("' + ids.mainbutton + '").style.width = "' + mbwidth + '";' }
    if (mbtextcolor !== "") { mods += 'document.getElementById("' + ids.mainbutton + '").style.color = "' + mbtextcolor + '";' }

    let end = (mods !== "") ? '<script>' + mods + '</script>' : ""
    let codeb = snippetA + JSON.stringify(myObject) + snippetB + end;
    this.setState({ code: codeb });
    var doc = document.getElementById('preview').contentWindow.document;
    doc.open();
    doc.write(codeb);
    doc.close();
  }

  handleChange = (event) => {
    let id = event.target.id;
    let value = event.target.value;
    switch (id) {
      case "at": myObject.amount = value * this.state.factor;
        break;
      case "nt": myObject.pool = value;
        break;
      case "indx": this.setState({ index: parseInt(value) }); myObject.assetid = parseInt(value); this.getZeros(parseInt(value),"assetName");
        break;
      case "indx2": this.setState({ index2: parseInt(value) }); myObject.assetid2 = parseInt(value); this.getZeros(parseInt(value),"assetName2");
        break; 
      case "rec": myObject.recipient = value;
        break;
      case "customize": myObject.input = document.getElementById(id).checked
        break;
      default:
        break;
    }
  }

  getZeros = async (asa,input) => {
    if (asa != 0) {
      let url2 = "https://algoexplorerapi.io/idx2/v2/assets/" + asa;
      console.log(url2)
      fetch(url2)
        .then((response) => response.json())
        .then(data => {
          console.log(data)
          let zeros = data.asset.params.decimals;
          let valueb = 1;
          for (var i = 0; i < zeros; i++) { valueb = valueb + "0" }
          this.setState({ [input]: data.asset.params["unit-name"], factor: parseInt(valueb) })
          console.log(this.state)
        }).catch(function () {
          console.log("Error occured  " + url2);
        });
    }
    else {
      this.setState({ assetName: "Algo", factor: 1000000 })
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="."><svg xmlns="http://www.w3.org/2000/svg" width="53" height="32" class="d-block my-1" viewBox="0 0 52 20" role="img"><title>AlgoSwap</title><path class="cls-1" d="M185.6,94l-8.8-14.8c0-.1-.1-.1-.2-.2l-.3-.3h0a1.3,1.3,0,0,0-1.7.6s-10.1,19.3-11.2,21.6a.6.6,0,0,0,0,.6,1,1,0,0,0,1,.7h2.5a.9.9,0,0,0,1-.5l7-13.5.2-.2.3-.3a.9.9,0,0,1,1.1.2h.1l4.4,7.4a1.1,1.1,0,0,0,.9.5h2.6a1.6,1.6,0,0,0,1-.5c.3-.4.3-.5.3-.6A2.4,2.4,0,0,0,185.6,94Z" transform="translate(-163.3 -78.6)" fill="#1c1ce1"></path><path class="cls-2" d="M199.2,90.3a6.9,6.9,0,0,0-4.9-2.1h-2.6a2.7,2.7,0,0,1-2.7-2,2.3,2.3,0,0,1,.5-2.1,2.4,2.4,0,0,1,1.9-1h7.1a1.1,1.1,0,0,0,1.1-.6l1-2a1,1,0,0,0-.1-1.2.9.9,0,0,0-1-.7h-9.4a4.6,4.6,0,0,0-3.8,2c-3,3.8-2,7.9.2,10.1a7.1,7.1,0,0,0,4.9,2.1h2.7a2.6,2.6,0,0,1,2.7,2,2.4,2.4,0,0,1-.6,2,2.6,2.6,0,0,1-1.9,1H180.2c-.2.1-.4-.1-.5-.2l-2.6-4.5a1.2,1.2,0,0,0-2.2,0l-3.7,7.4a1.5,1.5,0,0,0,0,1.3,1.1,1.1,0,0,0,1.1.5h23.3a5.8,5.8,0,0,0,3.9-1.9C202.5,96.5,201.4,92.5,199.2,90.3Z" transform="translate(-163.3 -78.6)" fill="#5e5ee6"></path></svg><span class="fs-2"><strong>Algo</strong>Swap</span></a>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto btn-sm">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href=".">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#generator"> Code Generator</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="https://www.headline-inc.com/">About HDL</a>
                  </li>
                </ul>
                <span class="navbar-text-2"> v1.0 (alpha)</span>
              </div>
            </div>
          </nav>
        </header>
        <header class="py-5">
          <div class="jumbotron">
            <div class="container">
              <h1 class="display-3">Try AlgoSwap!</h1>
              <p>The AlgoSwap token-swapping snippet generator is your gateway to FutureFi. Simply fill in the required fields and a custom embeddable AlgoSwap snippet will be generated for you. The AlgoSwap token-swapping solution is compatible with all major web hosts and website-building platforms.
              </p>
              <div class="d-flex flex-column flex-sm-row">
              <a class="btn btn-lg btn-bd-primary mb-3 me-md-3" href="#launch" role="button">Get started!</a>
              <a class="btn btn-lg btn-outline-secondary mb-3" href="#docs" role="button">Learn more »</a>
              </div>
            </div>

          </div>
        </header>
        <div class="card text-center">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <a class="nav-link active" aria-current="true" href="#">AlgoSwap</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://algopay.finance/">AlgoPay</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Terminal-VX51</a>
              </li>
            </ul>
          </div>
          <div class="card-body-2">
            <h5 class="card-title">Step 1: Prepare your AlgoSwap credentials</h5>
            <p id="launch" class="card-text">Before launching AlgoSwap, please take a moment to prepare your ASA-1, ASA-2, and liquidity pool address. </p>
            <a href="https://algoexplorer.io" class="btn btn-md btn-outline-secondary">AlgoExplorer</a>
          </div>
          <div class="card-2">
            <div class="card-header-2" background="transparent">
              Code generator
            </div>
            <div class="card-body-2">
              <div class="form-group row" />
              <div id="generator" class="form-group row"><header class="SnippetCardHeader github"><div class="tooltip-wrapper" data-tooltipped="" aria-describedby="tippy-tooltip-16" display="inline"></div><h5 class="card-title">Step 2: Generate your code</h5>            
              <p class="card-text fst-italic">The default values are set to the Algo/HDL liquidity pool on <a href="https://app.tinyman.org/#/swap?asset_in=0&asset_out=137594422" >TinyMan</a>  .</p>
</header></div>
              <form id="calcform1" name="calcform1" autocomplete="off">
                <div class="form-group row">
                  <label for="a" class="col-sm-3 col-form-label">ASA-1</label>
                  <div class="col-sm-9">
                    <div class="input-group">
                      <input id="indx" onChange={this.handleChange} type="number" placeHolder="0" class="form-control" placeholder="0" />
                      <div class="input-group-text">{" " + this.state.assetName}</div>
                    </div>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="a" class="col-sm-3 col-form-label">ASA-2</label>
                  <div class="col-sm-9">
                    <div class="input-group">
                      <input id="indx2" onChange={this.handleChange} type="number" placeHolder="0" class="form-control" placeholder="137594422" />
                      <div class="input-group-text">{" " + this.state.assetName2}</div>
                    </div>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="c" class="col-sm-3 col-form-label">Liquidity Pool</label>
                  <div class="col-sm-9">
                    <input class="form-control" id="nt" onChange={this.handleChange} type="text" placeHolder="F5YT2BPHPNCLHR44ZKWJOE6Z7RMVAZSX4KIWMEBYSKGBFEF7KJJ742QYT4" ></input>
                  </div>
                </div>



                <div class="form-group row">

                </div>

                <div class="form-group row"><header class="SnippetCardHeader github"><div class="tooltip-wrapper" data-tooltipped="" aria-describedby="tippy-tooltip-16" display="inline"></div><h6 class="card-title">Step 2.5: Style your AlgoSwap button</h6></header></div>

                <div class="snoopy-css">
                  <div class="form-group row">
                    <label for="anglea" class="col-sm-3 col-form-label">Background Color</label>
                    <div class="col-sm-9">
                      <input class="form-control" id="mbcolor" onChange={this.handleChange} type="text" placeHolder="black, #000" ></input>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="anglea" class="col-sm-3 col-form-label">Button Width</label>
                    <div class="col-sm-9">
                      <input class="form-control" id="mbwidth" onChange={this.handleChange} type="text" placeHolder="large, 50%" ></input>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="anglea" class="col-sm-3 col-form-label">Button Text Color</label>
                    <div class="col-sm-9">
                      <input class="form-control" id="mbtextcolor" onChange={this.handleChange} type="text" placeHolder="white, #fff" ></input>
                    </div>
                  </div>
                </div>
                <a class="btn btn-primary btn-lg" onClick={() => this.generate()}>Generate My Code</a><br></br>


              </form>
              <div class="form-group row">


                <header class="SnippetCardHeader github-2"><div class="tooltip-wrapper" data-tooltipped="" aria-describedby="tippy-tooltip-16" display="inline">
                  <div class="source"><a target="_blank" href="https://github.com/headline-design" rel="nofollow" class="origin underlined"><div className="marge"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="navbar-nav-svg d-inline-block align-text-top" viewBox="0 0 512 499.36" role="img"><path fill="currentColor" fill-rule="evenodd" d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"></path></svg></div><i>origin: </i><b>headline-design</b></a><div className="BGImg source-icon BGImg-loaded"><div class="BGImg-image"><div class="BGImg source-icon BGImg-loaded"><div class="BGImg-image"><a class="nav-link p-2" href="https://github.com/headline-design" target="_blank" rel="noopener">

                    <small class="d-md-none ms-2"></small>
                  </a></div></div></div></div></div></div><h5 class="label">github.com/headline-design</h5></header>

                <div class="SnippetCode"><div class="SnippetCode-wrapper" align="left">
                  <CopyBlock
                    text={this.state.code.replaceAll("><", ">\n<")}
                    language={"html"}
                    showLineNumbers={true}
                    wrapLines
                    theme={github}
                    codeBlock
                    customStyle={{
                      height: 'auto',
                      overflow: 'auto',
                      align: "left",
                      borderStyle: "solid",
                      borderColor: "#e1e1e1",
                      borderWidth: "1px",
                    }}
                  />
                </div>
                </div></div>
              <p class="card-text">Note 1: Please test your AlgoSwap button in the window below, prior to embedding in your website. <br></br> Note 2. MyAlgo is currently the only Algorand wallet supported (all wallets will be supported in next update).</p>
              <iframe id="preview" title="Preview" width="100%" height="600px"></iframe>
              <div id="preview2"></div>
              <div class="form-group">
              </div>
            </div>
          </div>
        </div>
        <div class="jumbotron jumbotron-2" id="docs">            <div class="card-header-2 card-body" background="transparent"><h2 border-bottom="">AlgoSwap FAQ</h2></div><div class="card-body"><h4 id="scrollspyHeading1">What is AlgoSwap?</h4><p>AlgoSwap is an embeddable DEX (decentralized exchange) from HEADLINE INC. With one snippet of code, anyone can add a custom Algorand DEX to their javascript-supported website. The AlgoSwap button specifically supports swapping Algorand ASA tokens that have active TinyMan liquidity pools. Unlike other white-label DEX alternatives, with AlgoPay there are no gatekeepers, iframes, or routing.</p><p> HEADLINE makes blockchain “barriers-to-entry” a thing of the past. With AlgoSwap, we give you the keys to truly unlock Algorand’s potential. Now you can provide your clients, supporters, and customers with serious on-chain capabilities without leaving the comfort and privacy of your own website.</p><h4 id="scrollspyHeading2">What are the AlgoSwap use-cases?</h4><p>First, let’s define AlgoSwap. AlgoSwap is technically a micro-DEX. This ASA decentralized exchange supports swapping one token for another. It does not support staking or other macro DEX utilities. AlgoSwap also requires that the admin (you) set the tokens to be swapped and set the liquidity pool address in advance.</p><p> Choosing a limited feature set was essential for a few reasons:

<li>Providing an unencumbered user experience was paramount. With added features comes complexity, and users can quickly become overwhelmed.</li>
<li>AlgoSwap is essentially an add-on to our larger AlgoPay payments solution. This means that we built it with some specific use-cases in mind. Specifically, we designed AlgoSwap to work well for non-profits, startups, and small businesses/e-commerce platforms that would typically not have access to advanced tools that are essential for creating/maintaining blockchain competitive advantage.</li>
</p><h4 id="scrollspyHeading2">Is AlgoSwap safe to use?</h4><p>There are many types of risks inherent in blockchain transactions. Bad smart contracts, phishing, and general hacking. Scams at the project/founder level commonly referred to as a “rug-pull” are also a major risk. Additionally, there are also ecosystem risks such as volatility and new government regulations that can also present unique problems. There are many other risks inherent in blockchain usage, but for the sake of brevity, let’s look at risks that may relate to transactions.

</p><p>It’s important to note that AlgoSwap does not use any custom smart contracts. Many times when you hear about blockchain hacks that result in millions of dollars in theft, it is usually the result of smart contracts with security flaws. Because AlgoSwap has no custom smart contracts, that concern can be alleviated. 

</p><p>AlgoSwap, on a stripped-down level, is like a universal remote control. It can be programmed to interact with different devices or blockchain protocols. Specifically, AlgoSwap is programmed to interact with standard Algorand wallets such as MyAlgo, and the AMM smart contracts from TinyMan. Before any transaction is sent to the blockchain it must be signed. During the signing process, every user has the ability to verify the transactions and sign. AlgoSwap does not handle signing at all, that occurs entirely within one of the standard Algorand wallets.

</p><p>AlgoSwap does have some inherent risks. There are some dangers to using any token/blockchain Dapps. But because AlgoSwaps is engineered specifically to work with top-tier Algorand projects, we can take advantage of the security provided at the smart contract level and at the wallet signing level.

</p><p>Disclaimer: THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
</p><h4 id="scrollspyHeading2">Why did HEADLINE make AlgoSwap?</h4><p>HEADLINE INC is involved with nearly every aspect of the Algorand Ecosystem. We have a social network - <a href="https://forum.ax/">FORUM</a>, a developer toolkit - <a href="https://www.pipeline-ui.com/">PIPELINE-UI</a>, an NFT series - AlgoAstros, an AI application - <a href="https://www.libra-network.com/bias-barometer/">Libra Network</a>, and a payment solution - <a href="https://www.algopay.finance/">AlgoPay</a>. Some products we build for revenue, others specifically to support Algorand Ecosystem growth. We also love innovation, and it’s absolutely thrilling to be at the forefront of the web 3.0 revolution. We built AlgoSwap as a free tool to support the Algorand Ecosystem. 

</p><p>People often ask why we don’t monetize certain innovative Dapps like AlgoPay and AlgoSwap. The reason is really quite simple. The value proposition with HEADLINE is that our major revenue-generating products will produce returns with a multiple far greater than any max potential revenue generated from free tools we share with the Algorand Community. Cheers!
</p></div></div>
          <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"><div class="col-md-4 d-flex align-items-center"><a href="https://www.headline-inc.com" class="me-2 mb-md-0 text-muted text-decoration-none lh-1"><svg class="bi" width="30" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 20" role="img"><title>AlgoSwap</title><path class="cls-1" d="M185.6,94l-8.8-14.8c0-.1-.1-.1-.2-.2l-.3-.3h0a1.3,1.3,0,0,0-1.7.6s-10.1,19.3-11.2,21.6a.6.6,0,0,0,0,.6,1,1,0,0,0,1,.7h2.5a.9.9,0,0,0,1-.5l7-13.5.2-.2.3-.3a.9.9,0,0,1,1.1.2h.1l4.4,7.4a1.1,1.1,0,0,0,.9.5h2.6a1.6,1.6,0,0,0,1-.5c.3-.4.3-.5.3-.6A2.4,2.4,0,0,0,185.6,94Z" transform="translate(-163.3 -78.6)"></path><path class="cls-2" d="M199.2,90.3a6.9,6.9,0,0,0-4.9-2.1h-2.6a2.7,2.7,0,0,1-2.7-2,2.3,2.3,0,0,1,.5-2.1,2.4,2.4,0,0,1,1.9-1h7.1a1.1,1.1,0,0,0,1.1-.6l1-2a1,1,0,0,0-.1-1.2.9.9,0,0,0-1-.7h-9.4a4.6,4.6,0,0,0-3.8,2c-3,3.8-2,7.9.2,10.1a7.1,7.1,0,0,0,4.9,2.1h2.7a2.6,2.6,0,0,1,2.7,2,2.4,2.4,0,0,1-.6,2,2.6,2.6,0,0,1-1.9,1H180.2c-.2.1-.4-.1-.5-.2l-2.6-4.5a1.2,1.2,0,0,0-2.2,0l-3.7,7.4a1.5,1.5,0,0,0,0,1.3,1.1,1.1,0,0,0,1.1.5h23.3a5.8,5.8,0,0,0,3.9-1.9C202.5,96.5,201.4,92.5,199.2,90.3Z" transform="translate(-163.3 -78.6)"></path></svg></a><span class="text-muted">© 2021 HEADLINE INC</span></div><ul class="nav col-md-4 justify-content-end list-unstyled d-flex"><li class="ms-3"><a class="text-muted" href="https://twitter.com/headline_crypto"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg></a></li><li class="ms-3"><a class="text-muted" href="https://www.reddit.com/r/HEADLINECrypto"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reddit" viewBox="0 0 16 16">
  <path d="M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z"/>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z"/>
</svg></a></li><li class="ms-3"><a class="text-muted" href="https://t.me/headliners"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
</svg></a></li></ul></footer>
      </div>




    )
  }
}



export default App;
