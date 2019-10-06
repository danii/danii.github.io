"use strict";function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}var AmbiguityError=function(a){function b(a){var c;return _classCallCheck(this,b),c=_possibleConstructorReturn(this,_getPrototypeOf(b).call(this,"Ambiguity between ".concat(a," names."))),c.type=a,c}return _inherits(b,a),b}(AdvancedError),MissingNameError=function(a){function b(a){var c;return _classCallCheck(this,b),c=_possibleConstructorReturn(this,_getPrototypeOf(b).call(this,"Missing ".concat(a," name."))),c.type=a,c}return _inherits(b,a),b}(AdvancedError),generators={JS:{blockToolsBuilder:["","\n\n","",function(a,b){var c=new BlockTools.Code,d=0!=a.colour||"AUTO"!=a.style||void 0!==a.output||void 0!==a.preceding||void 0!==a.succeeding;null==b.blocks?b.blocks=[a.name]:b.blocks.push(a.name);var e=b.blocks,f=[],g=[],h=a.content.reduceSkip(function contentReducer(a,b,c){return null==a.input?("string"==typeof b||"undefined"==typeof b?(a.content=a.content||[],null!=b&&a.content.push(b)):"input"==b.instance?a.input=b:(a.content=a.content||[],a.content.push(b)),a):c},{});c.append("new BlockTools.Builder(",[a.name?"\"".concat(a.name.escape(),"\""):"","\"built_".concat(a.id,"\"")],")");var i=!0,j=!1,k=void 0;try{for(var l,m,n=h[Symbol.iterator]();!(i=(l=n.next()).done);i=!0){if(m=l.value,c.append("\n\t"),m.input&&"dummy"!=m.input.type){var v={value:"Value",statement:"Statement"}[m.input.type];f.push(m.input.name),c.append(".append".concat(v,"Input("),[m.input.name?"\"".concat(m.input.name.escape(),"\""):"","\"".concat(f.length).concat((m.input.name||"").escape(),"\"")],")"),m.input.name||c.pushProblem(new MissingNameError("field")),null!=m.input.check&&c.append(".setCheck(\"".concat(m.input.check.escape(),"\")")),"LEFT"!=m.input.align&&c.append(".setAlign(\"".concat(m.input.align,"\")"))}else c.append(".appendDummyInput()");if(void 0!==m.content){var o=!0,p=!1,q=void 0;try{for(var r,s,t=m.content[Symbol.iterator]();!(o=(r=t.next()).done);o=!0){if(s=r.value,c.append(".appendField("),s instanceof Object){var w={text:"BlockTools.Builder.FieldTextInput",number:"BlockTools.Builder.FieldNumber"}[s.type];g.push(s.name),c.append("new ".concat(w,"(\"").concat((s["default"]||"").escape(),"\"), "),[s.name?"\"".concat(s.name.escape(),"\""):"","\"".concat(g.length).concat((s.name||"").escape(),"\"")])}else c.append("\"".concat(s?s.escape():"","\""));c.append(")")}}catch(a){p=!0,q=a}finally{try{o||null==t["return"]||t["return"]()}finally{if(p)throw q}}}}}catch(a){j=!0,k=a}finally{try{i||null==n["return"]||n["return"]()}finally{if(j)throw k}}var u={INTERNAL:!0,EXTERNAL:!1}[a.style];return(d||h.last&&h.last.content)&&c.append("\n\t"),0!=a.colour&&c.append(".setColour(".concat(a.colour,")")),null!=u&&c.append(".setInputsInline(".concat(u,")")),void 0!==a.output&&c.append(".setOutput(".concat(a.output?"\"".concat(a.output.escape(),"\""):"",")")),void 0!==a.preceding&&a.succeeding===a.preceding&&c.append(".setBothStatements(".concat(a.preceding?"\"".concat(a.preceding.escape(),"\""):"",")")),void 0!==a.preceding&&a.succeeding!==a.preceding&&c.append(".setPreviousStatement(".concat(a.preceding?"\"".concat(a.preceding.escape(),"\""):"",")")),void 0!==a.succeeding&&a.succeeding!==a.preceding&&c.append(".setNextStatement(".concat(a.succeeding?"\"".concat(a.succeeding.escape(),"\""):"",")")),new Set(e).size!=e.length&&c.pushProblem(new AmbiguityError("block")),new Set(f).size!=f.length&&c.pushProblem(new AmbiguityError("input")),new Set(g).size!=g.length&&c.pushProblem(new AmbiguityError("field")),a.name||c.pushProblem(new MissingNameError("block")),c.append(".register();"),c}]}},BlocklyBlockBuilder=function(){function BlocklyBlockBuilder(){_classCallCheck(this,BlocklyBlockBuilder)}return _createClass(BlocklyBlockBuilder,null,[{key:"onScriptLoad",value:function onScriptLoad(){var a=this;this.types=new BlockTools.Types,this.generator=new BlockTools.CodeGenerator(this.mapper,"builder_entity_block"),BlocklyBlockBuilder.loadBlocks();var b=new Promise(function(a){return BlocklyBlockBuilder.pageResolve=a}),c=new Promise(function(b,c){var d=new XMLHttpRequest;d.open("GET","/data/toolbox.xml",!0),d.addEventListener("readystatechange",function(){4==d.readyState&&(a.toolbox=d.responseXML,200==d.status?b():c())}),d.send()});this.pinky=Promise.all([c,b]).then(function(){return a.onActionsComplete()})}},{key:"onPageLoad",value:function onPageLoad(){this.pageResolve()}},{key:"loadBlocks",value:function loadBlocks(){var a=BlockTools.Builder,b=a.FieldAngle,c=a.FieldDropdown;new BlockTools.Builder("builder_entity_block").appendValueInput("name").setCheck("string").setAlign("RIGHT").appendField("Block definition").appendValueInput("style").setCheck("style").setAlign("RIGHT").appendField("Input style").appendValueInput("hue").setCheck("hue").setAlign("RIGHT").appendField("Color").setColour(240).setNextStatement("field").register(),new BlockTools.Builder("builder_value_text").appendDummyInput().appendField("\"").appendField(new BlockTools.Builder.FieldTextInput(""),"value").appendField("\"").setColour(300).setOutput("string").register(),new a("builder_value_style").appendField(new c({AUTO:"automatic",INTERNAL:"internal",EXTERNAL:"external"}),"value").setColour(300).setOutput("style").register(),new a("builder_value_alignment").appendField(new c({LEFT:"left",CENTRE:"center",RIGHT:"right"}),"value").setColour(270).setOutput("alignment").register(),new a("builder_value_hue").appendField("hue").appendField(new b(0,function(a){this.sourceBlock_.setColour(a)}),"value").setColour(0).setOutput("hue").register(),new BlockTools.Builder("builder_text").appendValueInput("content").setCheck("string").appendField("Text").setColour(180).setBothStatements("field").register(),new BlockTools.Builder("builder_input_dummy").appendDummyInput().appendField("New line").setColour(180).setBothStatements("field").register(),new BlockTools.Builder("builder_input_value").appendValueInput("name").setCheck("string").setAlign("RIGHT").appendField("Input").appendValueInput("type").setCheck("type").setAlign("RIGHT").appendField("accepting").appendValueInput("align").setCheck("alignment").setAlign("RIGHT").appendField("aligned").setColour(180).setInputsInline(!0).setBothStatements("field").register(),new BlockTools.Builder("builder_input_statement").appendValueInput("name").setCheck("string").setAlign("RIGHT").appendField("Statement").appendValueInput("type").setCheck("type").setAlign("RIGHT").appendField("accepting").appendValueInput("align").setCheck("alignment").setAlign("RIGHT").appendField("aligned").setColour(180).setInputsInline(!0).setBothStatements("field").register(),new BlockTools.Builder("builder_field_text").appendValueInput("name").appendField("Text field").setCheck("string").appendValueInput("default").appendField("defaulting to").setCheck("string").setColour(180).setBothStatements("field").setInputsInline(!0).register(),new BlockTools.Builder("builder_field_number").appendValueInput("name").appendField("Number field").setCheck("string").appendValueInput("default").appendField("defaulting to").setCheck("int").setColour(180).setBothStatements("field").setInputsInline(!0).register(),new a("builder_type").appendField(_construct(c,_toConsumableArray(this.types.getConstructArgs())),"type").setColour(240).setOutput("type").register(),new a("builder_connection_output").appendValueInput("type").setCheck("type").appendField("Output").setColour(45).setPreviousStatement("field").register(),new a("builder_connection_succeeding").appendValueInput("type").setCheck("type").appendField("Succeeding").setColour(45).setPreviousStatement("field").register(),new a("builder_connection_preceding").appendValueInput("type").setCheck("type").appendField("Preceding").setColour(45).setPreviousStatement("field").register(),new a("builder_connection_both").appendValueInput("preceding").setAlign("RIGHT").setCheck("type").appendField("Preceding").appendValueInput("succeeding").setAlign("RIGHT").setCheck("type").appendField("& Succeeding").setColour(45).setPreviousStatement("field").register()}},{key:"onActionsComplete",value:function onActionsComplete(){var a={trashcan:!0,scrollbars:!0,grid:{spacing:20,length:5,colour:"#dddddd",snap:!0},zoom:{controls:!0,wheel:!0}};this.blocklyEditor=Blockly.inject("editor-workspace",Object.assign({},a,{toolbox:this.toolbox.documentElement})),this.blocklyPreview=Blockly.inject("preview-workspace",Object.assign({},a,{toolbox:null,trashcan:!1,zoom:{controls:!0,wheel:!0,startScale:1.5}})),this.codePreview=ace.edit("code-output",{mode:"ace/mode/typescript",readOnly:!0}),this.types.register(this.blocklyEditor),this.blocklyEditor.addChangeListener(this.editorEventHandler),document.addEventListener("pointermove",this.inputEventHandler)}},{key:"generateCode",value:function generateCode(){var a=this.format,b=this.language,c=generators[b][a],d=this.generator.generate(this.blocklyEditor,c[3]),e=d.filter(function(a){return a instanceof AdvancedError}),f=d.reduce(function reducer(a,b,d){return b instanceof AdvancedError?a:a.append(0==d?"":c[1],b)},new BlockTools.Code().append(c[0])).append(c[2]);console.log(f),e.push.apply(e,_toConsumableArray(f.getProblems())),this.updateCode(f.getShown(),e),this.updatePreviewWorkspace(f.getUsed())}},{key:"updateCode",value:function updateCode(a,b){(null!=a||""!=a)&&this.codePreview.setValue(a,1);var c=document.getElementById("code-hud"),d=c.getElementsByClassName("hud-display")[0],e={true:"add",false:"remove"}[(0<b.length).toString()];c.classList[e]("shown"),0<b.length&&console.debug("New Error On Stack:\n".concat(b.toString()));var f=b.map(function(a){return a.name+(a.message?": ".concat(a.message):"")});0<b.length&&(d.innerHTML=f.join("<br/>"))}},{key:"updatePreviewWorkspace",value:function updatePreviewWorkspace(code){var _this4=this,blocks=this.blocklyPreview.getAllBlocks(!0),deleted=Object.keys(Blockly.Blocks).filter(function(a){return a.startsWith("built_")});deleted.forEach(function(a){return delete Blockly.Blocks[a]}),eval(code);var all=Object.keys(Blockly.Blocks).filter(function(a){return a.startsWith("built_")}),created=all.filter(function(a){return!deleted.includes(a)});deleted=deleted.filter(function(a){return!all.includes(a)}),all=all.filter(function(a){return!created.includes(a)}),blocks.forEach(function(a){deleted.includes(a.type)&&a.dispose(!1,!0)}),blocks.forEach(function(a){all.includes(a.type)&&(a.inputList.forEach(function(a){a.connection&&a.connection.isConnected()&&a.connection.disconnect(),a.dispose()}),a.nextConnection&&a.nextConnection.isConnected()&&a.nextConnection.disconnect(),a.inputList=[],Blockly.Blocks[a.type].init.call(a))}),created.forEach(function(a){var b=_this4.blocklyPreview.newBlock(a);b.initSvg(),b.render(),b.snapToGrid()})}},{key:"editorEventHandler",value:function editorEventHandler(a){if(!(a instanceof Blockly.Events.Ui))BlocklyBlockBuilder.generateCode();else if(a instanceof Blockly.Events.Ui&&"click"==a.element){var b=BlocklyBlockBuilder.blocklyEditor.getBlockById(a.blockId),c=function(a){var b=a.getPreviousBlock()||a.getRootBlock(),d=BlocklyBlockBuilder.blocklyEditor.newBlock(a.type);d.initSvg(),d.render(),b.isShadow()&&c(b),a.getPreviousBlock()?b.nextConnection.connect(d.previousConnection):a.outputConnection.targetConnection.connect(d.outputConnection)};b&&b.isShadow()&&c(b)}}},{key:"inputEventHandler",value:function inputEventHandler(a){var b=a.clientX,c=a.clientY,d=document.getElementById("logos"),e=d.getBoundingClientRect(),f=e.left,g=e.right,h=e.top,i=e.bottom,j=f<b&&b<g&&h<c&&c<i,k=function(a,b){return!(b.x>a.x+a.w||b.x+b.w<a.x||b.y>a.y+a.h||b.h<a.y)},l=function(a,b){return{x:a.x+b.x,y:a.y+b.y,w:a.w+b.x,h:a.h+b.y}},m=BlocklyBlockBuilder.blocklyPreview,n=m.getParentSvg().getBoundingClientRect(),o=document.getElementById("logos").getBoundingClientRect(),p={x:o.left,y:o.top,w:o.width,h:o.height},q={x:m.scrollX,y:m.scrollY},r={x:n.left,y:n.top},s=m.getAllBlocks(!0);j=j||s.some(function(a){var b=a.getBoundingRectangle(),c=b.top,d=b.left,e=b.bottom,f=b.right,g={x:1.5*d,y:1.5*c,w:1.5*(f-d),h:1.5*(e-c)};return g=l(g,q),g=l(g,r),k(p,g)}),j?d.classList.add("hide"):d.classList.remove("hide")}}]),BlocklyBlockBuilder}();BlocklyBlockBuilder.getNext=function(a){return{builder_text:"text",builder_input_value:"input",builder_input_statement:"input",builder_input_dummy:"dummy_input",builder_field_text:"field",builder_field_number:"field",builder_connection_output:"connection",builder_connection_succeeding:"connection",builder_connection_preceding:"connection",builder_connection_both:"connection"}[a.type]},BlocklyBlockBuilder.mapper={$main:{$lit_content:[],name:"name.value",style:"style.value",colour:"hue.value",id:"$id",$next:BlocklyBlockBuilder.getNext},text:{content:"content.value",$next:BlocklyBlockBuilder.getNext},input:{content:{$lit_instance:"input",$lit_type:function $lit_type(){return{builder_input_value:"value",builder_input_statement:"statement"}[this.block.type]},$lit_check:function $lit_check(){return"builder_input_dummy"==this.block.type?void 0:BlocklyBlockBuilder.types.toType(this.getValue("type.type"))},name:"name.value",align:"align.value"},$next:BlocklyBlockBuilder.getNext},dummy_input:{content:{$lit_instance:"input",$lit_type:"dummy"},$next:BlocklyBlockBuilder.getNext},field:{content:{$lit_instance:"field",$lit_type:function $lit_type(){return{builder_field_text:"text",builder_field_number:"number"}[this.block.type]},name:"name.value",default:"default.value"},$next:BlocklyBlockBuilder.getNext},connection:{$runme:function $runme(){var a={builder_connection_output:{output:"type.type"},builder_connection_succeeding:{succeeding:"type.type"},builder_connection_preceding:{preceding:"type.type"},builder_connection_both:{succeeding:"succeeding.type",preceding:"preceding.type"}}[this.block.type];for(var b in a)this.scope[b]=BlocklyBlockBuilder.types.toType(this.getValue(a[b]))},$next:BlocklyBlockBuilder.getNext}},BlocklyBlockBuilder.language="JS",BlocklyBlockBuilder.format="blockToolsBuilder";var downloadTools=function(){return open("/data/tools.zip")},toGithub=function(){return open("https://github.com/Daniihh/Daniihh.github.io")};BlocklyBlockBuilder.onScriptLoad();