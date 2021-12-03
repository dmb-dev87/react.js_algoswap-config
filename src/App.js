import logo from './logo.svg';
import React, { Component } from 'react';
import {CopyBlock, github} from 'react-code-blocks';
import './App.scss';
import './App.css';


const ids = {
  mainbutton: "algopay-btn"
}
const myObject = {
  amount: 0, // in smallest unit (i.e. microAlgos)
  note: "",
  index: 0, // Asset index number, otherwise, enter 0 for Algorand
  recipient: "",
  input: false
}

var mods = ""

const snippetA = '<noscript>AlgoPay</noscript><link href="https://unpkg.com/algopay-js@1.1.0/dist/styles.css" rel="stylesheet"><div id="root"></div><script>window.details = '

const snippetB = '</script><script src="https://unpkg.com/algopay-js@1.1.0/dist/index.js"></script>'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      assetName: "Algo",
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
    if (mbcolor !== ""){mods += 'document.getElementById("' + ids.mainbutton + '").style.backgroundColor = "' + mbcolor + '";'}
    if (mbwidth !== ""){mods += 'document.getElementById("' + ids.mainbutton + '").style.width = "' + mbwidth + '";'}
    if (mbtextcolor !== ""){mods += 'document.getElementById("' + ids.mainbutton + '").style.color = "' + mbtextcolor + '";'}
    
    let end = (mods !== "")?'<script>' + mods + '</script>':""
    let codeb = snippetA + JSON.stringify(myObject) + snippetB + end;
    this.setState({code: codeb});
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
      case "nt": myObject.note = value;
        break;
      case "indx": this.setState({index:value}); myObject.index = value; this.getZeros();
        break;
      case "rec": myObject.recipient = value;
        break;
      case "customize": myObject.input = document.getElementById(id).checked
      break;
      default:
        break;
    }
  }

  getZeros = async () => {
    if (myObject.index != 0) {
      let url2 = "https://algoexplorerapi.io/idx2/v2/assets/" + myObject.index;
      console.log(url2)
      fetch(url2)
        .then((response) => response.json())
        .then(data => {
          console.log(data)
          let zeros = data.asset.params.decimals;
          let valueb = 1;
          for (var i = 0; i < zeros; i++) { valueb = valueb + "0" }
          this.setState({ assetName: data.asset.params["unit-name"], factor: parseInt(valueb) })
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
    <a class="navbar-brand" href="."><svg xmlns="http://www.w3.org/2000/svg" width="50" height="27" class="d-block my-1" viewBox="0 0 50 28" role="img"><title>AlgoPay</title><path d="M476.34255,273.05573h-6.69548l2.95245,5.76184h4.26133a3.94648,3.94648,0,0,1,.00312,7.89295h-.21971l2.61108,5.09558a9.461,9.461,0,0,0,2.21-1.02544,9.59936,9.59936,0,0,0,4.47212-8.11979h0a9.60585,9.60585,0,0,0-9.59489-9.60558h-.00045Z" transform="translate(-447.3533 -271.71477)" fill="#5e5ee6"></path><path d="M480.29059,297.68961l-2.8143-5.49222-2.81162-5.48687-4.04473-7.89295-2.95245-5.76184h0a2.46417,2.46417,0,0,0-2.1935-1.341h-3.15967a2.46508,2.46508,0,0,0-2.1935,1.34052l-12.62355,24.63387a1.30789,1.30789,0,0,0,1.16449,1.90427h4.51758l9.07793-17.71467a1.84056,1.84056,0,0,1,3.27466,0l2.47559,4.83087,2.81029,5.48375,3.79205,7.3996h4.51758a1.30789,1.30789,0,0,0,1.164-1.90427l-.00089.00045Z" transform="translate(-447.3533 -271.71477)" fill="#1c1ce1"></path><path d="M470.81736,292.19471l-2.81029-5.48375h-2.13913l2.735,5.45478Z" transform="translate(-447.3533 -271.71477)" fill="#1b1b99"></path><path d="M465.86705,286.71052H462.969l-.01515-.01159-6.54351,12.89539h6.46552l3.77422-7.43749h1.29151l.66045.00847-2.73452-5.45478Z" transform="translate(-447.3533 -271.71477)" fill="#5e5ee6"></path></svg><span class="fs-2"><strong>Algo</strong>Pay</span></a>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto btn-sm">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href=".">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#generator"> Code Generator</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.headline-inc.com/">About</a>
        </li>
      </ul>
      <span class="navbar-text-2"> v2.0 (beta)</span>
    </div>
  </div>
</nav>
        </header>
        <header class="py-5 border-bottom">
        <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">Try AlgoGen!</h1>
          <p>The AlgoGen payments snippet generator is your gateway to FutureFi. Simply fill in the required fields and a custom embeddable AlgoPay snippet will be generated for you. The AlgoPay transaction solution is compatible with all major web hosts and website-building platforms.
          </p>
          <p><a class="btn btn-secondary btn-lg" href="#launch" role="button">Learn more »</a></p>
        </div>

    </div>
  </header>
        <div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="true" href="#">AlgoGen</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://algo-pay.vercel.app/">AlgoPay</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Terminal-VX3</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <br></br>
    <h5 class="card-title">Step 1: Prepare your AlgoPay credentials</h5>
    <p id="launch" class="card-text">Before launching AlgoGen, please take a moment to prepare your ASA ID, Algorand address, and product details/prices. </p>
    <a href="https://algoexplorer.io" class="btn btn-md btn-outline-secondary">AlgoExplorer</a>
  </div>
        <div class="card-2">
  <div class="card-header-2" background="transparent">
    Code generator
  </div>
  <div class="card-body-2">
  <div class="form-group row" />
  <div id="generator" class="form-group row"><header class="SnippetCardHeader github"><div class="tooltip-wrapper" data-tooltipped="" aria-describedby="tippy-tooltip-16" display="inline"></div><h5 class="card-title">Step 2: Generate your code</h5></header></div>
        <form id="calcform1" name="calcform1" autocomplete="off">
          <div class="form-group row">
            <label for="a" class="col-sm-3 col-form-label">ASA/Index</label>
            <div class="col-sm-9">
              <div class="input-group">
                <input id="indx" onChange={this.handleChange} type="number" placeHolder="0" class="form-control"  placeholder="Asset" />
                <div class="input-group-text">{" " + this.state.assetName}</div>
              </div>
            </div>
          </div>

          <div class="form-group row">
            <label for="Ticker" class="col-sm-3 col-form-label">Amount</label>
            <div class="col-sm-9">
            <div class="input-group">
                <input class="form-control" id="at" onChange={this.handleChange} type="number" placeHolder="0" ></input><div class="input-group-text-2" id="at"><img className="algo-image" src={"https://algoexplorer.io/images/assets/big/light/" + this.state.index + ".png"} /></div>
              </div>
            </div>
          </div>

          <div class="form-group row">
            <label for="c" class="col-sm-3 col-form-label">Product ID</label>
            <div class="col-sm-9">
            <input class="form-control" id="nt" onChange={this.handleChange} type="text" placeHolder="Product ID" ></input>
            </div>
          </div>

          <div class="form-group row">
            <label for="anglea" class="col-sm-3 col-form-label">Recipient Address</label>
            <div class="col-sm-9">
            <input class="form-control" id="rec" onChange={this.handleChange} type="text" placeHolder="Your Algorand Address" ></input>
            </div>

          </div>

          <div class="form-group row">
            <label for="anglea" class="col-sm-3 col-form-label">Enable Custom Amount</label>
            <div class="col-sm-9">
            <input  id="customize" onChange={this.handleChange} class="form-check-input" type="checkbox" placeHolder="Your Algorand Address" ></input>
            </div>

          </div>

          <div class="form-group row"><header class="SnippetCardHeader github"><div class="tooltip-wrapper" data-tooltipped="" aria-describedby="tippy-tooltip-16" display="inline"></div><h6 class="card-title">Step 2.5: Style your AlgoPay button</h6></header></div>

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


          <header class="SnippetCardHeader github"><div class="tooltip-wrapper" data-tooltipped="" aria-describedby="tippy-tooltip-16" display="inline">
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
    <p class="card-text">Note: MyAlgo and WalletConnect are fully functional in the preview, but AlgoSigner will not work until you embed the code snippet on your site</p>
  <iframe id="preview" title="Preview" width="100%" height="600px"></iframe>
  <div id="preview2"></div>
          <div class="form-group">
          </div>
          </div>
</div>
  </div>
  <footer class="container">
  <div className="footer-bs">
      <p>© HEADLINE INC, 2021. All rights reserved.</p>
    </div>
    </footer>
  </div>




    )
  }
}



export default App;
