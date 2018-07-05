cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
    },

    onclick: function (){
        if(this.label.string == ""){
            // シーン遷移テスト
            cc.director.loadScene('HelloWorld2');
        }else{
            this.label.string = "";
        }
    },

    // called every frame
    update: function (dt) {

    },
});
